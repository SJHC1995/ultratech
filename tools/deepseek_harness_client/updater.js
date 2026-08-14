const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const path = require('path');
const { spawn } = require('child_process');

const MANIFEST_URL = 'https://sjhc1995.github.io/ultratech/releases/deepseek-harness-client/manifest.json';
const MANIFEST_FALLBACK_URL = 'https://raw.githubusercontent.com/SJHC1995/ultratech/main/releases/deepseek-harness-client/manifest.json';
const PUBLIC_KEY_B64 = 'ZGaLb3ZOyKvrGl+d9YfwMjpU0ZFgGD1grAPBzRVLNNo=';
const KEY_ID = 'ultratexture-ed25519-2026-08-r3';
const ACK_TIMEOUT_SECONDS = 75;

function updateDirectory(app) {
  const directory = path.join(app.getPath('userData'), 'updates');
  fs.mkdirSync(directory, { recursive: true });
  return directory;
}

function atomicJsonWrite(destination, payload) {
  const temporary = `${destination}.${process.pid}.${crypto.randomBytes(4).toString('hex')}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(payload, null, 2), 'utf8');
  fs.renameSync(temporary, destination);
}

function readJson(source) {
  try {
    const data = JSON.parse(fs.readFileSync(source, 'utf8'));
    return data && typeof data === 'object' ? data : null;
  } catch {
    return null;
  }
}

function sortValue(value) {
  if (Array.isArray(value)) return value.map(sortValue);
  if (!value || typeof value !== 'object') return value;
  return Object.keys(value).sort().reduce((output, key) => {
    output[key] = sortValue(value[key]);
    return output;
  }, {});
}

function asciiJson(value) {
  return JSON.stringify(sortValue(value)).replace(/[\u007f-\uffff]/g, (character) => {
    const code = character.charCodeAt(0);
    return `\\u${code.toString(16).padStart(4, '0')}`;
  });
}

function verifyManifest(manifest) {
  if (!manifest || typeof manifest !== 'object') throw new Error('更新清单格式无效。');
  const signature = manifest.signature;
  if (
    !signature
    || signature.algorithm !== 'ed25519'
    || signature.key_id !== KEY_ID
    || typeof signature.value !== 'string'
  ) {
    throw new Error('更新清单签名信息无效。');
  }
  const unsigned = { ...manifest };
  delete unsigned.signature;
  const rawPublicKey = Buffer.from(PUBLIC_KEY_B64, 'base64');
  const spkiPrefix = Buffer.from('302a300506032b6570032100', 'hex');
  const key = crypto.createPublicKey({
    key: Buffer.concat([spkiPrefix, rawPublicKey]),
    format: 'der',
    type: 'spki',
  });
  const valid = crypto.verify(
    null,
    Buffer.from(asciiJson(unsigned), 'utf8'),
    key,
    Buffer.from(signature.value, 'base64'),
  );
  if (!valid) throw new Error('更新清单签名校验失败，已拒绝更新。');
}

function versionParts(value) {
  const match = String(value || '').trim().replace(/^v/i, '').match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:\.(\d+))?$/);
  if (!match) throw new Error('更新清单版本号无效。');
  return match.slice(1).map((part) => Number(part || 0));
}

function isNewer(candidate, current) {
  const left = versionParts(candidate);
  const right = versionParts(current);
  for (let index = 0; index < 4; index += 1) {
    if (left[index] !== right[index]) return left[index] > right[index];
  }
  return false;
}

function validateManifest(manifest, currentVersion) {
  verifyManifest(manifest);
  const installerUrl = new URL(String(manifest.installer_url || ''));
  const portableUrl = new URL(String(manifest.download_url || ''));
  if (installerUrl.protocol !== 'https:' || installerUrl.hostname !== 'github.com') {
    throw new Error('更新安装包地址不在官方 GitHub 发布渠道，已拒绝下载。');
  }
  if (portableUrl.protocol !== 'https:' || portableUrl.hostname !== 'github.com') {
    throw new Error('兼容便携 EXE 地址不在官方 GitHub 发布渠道，已拒绝下载。');
  }
  const installerSha256 = String(manifest.installer_sha256 || '').toLowerCase();
  const portableSha256 = String(manifest.sha256 || '').toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(installerSha256) || !/^[a-f0-9]{64}$/.test(portableSha256)) {
    throw new Error('更新清单缺少有效 SHA-256 校验值。');
  }
  const version = String(manifest.version || '').trim();
  versionParts(version);
  return {
    available: isNewer(version, currentVersion),
    version,
    installerUrl: installerUrl.toString(),
    installerSha256,
    portableUrl: portableUrl.toString(),
    portableSha256,
    notes: String(manifest.notes || '').trim(),
    publishedAt: String(manifest.published_at || '').trim(),
  };
}

function isOfficialDownloadHost(hostname) {
  const host = String(hostname || '').toLowerCase();
  return host === 'github.com'
    || host === 'objects.githubusercontent.com'
    || host === 'release-assets.githubusercontent.com'
    || host.endsWith('.githubusercontent.com');
}

function requestUrl(url, onResponse, redirects = 0) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: { 'User-Agent': 'DeepSeek-Harness-Client/1.2.0', Accept: 'application/json,application/octet-stream' },
      timeout: 18_000,
    }, (response) => {
      const next = response.headers.location;
      if (response.statusCode >= 300 && response.statusCode < 400 && next) {
        response.resume();
        if (redirects >= 4) {
          reject(new Error('更新下载重定向次数过多。'));
          return;
        }
        const redirected = new URL(next, url).toString();
        requestUrl(redirected, onResponse, redirects + 1).then(resolve, reject);
        return;
      }
      resolve(onResponse(response, url));
    });
    request.on('timeout', () => request.destroy(new Error('更新服务连接超时。')));
    request.on('error', reject);
  });
}

async function fetchManifest() {
  const fetchOne = async (url) => requestUrl(url, (response) => new Promise((resolve, reject) => {
    if (response.statusCode !== 200) {
      response.resume();
      reject(new Error(`更新清单请求失败（HTTP ${response.statusCode}）。`));
      return;
    }
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => {
      try { resolve(JSON.parse(body)); } catch { reject(new Error('更新清单不是有效 JSON。')); }
    });
  }));
  try {
    return await fetchOne(MANIFEST_URL);
  } catch {
    return fetchOne(MANIFEST_FALLBACK_URL);
  }
}

class DeepSeekUpdater {
  constructor(app, notify) {
    this.app = app;
    this.notify = notify;
    this.pending = null;
  }

  isPortable() {
    return Boolean(process.env.PORTABLE_EXECUTABLE_FILE);
  }

  deliveryLabel() {
    return this.isPortable() ? '兼容便携 EXE' : '安装版';
  }

  report(state, detail, percent = 0, extra = {}) {
    this.notify({ state, detail, percent: Math.max(0, Math.min(100, Math.round(percent))), ...extra });
  }

  async check() {
    if (!this.app.isPackaged) {
      throw new Error('源码开发模式不执行自动 OTA。请先构建安装版。');
    }
    this.report('checking_update', '正在验证官方更新清单…', 0);
    const manifest = await fetchManifest();
    const info = validateManifest(manifest, this.app.getVersion());
    this.pending = info.available ? info : null;
    this.report(
      info.available ? 'update_available' : 'up_to_date',
      info.available ? `发现新版本 v${info.version}` : '当前已是最新版本。',
      100,
      { update: info },
    );
    return info;
  }

  async download(info) {
    const updates = updateDirectory(this.app);
    const portable = this.isPortable();
    const target = path.join(
      updates,
      portable
        ? `DeepSeek-Harness-Client-${info.version}-Portable.exe`
        : `DeepSeek-Harness-Client-Setup-${info.version}.exe`,
    );
    const partial = `${target}.part`;
    const downloadUrl = portable ? info.portableUrl : info.installerUrl;
    const expectedSha256 = portable ? info.portableSha256 : info.installerSha256;
    if (fs.existsSync(target)) {
      const existing = crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex');
      if (existing === expectedSha256) return target;
      fs.rmSync(target, { force: true });
    }
    fs.rmSync(partial, { force: true });
    this.report('downloading_update', `正在下载 v${info.version} ${this.deliveryLabel()}…`, 0, { update: info });

    await requestUrl(downloadUrl, (response, finalUrl) => new Promise((resolve, reject) => {
      const final = new URL(finalUrl);
      if (final.protocol !== 'https:' || !isOfficialDownloadHost(final.hostname)) {
        response.resume();
        reject(new Error('更新下载跳转到非官方地址，已拒绝继续。'));
        return;
      }
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`更新安装包请求失败（HTTP ${response.statusCode}）。`));
        return;
      }
      const total = Number(response.headers['content-length'] || 0);
      if (total && total > 2 * 1024 * 1024 * 1024) {
        response.resume();
        reject(new Error('更新安装包大小异常，已拒绝下载。'));
        return;
      }
      const hash = crypto.createHash('sha256');
      let received = 0;
      const output = fs.createWriteStream(partial, { flags: 'w' });
      response.on('data', (chunk) => {
        received += chunk.length;
        hash.update(chunk);
        const percent = total ? (received / total) * 88 : 0;
        this.report('downloading_update', `正在下载 v${info.version} ${this.deliveryLabel()}…`, percent, { update: info });
      });
      response.on('error', reject);
      output.on('error', reject);
      output.on('finish', () => {
        const actual = hash.digest('hex');
        if (actual !== expectedSha256) {
          fs.rmSync(partial, { force: true });
          reject(new Error('安装包 SHA-256 校验失败，已删除不可信文件。'));
          return;
        }
        fs.renameSync(partial, target);
        this.report('verifying_update', 'SHA-256 校验完成，正在准备安装…', 100, { update: info });
        resolve();
      });
      response.pipe(output);
    }));
    return target;
  }

  install(info, payload) {
    const updates = updateDirectory(this.app);
    const transactionId = crypto.randomBytes(16).toString('hex');
    const pendingPath = path.join(updates, 'pending-startup.json');
    const ackPath = path.join(updates, `startup-ack-${transactionId}.json`);
    const resultPath = path.join(updates, 'last-update-result.json');
    const scriptPath = path.join(updates, `install-${Date.now()}.ps1`);
    const portable = this.isPortable();
    const currentExecutable = portable
      ? (process.env.PORTABLE_EXECUTABLE_FILE || this.app.getPath('exe'))
      : process.execPath;
    atomicJsonWrite(pendingPath, {
      transaction_id: transactionId,
      target_version: info.version,
      delivery: portable ? 'portable' : 'installer',
      created_at: Math.floor(Date.now() / 1000),
    });

    const quote = (value) => String(value).replace(/'/g, "''");
    const script = `$ErrorActionPreference = 'SilentlyContinue'
$payload = '${quote(payload)}'
$current = '${quote(currentExecutable)}'
$parentPid = ${process.pid}
$portable = ${portable ? '$true' : '$false'}
$ack = '${quote(ackPath)}'
$pending = '${quote(pendingPath)}'
$result = '${quote(resultPath)}'
$transaction = '${transactionId}'
$targetVersion = '${info.version}'
function Write-Result([string] $status, [string] $detail) {
  $tmp = "$result.$([Guid]::NewGuid().ToString('N')).tmp"
  @{ status = $status; detail = $detail; target_version = $targetVersion; transaction_id = $transaction; timestamp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds() } | ConvertTo-Json -Compress | Set-Content -LiteralPath $tmp -Encoding utf8
  Move-Item -LiteralPath $tmp -Destination $result -Force
}
Start-Sleep -Milliseconds 700
try { Wait-Process -Id $parentPid -Timeout 45 -ErrorAction Stop } catch {}
if (-not (Test-Path -LiteralPath $payload)) {
  Write-Result 'failed' 'update_payload_missing'
  if (Test-Path -LiteralPath $current) { Start-Process -FilePath $current | Out-Null }
  exit 2
}
if ($portable) {
  $backup = "$current.previous"
  try {
    Remove-Item -LiteralPath $backup -Force -ErrorAction SilentlyContinue
    Move-Item -LiteralPath $current -Destination $backup -Force
    Move-Item -LiteralPath $payload -Destination $current -Force
  } catch {
    if ((-not (Test-Path -LiteralPath $current)) -and (Test-Path -LiteralPath $backup)) {
      Move-Item -LiteralPath $backup -Destination $current -Force
    }
    Write-Result 'failed' 'portable_replace_failed'
    if (Test-Path -LiteralPath $current) { Start-Process -FilePath $current | Out-Null }
    exit 3
  }
} else {
  $setup = Start-Process -FilePath $payload -ArgumentList @('/S') -Wait -PassThru
  if ($setup.ExitCode -ne 0) {
    Write-Result 'failed' "installer_exit_$($setup.ExitCode)"
    if (Test-Path -LiteralPath $current) { Start-Process -FilePath $current | Out-Null }
    exit $setup.ExitCode
  }
}
if (Test-Path -LiteralPath $current) { Start-Process -FilePath $current | Out-Null }
$deadline = [DateTime]::UtcNow.AddSeconds(${ACK_TIMEOUT_SECONDS})
$acknowledged = $false
while (([DateTime]::UtcNow -lt $deadline) -and (-not $acknowledged)) {
  if (Test-Path -LiteralPath $ack) {
    try {
      $payload = Get-Content -LiteralPath $ack -Raw | ConvertFrom-Json
      $acknowledged = ([string]$payload.transaction_id -eq $transaction) -and ([string]$payload.version -eq $targetVersion)
    } catch {}
  }
  if (-not $acknowledged) { Start-Sleep -Milliseconds 300 }
}
if ($acknowledged) {
  Write-Result 'success' 'startup_acknowledged'
  if ($portable -and (Test-Path -LiteralPath "$current.previous")) {
    Remove-Item -LiteralPath "$current.previous" -Force -ErrorAction SilentlyContinue
  }
} else {
  Write-Result 'failed' 'startup_ack_timeout'
}
Remove-Item -LiteralPath $pending -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $ack -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $PSCommandPath -Force -ErrorAction SilentlyContinue
`;
    fs.writeFileSync(scriptPath, script, 'utf8');
    this.report('installing_update', `正在安装 v${info.version}，应用将自动重启。`, 100, { update: info });
    const updater = spawn('powershell.exe', [
      '-NoProfile', '-ExecutionPolicy', 'Bypass', '-WindowStyle', 'Hidden', '-File', scriptPath,
    ], { detached: true, windowsHide: true, stdio: 'ignore' });
    updater.unref();
  }

  acknowledgeStartup() {
    const updates = updateDirectory(this.app);
    const pending = readJson(path.join(updates, 'pending-startup.json'));
    if (!pending || pending.target_version !== this.app.getVersion() || !/^[a-f0-9]{32}$/.test(pending.transaction_id || '')) {
      return null;
    }
    const acknowledgement = {
      transaction_id: pending.transaction_id,
      version: this.app.getVersion(),
      pid: process.pid,
      acknowledged_at: Math.floor(Date.now() / 1000),
    };
    atomicJsonWrite(path.join(updates, `startup-ack-${pending.transaction_id}.json`), acknowledgement);
    return acknowledgement;
  }

  consumeResult() {
    const resultPath = path.join(updateDirectory(this.app), 'last-update-result.json');
    const result = readJson(resultPath);
    if (result) fs.rmSync(resultPath, { force: true });
    return result;
  }
}

module.exports = { DeepSeekUpdater, MANIFEST_URL, validateManifest, verifyManifest, asciiJson };

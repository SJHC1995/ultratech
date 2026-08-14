const { app, BrowserWindow, ipcMain, safeStorage, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const { spawn, spawnSync } = require('child_process');
const { DeepSeekUpdater } = require('./updater');

const SERVICE_HOST = '127.0.0.1';
const SERVICE_PORT = 3080;
const TARGET_URL = `http://${SERVICE_HOST}:${SERVICE_PORT}/`;
const BALANCE_URL = 'https://api.deepseek.com/user/balance';
const MAX_LOG_BYTES = 160 * 1024;
const STARTUP_TIMEOUT_MS = 45_000;

let mainWindow;
let dshProcess;
let startPromise;
let nodeInstallPromise;
let serviceLog = '';
let updater;
const service = {
  state: 'checking',
  detail: '正在检测本地 DSH Web 服务…',
  pid: null,
  startedByClient: false,
  lastCheckedAt: 0,
  lastError: '',
  runtimePrepared: false,
};

const settingsPath = () => path.join(app.getPath('userData'), 'settings.json');
const logsPath = () => path.join(app.getPath('userData'), 'logs', 'dsh-service.log');

function ensureStorage() {
  fs.mkdirSync(path.dirname(settingsPath()), { recursive: true });
  fs.mkdirSync(path.dirname(logsPath()), { recursive: true });
}

function readSettings() {
  try {
    const raw = JSON.parse(fs.readFileSync(settingsPath(), 'utf8'));
    return raw && typeof raw === 'object' ? raw : {};
  } catch {
    return {};
  }
}

function writeSettings(settings) {
  ensureStorage();
  const temporary = `${settingsPath()}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(settings, null, 2), 'utf8');
  fs.renameSync(temporary, settingsPath());
}

function encrypt(value) {
  if (!value) return '';
  if (!safeStorage.isEncryptionAvailable()) {
    throw new Error('Windows 安全存储不可用，无法保存 API Key。');
  }
  return safeStorage.encryptString(value).toString('base64');
}

function decrypt(value) {
  if (!value) return '';
  try {
    return safeStorage.decryptString(Buffer.from(value, 'base64'));
  } catch {
    throw new Error('无法读取已保存的 API Key，请重新保存。');
  }
}

function publicSettings() {
  const settings = readSettings();
  return {
    hasApiKey: Boolean(settings.apiKey),
    onboardingComplete: Boolean(settings.onboardingComplete),
    host: SERVICE_HOST,
    port: SERVICE_PORT,
    endpoint: TARGET_URL,
    storageProtected: safeStorage.isEncryptionAvailable(),
  };
}

function publicServiceState() {
  return {
    ...service,
    endpoint: TARGET_URL,
    checkedAt: service.lastCheckedAt,
  };
}

function emitServiceState() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send('backend-status-changed', publicServiceState());
}

function setServiceState(state, detail, extra = {}) {
  service.state = state;
  service.detail = detail;
  service.lastCheckedAt = Date.now();
  Object.assign(service, extra);
  emitServiceState();
  return publicServiceState();
}

function appendServiceLog(line) {
  const normalized = String(line || '').trim();
  if (!normalized) return;
  const entry = `[${new Date().toISOString()}] ${normalized}\n`;
  serviceLog = (serviceLog + entry).slice(-MAX_LOG_BYTES);
  try {
    ensureStorage();
    fs.writeFileSync(logsPath(), serviceLog, 'utf8');
  } catch {
    // Diagnostics must never prevent the local service from running.
  }
}

function findCommand(command, candidates = []) {
  const resolvedCandidates = candidates.filter((candidate) => candidate && fs.existsSync(candidate));
  if (resolvedCandidates.length) return resolvedCandidates[0];
  if (process.platform !== 'win32') return command;
  const result = spawnSync('where.exe', [command], {
    encoding: 'utf8',
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'ignore'],
  });
  if (result.status === 0) {
    const match = String(result.stdout || '').split(/\r?\n/).map((item) => item.trim()).find(Boolean);
    if (match) return match;
  }
  return '';
}

function findNpxCommand() {
  return findCommand(process.platform === 'win32' ? 'npx.cmd' : 'npx', [
    path.join(process.env.LOCALAPPDATA || '', 'Programs', 'nodejs', 'npx.cmd'),
    path.join(process.env.ProgramFiles || '', 'nodejs', 'npx.cmd'),
    path.join(process.env['ProgramFiles(x86)'] || '', 'nodejs', 'npx.cmd'),
  ]);
}

function findWingetCommand() {
  return findCommand('winget.exe', [
    path.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WindowsApps', 'winget.exe'),
  ]);
}

function runCommand(executable, args, timeoutMs = 10 * 60_000) {
  return new Promise((resolve, reject) => {
    let output = '';
    const child = spawn(executable, args, {
      windowsHide: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error('命令执行超时。'));
    }, timeoutMs);
    const capture = (chunk) => {
      output = (output + String(chunk)).slice(-8_000);
    };
    child.stdout?.on('data', capture);
    child.stderr?.on('data', capture);
    child.once('error', (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.once('close', (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(output);
      else reject(new Error(output.trim() || `退出代码：${code}`));
    });
  });
}

async function ensureNpxCommand() {
  const existing = findNpxCommand();
  if (existing) return existing;
  if (nodeInstallPromise) return nodeInstallPromise;
  nodeInstallPromise = (async () => {
    if (process.platform !== 'win32') {
      throw new Error('未检测到 npx。请先安装 Node.js LTS 后重试。');
    }
    const winget = findWingetCommand();
    if (!winget) {
      throw new Error('未检测到 Node.js 或 winget，无法自动安装 Node.js LTS。');
    }
    setServiceState('starting', '正在自动安装 Node.js LTS（首次需要网络）…');
    appendServiceLog('未检测到 Node.js/npx，正在通过 winget 自动安装 Node.js LTS。');
    await runCommand(winget, [
      'install', '--id', 'OpenJS.NodeJS.LTS', '--exact', '--silent', '--scope', 'user',
      '--accept-package-agreements', '--accept-source-agreements',
    ]);
    const installed = findNpxCommand();
    if (!installed) {
      throw new Error('Node.js 已安装，但当前进程尚未识别 npx。请重新启动 DeepSeek Harness Client。');
    }
    appendServiceLog(`Node.js LTS 安装完成，已定位 npx：${installed}`);
    return installed;
  })();
  try {
    return await nodeInstallPromise;
  } finally {
    nodeInstallPromise = undefined;
  }
}

function readServiceLog() {
  if (serviceLog) return serviceLog;
  try {
    serviceLog = fs.readFileSync(logsPath(), 'utf8').slice(-MAX_LOG_BYTES);
  } catch {
    serviceLog = '';
  }
  return serviceLog;
}

function probeServer(timeout = 1_200) {
  return new Promise((resolve) => {
    const started = Date.now();
    const request = http.get(TARGET_URL, (response) => {
      response.resume();
      resolve({
        online: response.statusCode >= 200 && response.statusCode < 500,
        statusCode: response.statusCode,
        latencyMs: Date.now() - started,
      });
    });
    request.setTimeout(timeout, () => {
      request.destroy();
      resolve({ online: false, statusCode: 0, latencyMs: Date.now() - started });
    });
    request.on('error', () => {
      resolve({ online: false, statusCode: 0, latencyMs: Date.now() - started });
    });
  });
}

async function refreshBackendStatus() {
  const probe = await probeServer();
  if (probe.online) {
      return setServiceState('online', `本地 DSH Web 已连接 · ${probe.latencyMs} ms`, {
        lastError: '',
        runtimePrepared: true,
        pid: dshProcess?.pid || service.pid || null,
    });
  }
  if (dshProcess && !dshProcess.killed) {
    return setServiceState('starting', 'DSH Web 正在启动，请稍候…', {
      pid: dshProcess.pid,
    });
  }
  return setServiceState('offline', '本地 DSH Web 未运行。可点击“启动服务”重试。', {
    pid: null,
  });
}

function attachServiceLogs(process) {
  process.stdout?.on('data', (chunk) => appendServiceLog(chunk));
  process.stderr?.on('data', (chunk) => appendServiceLog(chunk));
  process.once('error', (error) => {
    const detail = error.code === 'ENOENT'
      ? '未检测到 Node.js/npx，无法自动安装 DSH Web。请先安装 Node.js LTS 后重试。'
      : `无法自动安装或启动 DSH Web：${error.message}`;
    appendServiceLog(`启动失败：${detail}`);
    dshProcess = undefined;
    setServiceState('error', detail, {
      pid: null,
      lastError: detail,
    });
  });
  process.once('exit', (code, signal) => {
    const expected = app.quitting || process.killed;
    appendServiceLog(`服务进程退出：code=${code ?? 'null'} signal=${signal ?? 'none'}`);
    if (dshProcess === process) dshProcess = undefined;
    if (!expected) {
      setServiceState('offline', '本地 DSH Web 已停止。可重新启动服务。', {
        pid: null,
        lastError: code ? `进程退出代码：${code}` : '',
      });
    }
  });
}

function waitForServer() {
  return new Promise((resolve) => {
    const deadline = Date.now() + STARTUP_TIMEOUT_MS;
    const timer = setInterval(async () => {
      const probe = await probeServer();
      if (probe.online) {
        clearInterval(timer);
        resolve(setServiceState('online', `本地 DSH Web 已连接 · ${probe.latencyMs} ms`, {
          lastError: '',
          runtimePrepared: true,
          pid: dshProcess?.pid || null,
        }));
        return;
      }
      if (Date.now() >= deadline) {
        clearInterval(timer);
        const detail = '自动安装或启动 DSH Web 超时。请确认 Node.js、npx 与网络环境可用。';
        appendServiceLog(detail);
        resolve(setServiceState('error', detail, {
          pid: dshProcess?.pid || null,
          lastError: detail,
        }));
      }
    }, 750);
  });
}

async function startBackend({ force = false } = {}) {
  if (startPromise) return startPromise;
  startPromise = (async () => {
    const probe = await probeServer();
    if (probe.online && !force) {
      return setServiceState('online', `本地 DSH Web 已连接 · ${probe.latencyMs} ms`, {
        lastError: '',
        pid: dshProcess?.pid || null,
      });
    }
    if (dshProcess && !dshProcess.killed) {
      return setServiceState('starting', 'DSH Web 正在启动，请稍候…', { pid: dshProcess.pid });
    }

    const preparationDetail = service.runtimePrepared
      ? '正在后台启动已准备好的 DSH Web…'
      : '正在自动安装并启动 DeepSeek Harness 运行组件（首次需要网络）…';
    setServiceState('starting', preparationDetail);
    appendServiceLog(`自动准备命令：npx --yes @deepseek-ai/dsh@latest web --host ${SERVICE_HOST} --port ${SERVICE_PORT}`);
    try {
      const npxCommand = await ensureNpxCommand();
      dshProcess = spawn(
        npxCommand,
        ['--yes', '@deepseek-ai/dsh@latest', 'web', '--host', SERVICE_HOST, '--port', String(SERVICE_PORT)],
        {
          detached: false,
          windowsHide: true,
          stdio: ['ignore', 'pipe', 'pipe'],
        },
      );
      service.startedByClient = true;
      service.pid = dshProcess.pid || null;
      attachServiceLogs(dshProcess);
      return await waitForServer();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      appendServiceLog(`启动异常：${message}`);
      return setServiceState('error', `无法启动 DSH Web：${message}`, {
        pid: null,
        lastError: message,
      });
    }
  })();
  try {
    return await startPromise;
  } finally {
    startPromise = undefined;
  }
}

function stopBackend() {
  if (!dshProcess || dshProcess.killed) return;
  try {
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(dshProcess.pid), '/T', '/F'], {
        windowsHide: true,
        stdio: 'ignore',
      });
    } else {
      dshProcess.kill('SIGTERM');
    }
  } catch {
    // The service is best-effort and may already have exited.
  }
}

async function restartBackend() {
  setServiceState('starting', '正在重启本地 DSH Web…');
  stopBackend();
  dshProcess = undefined;
  await new Promise((resolve) => setTimeout(resolve, 350));
  return startBackend({ force: true });
}

function queryBalance() {
  return new Promise((resolve, reject) => {
    let apiKey;
    try {
      apiKey = decrypt(readSettings().apiKey);
    } catch (error) {
      reject(error);
      return;
    }
    if (!apiKey) {
      reject(new Error('请先在“本地设置”中保存 DeepSeek API Key。'));
      return;
    }

    const request = https.request(BALANCE_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
        'User-Agent': 'DeepSeek-Harness-Client/1.1.0',
      },
      timeout: 15_000,
    }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          if (response.statusCode < 200 || response.statusCode >= 300) {
            throw new Error(data.error?.message || `余额查询失败（HTTP ${response.statusCode}）`);
          }
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    });
    request.on('timeout', () => request.destroy(new Error('余额查询超时。')));
    request.on('error', reject);
    request.end();
  });
}

function diagnostics() {
  return {
    service: publicServiceState(),
    appVersion: app.getVersion(),
    electronVersion: process.versions.electron,
    nodeVersion: process.versions.node,
    platform: `${process.platform} ${process.arch}`,
    userData: app.getPath('userData'),
    logPath: logsPath(),
    logTail: readServiceLog().slice(-12_000),
  };
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1480,
    height: 940,
    minWidth: 1080,
    minHeight: 700,
    backgroundColor: '#f6f8fe',
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#f6f8fe',
      symbolColor: '#15203a',
      height: 40,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webviewTag: true,
    },
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
  mainWindow.webContents.on('will-attach-webview', (event, webPreferences, params) => {
    if (!String(params.src || '').startsWith(TARGET_URL)) {
      event.preventDefault();
      return;
    }
    webPreferences.nodeIntegration = false;
    webPreferences.contextIsolation = true;
    webPreferences.preload = '';
  });
  mainWindow.loadFile('index.html');
}

function notifyUpdate(status) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send('update-status-changed', status);
}

ipcMain.handle('open-harness', () => shell.openExternal(TARGET_URL));
ipcMain.handle('backend-status', refreshBackendStatus);
ipcMain.handle('start-backend', () => startBackend());
ipcMain.handle('restart-backend', restartBackend);
ipcMain.handle('get-settings', publicSettings);
ipcMain.handle('save-settings', (_, { apiKey } = {}) => {
  const settings = readSettings();
  if (typeof apiKey === 'string' && apiKey.trim()) {
    settings.apiKey = encrypt(apiKey.trim());
  }
  writeSettings(settings);
  return publicSettings();
});
ipcMain.handle('complete-onboarding', () => {
  const settings = readSettings();
  settings.onboardingComplete = true;
  writeSettings(settings);
  return publicSettings();
});
ipcMain.handle('query-balance', queryBalance);
ipcMain.handle('get-diagnostics', diagnostics);
ipcMain.handle('open-data-folder', () => shell.openPath(app.getPath('userData')));
ipcMain.handle('clear-service-log', () => {
  serviceLog = '';
  try { fs.rmSync(logsPath(), { force: true }); } catch {}
  return diagnostics();
});
ipcMain.handle('check-for-update', () => updater.check());
ipcMain.handle('install-update', async (_event, info) => {
  if (!info || typeof info !== 'object' || !updater.pending || info.version !== updater.pending.version) {
    throw new Error('更新任务已失效，请重新检查更新。');
  }
  const installer = await updater.download(updater.pending);
  await updater.install(updater.pending, installer);
  // Keep the hand-off state visible briefly, then force a clean exit so the
  // external updater can reliably replace the running EXE before relaunching.
  setTimeout(() => {
    stopBackend();
    app.exit(0);
  }, 1_200);
  return { accepted: true };
});
ipcMain.handle('get-previous-update-result', () => updater.consumeResult());

app.whenReady().then(() => {
  app.setAppUserModelId('com.deepseek.harnessclient');
  updater = new DeepSeekUpdater(app, notifyUpdate);
  // Complete installer hand-off before the UI and embedded service perform
  // their heavier startup work.  The detached updater still verifies that
  // this exact version wrote a matching acknowledgement.
  updater.acknowledgeStartup();
  createWindow();
  startBackend().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    setServiceState('error', `启动 DSH Web 失败：${message}`, { lastError: message });
  });
});

app.on('before-quit', () => {
  app.quitting = true;
  stopBackend();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

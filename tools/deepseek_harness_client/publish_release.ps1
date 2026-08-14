<#
.SYNOPSIS
Build and publish DeepSeek Harness Client with the same signed full-OTA model
used by UltraTexture Studio.

.DESCRIPTION
Produces an NSIS Setup installer and a portable compatibility EXE in parallel,
uploads both to a dedicated GitHub Release, signs a canonical Ed25519 manifest
with the offline UltraTech release key, and publishes that manifest to the
official GitHub Pages channel consumed by the desktop client.
#>
param(
  [string]$Version = "",
  [string]$Notes = "产品化界面、后台 DSH 服务状态机与签名 OTA 更新。",
  [string]$PagesWorktree = "C:\ultratech-ota-publish",
  [string]$SigningKeyPath = $env:ULTRATEXTURE_OTA_SIGNING_KEY_PATH,
  [string]$SigningKeyId = "ultratexture-ed25519-2026-08-r3",
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$repository = "SJHC1995/ultratech"
$python = "C:\Users\Administrator\AppData\Local\Programs\Python\Python312\python.exe"
$packageJson = Get-Content (Join-Path $root "package.json") -Raw | ConvertFrom-Json
if (-not $Version) { $Version = [string]$packageJson.version }
if ($Version -notmatch "^\d+(\.\d+){1,3}$") { throw "版本号无效：$Version" }
if ($packageJson.version -ne $Version) { throw "package.json 版本与发布版本不一致。" }
if (-not $SigningKeyPath -or -not (Test-Path $SigningKeyPath)) { throw "未找到 OTA Ed25519 私钥。" }
if (-not (Test-Path $PagesWorktree)) { throw "未找到 GitHub Pages 工作树：$PagesWorktree" }

function Get-Sha256([string]$Path) {
  (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash.ToLowerInvariant()
}

function Sign-Manifest([hashtable]$Manifest) {
  $temporary = Join-Path ([IO.Path]::GetTempPath()) ("deepseek-harness-manifest-" + [guid]::NewGuid().ToString("N") + ".json")
  try {
    $Manifest | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $temporary -Encoding utf8
    & $python "C:\ultratech\tools\image_studio\sign_manifest.py" --input $temporary --private-key $SigningKeyPath --key-id $SigningKeyId
    if ($LASTEXITCODE -ne 0) { throw "更新清单签名失败。" }
    Get-Content -LiteralPath $temporary -Raw | ConvertFrom-Json -AsHashtable
  }
  finally {
    Remove-Item -LiteralPath $temporary -Force -ErrorAction SilentlyContinue
  }
}

if (-not $SkipBuild) {
  Push-Location $root
  try {
    npm run package:release
    if ($LASTEXITCODE -ne 0) { throw "DeepSeek Harness Client 构建失败。" }
  }
  finally {
    Pop-Location
  }
}

$setupName = "DeepSeek-Harness-Client-Setup-$Version.exe"
$portableName = "DeepSeek-Harness-Client-$Version-Portable.exe"
$setupPath = Join-Path $root "dist\$setupName"
$portablePath = Join-Path $root "dist\$portableName"
if (-not (Test-Path $setupPath)) { throw "未找到安装版：$setupPath" }
if (-not (Test-Path $portablePath)) { throw "未找到兼容 EXE：$portablePath" }

$tag = "deepseek-harness-client-v$Version"
$releaseBase = "https://github.com/$repository/releases/download/$tag"
$manifest = [ordered]@{
  version = $Version
  download_url = "$releaseBase/$portableName"
  sha256 = Get-Sha256 $portablePath
  installer_url = "$releaseBase/$setupName"
  installer_sha256 = Get-Sha256 $setupPath
  notes = $Notes
  published_at = (Get-Date).ToString("yyyy-MM-dd")
  delivery = [ordered]@{
    channel = "stable"
    latest_version = $Version
    global = $true
  }
}
$manifest = Sign-Manifest $manifest

& gh release view $tag --repo $repository 2>$null
if ($LASTEXITCODE -eq 0) {
  & gh release upload $tag $setupPath $portablePath --repo $repository --clobber
  if ($LASTEXITCODE -ne 0) { throw "GitHub Release 资产上传失败。" }
  & gh release edit $tag --repo $repository --draft=false --title "DeepSeek Harness Client v$Version" --notes $Notes
} else {
  & gh release create $tag $setupPath $portablePath --repo $repository --title "DeepSeek Harness Client v$Version" --notes $Notes
}
if ($LASTEXITCODE -ne 0) { throw "GitHub Release 发布失败。" }

$manifestPath = Join-Path $PagesWorktree "releases\deepseek-harness-client\manifest.json"
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $manifestPath) | Out-Null
$manifest | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $manifestPath -Encoding utf8
& git -C $PagesWorktree add --sparse -- releases/deepseek-harness-client/manifest.json
if ($LASTEXITCODE -ne 0) { throw "暂存 DeepSeek OTA 清单失败。" }
if ((& git -C $PagesWorktree status --short)) {
  & git -C $PagesWorktree commit -m "feat: publish DeepSeek Harness Client v$Version"
  if ($LASTEXITCODE -ne 0) { throw "提交 DeepSeek OTA 清单失败。" }
  & git -C $PagesWorktree push github HEAD:main
  if ($LASTEXITCODE -ne 0) { throw "推送 DeepSeek OTA 清单失败。" }
}

Write-Output "发布完成：$tag"
Write-Output "安装版：$setupPath"
Write-Output "兼容 EXE：$portablePath"
Write-Output "OTA 清单：$manifestPath"


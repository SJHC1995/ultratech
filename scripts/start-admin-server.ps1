param(
    [int]$Port = 4180,
    [switch]$BootstrapAdmin,
    [switch]$EnableGitHubSync,
    [string]$AdminName = '本地管理员'
)

$ErrorActionPreference = 'Stop'
$siteRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$accountPath = Join-Path $siteRoot 'server\data\accounts.json'

if ($BootstrapAdmin -and -not (Test-Path -LiteralPath $accountPath)) {
    $bytes = [byte[]]::new(72)
    [System.Security.Cryptography.RandomNumberGenerator]::Fill($bytes)
    $alphabet = [Convert]::ToBase64String($bytes).TrimEnd('=').Replace('+', '-').Replace('/', '_')
    $env:ULTRATECH_BOOTSTRAP_ADMIN_CODE = "UT1-$alphabet"
    $env:ULTRATECH_BOOTSTRAP_ADMIN_NAME = $AdminName
    Write-Host ''
    Write-Host '首个管理员账号将在服务启动时创建。访问码只显示这一次：' -ForegroundColor Cyan
    Write-Host $env:ULTRATECH_BOOTSTRAP_ADMIN_CODE -ForegroundColor Yellow
    Write-Host '请把访问码保存在密码管理器中；它总长 100 个可见字符。' -ForegroundColor DarkYellow
    Write-Host ''
}

$env:ULTRATECH_ADMIN_PORT = $Port
if ($EnableGitHubSync) {
    $env:ULTRATECH_GITHUB_SYNC = '1'
    Write-Host 'GitHub 同步已启用；发布动作仍需由管理员在页面或管理工具中明确触发。' -ForegroundColor Cyan
} else {
    Remove-Item Env:ULTRATECH_GITHUB_SYNC -ErrorAction SilentlyContinue
}
Set-Location $siteRoot
node .\server\admin-server.mjs

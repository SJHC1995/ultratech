param(
    [string]$OutputDirectory = (Join-Path $PSScriptRoot 'bin'),
    [string]$OutputName = 'UltraTechAdminRoster.exe'
)

$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
$compiler = 'C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe'
if (-not (Test-Path -LiteralPath $compiler)) {
    $compiler = 'C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe'
}
if (-not (Test-Path -LiteralPath $compiler)) { throw '未找到 .NET Framework C# 编译器。' }

$source = Join-Path $PSScriptRoot 'UltraTechAdminRoster.cs'
$output = Join-Path $OutputDirectory $OutputName
& $compiler /nologo /utf8output /codepage:65001 /target:winexe /out:$output /reference:System.Windows.Forms.dll /reference:System.Drawing.dll /reference:System.Web.Extensions.dll $source
if ($LASTEXITCODE -ne 0) { throw '管理名单工具编译失败。' }
Write-Host "已生成：$output"

param(
    [string]$DataDirectory = (Join-Path (Resolve-Path (Join-Path $PSScriptRoot '..')).Path 'server\data'),
    [string]$SourceRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path,
    [string]$Branch = 'main'
)

$ErrorActionPreference = 'Stop'
$siteRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$publicDataRoot = Join-Path $siteRoot 'data'
$editorialDocsRoot = Join-Path $siteRoot 'docs\editorial'
$overridesSource = Join-Path $DataDirectory 'wiki-overrides.json'
$documentsSource = Join-Path $DataDirectory 'planning-documents.json'
$documentsContentRoot = Join-Path $DataDirectory 'documents'

if (-not (Test-Path -LiteralPath $DataDirectory)) {
    throw "管理服务数据目录不存在：$DataDirectory"
}

New-Item -ItemType Directory -Path $editorialDocsRoot -Force | Out-Null

$overrides = if (Test-Path -LiteralPath $overridesSource) {
    Get-Content -LiteralPath $overridesSource -Raw -Encoding UTF8 | ConvertFrom-Json
} else {
    [pscustomobject]@{}
}
[System.IO.File]::WriteAllText(
    (Join-Path $publicDataRoot 'editorial-overrides.json'),
    ($overrides | ConvertTo-Json -Depth 12),
    [System.Text.UTF8Encoding]::new($false)
)

$documentStore = if (Test-Path -LiteralPath $documentsSource) {
    Get-Content -LiteralPath $documentsSource -Raw -Encoding UTF8 | ConvertFrom-Json
} else {
    [pscustomobject]@{ documents = @() }
}
$publicDocuments = @($documentStore.documents | Where-Object { $_.visibility -eq 'public' })
foreach ($document in $publicDocuments) {
    $source = Join-Path $documentsContentRoot $document.fileName
    if (Test-Path -LiteralPath $source) {
        Copy-Item -LiteralPath $source -Destination (Join-Path $editorialDocsRoot $document.fileName) -Force
    }
}
[System.IO.File]::WriteAllText(
    (Join-Path $publicDataRoot 'editorial-documents.json'),
    (@{ generatedAt = (Get-Date).ToString('o'); documents = $publicDocuments } | ConvertTo-Json -Depth 8),
    [System.Text.UTF8Encoding]::new($false)
)

& (Join-Path $siteRoot 'scripts\build-wiki.ps1') -SourceRoot $SourceRoot

git -C $siteRoot add -- 'data/editorial-overrides.json' 'data/editorial-documents.json' 'data/wiki-pages.json' 'docs/editorial'
git -C $siteRoot diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Output '没有可发布的内容变更。'
    exit 0
}

git -C $siteRoot commit -m 'docs: sync editorial archive content'
if ($LASTEXITCODE -ne 0) { throw 'Git 提交失败。' }
git -C $siteRoot push origin $Branch
if ($LASTEXITCODE -ne 0) { throw 'GitHub 推送失败。请检查 Git 凭据、远程仓库和网络。' }
Write-Output '编辑内容已导出、提交并推送到 GitHub。'

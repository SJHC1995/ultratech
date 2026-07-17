param(
    [string]$SourceRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
)

$ErrorActionPreference = 'Stop'
$siteRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$dataRoot = Join-Path $siteRoot 'data'
New-Item -ItemType Directory -Path $dataRoot -Force | Out-Null

function Convert-JavaEscapes([string]$value) {
    return [regex]::Replace($value, '\\u([0-9A-Fa-f]{4})', {
            param($match)
            [char][Convert]::ToInt32($match.Groups[1].Value, 16)
        })
}

function Add-LangFile([hashtable]$Names, [string]$Path) {
    if (-not (Test-Path -LiteralPath $Path)) { return }
    Get-Content -LiteralPath $Path -Encoding UTF8 | ForEach-Object {
        $match = [regex]::Match($_, '^\s*"(?<kind>item|block)\.ultratech\.(?<id>[^"]+)"\s*:\s*"(?<name>[^"]*)"')
        if ($match.Success) {
            $Names["$($match.Groups['kind'].Value):$($match.Groups['id'].Value)"] =
                Convert-JavaEscapes $match.Groups['name'].Value
        }
    }
}

function Friendly-Name([string]$id) {
    return (Get-Culture).TextInfo.ToTitleCase(($id -replace '_', ' '))
}

function Add-Entry([System.Collections.Generic.List[object]]$entries, [hashtable]$entry) {
    $entries.Add([pscustomobject]$entry)
}

function Item-Category([string]$id) {
    if ($id -match '(ore|raw_|ingot|nugget|dust|powder|plate|rod|block)$') { return 'materials' }
    if ($id -match '(circuit|board|processor|compute|memory|chip)') { return 'circuits' }
    if ($id -match '(wire|cable|coil|gear|seal|bolt|screw|shaft|frame|casing)') { return 'components' }
    if ($id -match '(wrench|knife|drill|probe|scanner|suit|helmet|chestplate|leggings|boots)') { return 'tools' }
    return 'items'
}

function Block-Category([string]$id) {
    if ($id -match '(ore|regolith|rock|basalt|sand|stone)') { return 'ores' }
    if ($id -match '(pipe|conduit|cable|shaft|aqueduct)') { return 'conduits' }
    if ($id -match '(tank|storage|buffer|box)') { return 'storage' }
    return 'blocks'
}

$names = @{}
Add-LangFile $names (Join-Path $SourceRoot 'src\main\resources\assets\ultratech\lang\zh_cn.json')
Add-LangFile $names (Join-Path $SourceRoot 'src\generated\resources\assets\ultratech\lang\zh_cn.json')

$entries = [System.Collections.Generic.List[object]]::new()
$machineIds = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)

$stageSource = Get-Content -LiteralPath (Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\StageMachine.java') -Raw -Encoding UTF8
$stagePattern = 'machine\((?<stage>\d+),\s*"(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*"(?<family>[^"]+)"'
[regex]::Matches($stageSource, $stagePattern) | ForEach-Object {
    $machineIds.Add($_.Groups['id'].Value) | Out-Null
    Add-Entry $entries @{
        id = $_.Groups['id'].Value
        type = 'stage_machine'
        category = $_.Groups['family'].Value
        nameZh = Convert-JavaEscapes $_.Groups['zh'].Value
        nameEn = $_.Groups['en'].Value
        stage = [int]$_.Groups['stage'].Value
        status = 'implemented'
        relationKey = "stage-$($_.Groups['stage'].Value)"
    }
}

$processSource = Get-Content -LiteralPath (Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\IndustrialProcessMachine.java') -Raw -Encoding UTF8
$processPattern = '(?m)^\s*(?<module>[A-Za-z][A-Za-z0-9_]*)\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*(?<capacity>\d+),\s*(?<energy>\d+),\s*(?<ticks>\d+),\s*(?<inputTank>\d+),\s*(?<outputTank>\d+)\)'
[regex]::Matches($processSource, $processPattern) | ForEach-Object {
    $machineIds.Add($_.Groups['id'].Value) | Out-Null
    Add-Entry $entries @{
        id = $_.Groups['id'].Value
        type = 'process_machine'
        category = $_.Groups['module'].Value
        nameZh = Convert-JavaEscapes $_.Groups['zh'].Value
        nameEn = $_.Groups['en'].Value
        stage = $null
        status = 'registered'
        relationKey = "module-$($_.Groups['module'].Value)"
        energyPerTick = [int]$_.Groups['energy'].Value
        processTicks = [int]$_.Groups['ticks'].Value
        inputTank = [int]$_.Groups['inputTank'].Value
        outputTank = [int]$_.Groups['outputTank'].Value
    }
}

$fluidSource = Get-Content -LiteralPath (Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\IndustrialFluid.java') -Raw -Encoding UTF8
$fluidPattern = 'fluid\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*"(?<family>[^"]+)",\s*(?<stage>\d+)'
[regex]::Matches($fluidSource, $fluidPattern) | ForEach-Object {
    Add-Entry $entries @{
        id = $_.Groups['id'].Value
        type = 'fluid'
        category = $_.Groups['family'].Value
        nameZh = Convert-JavaEscapes $_.Groups['zh'].Value
        nameEn = $_.Groups['en'].Value
        stage = [int]$_.Groups['stage'].Value
        status = 'registered'
        relationKey = "fluid-$($_.Groups['family'].Value)"
    }
}

$blockStateRoot = Join-Path $SourceRoot 'src\generated\resources\assets\ultratech\blockstates'
$blockIds = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
if (Test-Path -LiteralPath $blockStateRoot) {
    Get-ChildItem -LiteralPath $blockStateRoot -Filter '*.json' -Recurse | ForEach-Object {
        $blockIds.Add($_.BaseName) | Out-Null
    }
}

foreach ($id in $blockIds) {
    if ($machineIds.Contains($id)) { continue }
    $name = $names["block:$id"]
    if ([string]::IsNullOrWhiteSpace($name)) { $name = Friendly-Name $id }
    Add-Entry $entries @{
        id = $id
        type = 'block'
        category = Block-Category $id
        nameZh = $name
        nameEn = Friendly-Name $id
        stage = $null
        status = 'registered'
        relationKey = "block-$(Block-Category $id)"
    }
}

$itemModelRoot = Join-Path $SourceRoot 'src\generated\resources\assets\ultratech\models\item'
$itemIds = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
if (Test-Path -LiteralPath $itemModelRoot) {
    Get-ChildItem -LiteralPath $itemModelRoot -Filter '*.json' -Recurse | ForEach-Object {
        $itemIds.Add($_.BaseName) | Out-Null
    }
}

foreach ($id in $itemIds) {
    if ($machineIds.Contains($id) -or $blockIds.Contains($id)) { continue }
    $name = $names["item:$id"]
    if ([string]::IsNullOrWhiteSpace($name)) { $name = Friendly-Name $id }
    Add-Entry $entries @{
        id = $id
        type = 'item'
        category = Item-Category $id
        nameZh = $name
        nameEn = Friendly-Name $id
        stage = $null
        status = 'registered'
        relationKey = "item-$(Item-Category $id)"
    }
}

$worlds = @(
    [pscustomobject]@{ id = 'moon'; nameZh = Convert-JavaEscapes '\u6708\u7403'; nameEn = 'Moon'; stage = 20; probeTier = 1; relayTier = 1; status = 'implemented'; type = 'moon'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'mars'; nameZh = Convert-JavaEscapes '\u706b\u661f'; nameEn = 'Mars'; stage = 24; probeTier = 1; relayTier = 1; status = 'implemented'; type = 'terrestrial'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'mercury'; nameZh = Convert-JavaEscapes '\u6c34\u661f'; nameEn = 'Mercury'; stage = 23; probeTier = 2; relayTier = 2; status = 'implemented'; type = 'terrestrial'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'venus'; nameZh = Convert-JavaEscapes '\u91d1\u661f'; nameEn = 'Venus'; stage = 28; probeTier = 3; relayTier = 3; status = 'implemented'; type = 'terrestrial'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'ceres'; nameZh = Convert-JavaEscapes '\u8c37\u795e\u661f'; nameEn = 'Ceres'; stage = 27; probeTier = 3; relayTier = 3; status = 'implemented'; type = 'dwarf_planet'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'vesta'; nameZh = Convert-JavaEscapes '\u7076\u795e\u661f'; nameEn = 'Vesta'; stage = 27; probeTier = 4; relayTier = 4; status = 'implemented'; type = 'dwarf_planet'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'saturn'; nameZh = Convert-JavaEscapes '\u571f\u661f'; nameEn = 'Saturn'; stage = 28; probeTier = 5; relayTier = 5; status = 'implemented'; type = 'gas_giant'; landable = $false; note = Convert-JavaEscapes '\u4ec5\u8f68\u9053\u89c2\u6d4b\u4e0e\u5927\u6c14\u91c7\u96c6\uff0c\u4e0d\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'uranus'; nameZh = Convert-JavaEscapes '\u5929\u738b\u661f'; nameEn = 'Uranus'; stage = 29; probeTier = 6; relayTier = 6; status = 'implemented'; type = 'ice_giant'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'neptune'; nameZh = Convert-JavaEscapes '\u6d77\u738b\u661f'; nameEn = 'Neptune'; stage = 29; probeTier = 6; relayTier = 6; status = 'implemented'; type = 'ice_giant'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
    [pscustomobject]@{ id = 'pluto'; nameZh = Convert-JavaEscapes '\u51a5\u738b\u661f'; nameEn = 'Pluto'; stage = 30; probeTier = 7; relayTier = 7; status = 'implemented'; type = 'dwarf_planet'; landable = $true; note = Convert-JavaEscapes '\u53ef\u964d\u843d' }
)

$catalog = [ordered]@{
    generatedAt = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss K')
    source = 'Forge source and DataGen resource snapshot'
    stats = [ordered]@{
        entries = $entries.Count
        stageMachines = @($entries | Where-Object type -eq 'stage_machine').Count
        processMachines = @($entries | Where-Object type -eq 'process_machine').Count
        fluids = @($entries | Where-Object type -eq 'fluid').Count
        blocks = @($entries | Where-Object type -eq 'block').Count
        items = @($entries | Where-Object type -eq 'item').Count
        worlds = $worlds.Count
    }
    entries = @($entries | Sort-Object type, category, id)
    worlds = $worlds
}

$json = $catalog | ConvertTo-Json -Depth 7
[System.IO.File]::WriteAllText((Join-Path $dataRoot 'catalog.json'), $json, [System.Text.UTF8Encoding]::new($false))
Write-Host "Wrote $($entries.Count) catalog entries and $($worlds.Count) worlds."

& (Join-Path $PSScriptRoot 'build-wiki.ps1') -SourceRoot $SourceRoot

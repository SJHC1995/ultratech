param(
    [string]$SourceRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
)

$ErrorActionPreference = 'Stop'
$siteRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dataRoot = Join-Path $siteRoot 'data'
$assetRoot = Join-Path $siteRoot 'assets\mod'
New-Item -ItemType Directory -Path $dataRoot, $assetRoot -Force | Out-Null

function Convert-JavaEscapes([string]$Value) {
    if ($null -eq $Value) { return '' }
    return [regex]::Replace($Value, '\\u([0-9A-Fa-f]{4})', {
        param($match)
        [char][Convert]::ToInt32($match.Groups[1].Value, 16)
    })
}

function Friendly-Name([string]$Id) {
    return (Get-Culture).TextInfo.ToTitleCase(($Id -replace '_', ' '))
}

function New-Page {
    param(
        [string]$Id,
        [string]$Title,
        [string]$TitleEn,
        [string]$Category,
        [string]$Subcategory,
        [Nullable[int]]$Stage,
        [int]$SortOrder,
        [string[]]$Tags = @(),
        [string]$Summary = '',
        [string]$Content = '',
        [string]$Status = 'registered',
        [string]$Type = 'entry',
        [hashtable]$Details = @{}
    )

    return [ordered]@{
        id = $Id
        title = $Title
        titleEn = $TitleEn
        category = $Category
        subcategory = $Subcategory
        stage = $Stage
        categorySortOrder = $SortOrder
        tags = @($Tags | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Unique)
        summary = $Summary
        content = $Content
        prevPageId = $null
        nextPageId = $null
        itemTexture = $null
        blockTexture = $null
        modelPath = $null
        itemModelPreview = $false
        blockModelPreview = $false
        recipes = @()
        dependencies = @()
        status = $Status
        type = $Type
        details = $Details
        sourcePath = $null
        assetStatus = [ordered]@{
            item = $false
            block = $false
            model = $false
        }
    }
}

function Add-Page([hashtable]$Pages, [hashtable]$Page) {
    if (-not $Pages.ContainsKey($Page.id)) {
        $Pages[$Page.id] = $Page
    }
}

function Get-LangMap([string]$Path) {
    $map = @{}
    if (-not (Test-Path -LiteralPath $Path)) { return $map }
    $json = Get-Content -LiteralPath $Path -Raw -Encoding UTF8 | ConvertFrom-Json
    foreach ($property in $json.PSObject.Properties) {
        $map[$property.Name] = Convert-JavaEscapes ([string]$property.Value)
    }
    return $map
}

function Get-LangName([hashtable]$Names, [string]$Id, [string]$Kind, [string]$Fallback) {
    foreach ($key in @("$Kind.ultratech.$Id", "item.ultratech.$Id", "block.ultratech.$Id")) {
        if ($Names.ContainsKey($key) -and -not [string]::IsNullOrWhiteSpace($Names[$key])) {
            return $Names[$key]
        }
    }
    return $Fallback
}

function Get-GenericCategory([string]$Id, [string]$Type) {
    if ($Id -match '(rubber|oil_palm|castor|sisal|jojoba)') { return '工业植物' }
    if ($Id -match '(starship|space_|spacecraft|planet|probe|relay|satellite|solar_wing|space_suit|astronaut|rocket|orbital)') { return '航天系统' }
    if ($Id -match '(research|compute|processor|memory|wireless|data_|terminal)') { return '研究系统' }
    if ($Type -eq 'fluid') { return '加工配方' }
    if ($Id -match '(reactor|turbine|generator|boiler|engine|energy|photovoltaic|solar|substation|converter|power_)') { return '能源系统' }
    return '材料大全'
}

function Get-GenericSubcategory([string]$Id, [string]$Type, [string]$Category) {
    if ($Category -eq '工业植物') { return '产业链部件' }
    if ($Category -eq '航天系统') { return '航天器与轨道设施' }
    if ($Category -eq '研究系统') { return '研究与算力网络' }
    if ($Category -eq '能源系统') { return '能源设备与组件' }
    if ($Type -eq 'fluid') { return '工业流体' }
    if ($Type -eq 'block') { return '方块与构件' }
    if ($Id -match '(ore|raw_|ingot|nugget|dust|powder|plate|rod|crystal|alloy)') { return '金属与工业材料' }
    if ($Id -match '(circuit|board|chip|processor|coil|cable|wire)') { return '电路与电气部件' }
    return '基础物品'
}

function Copy-Asset([string]$RelativePath, [string[]]$ResourceRoots) {
    foreach ($resourceRoot in $ResourceRoots) {
        $source = Join-Path $resourceRoot $RelativePath
        if (-not (Test-Path -LiteralPath $source)) { continue }
        $target = Join-Path $assetRoot $RelativePath
        $targetDirectory = Split-Path -Parent $target
        New-Item -ItemType Directory -Path $targetDirectory -Force | Out-Null
        $copy = -not (Test-Path -LiteralPath $target)
        if (-not $copy) {
            $copy = (Get-Item -LiteralPath $source).LastWriteTimeUtc -gt (Get-Item -LiteralPath $target).LastWriteTimeUtc
        }
        if ($copy) { Copy-Item -LiteralPath $source -Destination $target -Force }
        return ('assets/mod/' + ($RelativePath -replace '\\', '/'))
    }
    return $null
}

function Set-PageAssets([System.Collections.IDictionary]$Page, [string[]]$ResourceRoots) {
    $id = $Page.id
    $itemRelative = "textures\item\$id.png"
    $frontRelative = "textures\block\${id}_front.png"
    $blockRelative = "textures\block\$id.png"
    $modelRelative = "models\block\$id.json"
    $geckoRelative = "geo\$id.geo.json"
    Copy-Asset $itemRelative $ResourceRoots | Out-Null
    Copy-Asset $frontRelative $ResourceRoots | Out-Null
    Copy-Asset $blockRelative $ResourceRoots | Out-Null
    Copy-Asset $modelRelative $ResourceRoots | Out-Null
    Copy-Asset $geckoRelative $ResourceRoots | Out-Null
    if (Test-Path -LiteralPath (Join-Path $assetRoot $itemRelative)) {
        $Page['itemTexture'] = 'assets/mod/' + ($itemRelative -replace '\\', '/')
    } else {
        $Page['itemTexture'] = $null
    }
    if (Test-Path -LiteralPath (Join-Path $assetRoot $frontRelative)) {
        $Page['blockTexture'] = 'assets/mod/' + ($frontRelative -replace '\\', '/')
    } elseif (Test-Path -LiteralPath (Join-Path $assetRoot $blockRelative)) {
        $Page['blockTexture'] = 'assets/mod/' + ($blockRelative -replace '\\', '/')
    } else {
        $Page['blockTexture'] = $null
    }
    $model = if (Test-Path -LiteralPath (Join-Path $assetRoot $modelRelative)) { 'assets/mod/' + ($modelRelative -replace '\\', '/') } else { $null }
    $gecko = if (Test-Path -LiteralPath (Join-Path $assetRoot $geckoRelative)) { 'assets/mod/' + ($geckoRelative -replace '\\', '/') } else { $null }
    if ($gecko) {
        $Page['modelPath'] = $gecko
    } else {
        $Page['modelPath'] = $model
    }
    $Page['itemModelPreview'] = $null -ne $Page['itemTexture']
    $Page['blockModelPreview'] = ($null -ne $Page['blockTexture']) -or ($null -ne $Page['modelPath'])
    $Page['assetStatus'] = [ordered]@{
        item = $Page['itemModelPreview']
        block = $null -ne $Page['blockTexture']
        model = $null -ne $Page['modelPath']
    }
    if ($gecko) {
        $Page.details.modelKind = 'geckolib'
    } elseif ($model) {
        $Page.details.modelKind = 'minecraft_block_model'
    }
}

function Add-RecipeReferences([hashtable]$Pages, [string]$RecipeRoot) {
    if (-not (Test-Path -LiteralPath $RecipeRoot)) { return }
    Get-ChildItem -LiteralPath $RecipeRoot -Filter '*.json' -Recurse | ForEach-Object {
        $recipeId = $_.FullName.Substring($RecipeRoot.Length).TrimStart('\', '/') -replace '\\', '/' -replace '\.json$', ''
        $raw = Get-Content -LiteralPath $_.FullName -Raw -Encoding UTF8
        $refs = @([regex]::Matches($raw, 'ultratech:([a-z0-9_]+)') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique)
        if ($refs.Count -eq 0) { return }
        $outputs = @()
        foreach ($pattern in @(
                '(?s)"result"\s*:\s*\{\s*"item"\s*:\s*"ultratech:([a-z0-9_]+)"',
                '"result"\s*:\s*"ultratech:([a-z0-9_]+)"',
                '(?s)"output"\s*:\s*\{\s*"item"\s*:\s*"ultratech:([a-z0-9_]+)"'
            )) {
            $outputs += [regex]::Matches($raw, $pattern) | ForEach-Object { $_.Groups[1].Value }
        }
        foreach ($output in @($outputs | Select-Object -Unique)) {
            if (-not $Pages.ContainsKey($output)) { continue }
            $Pages[$output].recipes = @($Pages[$output].recipes + $recipeId | Select-Object -Unique)
            $inputs = @($refs | Where-Object { $_ -ne $output -and $Pages.ContainsKey($_) } | Select-Object -Unique)
            $Pages[$output].dependencies = @($Pages[$output].dependencies + $inputs | Select-Object -Unique)
        }
    }
}

$lang = Get-LangMap (Join-Path $SourceRoot 'src\main\resources\assets\ultratech\lang\zh_cn.json')
$catalogPath = Join-Path $siteRoot 'data\catalog.json'
if (-not (Test-Path -LiteralPath $catalogPath)) {
    & (Join-Path $PSScriptRoot 'build-catalog.ps1') -SourceRoot $SourceRoot
}
$catalog = Get-Content -LiteralPath $catalogPath -Raw -Encoding UTF8 | ConvertFrom-Json
$pages = @{}

foreach ($entry in $catalog.entries) {
    $category = Get-GenericCategory $entry.id $entry.type
    $subcategory = Get-GenericSubcategory $entry.id $entry.type $category
    $title = if ([string]::IsNullOrWhiteSpace($entry.nameZh)) { Friendly-Name $entry.id } else { $entry.nameZh }
    $summary = "由 Forge 注册与 DataGen 资源索引生成的 $($entry.type) 条目。"
    Add-Page $pages (New-Page -Id $entry.id -Title $title -TitleEn $entry.nameEn -Category $category -Subcategory $subcategory `
        -Stage $entry.stage -SortOrder 50000 -Tags @($entry.type, $entry.category) -Summary $summary `
        -Content "## 来源`n`n- Forge 注册名：ultratech:$($entry.id)`n- 注册类型：$($entry.type)`n- 原始分类：$($entry.category)" `
        -Status $entry.status -Type $entry.type -Details @{ source = 'catalog' })
}

$stagePath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\StageMachine.java'
$stageSource = Get-Content -LiteralPath $stagePath -Raw -Encoding UTF8
$stagePattern = 'machine\((?<stage>\d+),\s*"(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*"(?<family>[^"]+)",\s*(?<capacity>\d+),\s*(?<rate>\d+),\s*(?<compute>\d+),\s*(?<fluid>\d+)'
foreach ($match in [regex]::Matches($stageSource, $stagePattern)) {
    $id = $match.Groups['id'].Value
    $stage = [int]$match.Groups['stage'].Value
    $title = Convert-JavaEscapes $match.Groups['zh'].Value
    $details = @{
        family = $match.Groups['family'].Value
        energyCapacity = [int]$match.Groups['capacity'].Value
        powerRate = [int]$match.Groups['rate'].Value
        computeRequirement = [int]$match.Groups['compute'].Value
        fluidCapacity = [int]$match.Groups['fluid'].Value
    }
    $pages[$id] = New-Page -Id $id -Title $title -TitleEn $match.Groups['en'].Value -Category '机器百科' -Subcategory "阶段 $stage" `
        -Stage $stage -SortOrder $stage -Tags @('阶段机', $details.family) -Summary "阶段 $stage 的 $title，归属 $($details.family) 能源体系。" `
        -Content "## 机器参数`n`n- 阶段：$stage`n- 能源体系：$($details.family)`n- 基础速率：$($details.powerRate)`n- 能量容量：$($details.energyCapacity)`n- 算力需求：$($details.computeRequirement)`n- 流体容量：$($details.fluidCapacity)`n`n## 数据来源`n`nStageMachine.MACHINES" `
        -Status 'implemented' -Type 'stage_machine' -Details $details
}

$modulePath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\IndustrialProcessModule.java'
$moduleSource = Get-Content -LiteralPath $modulePath -Raw -Encoding UTF8
$moduleNames = @{}
foreach ($match in [regex]::Matches($moduleSource, '(?<enum>[A-Z_]+)\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>(?:\\.|[^"])*)"\)')) {
    $moduleNames[$match.Groups['enum'].Value] = @{
        id = $match.Groups['id'].Value
        en = $match.Groups['en'].Value
        zh = Convert-JavaEscapes $match.Groups['zh'].Value
    }
}

$processPath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\IndustrialProcessMachine.java'
$processSource = Get-Content -LiteralPath $processPath -Raw -Encoding UTF8
$processPattern = '(?m)^\s*(?<factory>[A-Za-z][A-Za-z0-9_]*)\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>(?:\\.|[^"])*)",\s*(?<capacity>\d+),\s*(?<energy>\d+),\s*(?<ticks>\d+),\s*(?<input>\d+),\s*(?<output>\d+)\)'
$processPages = @()
foreach ($match in [regex]::Matches($processSource, $processPattern)) {
    $id = $match.Groups['id'].Value
    $factory = $match.Groups['factory'].Value
    $moduleEnum = switch ($factory) {
        'primitive' { 'PRIMITIVE' }
        'sorghum' { 'SORGHUM_BIOPLASTIC' }
        'rubber' { 'RUBBER_TREE' }
        'oilPalm' { 'OIL_PALM' }
        'castor' { 'CASTOR' }
        'sisal' { 'SISAL' }
        'jojoba' { 'JOJOBA' }
        'iron' { 'IRON_METALLURGY' }
        'copper' { 'COPPER_METALLURGY' }
        'aluminum' { 'ALUMINUM_METALLURGY' }
        'chlorAlkali' { 'CHLOR_ALKALI' }
        'silicon' { 'SILICON_INDUSTRY' }
        'precious' { 'PRECIOUS_METAL' }
        'nonferrous' { 'NONFERROUS_METALLURGY' }
        'refractory' { 'REFRACTORY_METALLURGY' }
        'rareEarth' { 'RARE_EARTH_METALLURGY' }
        'dispersed' { 'DISPERSED_METAL_RECOVERY' }
        'nonmetallic' { 'NONMETALLIC_MINERALS' }
        'precision' { 'PRECISION_MANUFACTURING' }
        'petroleum' { 'PETROLEUM' }
        default { '' }
    }
    $module = $moduleNames[$moduleEnum]
    $title = Convert-JavaEscapes $match.Groups['zh'].Value
    $details = @{
        moduleId = $module.id
        energyCapacity = [int]$match.Groups['capacity'].Value
        energyPerTick = [int]$match.Groups['energy'].Value
        processTicks = [int]$match.Groups['ticks'].Value
        inputTankCapacity = [int]$match.Groups['input'].Value
        outputTankCapacity = [int]$match.Groups['output'].Value
    }
    $pages[$id] = New-Page -Id $id -Title $title -TitleEn $match.Groups['en'].Value -Category '过程机器' -Subcategory $module.zh `
        -Stage $null -SortOrder $processPages.Count -Tags @('工业过程机', $module.id) -Summary "$($module.zh)中的工业过程机器。" `
        -Content "## 工艺参数`n`n- 工艺模块：$($module.zh)`n- 单次处理：$($details.processTicks) tick`n- 每 tick 能耗：$($details.energyPerTick)`n- 能量缓存：$($details.energyCapacity)`n- 输入储罐：$($details.inputTankCapacity) mB`n- 输出储罐：$($details.outputTankCapacity) mB`n`n## 数据来源`n`nIndustrialProcessMachine.MACHINES" `
        -Status 'registered' -Type 'process_machine' -Details $details
    $processPages += $pages[$id]
}

$nativePath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\NativeMetal.java'
$nativeSource = Get-Content -LiteralPath $nativePath -Raw -Encoding UTF8
$nativeSort = 0
foreach ($match in [regex]::Matches($nativeSource, 'new NativeMetal\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*0x[0-9A-Fa-f]+,\s*MiningTier\.(?<tier>[A-Z]+),\s*(?<hardness>[\d.]+)F,\s*(?<overworld>\d+),\s*(?<nether>\d+),\s*(?<end>\d+),\s*(?<vein>\d+),\s*(?<min>-?\d+),\s*(?<max>-?\d+)\)')) {
    $id = "material_$($match.Groups['id'].Value)"
    $title = Convert-JavaEscapes $match.Groups['zh'].Value
    $details = @{
        materialId = $match.Groups['id'].Value
        miningTier = $match.Groups['tier'].Value
        hardness = [double]$match.Groups['hardness'].Value
        veinSize = [int]$match.Groups['vein'].Value
        minY = [int]$match.Groups['min'].Value
        maxY = [int]$match.Groups['max'].Value
    }
    Add-Page $pages (New-Page -Id $id -Title $title -TitleEn $match.Groups['en'].Value -Category '材料大全' -Subcategory '原生金属' -Stage $null `
        -SortOrder $nativeSort -Tags @('原生金属', $details.miningTier) -Summary "$title 是可在世界生成中出现的原生金属。" `
        -Content "## 生成参数`n`n- 采掘等级：$($details.miningTier)`n- 硬度：$($details.hardness)`n- 矿脉大小：$($details.veinSize)`n- 高度范围：Y=$($details.minY) 至 Y=$($details.maxY)`n`n## 数据来源`n`nNativeMetal.METALS" `
        -Status 'implemented' -Type 'native_metal' -Details $details)
    $nativeSort++
}

$alloyPath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\AlloyMaterial.java'
$alloySource = Get-Content -LiteralPath $alloyPath -Raw -Encoding UTF8
$alloySort = 0
foreach ($match in [regex]::Matches($alloySource, 'alloy\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*(?<min>\d+),\s*(?<max>\d+),\s*(?<hardness>[\d.]+)F,\s*(?<conductivity>\d+),.*?\)')) {
    $id = "alloy_$($match.Groups['id'].Value)"
    $title = Convert-JavaEscapes $match.Groups['zh'].Value
    $details = @{
        materialId = $match.Groups['id'].Value
        stageMin = [int]$match.Groups['min'].Value
        stageMax = [int]$match.Groups['max'].Value
        hardness = [double]$match.Groups['hardness'].Value
        conductivity = [int]$match.Groups['conductivity'].Value
    }
    Add-Page $pages (New-Page -Id $id -Title $title -TitleEn $match.Groups['en'].Value -Category '材料大全' -Subcategory '合金' -Stage $details.stageMin `
        -SortOrder $alloySort -Tags @('合金', "阶段 $($details.stageMin)-$($details.stageMax)") -Summary "$title 是阶段 $($details.stageMin)-$($details.stageMax) 的合金材料。" `
        -Content "## 材料参数`n`n- 阶段范围：$($details.stageMin)-$($details.stageMax)`n- 硬度：$($details.hardness)`n- 导电性：$($details.conductivity)`n`n## 数据来源`n`nAlloyMaterial.ALLOYS" `
        -Status 'implemented' -Type 'alloy' -Details $details)
    $alloySort++
}

$circuitPath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\CircuitTier.java'
$circuitSource = Get-Content -LiteralPath $circuitPath -Raw -Encoding UTF8
$circuitSort = 0
foreach ($match in [regex]::Matches($circuitSource, 'tier\("(?<id>[^"]+)",\s*"(?<en>[^"]+)",\s*"(?<zh>[^"]+)",\s*(?<stage>\d+),\s*\d+,\s*(?<power>\d+),\s*(?<nm>[\d.]+)D,\s*0x[0-9A-Fa-f]+,\s*"(?<alloy>[^"]+)"\)')) {
    $id = "circuit_$($match.Groups['id'].Value)"
    $title = "$(Convert-JavaEscapes $match.Groups['zh'].Value)电路"
    $details = @{
        tierId = $match.Groups['id'].Value
        powerPerTick = [int]$match.Groups['power'].Value
        processNm = [double]$match.Groups['nm'].Value
        alloyId = $match.Groups['alloy'].Value
    }
    Add-Page $pages (New-Page -Id $id -Title $title -TitleEn "$($match.Groups['en'].Value) Circuit" -Category '材料大全' -Subcategory '电路层级' -Stage ([int]$match.Groups['stage'].Value) `
        -SortOrder $circuitSort -Tags @('电路层级', "阶段 $($match.Groups['stage'].Value)") -Summary "用于高阶计算体系的 $title。" `
        -Content "## 电路参数`n`n- 解锁阶段：$($match.Groups['stage'].Value)`n- 功耗：$($details.powerPerTick)/t`n- 工艺节点：$($details.processNm) nm`n- 结构合金：$($details.alloyId)`n`n## 数据来源`n`nCircuitTier.TIERS" `
        -Status 'implemented' -Type 'circuit_tier' -Details $details)
    $circuitSort++
}

$spacePath = Join-Path $SourceRoot 'src\main\java\com\halfsword\ultratech\content\SpaceBody.java'
$spaceSource = Get-Content -LiteralPath $spacePath -Raw -Encoding UTF8
$spaceSort = 0
foreach ($match in [regex]::Matches($spaceSource, 'new SpaceBody\((?<index>\d+),\s*StarChartItem\.BODY_(?<body>[A-Z]+),\s*"(?<key>[^"]+)",\s*(?<stage>\d+),\s*(?<distance>[\d_]+)L,\s*(?<probe>\d+),\s*(?<relay>\d+),\s*-?[\d_]+,\s*-?[\d_]+,\s*(?<landingY>\d+),\s*(?<interference>\d+),\s*(?<implemented>true|false),\s*BodyType\.(?<type>[A-Z_]+)\)')) {
    $bodyId = $match.Groups['body'].Value.ToLowerInvariant()
    $id = "world_$bodyId"
    $title = Get-LangName $lang $bodyId 'gui' (Friendly-Name $bodyId)
    if ($lang.ContainsKey($match.Groups['key'].Value)) { $title = $lang[$match.Groups['key'].Value] }
    $bodyType = $match.Groups['type'].Value
    $canLand = $bodyType -ne 'GAS_GIANT'
    $distance = ($match.Groups['distance'].Value -replace '_', '')
    $details = @{
        bodyType = $bodyType
        distanceKm = [Int64]$distance
        minProbeTier = [int]$match.Groups['probe'].Value
        minRelayTier = [int]$match.Groups['relay'].Value
        signalInterferencePercent = [int]$match.Groups['interference'].Value
        landable = $canLand
        terrain = '未在 SpaceBody 中定义'
        atmosphere = '未在 SpaceBody 中定义'
        temperature = '未在 SpaceBody 中定义'
    }
    $summary = if ($canLand) { "$title 是 $bodyType 类型的可访问天体。" } else { "$title 是气态巨行星，仅支持轨道观测与部署。" }
    $content = "## 任务参数`n`n- 天体类型：$bodyType`n- 研究阶段：$($match.Groups['stage'].Value)`n- 距离：$($details.distanceKm) km`n- 最低探测器等级：T$($details.minProbeTier)`n- 最低中继等级：T$($details.minRelayTier)`n- 信号干扰：$($details.signalInterferencePercent)%`n- 可降落：$(if ($canLand) { '是' } else { '否；气态巨行星仅可进入轨道' })`n`n## 未定义的环境参数`n`n重力、大气、温度与地形未由 SpaceBody 提供，因此此 Wiki 不推测数值。"
    Add-Page $pages (New-Page -Id $id -Title $title -TitleEn (Friendly-Name $bodyId) -Category '星球维度' -Subcategory $bodyType -Stage ([int]$match.Groups['stage'].Value) `
        -SortOrder $spaceSort -Tags @('天体', $bodyType) -Summary $summary -Content $content -Status ($(if ($match.Groups['implemented'].Value -eq 'true') { 'implemented' } else { 'planned' })) -Type 'space_body' -Details $details)
    $spaceSort++
}

$plants = @(
    @{ id = 'industrial_plant_rubber_tree'; module = 'RUBBER_TREE'; title = '橡胶树'; en = 'Rubber Tree'; stage = 5 },
    @{ id = 'industrial_plant_oil_palm'; module = 'OIL_PALM'; title = '油棕'; en = 'Oil Palm'; stage = 9 },
    @{ id = 'industrial_plant_castor'; module = 'CASTOR'; title = '蓖麻'; en = 'Castor'; stage = 11 },
    @{ id = 'industrial_plant_sisal'; module = 'SISAL'; title = '剑麻'; en = 'Sisal'; stage = 6 },
    @{ id = 'industrial_plant_jojoba'; module = 'JOJOBA'; title = '霍霍巴'; en = 'Jojoba'; stage = 15 }
)
foreach ($plant in $plants) {
    $module = $moduleNames[$plant.module]
    $chain = @($processPages | Where-Object { $_.details.moduleId -eq $module.id } | ForEach-Object id)
    $page = New-Page -Id $plant.id -Title $plant.title -TitleEn $plant.en -Category '工业植物' -Subcategory '独立工业植物链' -Stage $plant.stage `
        -SortOrder $plant.stage -Tags @('工业植物', $module.id) -Summary "$($plant.title)的独立工业加工链。" `
        -Content "## 产业链`n`n本页面由 IndustrialProcessModule.$($plant.module) 与对应过程机器自动汇总；它与其他产业链保持独立。`n`n## 关联过程机`n`n$($chain | ForEach-Object { "- ultratech:$_" } | Out-String)" `
        -Status 'implemented' -Type 'industrial_plant' -Details @{ moduleId = $module.id; processMachineCount = $chain.Count }
    $page.dependencies = $chain
    Add-Page $pages $page
}

$systemPages = @(
    @{ id = 'system_su'; title = 'SU 机械能网络'; en = 'SU Mechanical Network'; category = '能源系统'; subcategory = '机械能'; stage = 1; tags = @('SU', '机械传动'); source = 'src/main/java/com/halfsword/ultratech/api/strain'; summary = '由机械传动与应变能 API 支撑的早期能量体系。' },
    @{ id = 'system_fe'; title = 'FE 电能网络'; en = 'FE Electrical Network'; category = '能源系统'; subcategory = '电能'; stage = 13; tags = @('FE', '电力'); source = 'src/main/java/com/halfsword/ultratech'; summary = '从阶段 13 开始接入的电能体系。' },
    @{ id = 'system_wireless_energy'; title = '无线能量网络'; en = 'Wireless Energy Network'; category = '能源系统'; subcategory = '无线输电'; stage = 20; tags = @('无线能量', '网络'); source = 'WirelessEnergyRequest'; summary = '由项目中的无线能量请求与网络包代码索引出的传输系统。' },
    @{ id = 'system_research'; title = '研究系统'; en = 'Research System'; category = '研究系统'; subcategory = '研究解锁'; stage = 1; tags = @('研究', '终端'); source = 'ResearchTerminal'; summary = '由研究终端与玩家研究存档构成的解锁系统。' },
    @{ id = 'system_compute'; title = '算力网络'; en = 'Compute Network'; category = '研究系统'; subcategory = '算力网络'; stage = 13; tags = @('算力', '计算'); source = 'Compute'; summary = '由算力部件、处理器层级与空间计算设施构成的网络。' },
    @{ id = 'system_spaceflight'; title = '航天系统'; en = 'Spaceflight System'; category = '航天系统'; subcategory = '星际航行'; stage = 20; tags = @('航天', '维度'); source = 'SpaceBody'; summary = '由星图、探测器、中继与维度系统构成的航天内容。' }
)
foreach ($system in $systemPages) {
    Add-Page $pages (New-Page -Id $system.id -Title $system.title -TitleEn $system.en -Category $system.category -Subcategory $system.subcategory -Stage $system.stage `
        -SortOrder $system.stage -Tags $system.tags -Summary $system.summary -Content "## 来源索引`n`n本条目由项目源码中的 $($system.source) 相关实现自动建立。`n`n该页面仅展示当前代码可确认的系统存在性，不推断未在源码中定义的规则。" `
        -Status 'implemented' -Type 'system' -Details @{ sourceHint = $system.source })
}

$resourceRoots = @(
    (Join-Path $SourceRoot 'src\main\resources\assets\ultratech'),
    (Join-Path $SourceRoot 'src\generated\resources\assets\ultratech')
)
foreach ($page in $pages.Values) {
    Set-PageAssets $page $resourceRoots
}

$plantPreviewAssets = @{
    industrial_plant_rubber_tree = @{ item = 'rubber_tree_fruit'; block = 'rubber_tree_crop_lower_stage7' }
    industrial_plant_oil_palm = @{ item = 'oil_palm_fruit'; block = 'oil_palm_crop_lower_stage7' }
    industrial_plant_castor = @{ item = 'castor_bean'; block = 'castor_crop_stage7' }
    industrial_plant_sisal = @{ item = 'sisal_bundle'; block = 'sisal_crop_lower_stage7' }
    industrial_plant_jojoba = @{ item = 'jojoba_bean'; block = 'jojoba_crop_stage7' }
}
foreach ($plantId in $plantPreviewAssets.Keys) {
    $preview = $plantPreviewAssets[$plantId]
    $itemRelative = "textures\item\$($preview.item).png"
    $blockRelative = "textures\block\$($preview.block).png"
    Copy-Asset $itemRelative $resourceRoots | Out-Null
    Copy-Asset $blockRelative $resourceRoots | Out-Null
    $pages[$plantId]['itemTexture'] = if (Test-Path -LiteralPath (Join-Path $assetRoot $itemRelative)) { 'assets/mod/' + ($itemRelative -replace '\\', '/') } else { $null }
    $pages[$plantId]['blockTexture'] = if (Test-Path -LiteralPath (Join-Path $assetRoot $blockRelative)) { 'assets/mod/' + ($blockRelative -replace '\\', '/') } else { $null }
    $pages[$plantId]['itemModelPreview'] = $null -ne $pages[$plantId]['itemTexture']
    $pages[$plantId]['blockModelPreview'] = $null -ne $pages[$plantId]['blockTexture']
    $pages[$plantId]['assetStatus'] = [ordered]@{
        item = $pages[$plantId]['itemModelPreview']
        block = $pages[$plantId]['blockModelPreview']
        model = $false
    }
}

Add-RecipeReferences $pages (Join-Path $SourceRoot 'src\generated\resources\data\ultratech\recipes')

foreach ($page in $pages.Values) {
    $page['sourcePath'] = switch ($page['type']) {
        'stage_machine' { 'src/main/java/com/halfsword/ultratech/content/StageMachine.java' }
        'process_machine' { 'src/main/java/com/halfsword/ultratech/content/IndustrialProcessMachine.java' }
        'native_metal' { 'src/main/java/com/halfsword/ultratech/content/NativeMetal.java' }
        'alloy' { 'src/main/java/com/halfsword/ultratech/content/AlloyMaterial.java' }
        'circuit_tier' { 'src/main/java/com/halfsword/ultratech/content/CircuitTier.java' }
        'space_body' { 'src/main/java/com/halfsword/ultratech/content/SpaceBody.java' }
        'industrial_plant' { 'src/main/java/com/halfsword/ultratech/content/IndustrialProcessModule.java' }
        'system' { "source-index:$($page['details']['sourceHint'])" }
        default { 'data/catalog.json' }
    }
}

$sorted = @($pages.Values | Sort-Object @{ Expression = { $_['category'] } }, @{ Expression = { $_['subcategory'] } }, @{ Expression = { $_['categorySortOrder'] } }, @{ Expression = { $_['title'] } }, @{ Expression = { $_['id'] } })
$groups = $sorted | Group-Object { $_['category'] }
foreach ($group in $groups) {
    $groupPages = @($group.Group | Sort-Object @{ Expression = { $_['categorySortOrder'] } }, @{ Expression = { $_['title'] } }, @{ Expression = { $_['id'] } })
    for ($index = 0; $index -lt $groupPages.Count; $index++) {
        $groupPages[$index].prevPageId = if ($index -gt 0) { $groupPages[$index - 1].id } else { $null }
        $groupPages[$index].nextPageId = if ($index -lt $groupPages.Count - 1) { $groupPages[$index + 1].id } else { $null }
    }
}

$categorySummary = @(
    $sorted | Group-Object { $_['category'] } | ForEach-Object {
        [ordered]@{
            name = $_.Name
            count = $_.Count
            subcategories = @($_.Group | Group-Object { $_['subcategory'] } | Sort-Object Name | ForEach-Object {
                [ordered]@{ name = $_.Name; count = $_.Count }
            })
        }
    } | Sort-Object name
)
$output = [ordered]@{
    generatedAt = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss K')
    source = 'Forge source, DataGen recipes, language files, and resource assets'
    stats = [ordered]@{
        pages = $sorted.Count
        categories = $categorySummary.Count
        itemPreviews = @($sorted | Where-Object itemTexture).Count
        blockPreviews = @($sorted | Where-Object blockTexture).Count
        modelPreviews = @($sorted | Where-Object modelPath).Count
    }
    quality = [ordered]@{
        recipeLinkedPages = @($sorted | Where-Object { $_['recipes'].Count -gt 0 }).Count
        dependencyLinkedPages = @($sorted | Where-Object { $_['dependencies'].Count -gt 0 }).Count
        pagesWithoutPreview = @($sorted | Where-Object { -not $_['assetStatus']['item'] -and -not $_['assetStatus']['block'] -and -not $_['assetStatus']['model'] }).Count
        indexedAssets = (Get-ChildItem -LiteralPath $assetRoot -Recurse -File | Measure-Object).Count
    }
    categories = $categorySummary
    pages = $sorted
}
[System.IO.File]::WriteAllText((Join-Path $dataRoot 'wiki-pages.json'), ($output | ConvertTo-Json -Depth 12), [System.Text.UTF8Encoding]::new($false))
Write-Host "Wrote $($sorted.Count) wiki pages across $($categorySummary.Count) categories."

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

function Get-AutoChineseName([string]$Id) {
    # Language keys remain authoritative. This table only gives unkeyed generated
    # variants (especially tiered tank/container families) a readable Chinese title.
    $terms = @{
        'acetic' = '乙酸'; 'acid' = '酸'; 'advanced' = '高级'; 'aerogel' = '气凝胶'; 'air' = '空气'
        'alkali' = '碱液'; 'aluminum' = '铝'; 'ammonia' = '氨'; 'anodizing' = '阳极氧化'; 'argon' = '氩'
        'beam' = '束'; 'biochemical' = '生化'; 'biodiesel' = '生物柴油'; 'biologically' = '生物处理'; 'black' = '黑液'
        'bleach' = '漂白液'; 'blueberry' = '蓝莓'; 'brine' = '盐水'; 'catalyst' = '催化剂'; 'carbon' = '碳'
        'ceramic' = '陶瓷'; 'chlorine' = '氯气'; 'chromium' = '铬'; 'clarified' = '澄清'; 'clean' = '洁净'
        'cleaning' = '清洗'; 'coagulated' = '混凝'; 'coating' = '涂层'; 'cooled' = '冷却'; 'coolant' = '冷却液'
        'cooling' = '冷却'; 'composite' = '复合材料'; 'compressed' = '压缩'; 'concentrated' = '浓缩'; 'condensate' = '冷凝液'
        'container' = '容器'; 'copper' = '铜'; 'cosmic' = '宇宙'; 'creative' = '创造'; 'crop' = '作物'
        'crude' = '粗制'; 'cryogenic' = '低温'; 'cvd' = '化学气相沉积'; 'dark' = '暗'; 'deaerated' = '脱气'
        'dechlorinated' = '脱氯'; 'degummed' = '脱胶'; 'deuterium' = '氘'; 'die' = '芯片裸片'; 'digested' = '消化'
        'dioxide' = '二氧化物'; 'dispersion' = '分散液'; 'dot' = '点'; 'dry' = '干燥'; 'dt' = '氘氚'
        'effluent' = '出水'; 'electrochemical' = '电化学'; 'electrolyte' = '电解液'; 'electrosynthesis' = '电合成'
        'enriched' = '富集'; 'enzyme' = '酶'; 'ethanol' = '乙醇'; 'eucalyptus' = '桉树'; 'eucommia' = '杜仲'
        'extraction' = '提取'; 'fermentation' = '发酵'; 'fiber' = '纤维'; 'filtered' = '过滤'; 'fluid' = '流体'
        'fluidized' = '流化床'; 'flotation' = '浮选'; 'fuel' = '燃料'; 'fusion' = '聚变'; 'gas' = '气体'
        'gel' = '凝胶'; 'glucose' = '葡萄糖'; 'glyoxylic' = '乙醛酸'; 'gold' = '金'; 'grinding' = '研磨'
        'groundwater' = '地下水'; 'helium' = '氦'; 'helium3' = '氦-3'; 'helium4' = '氦-4'; 'hemp' = '工业大麻'
        'high' = '高'; 'hot' = '热'; 'hydrogen' = '氢'; 'implant' = '注入'; 'implanter' = '注入机'
        'industrial' = '工业'; 'infinite' = '无限'; 'intermediate' = '中间体'; 'ion' = '离子'; 'kernel' = '仁'
        'lacquer' = '漆'; 'lead' = '铅'; 'liquid' = '液态'; 'liquor' = '液'; 'lifted' = '提升'
        'lunar' = '月球'; 'matrix' = '基体'; 'microwave' = '微波'; 'mill' = '磨机'; 'mixed' = '混合'
        'molten' = '熔融'; 'nano' = '纳米'; 'natural' = '天然'; 'negative' = '负'; 'neutralized' = '中和'
        'nickel' = '镍'; 'nitrogen' = '氮'; 'offgas' = '尾气'; 'oil' = '油'; 'optical' = '光学'
        'organic' = '有机'; 'osmosis' = '渗透'; 'oxygen' = '氧'; 'palm' = '油棕'; 'paper' = '纸'
        'parts' = '零件'; 'paste' = '浆料'; 'permeate' = '透过液'; 'pine' = '松树'; 'plasma' = '等离子体'
        'plating' = '电镀'; 'platinum' = '铂'; 'plutonium' = '钚'; 'polymer' = '聚合物'; 'precursor' = '前驱体'
        'process' = '工艺'; 'purified' = '纯化'; 'purity' = '纯度'; 'pure' = '纯'; 'pyrolysis' = '热解'
        'quantum' = '量子'; 'r134a' = 'R134a'; 'r410a' = 'R410a'; 'raw' = '原料'; 'reclaimed' = '回用'
        'refrigerant' = '制冷剂'; 'refrigerated' = '制冷'; 'refined' = '精制'; 'regeneration' = '再生'; 'resin' = '树脂'
        'return' = '回流'; 'reverse' = '反渗透'; 'rich' = '富集'; 'rosin' = '松香'; 'rubber' = '橡胶'
        'salt' = '盐'; 'saw' = '切割机'; 'shadow' = '暗影'; 'siemens' = '西门子'; 'silicon' = '硅'
        'slurry' = '浆液'; 'sol' = '溶胶'; 'solution' = '溶液'; 'sorbitol' = '山梨醇'; 'sorbic' = '山梨酸'
        'sorghum' = '高粱'; 'spacetime' = '时空'; 'spinning' = '纺丝'; 'starch' = '淀粉'; 'steel' = '钢'
        'sugar' = '糖液'; 'sulfate' = '硫酸盐'; 'supercritical' = '超临界'; 'surface' = '地表'; 'suspension' = '悬浮液'
        'tank' = '储罐'; 'tannin' = '单宁'; 'tetraethyl' = '四乙基'; 'titanium' = '钛'; 'treated' = '处理'
        'treatment' = '处理'; 'tritium' = '氚'; 'tungsten' = '钨'; 'turpentine' = '松节油'; 'ultrafiltered' = '超滤'
        'ultrapure' = '超纯'; 'uranium' = '铀'; 'vacuum' = '真空'; 'wafer' = '晶圆'; 'water' = '水'
        'wastewater' = '废水'; 'wet' = '湿'; 'wood' = '木材'; 'zinc' = '锌'
        'bed' = '床'; 'deposition' = '沉积'; 'furnace' = '炉'; 'machine' = '机'; 'packager' = '封装机'
        'photolithography' = '光刻'; 'polishing' = '抛光'; 'powder' = '粉碎'; 'reactor' = '反应器'
    }
    $parts = foreach ($part in ($Id -split '_')) {
        if ($terms.ContainsKey($part)) {
            $terms[$part]
        } elseif ($part -match '^(\d+)c$') {
            "$($Matches[1])摄氏度"
        } elseif ($part -match '^\d+$') {
            $part
        } else {
            '未编目'
        }
    }
    return ($parts -join '')
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
        dossier = $null
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

function Merge-LangMap([hashtable]$Destination, [hashtable]$Source) {
    foreach ($key in $Source.Keys) {
        $Destination[$key] = $Source[$key]
    }
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
    if ($Id -match '^(quantum_compression_workshop|spacetime_rift_stabilizer|matter_reconstruction_tower|hyperdimensional_energy_well|stargate_array)$') { return '机器百科' }
    if ($Id -match '(rubber|oil_palm|castor|sisal|jojoba)') { return '工业植物' }
    if ($Id -match '(starship|space_|spacecraft|planet|probe|relay|satellite|solar_wing|space_suit|astronaut|rocket|orbital)') { return '航天系统' }
    if ($Id -match '(research|compute|processor|memory|wireless|data_|terminal)') { return '研究系统' }
    if ($Type -eq 'fluid') { return '加工配方' }
    if ($Id -match '(reactor|turbine|generator|boiler|engine|energy|photovoltaic|solar|substation|converter|power_)') { return '能源系统' }
    return '材料大全'
}

function Get-GenericSubcategory([string]$Id, [string]$Type, [string]$Category) {
    if ($Category -eq '机器百科') { return '阶段 28-30 终局巨构' }
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

function Test-CatalogToken([string]$Id, [string[]]$Terms) {
    $escaped = @($Terms | ForEach-Object { [regex]::Escape($_) })
    if ($escaped.Count -eq 0) { return $false }
    return $Id -match ("(^|_)(" + ($escaped -join '|') + ")(_|$)")
}

function Get-CatalogIndustry([string]$Id, [string]$Category) {
    # Use token-boundary matching. IDs such as topological_inducer and
    # superconducting_qubit_chip must not be mistaken for log/wood materials.
    if (Test-CatalogToken $Id @('circuit', 'board', 'processor', 'memory', 'chip', 'coil', 'cable', 'wire', 'waveguide', 'magnetron', 'klystron', 'qubit', 'josephson', 'sensor')) { return '电气、微波与算力网络' }
    if (Test-CatalogToken $Id @('rubber', 'latex', 'tire', 'vulcanized')) { return '橡胶加工线' }
    if (Test-CatalogToken $Id @('oil_palm', 'palm')) { return '油棕产业链' }
    if (Test-CatalogToken $Id @('castor', 'jojoba', 'sisal', 'pine', 'eucalyptus', 'eucommia', 'lacquer')) { return '工业植物产业链' }
    if (Test-CatalogToken $Id @('iron', 'steel', 'copper', 'aluminum', 'titanium', 'nickel', 'zinc', 'chromium', 'gold', 'silver', 'platinum', 'tungsten', 'molybdenum', 'zirconium', 'niobium')) { return '金属加工与冶金线' }
    if ($Category -eq '加工配方' -or (Test-CatalogToken $Id @('acid', 'alkali', 'brine', 'oil', 'steam', 'gas', 'water', 'ethanol', 'ethylene', 'ammonia', 'chlorine', 'refrigerant', 'electrolyte'))) { return '工业流体与化工线' }
    if (Test-CatalogToken $Id @('catalyst', 'carrier', 'zeolite', 'adsorbent')) { return '工业催化剂线' }
    if (Test-CatalogToken $Id @('ceramic', 'kaolin', 'alumina', 'zirconia', 'refractory', 'glass')) { return '陶瓷与光学材料线' }
    if (Test-CatalogToken $Id @('fiber', 'fabric', 'yarn', 'pulp', 'paper', 'wood', 'log', 'plank', 'bark')) { return '生物质、纺织与造纸线' }
    if (Test-CatalogToken $Id @('gear', 'bolt', 'screw', 'shaft', 'bearing', 'seal', 'gasket', 'casing', 'frame', 'housing', 'fastener')) { return '标准工业零部件线' }
    if ($Category -eq '机器百科') { return '阶段能源主线' }
    return '通用工业物料体系'
}

function Get-CatalogPurpose([string]$Id, [string]$Type) {
    if ($Type -eq 'fluid') { return '作为工艺流体存入储罐，通过桶装容器、流体管道和机器 Fluid Capability 接口接入后续反应、冷却或输送流程。' }
    if ($Id -match '(_fluid|_source|_flowing)$') { return '作为可放置的流体方块存在；可用桶回收，并通过储罐、流体管道和机器 Fluid Capability 接口参与后续流程。' }
    if (Test-CatalogToken $Id @('conveyor', 'belt')) { return '作为物流输送组件，将物品持续转运到缓存、加工机或装配线，适合连接连续生产链。' }
    if (Test-CatalogToken $Id @('ore', 'regolith', 'salt')) { return '作为矿物或资源原料，进入破碎、筛分、浸出、焙烧或熔炼流程，供后续金属与化工产线使用。' }
    if (Test-CatalogToken $Id @('crushed', 'milled', 'powder', 'dust', 'slurry', 'concentrate')) { return '作为选矿或粉体加工中间体，用于提高有效成分浓度，并继续进入浸出、烧结、还原或精密成型步骤。' }
    if (Test-CatalogToken $Id @('slag', 'sludge', 'tailings', 'residue', 'waste', 'spent', 'reject', 'anode_slime')) { return '作为回收或废弃物流节点，应接入回收、再生、固化或安全处置流程，避免在产线末端形成死物流。' }
    if (Test-CatalogToken $Id @('catalyst', 'carrier', 'zeolite')) { return '作为催化剂、载体或再生中间体，用于提升化学反应选择性；失活后可进入催化剂再生与贵金属回收链。' }
    if (Test-CatalogToken $Id @('seal', 'gasket')) { return '作为密封部件，服务于流体、压力容器或管道设备的装配，减少泄漏并保证稳定运行。' }
    if (Test-CatalogToken $Id @('bucket', 'canister', 'cylinder', 'cartridge', 'tank', 'container')) { return '作为便携式储运容器，用于把流体、气体或化学中间体安全地送入生产线或从产线取出。' }
    if (Test-CatalogToken $Id @('seed', 'sapling', 'crop', 'fruit', 'leaf', 'bean')) { return '作为工业植物的种植、收获或提取原料，连接农业供给与材料、燃料或化工加工。' }
    if (Test-CatalogToken $Id @('log', 'wood', 'plank', 'bark', 'pulp', 'paper')) { return '作为木质生物质、制浆原料或基础结构材料，进入提取、制浆、热解、包装或板材加工流程。' }
    if (Test-CatalogToken $Id @('ingot', 'billet', 'cast', 'stock', 'plate', 'sheet', 'rod', 'wire', 'tube', 'alloy')) { return '作为冶金成品或半成品，可继续进入轧制、拉丝、机加工、装配或高级机器合成，是产线的常用物料节点。' }
    if (Test-CatalogToken $Id @('crystal', 'wafer', 'lens', 'optics', 'laser', 'fiber', 'film', 'substrate')) { return '作为精密材料或光电中间体，服务于半导体、光学、量子或高阶仪器制造流程。' }
    if (Test-CatalogToken $Id @('gear', 'bolt', 'screw', 'shaft', 'bearing', 'frame', 'housing', 'fastener', 'valve', 'hose')) { return '作为标准机械或流体部件，参与设备装配、传动、承压或物流连接，可由导管和仓储系统批量调度。' }
    if ($Type -eq 'block') { return '作为可放置方块，用于工业建筑、结构搭建、装饰，或作为设备和物流网络的一部分。' }
    return '作为可堆叠、可入库并可由物品导管输送的工业物品，参与对应系统的配方输入、产出或装配。'
}

function Get-CatalogCopy([psobject]$Entry, [string]$Title, [string]$Category, [string]$Subcategory) {
    $typeText = switch ($Entry.type) {
        'item' { '物品' }
        'block' { '方块' }
        'fluid' { '工业流体' }
        default { '工业条目' }
    }
    if ($Entry.type -eq 'block' -and $Entry.id -match '(_fluid|_source|_flowing)$') {
        $typeText = '流体方块'
    }
    $industry = Get-CatalogIndustry $Entry.id $Category
    $purpose = Get-CatalogPurpose $Entry.id $Entry.type
    $summary = "$Title 是 UltraTech $industry 中的$typeText。$purpose"
    $content = @"
## 条目定位

$Title 属于$industry，当前以${typeText}形式注册到模组内容表中。

## 工业用途

$purpose

## 物流与查找

- 注册名：ultratech:$($Entry.id)
- 存储方式：$(
    if ($Entry.type -eq 'fluid' -or $Entry.id -match '(_fluid|_source|_flowing)$') { '流体储罐、桶装容器与管道接口' }
    elseif ($Entry.type -eq 'block') { '物品栏携带后放置到世界中' }
    else { '物品栏、仓储与物品导管' }
)
- 关联配方：本页下方会自动列出 DataGen 已识别的相关配方与上下游条目。
"@
    return [ordered]@{
        summary = $summary
        content = $content.Trim()
        tags = @($industry, $typeText, $Subcategory)
    }
}

function Get-MultiblockDossier([string]$Id) {
    $entries = @(
        @{ id = 'multiblock_blast_furnace_controller'; title = '铁雨之心'; story = '第一批生铁落入出料口时，你会发现高炉并不急着证明自己。它只是把铁矿、焦炭和空气关在同一个钢铁胸腔里，等到炉缸终于亮起，整条早期工业线才承认自己有了心跳。'; scale = '3×3×3 起步高炉' }
        @{ id = 'pine_resin_distiller'; title = '松林的第二次呼吸'; story = '松树被砍倒后，树脂仍在替它记住阳光。蒸汽穿过木材纤维，把那股黏稠的气味带回管道；你没有复活一棵树，但让它的余温继续在工厂里流动。'; scale = '基础植物多方块' }
        @{ id = 'eucalyptus_leaf_distillation_kettle'; title = '叶脉蒸馏室'; story = '桉叶在锅里翻滚时看起来像一场很小的风暴。它们把山坡的辛凉交给冷凝器，最后变成一滴滴精油，提醒你工业并不总是从矿石开始。'; scale = '基础植物多方块' }
        @{ id = 'eucommia_extract_tank'; title = '树皮深处的弹性'; story = '杜仲皮看上去只是沉默的灰褐色，但它一直替树撑住每一次风。提取槽把这份看不见的韧性拆出来，交给轮胎、密封件和下一台更难造的机器。'; scale = '强化植物多方块' }
        @{ id = 'lacquer_refining_kettle'; title = '漆夜炉'; story = '漆液在深色釜里缓慢收缩，像把漫长的雨季熬成一层薄膜。它不追求速度，偏偏为后来的机器留下最耐腐蚀的一层外壳。'; scale = '强化植物多方块' }
        @{ id = 'eucalyptus_tannin_extraction_tank'; title = '苦涩的定影'; story = '栲胶没有光泽，也不讨人喜欢。可当纤维和皮革需要被时间固定下来时，正是这份苦涩让它们学会不再轻易散架。'; scale = '高级植物多方块' }

        @{ id = 'air_fractionation_column'; title = '天空切片机'; story = '空气曾经是最廉价、最无名的东西。分馏塔升起来以后，你第一次把天空拆成氧、氮、氩和一整张工业气体账单。'; scale = '低温分馏塔' }
        @{ id = 'cryogenic_storage_tank'; title = '零度以下的仓库'; story = '储罐的工作很安静：把本该逃走的冷留住。每一层绝热都像一封写给热力学的拒信，告诉它今天不能把液氦带走。'; scale = '低温储运多方块' }
        @{ id = 'dilution_refrigerator'; title = '绝对零度的门槛'; story = '它不会让世界真正停下，却能把一小块金属拉到时间几乎走不动的温度。站在旁边时，你会意识到“冷”也是一种需要被建造的基础设施。'; scale = '超低温制冷多方块' }
        @{ id = 'circulating_cooling_water_system'; title = '工厂的静脉回路'; story = '没人会为循环水拍照，直到主机开始过热。它绕着每一台设备流动，把危机带走，又把稳定带回来，是整座工厂最不显眼也最可靠的循环。'; scale = '冷却基础设施多方块' }
        @{ id = 'heat_pump_system'; title = '逆流的热'; story = '热总想从高处滑向低处，而热泵偏要把它拎回来。它用功换来方向，让废热有了第二次被需要的机会。'; scale = '热管理多方块' }
        @{ id = 'ceramic_high_temperature_sintering_furnace'; title = '白火窑'; story = '粉末进入炉膛时还彼此陌生。白火一遍遍逼近它们的软化点，直到颗粒终于握紧彼此，变成可以承受下一代机器的骨头。'; scale = '高温陶瓷多方块' }
        @{ id = 'ceramic_hot_isostatic_press'; title = '无方向的压力'; story = '普通压力总有方向，热等静压没有。它从所有角度一起推来，把每个微小孔隙都逼到无处可藏，留下近乎完美的致密材料。'; scale = '热等静压多方块' }
        @{ id = 'microwave_sintering_furnace'; title = '从内部点燃'; story = '它不像老炉子那样只烤表面。微波直接钻进材料深处，于是烧结第一次像是从物质内部自己决定要成为更好的自己。'; scale = '微波烧结多方块' }
        @{ id = 'optical_glass_melting_furnace'; title = '透明的熔炉'; story = '玻璃在这里不是窗户，而是尚未成形的精密仪器。每一个气泡都是未来镜头里的缺陷，所以炉火必须学会比火焰本身更克制。'; scale = '光学熔制多方块' }
        @{ id = 'optical_fiber_drawing_tower'; title = '一根光的高度'; story = '熔融玻璃从塔顶缓慢落下，细到几乎看不见，却把整座工厂的信号拉到远方。你看到的不是一根纤维，而是一条被拉直的光路。'; scale = '光纤拉制塔' }
        @{ id = 'quantum_mbe_system'; title = '一层原子的耐心'; story = '分子束外延从不抢时间。它只允许原子一层层落下，像给未来的量子器件铺床；慢到近乎固执，精确到无法替代。'; scale = '量子外延多方块' }
        @{ id = 'molten_salt_electrolytic_cell'; title = '熔盐里的闪电'; story = '当温度高到盐开始发亮，电流不再像一根线，而像一场被关进炉膛的雷暴。金属从熔盐里析出时，冶金第一次显得像一种驯服闪电的手艺。'; scale = '高温电解多方块' }
        @{ id = 'molten_salt_electrolytic_furnace'; title = '熔盐里的闪电'; story = '当温度高到盐开始发亮，电流不再像一根线，而像一场被关进炉膛的雷暴。金属从熔盐里析出时，冶金第一次显得像一种驯服闪电的手艺。'; scale = '3×3×3 高温电解炉' }
        @{ id = 'electroslag_remelting_furnace'; title = '第二次熔炼'; story = '第一次炼出钢，是为了让它成形；第二次熔炼，是为了让它忘掉所有杂质。电渣在中间沉默地流动，把材料送往更苛刻的世界。'; scale = '电渣重熔多方块' }
        @{ id = 'vacuum_induction_melting_furnace'; title = '真空中的熔点'; story = '没有氧，没有多余的声音，只有线圈把金属推向熔点。在这里，合金第一次不必和空气妥协。'; scale = '真空感应熔炼多方块' }
        @{ id = 'superalloy_vacuum_arc_remelting_furnace'; title = '弧光再铸'; story = '电弧把合金照得像一颗被驯服的小太阳。每一次重熔都在替发动机叶片提前经历一次极端环境。'; scale = '真空电弧重熔多方块' }
        @{ id = 'lunar_mining_platform'; title = '月壤的回信'; story = '平台第一次钻进月壤时，地球已经离得很远。挖出的不只是资源，更是一句迟到的回答：工业终于把自己的手伸到了天空之外。'; scale = '月面采矿多方块' }

        @{ id = 'cryogenic_thermal_core'; title = '静默的寒核'; story = '超导从来不是“更好的导线”那么简单。它先要求世界足够安静、足够冷，才肯让电流无损地穿过自己。'; scale = '8×8×6 超导工厂' }
        @{ id = 'superconductor_fabrication_zone'; title = '无损之线'; story = '线圈绕完的一刻没有掌声，只有仪表上的损耗降到几乎不可见。可你知道，从这里开始，整张电网的尺度都要被重写。'; scale = '12×8×6 超导工厂' }
        @{ id = 'magnetic_field_generation_ring'; title = '看不见的城墙'; story = '磁场环转起来以后，周围依旧空无一物。正因为看不见，它才更让人敬畏：一堵能压住等离子体、也能约束未来的墙。'; scale = '10×10×4 强磁场结构' }
        @{ id = 'magnetic_confinement_vessel'; title = '把太阳关进容器'; story = '它不是为了制造火焰，而是为了让火焰别逃走。每一道磁力线都在和恒星级的冲动谈判。'; scale = '10×8×6 磁约束结构' }
        @{ id = 'magnetohydrodynamic_generator_array'; title = '等离子体的河流'; story = '在这里，炽热流体不推涡轮叶片，而是直接穿过磁场。你不再从机械摩擦里拿电，而是从一条发光的河流里取走功。'; scale = '12×6×5 磁流体发电阵列' }

        @{ id = 'quantum_compression_workshop'; title = '把空间叠成材料'; story = '这里的第一块量子致密物看上去并不大。可你知道它占用的不是质量，而是被强行折叠过的空间。'; scale = '30×30×32 终局巨构' }
        @{ id = 'spacetime_rift_stabilizer'; title = '裂隙边的守夜人'; story = '裂隙并不邪恶，它只是不在乎你是否准备好了。稳定器站在边缘，把每一次空间颤动改写成可被工业利用的秩序。'; scale = '32×32×30 终局巨构' }
        @{ id = 'matter_reconstruction_tower'; title = '物质的回声塔'; story = '它拆开一块物质时，没有爆炸，也没有碎屑。只是把“它曾经是什么”读了一遍，再决定让它以另一种方式回来。'; scale = '30×30×36 终局巨构' }
        @{ id = 'hyperdimensional_energy_well'; title = '向维度借火'; story = '能量井没有燃料仓。它只是在维度之间打下一口井，然后让高处的张力自己流下来。'; scale = '34×34×34 终局巨构' }
        @{ id = 'stargate_array'; title = '星图的门框'; story = '一座门最重要的从来不是门，而是两边都承认它可以通行。星门阵列把远方写进坐标，也把回家的方向留在本地。'; scale = '40×40×30 终局巨构' }
        @{ id = 'gravity_well_anchor'; title = '重力的钉子'; story = '它把一口看不见的井钉在地面上。此后，连“向下”都不再只是自然规律，而是一项可被调度的工业参数。'; scale = '32×32×34 终局巨构' }
        @{ id = 'casimir_industrial_array'; title = '真空的余震'; story = '两片板之间的空无从来不是真的空无。阵列把那一点微弱的偏差放大到足以成为产业链的第一声敲击。'; scale = '40×40×32 终局巨构' }
        @{ id = 'time_crystal_stabilizer'; title = '不肯老去的节拍'; story = '时间晶体不是钟表。它只是拒绝随时间一起衰减，于是你终于有了一种能被反复依赖的节拍。'; scale = '34×34×36 终局巨构' }
        @{ id = 'strange_matter_cultivation_ring'; title = '异常的温室'; story = '这里培育的不是生命，却也需要耐心、温度和边界。奇异物质一旦长成，连普通材料都显得像临时方案。'; scale = '36×36×32 终局巨构' }
        @{ id = 'artificial_singularity_fabricator'; title = '给坍缩一个名字'; story = '它不会问你是否害怕。它只会把奇异物质压到一个足够小的答案里，然后让那枚答案开始影响周围的一切。'; scale = '38×38×38 终局巨构' }
        @{ id = 'vacuum_decay_trigger_array'; title = '真空的裂纹'; story = '你第一次看到读数跃迁时，整个控制室都安静下来。不是因为爆炸，而是因为空无本身突然承认：它也可以被改变。'; scale = '40×40×40 终局巨构' }
        @{ id = 'topological_defect_mine'; title = '在宇宙褶皱里采矿'; story = '这座矿场挖的不是岩层，而是宇宙留下的折痕。每一段宇宙弦碎片，都是远古膨胀没来得及抹平的证词。'; scale = '42×42×34 终局巨构' }
        @{ id = 'causality_resetter'; title = '结果先于原因'; story = '工坊把成品放到你手里时，原料还没有被送进仓库。你会本能地想否认它，但工业从来只看能否稳定复现。'; scale = '36×36×40 终局巨构' }
        @{ id = 'dimensional_folding_engine'; title = '给空间折一道痕'; story = '黑色镜面合拢的瞬间，三维世界像一张纸被压平。再展开时，多出来的能量足以让整座工厂亮起来。'; scale = '34×34×34 终局巨构' }
        @{ id = 'information_materialization_reactor'; title = '把描述变成物质'; story = '研究数据终于不只是解锁条件。它被送进核心，被读成结构，再从另一端以物质的形式落下。'; scale = '38×38×38 终局巨构' }
        @{ id = 'parallel_universe_bridgehead'; title = '另一边的窗'; story = '你看不清窗外的世界，只能看见不同颜色的光在棱镜间交汇。可从那里带回来的纯态物质，证明窗外确实有人回应。'; scale = '40×40×40 终局巨构' }
        @{ id = 'spacetime_weaving_loom'; title = '给世界织一条路'; story = '经线、纬线和锚点彼此拉扯。最后被织出的不是布，而是两处原本遥远的坐标之间那条可以被走过去的路。'; scale = '42×42×38 终局巨构' }
        @{ id = 'negative_energy_factory'; title = '比黑更亮的光'; story = '负能量泡在框架里闪烁，像一种拒绝被眼睛理解的黑。你把它装进管道，也把“不可能”第一次接进了工业网络。'; scale = '36×36×36 终局巨构' }

        @{ id = 'quantum_entanglement_network_core'; title = '两端同时响起'; story = '最早的测试只是两盏相隔很远的指示灯同时亮起。后来你才意识到，它们不是在通信，而是根本没有经历“距离”这件事。'; scale = '30×30×30 独立巨机' }
        @{ id = 'faster_than_light_particle_accelerator'; title = '越过光的细线'; story = '天空里那条白线细得像伤口。粒子越过光速后，空间没有为它让路，只好把时间暂时让给了它。'; scale = '32×32×34 独立巨机' }
        @{ id = 'cosmic_string_forge'; title = '一根山岳的线'; story = '宇宙弦细到几乎没有宽度，重到一厘米就像一座山。锻造厂做的事近乎荒唐：把它焊成可以被人拿在手里的工业线材。'; scale = '32×32×32 独立巨机' }
        @{ id = 'black_hole_farm'; title = '给黑洞喂食'; story = '它像农场，却没有任何生命。你不断投进去普通物质，看着微型黑洞在约束场中成长，最后把吞噬还给你一束霍金辐射。'; scale = '34×34×34 独立巨机' }
        @{ id = 'dimensional_eroder'; title = '刮擦世界的边缘'; story = '侵蚀器并不打开一扇门，它只是耐心地刮擦维度边界。碎片落下来时，你得到的不是来访者，而是另一个世界被刮下的一点材料。'; scale = '30×30×30 独立巨机' }
        @{ id = 'temporal_translocator'; title = '把等待折起来'; story = '原料被送进去，成品却几乎立刻被取出。不是它跑得更快，而是你把那段等待留在了另一个时间坐标。'; scale = '30×30×30 独立巨机' }

        @{ id = 'entropy_reducer'; title = '把废料排成秩序'; story = '泥土、矿渣和残料进来时彼此毫无关系。机器关门以后，熵被迫后退，留下的单晶像是材料自己突然记起了该如何完美。'; scale = '2×2×2 概念多方块' }
        @{ id = 'laminar_spacetime_compressor'; title = '被压平的一秒'; story = '它先把空间压到几乎没有厚度，再放手。释放阶段的能量像一口憋了很久的气，提醒你维度也会反弹。'; scale = '2×2×2 概念多方块' }
        @{ id = 'four_dimensional_cutter'; title = '沿着时间下刀'; story = '刀锋没有切进金属的宽和高，而是切进它经历过的时间。出来的材料仍像原来的材料，却带着一段从未发生过的历史。'; scale = '2×2×2 概念多方块' }
        @{ id = 'observer_core'; title = '被看见的能量'; story = '它什么也不投喂，只是持续观看。每一次量子态被迫给出答案，核心就从那一瞬间的坍缩里取走一点可用功。'; scale = '2×2×2 概念多方块' }
        @{ id = 'cosmic_benchmark_resetter'; title = '重设一条常数'; story = '机器选择一条宇宙常数，让它在局部重新经历一次“成立”的过程。闪光之后，世界恢复原样，只有储能阵列记得刚才发生过什么。'; scale = '4×4×4 概念多方块' }
    )
    return @($entries | Where-Object { $_.id -eq $Id } | Select-Object -First 1)[0]
}

function Apply-MultiblockDossiers([hashtable]$Pages) {
    foreach ($page in $Pages.Values) {
        $dossier = Get-MultiblockDossier $page.id
        if ($null -eq $dossier) { continue }
        $page.dossier = [ordered]@{
            title = $dossier.title
            scale = $dossier.scale
            story = $dossier.story
            label = '工业称号'
        }
        $page.type = 'multiblock'
        $page.category = '工业档案'
        $page.subcategory = '全部工业档案'
        $page.categorySortOrder = 0
        $page.tags = @($page.tags + @('多方块机械', $dossier.scale, $dossier.title) | Select-Object -Unique)
        $page.summary = "【$($dossier.title)】$($page.title) 是一座$($dossier.scale)。$($dossier.story)"
        $page.content = @"
## 工业称号

**$($dossier.title)**

## 不得不品的一环

$($dossier.story)

## 建造尺度

$($dossier.scale)

$($page.content)
"@.Trim()
    }
}

function Get-RepresentativeRole([string]$Id) {
    if (Test-CatalogToken $Id @('crusher', 'mill', 'comminutor', 'chipper', 'dehuller')) {
        return @{ title = '原料的第一道裂纹'; verb = '把未经整理的原料变成可被下一步理解的尺度' }
    }
    if (Test-CatalogToken $Id @('separator', 'screening', 'filter', 'flotation', 'jig', 'shaking', 'hydrocyclone', 'extraction')) {
        return @{ title = '把混杂变成选择'; verb = '从一团混杂里找出值得继续投入的那一部分' }
    }
    if (Test-CatalogToken $Id @('electrolytic', 'electrolyzer', 'electrodialyzer', 'electroplating', 'anodizing')) {
        return @{ title = '电流的化学语言'; verb = '让电能直接介入物质的分离、沉积和重排' }
    }
    if (Test-CatalogToken $Id @('distillation', 'distiller', 'rectifier', 'tower', 'column')) {
        return @{ title = '蒸汽替你分辨'; verb = '利用沸点与高度，把看似相同的流体拆成不同去处' }
    }
    if (Test-CatalogToken $Id @('furnace', 'kiln', 'oven', 'coker')) {
        return @{ title = '火的纪律'; verb = '用受控温度逼材料完成它本来做不到的转变' }
    }
    if (Test-CatalogToken $Id @('reactor', 'digester', 'hydrolysis', 'cracking', 'polymerization', 'esterification', 'saponification')) {
        return @{ title = '把反应关进容器'; verb = '把原本难以驾驭的化学变化固定成可重复的工序' }
    }
    if (Test-CatalogToken $Id @('press', 'roller', 'rolling', 'drawing', 'former', 'molder', 'caster', 'loom', 'spinning')) {
        return @{ title = '给材料一个方向'; verb = '把松散或熔融的材料推向稳定的几何形状' }
    }
    if (Test-CatalogToken $Id @('tank', 'vat', 'kettle', 'pool')) {
        return @{ title = '时间的容器'; verb = '给反应、沉降或熟化留出不可跳过的时间' }
    }
    if (Test-CatalogToken $Id @('harvester', 'plantation', 'collector', 'drilling')) {
        return @{ title = '从土地开始'; verb = '把自然供给接入可预测的工业节拍' }
    }
    return @{ title = '产线的安静关节'; verb = '把上一道工序的结果交到下一道工序手中' }
}

function Apply-TechnicalRepresentativeDossiers([hashtable]$Pages, [object[]]$ProcessPages) {
    $moduleGroups = @($ProcessPages | Where-Object {
        $_.details.moduleId -and $null -eq (Get-MultiblockDossier $_.id)
    } | Group-Object { $_.details.moduleId })

    foreach ($group in $moduleGroups) {
        $machines = @($group.Group | Sort-Object categorySortOrder)
        if ($machines.Count -lt 3) { continue }
        $indexes = [System.Collections.Generic.List[int]]::new()
        $indexes.Add(0)
        if ($machines.Count -ge 8) {
            $indexes.Add([math]::Floor(($machines.Count - 1) / 3))
            $indexes.Add([math]::Floor(($machines.Count - 1) * 2 / 3))
        } else {
            $indexes.Add([math]::Floor(($machines.Count - 1) / 2))
        }
        $indexes.Add($machines.Count - 1)
        if ($machines.Count -ge 14) {
            $indexes.Add([math]::Floor(($machines.Count - 1) / 2))
        }

        foreach ($index in @($indexes | Select-Object -Unique | Sort-Object)) {
            $page = $machines[$index]
            $role = Get-RepresentativeRole $page.id
            $moduleName = if ($page.details.moduleZh) { $page.details.moduleZh } else { $page.subcategory }
            $story = "在$moduleName 里，$($page.title)负责$($role.verb)。它不一定是产线里最庞大的设备，却往往是玩家第一次真正理解这条工业链为何能闭合的地方。"
            $page.dossier = [ordered]@{
                title = "$moduleName · $($role.title)"
                scale = '单方块工艺设备'
                story = $story
                label = '技术代表称号'
            }
            $page.type = 'tech_representative'
            $page.category = '工业档案'
            $page.subcategory = '全部工业档案'
            $page.categorySortOrder = 0
            $page.tags = @($page.tags + @('技术代表机', $moduleName, $role.title) | Select-Object -Unique)
            $page.summary = "【$($role.title)】$($page.title) 是 $moduleName 的技术代表设备。$story"
            $page.content = @"
## 技术代表称号

**$($role.title)**

## 不得不品的一环

$story

## 代表定位

这台设备从 $($machines.Count) 台 $moduleName 工艺设备中被选为阶段代表之一：它对应原料进入、关键转化或成品端的节点。

$($page.content)
"@.Trim()
        }
    }
}

function Apply-PublicEditorialOverrides([hashtable]$Pages, [string]$Path) {
    if (-not (Test-Path -LiteralPath $Path)) { return }
    $overrides = Get-Content -LiteralPath $Path -Raw -Encoding UTF8 | ConvertFrom-Json
    foreach ($property in $overrides.PSObject.Properties) {
        if (-not $Pages.ContainsKey($property.Name)) { continue }
        $page = $Pages[$property.Name]
        $override = $property.Value
        if ($null -ne $override.title -and -not [string]::IsNullOrWhiteSpace($override.title)) { $page.title = [string]$override.title }
        if ($null -ne $override.summary -and -not [string]::IsNullOrWhiteSpace($override.summary)) { $page.summary = [string]$override.summary }
        if ($null -ne $override.content -and -not [string]::IsNullOrWhiteSpace($override.content)) { $page.content = [string]$override.content }
        if ($null -ne $override.tags) { $page.tags = @($override.tags | ForEach-Object { [string]$_ } | Select-Object -Unique) }
    }
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

$lang = @{}
Merge-LangMap $lang (Get-LangMap (Join-Path $SourceRoot 'src\main\resources\assets\ultratech\lang\zh_cn.json'))
Merge-LangMap $lang (Get-LangMap (Join-Path $SourceRoot 'src\generated\resources\assets\ultratech\lang\zh_cn.json'))
$catalogPath = Join-Path $siteRoot 'data\catalog.json'
if (-not (Test-Path -LiteralPath $catalogPath)) {
    & (Join-Path $PSScriptRoot 'build-catalog.ps1') -SourceRoot $SourceRoot
}
$catalog = Get-Content -LiteralPath $catalogPath -Raw -Encoding UTF8 | ConvertFrom-Json
$pages = @{}

foreach ($entry in $catalog.entries) {
    $category = Get-GenericCategory $entry.id $entry.type
    $subcategory = Get-GenericSubcategory $entry.id $entry.type $category
    $title = if ([string]::IsNullOrWhiteSpace($entry.nameZh) -or $entry.nameZh -eq $entry.nameEn) { Get-AutoChineseName $entry.id } else { $entry.nameZh }
    $copy = Get-CatalogCopy $entry $title $category $subcategory
    Add-Page $pages (New-Page -Id $entry.id -Title $title -TitleEn $entry.nameEn -Category $category -Subcategory $subcategory `
        -Stage $entry.stage -SortOrder 50000 -Tags (@($entry.type, $entry.category) + @($copy.tags)) -Summary $copy.summary `
        -Content $copy.content `
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
    $pages[$id] = New-Page -Id $id -Title $title -TitleEn $match.Groups['en'].Value -Category '工业档案' -Subcategory '全部工业档案' `
        -Stage $stage -SortOrder 0 -Tags @('阶段机', $details.family, '工业档案') -Summary "阶段 $stage 的 $title，归属 $($details.family) 能源体系。" `
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
        'electrochemistry' { 'ELECTROCHEMISTRY' }
        'nanomaterials' { 'NANOMATERIALS' }
        'cryogenic' { 'CRYOGENIC_ENGINEERING' }
        'optics' { 'OPTICS' }
        'standard' { 'STANDARD_INDUSTRY' }
        'microwave' { 'MICROWAVE' }
        'quantum' { 'QUANTUM_INDUSTRY' }
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
        moduleZh = $module.zh
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

Apply-TechnicalRepresentativeDossiers $pages $processPages
Apply-MultiblockDossiers $pages
Apply-PublicEditorialOverrides $pages (Join-Path $dataRoot 'editorial-overrides.json')

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

# The public wiki is also the editorial source for the in-game archive. Keep
# the game export compact: it contains the searchable title/summary for every
# registered entry, plus the authored dossier fields for representatives and
# multiblock machines. The client can therefore browse the same catalog
# without requiring a network connection to the Pages site.
$gameArchiveRoot = Join-Path $SourceRoot 'src\main\resources\assets\ultratech'
New-Item -ItemType Directory -Path $gameArchiveRoot -Force | Out-Null
$gameArchiveEntries = @(
    $sorted | ForEach-Object {
        $details = $_['details']
        $dossier = $_['dossier']
        [ordered]@{
            id = $_['id']
            title = $_['title']
            titleEn = $_['titleEn']
            stage = $_['stage']
            kind = $_['type']
            summary = $_['summary']
            dossier = if ($null -eq $dossier) { $null } else { [ordered]@{
                title = $dossier['title']
                scale = $dossier['scale']
                story = $dossier['story']
                label = $dossier['label']
            } }
            module = if ($null -ne $details -and $null -ne $details['moduleZh']) { $details['moduleZh'] } else { $null }
            processTicks = if ($null -ne $details -and $null -ne $details['processTicks']) { $details['processTicks'] } else { $null }
            energyPerTick = if ($null -ne $details -and $null -ne $details['energyPerTick']) { $details['energyPerTick'] } else { $null }
            inputTankCapacity = if ($null -ne $details -and $null -ne $details['inputTankCapacity']) { $details['inputTankCapacity'] } else { $null }
            outputTankCapacity = if ($null -ne $details -and $null -ne $details['outputTankCapacity']) { $details['outputTankCapacity'] } else { $null }
        }
    }
)
$gameArchive = [ordered]@{
    generatedAt = $output.generatedAt
    source = 'UltraTech Pages industrial archive'
    entries = $gameArchiveEntries
}
[System.IO.File]::WriteAllText((Join-Path $gameArchiveRoot 'industrial_archive.json'), ($gameArchive | ConvertTo-Json -Depth 8), [System.Text.UTF8Encoding]::new($false))

Write-Host "Wrote $($sorted.Count) wiki pages across $($categorySummary.Count) categories."
Write-Host "Exported $($gameArchiveEntries.Count) in-game industrial archive entries."

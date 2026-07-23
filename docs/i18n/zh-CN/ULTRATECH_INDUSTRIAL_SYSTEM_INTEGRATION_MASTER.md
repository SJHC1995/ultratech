<!-- ultratech-i18n: {"source":"docs/ULTRATECH_INDUSTRIAL_SYSTEM_INTEGRATION_MASTER.md","sourceSha256":"08cdb8ebbad8fd9d46c5c496fdef057234efef04a91f2d8dc6736ded51fce613","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:24:08.914Z","model":"manual-review-in-progress"} -->


# UltraTech 工业系统集成总规划

## 状态和范围

本文件定义 UltraTech 既有工业系统之间的物流契约。二十个已标记的
衔接点通过生成的配方与链接元数据实现；这些元数据还驱动 JEI 路线卡、
研究终端推荐、材料提示、机器状态图标以及首条路线的进度钩子。

文中会优先使用已经注册的 UltraTech ID 与名称。`1x` 表示一个物品
接口单位，`1000 mB` 表示一桶流体接口单位。这些只是规划用批次单位，
不能替代规范生成的配方数量。现有配方 JSON 仍是准确游戏内输入、输出、
FE 与时间数值的唯一事实来源。

## 螺旋式进度契约

每个已实现的衔接点还会生成一份 `spiral_progression` 契约。它会将
新产业链转化为工厂改造：每份契约至少列出两个旧时代部件、一个瓶颈、
一项突破、相邻的辅助模块和跨越奖励。模块放置在兼容的阶段机器旁，
会将机器切换到**辅助模式**并提高 20% 产出；奇点改造则将阶段 1-5
的产出提高 1000 倍，作为终局反馈回路。

| 衔接阶段 | 保留为批量输入的旧部件 | 瓶颈 → 突破 | 辅助模块 | 跨越奖励 |
|---|---|---|---|---|
| 1-4 | `wooden_gear` + `wooden_frame` | 扭矩 → 齿轮箱扭矩 | 机械辅助模块 | 机械旧时代升级 |
| 5-8 | `copper_pipe` + `safety_valve` | 蒸汽压力 → 高压预热 | 热能预热器 | 蒸汽旧时代升级 |
| 9-12 | `steel_pressure_vessel` + `pressure_gauge` | 燃料吞吐量 → 稳定燃烧 | 燃烧稳定器 | 燃烧旧时代升级 |
| 13-20 | `copper_wire` + `basic_circuit` | 电网失稳 → 受控电网 | 电网调节器 | 电网旧时代升级 |
| 21-29 | `steel_pressure_vessel` + `copper_pipe` | 低温热泄漏 → 冷却剂再循环 | 低温再循环模块 | 低温旧时代升级 |
| 30 | `wooden_gear` + `copper_pipe` | 终端密度 → 奇点改造 | 奇点改造模块 | 奇点旧时代升级 |

以下衔接点继承上表对应行，因此全部二十个衔接点都保留双部件的旧时代
配方契约：`biomass_pulp`, `fusion_fuel`,
`tree_extract_chemicals`, `tannin_water_treatment`,
`palm_biodiesel_logistics`, `rubber_pressure_seal`, `chlorine_pvc`,
`caustic_pulp_alumina`, `gas_catalyst`, `ceramic_electronics`,
`nano_specialty_materials`, `silicon_quantum`, `optics_precision`,
`fusion_first_wall`, `powder_precision_parts`, `ruins_research`,
`helium3_fusion`, `superconducting_containment`, `scifi_cosmic_machine` 和
`final_cosmic_projects`。

每个衔接点的首次完成仍可通过既有进度、JEI 路线卡和研究终端推荐发现。
JEI 还会在路线卡上渲染规划中的辅助模块。模块配方始终包含两个前一
时代的核心部件；它们都是永久改造，而不是消耗品升级。这样旧机房会继续
作为有价值的支撑层，而不是变成废料堆。

图例：

- `[E]` 现有已注册的项目、流体、机器或系统路径。
- `[G]` 所需的集成缺口。它只是提案，必须在后续实施中作为配方、标签
  或中间体加入。
- `[Done]` 已实现的集成契约：具有生成的配方，并在需要时支持运行时输入
  接受。
- `->` 物质或能量流。
- `=>` 研究或进展门。

## 1. 全系统流程

```text
Vanilla gathering and surface crops
  -> primitive mechanical processing (SU)
  -> standard parts + ceramics + water + compressed air
  -> steam, ethanol, lubricants, rubber, basic electrical parts
  -> FE grid, industrial gas, petroleum, electrochemistry
  -> precision materials, polymers, catalysts, optics, semiconductors
  -> nuclear fuel, cryogenics, fusion fuel, superalloys
  -> superconductors, high magnetic fields, space industry, quantum industry
  -> endgame alloys, antimatter, singularity and void materials
  -> Sci-Fi Industry 2.0 megastructures and independent concept machines
  -> wormholes / warp / dimension defense / universe-reset choice

Every era is supported by:
  water treatment -> industrial water / wastewater recovery
  gas and cryogenic engineering -> process gases / coolant
  standard industry -> shafts / seals / fasteners / casings
  fluid, pneumatic and energy networks -> movement between factories
  research and achievements -> stage gate and player-facing direction
```

### 1.1 核心横切骨干网

```text
Raw water
  -> Industrial water treatment
  -> filtered water -> softened water -> reverse-osmosis water -> EDI water
  -> electrochemistry / boilers / semiconductor cleaning / cryogenics
  -> wastewater collection -> neutralization -> reclamation -> filtered water

Air
  -> compressor -> dryer -> receiver -> distribution
  -> pneumatic actuators / valve control / instrument air

Air
  -> industrial gas separation
  -> O2 / N2 / Ar / CO2
  -> steel and furnace oxygen, inert metallurgy, semiconductor atmosphere,
     ammonia and chemical synthesis, cryogenic feed

Standard materials
  -> fasteners / bearings / shafts / seals / gear groups / casings
  -> all machines, multiblocks, pipes, pumps, ports and transport systems
```

## 2. 舞台大门和玩家路线

| 舞台乐队 | 能源与研究门 | 进入路线的系统 | 下一个门之前的强制输出 |
|---|---|---|---|
| 0-2 | 手工、动物SU | 舞台机械1、原始陶瓷、农作物收集、木材和石材处理 | `flour`, `hay_feed`, `basic_gear`, 粘土陶瓷/耐火材料前体 |
| 3-5 | 水/风 SU、变速箱 | 标准工业基础、流体管道、早期橡胶、高粱、油棕、纸张 | `copper_plate`, `iron_plate`, `steel_rod`、密封件、锅炉零件、生物质饲料 |
| 5-8 | 低压/高压蒸汽和斯特林 | 锅炉、汽轮机、制冷基础、压缩空气基础 | `low_pressure_steam`, `high_pressure_steam`, `fuel_ethanol`, `lubricant_oil`, 青铜/钢机械零件 |
| 9-12 | 内燃式和直流FE | 生物化学、石油入门、电化学入门、水处理、气体处理 | `fuel_ethanol`、精炼燃料、 `copper_wire`, `basic_circuit`、稳定的FE和过滤水 |
| 13-16 | 电网有限元、交流/太阳能、精密制造 | 氯碱、塑料、橡胶、光学、陶瓷、粉末冶金、表面工程 | 氯/碱链、工程塑料、涂层零件、精密轴承和镜片 |
| 17-20日 | 高温有限元和先进研究 | 核燃料、聚变燃料、低温、超级合金、半导体和微波 | 燃料组件、DT燃料、液氮/氦、高纯硅、微波和光学元件 |
| 21-25日 | 聚变/太空和超导时代 | Helium-3、超导工厂、太空探索、量子生产 | 超导线圈、强磁场服务、液氢/液氦、量子处理器部件 |
| 26-30日 | Endgame 有限元、计算、无线物流 | 反物质、残局合金、科幻 2.0、概念机器、宇宙巨型机器 | 宇宙弦、卡西米尔晶体、时间晶体、奇点核心、负能量、拓扑材料 |

## 3. 游戏早期：0-5阶段

### 3.1 第一产业循环

```text
wood / stone / iron / copper / redstone
  -> animal_power_millstone [E]
  -> flour + hay_feed + crushed/mineral preparation
  -> basic_gear + copper_plate + iron_plate + steel_rod
  -> basic_machine_casing / gearbox / water-wheel components
  -> stable SU network
```

第一个 `animal_power_millstone` 应该是从聚会到聚会的过渡
行业。其建议的主要输出是：

| 输入 | 接口输出 | 为什么它是工业门 |
|---|---|---|
| 小麦或高粱， `1x` | `flour`, `1x` | 开展动物饲料、食品物流和生物质处理业务。 |
| 植物物质， `1x` | `biomass_slurry`, `1000 mB` 或生物质中间体[完成] | 以发酵和热解为食，而不是仅将农作物视为食物。 |
| 矿石/石头， `1x` | 压碎或磨碎的矿物， `1x` [E 存在匹配处理材料的地方] | 在熔炉或化学处理之前创建第一个选矿步骤。 |
| 木头， `1x` | 木纤维/锯末中间体[已完成] | 将早期林业与纸张、颗粒和活性炭联系起来。 |

### 3.2 早期系统接口矩阵

| 系统 | 输入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 1.舞台机器1-5 | 香草木、石头、铁、铜、红石； `hay_feed`;水流 | 苏； `flour`; `basic_gear`;板/棒；饲料标准工业、锅炉、农作物加工 | 0-5 |
| 2. 分层模块化部件 | 铁/铜->基本框架；钢->加强框架；现有层合金链 | 每个多块和大型工厂使用的外壳、通风口、变速箱、电路、舱口 | 3+ |
| 3. 油棕 | `oil_palm_fruit`， 水 | `crude_palm_oil` -> 精炼；棕榈纤维/壳 -> 纸、活性炭、锅炉燃料 | 3+ |
| 4. 松树/桉树/杜仲/漆树 | 原木、树皮、树枝、树叶 | 树脂、松节油、精油、杜仲胶液、生漆、单宁提取物->化学品、橡胶、涂料、造纸 | 4+ |
| 5. 植物多方块 | 树木和农作物饲料加水/燃料 | 粗松香/松节油、粗桉油、粗杜仲胶液、精制生漆、单宁溶液 | 5-12 |
| 10.流体力学 | 金属板、密封件、齿轮、管道材料 | 泵、阀门、过滤器、流量传感器、管道 -> 所有液体工厂 | 3+ |
| 11、标准产业 | 板材、棒材、铜线、橡胶/密封材料 | 紧固件、变速箱、轴承、轴、密封件、外壳 -> 每台机器配方 | 3+ |
| 17.陶瓷工业 | 粘土/高岭土饲料、水、燃料 | 耐火砖、工程陶瓷、电子陶瓷->炉衬、绝缘体、电路基板 | 3-12 |
| 21. 纸张/包装 | 植物纤维、棕榈纤维、木纤维、苛性碱溶液 | 纸浆、纸张、纸板 -> 研究文件、包装、过滤介质 | 4-12 |
| 24. 制冷/热泵 | 铜管、压缩机、制冷剂、FE/SU | 冷却水及首冷回路->后期低温厂房预冷 | 5-12 |
| 29. 压缩空气 | 钢/青铜零件、密封件、FE/SU | 干燥压缩空气->气动工具、阀门控制、物料输送 | 5-12 |
| 30.工业水处理 | 原水、过滤介质、苛性碱/酸（如需要） | 过滤、软化、RO 和 EDI 水；废水流 -> 几乎所有工艺系统 | 5+ |

### 3.3 打开推荐构建

1. 收集木材、石头、铁、铜、红石、粘土、小麦/高粱和水。
2. 建造动物磨坊并生产 `flour`, `hay_feed`， 第一的 `basic_gear`,
   并配制矿物质饲料。
3. 使用铜/铁板、棒、齿轮和基本电路来创建第一个
   基本外壳、木管和水车部件。
4. 建造水轮/风力发电、变速箱、小型 SU 配电和基本
   水处理线。
5. 枝干作物：生产乙醇的高粱、生产海豹的橡胶树、生产石油的油棕、
   剑麻/大麻用于纤维，木材/树木产出用于纸浆和树脂。

## 4. 蒸汽到电力的转变：阶段 5-12

```text
filtered water + fuel
  -> low_pressure_steam -> high_pressure_steam
  -> steam turbine / Stirling engine
  -> SU and first stable heat work

sorghum -> glucose_solution -> ethanol_fermentation_broth -> fuel_ethanol
  -> internal combustion / fuel blending
  -> transitional FE

copper ore -> copper electrolyte / copper refining
  -> cathode copper -> copper_wire
  -> basic_circuit + DC converter station
  -> FE grid
```

### 4.1 Steam 硬件合约

| 所需硬件 | 现有材料来源 | 输出解锁 |
|---|---|---|
| 锅炉外壳 | `iron_plate`, `copper_plate`、钢制紧固件、密封件、耐火陶瓷 | 低/高压锅炉 |
| 热工段 | 煤/焦炭、生物质焦、棕榈壳木炭、燃料乙醇 | `low_pressure_steam`, `high_pressure_steam` |
| 蒸汽运输 | 铜/钢管、阀门、垫片、绝缘材料 | 涡轮机进水、热交换、冷凝器回水 |
| 涡轮/斯特林 | 钢轴、轴承、齿轮箱、铜线、基本电路 | SU在机械层；通过转换器链的过渡 FE |
| 冷却回路 | 处理过的水、泵、冷却塔/热泵组件 | 凝结水回收和涡轮机稳定运行 |

### 4.2 第5-12阶段接口矩阵

| 系统 | 输入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 6.电化学入门 | 处理过的水、盐水、铜/锌盐、早期 FE | `chlor_alkali_chlorine`, `chlor_alkali_hydrogen`, `chlor_alkali_sodium_hydroxide`、阴极金属制品 | 12 |
| 23.生化工业 | 生物质/高粱、水、酶/催化剂 | 葡萄糖/发酵液， `fuel_ethanol`、有机酸、酶产品->燃料、聚合物和食品/化学品路线 | 7-12 |
| 25.工业气体 | 空气、压缩机、干燥、冷却 | 氧气/氮气/氩气/二氧化碳；后来的 H2/He -> 熔炉、惰性处理、低温进料、化学 | 9-12 |
| 27. 塑料加工 | 乙烯/丙烯或聚合物原料、添加剂、热量 | 颗粒、管道、模制、吹塑和热成型零件 -> 管道、外壳、包装 | 12+ |
| 28. 橡胶加工 | `rubber_latex`/橡胶原料、硫磺、炭黑、热量 | 硫化橡胶、软管、垫片、密封件 -> 标准工业、流体机械、车辆 | 8+ |
| 31.工业催化剂 | 陶瓷/氧化铝载体、金属盐、酸/碱、气体 | 活化催化剂->石油、氯化、加氢、有机合成、再生循环 | 12+ |

## 5. 化学品和材料扩展：第 12-20 阶段

### 5.1 石油和氯碱骨干

```text
crude_oil -> desalted_crude_oil
  -> petroleum_gasoline / petroleum_naphtha / petroleum_kerosene /
     petroleum_diesel / petroleum_heavy_oil / petroleum_residual_oil
  -> petroleum_ethylene / petroleum_propylene / petroleum_butadiene /
     petroleum_aromatics / petroleum_ethylene_glycol / petroleum_styrene
  -> plastics, synthetic rubber, resins, solvents, coatings, packaging

chlor_alkali_brine + FE
  -> chlor_alkali_chlorine + chlor_alkali_hydrogen +
     chlor_alkali_sodium_hydroxide
  -> vinyl chloride/PVC, hydrochloric acid, hydrogenation, pulp bleaching,
     aluminum caustic digestion, water neutralization
```

### 5.2 第12-20阶段接口矩阵

| 系统 | 输入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 6. 全电化学 | 盐水/水， `copper_electrolyte`, `zinc_sulfate_solution`, 熔融氯化物盐, FE | 氯、氢、苛性碱、阴极铜/锌/镍/铬、高纯金属、电镀/阳极氧化零件 | 12-18日 |
| 7. 纳米材料 | 纯化化学品、载气、催化剂、高纯金属/硅、FE | 纳米粉末、纳米纤维、类石墨烯薄膜、量子点前驱体 -> 催化剂、光学、量子器件、高端复合材料 | 16+ |
| 8. 低温工程 | 分离气体、制冷设备、FE | `liquid_nitrogen`, `liquid_oxygen`, `liquid_hydrogen`, `liquid_helium`、稀有液体 -> 超导体、聚变、空间、半导体 | 18+ |
| 9. 光学 | 工业玻璃/二氧化硅、陶瓷、稀土/金属涂层、清洁水 | 透镜、光纤、激光晶体、镀膜光学器件 -> 传感器、激光加工、微波/空间/量子 | 15+ |
| 12. 微波炉 | 铜导体、铁氧体/陶瓷、真空部件、FE | 磁控管、微波烧结、微波等离子体、雷达及通讯部件->陶瓷、纳米材料、空间通讯 | 17+ |
| 13. 量子产业 | 高纯硅、外延材料、量子点、超导薄膜、液氦 | 约瑟夫森结、量子位、量子处理器、量子传感器 -> 计算研究、残局机 | 22+ |
| 18. 纺织品/复合材料 | 剑麻/大麻/植物纤维、树脂、碳/纳米增强材料 | 纱线、织物、预浸料、复合材料结构件 -> 无人机、车辆、空间和涡轮机结构 | 12+ |
| 19.表面工程 | 涂料供给、电镀盐、气体、激光/感应能量 | 硬化、氮化、涂层、熔覆零件 -> 涡轮机、泵、空间和聚变第一壁 | 15+ |
| 20.粉末冶金 | 金属/陶瓷粉末、粘合剂、压缩空气、炉热 | 烧结和近净成形零件 -> 齿轮、轴承、切削工具、精密部件 | 14+ |
| 22.硅半导体 | 石英 -> 工业硅 -> 多晶硅 -> 晶体/晶圆、光刻胶、蚀刻剂、气体 | 晶圆、芯片、封装 -> 先进电路、控制、微波、量子和研究终端 | 16+ |
| 26. 高温合金 | 镍/钴/铬/钛原料、惰性气体、真空加热、陶瓷模具 | VIM/VAR/ESR 铸锭、涡轮叶片、涂层零件、熔合首壁材料 | 18+ |

### 5.3 显式消费者映射

| 制片人 | 现有产量 | 主要消费者 |
|---|---|---|
| 油棕 | `crude_palm_oil`, `refined_palm_oil`、棕榈纤维、贝壳炭 | 生物柴油、润滑剂、表面活性剂、纸张、活性炭过滤器、生物质热能 |
| 橡胶树和杜仲 | `rubber_latex`、杜仲胶液 | 硫化橡胶、垫圈、柔性软管、密封件、传送带 |
| 松树 | 粗松香、粗松节油 | 粘合剂/树脂、溶剂、涂料、化学原料[G 表示明确的树脂路线] |
| 桉树 | 粗桉树油、树皮/单宁饲料 | 溶剂/香料含量、单宁提取、造纸化学品 [G 表示明确的单宁处理路线] |
| 氯碱 | 氯气、氢气、苛性碱、盐酸 | PVC、氢化、纸浆漂白、水中和、铝加工 |
| 石油 | 乙烯、丙烯、丁二烯、芳烃、乙二醇、燃料 | 塑料、橡胶、树脂、溶剂、合成纤维、燃料 |
| 水处理 | 过滤/软化/RO/EDI水 | 锅炉、电解、半导体、低温和催化剂制备 |
| 催化剂装置 | 载体和活化催化剂 | 石油裂化、加氢、有机电合成、废气/废水处理 |

## 6.核、聚变、超导和太空：第20-25阶段

### 6.1 核与聚变物流

```text
raw_uranium
  -> crushed_uranium_ore -> uranium_ore_powder
  -> ammonium_diuranate -> uranium_trioxide
  -> uranium_hexafluoride -> enriched_uranium_hexafluoride
  -> uranium_dioxide_powder -> fuel_pellet -> sintered_fuel_pellet
  -> uranium_fuel_rod -> uranium_fuel_assembly
  -> fission power
  -> spent_fuel_assembly -> spent_fuel_segments -> plutonium_dioxide
  -> plutonium_fuel_pellet -> mox_fuel_assembly -> breeder/fission power
  -> vitrified_radioactive_waste

water -> heavy_water -> deuterium
lithium + neutron source -> tritium
deuterium + tritium -> DT fuel [G if no explicit registered recipe ID]
  -> tokamak / laser fusion / deuterium fusion
```

重要更正：核循环不提供聚变燃料。它
提供用于裂变、增殖或熔盐的铀和 MOX 燃料组件
反应堆。聚变燃料来自重水/氘/锂氚
链。核电提供了扩大规模所需的有限元和中子经济
融合链。

### 6.2 第20-25阶段接口矩阵

| 系统 | 输入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 14.核燃料循环 | 铀矿、硫酸/硝酸、 `uranium_hexafluoride`, 锆包层, FE | 铀燃料组件、MOX燃料组件、二氧化钚、放射性废物 | 17-22日 |
| 15.聚变燃料循环 | `heavy_water`, `deuterium`, `liquid_lithium`, 中子源, 低温服务 | 氘、氚、DT燃料[G显式切换]、聚变包层材料 | 20-24日 |
| 16. He-3 提取 | 月球风化层、热量、分离气体、低温工厂 | Helium-3 胶囊/液氦-3 路线 -> 氦聚变、先进低温学 | 21+ |
| 34.超导技术 | `liquid_nitrogen`/`liquid_helium`, 铌/钛/稀土原料, FE | 超导线材和线圈、强磁场、磁约束验证、MHD FE | 22+ |
| 35.太空废墟/探索 | 火箭、燃料、生命支持、扫描仪、研究数据 | 行星样本、氦 3 源、稀有合金、文物、研究解锁 | 21+ |
| 25.工业气体，高级 | 空气分离加低温分馏 | 液态 O2/N2/Ar、氦气进料、高纯载气 -> 聚变、空间和半导体 | 18+ |
| 24. 高级制冷 | 压缩机、热交换器、制冷剂、FE | 预冷和排热 -> 空气分离和液气机组 | 18+ |

### 6.3 超导工厂闭环

```text
industrial gas + refrigeration
  -> liquid_nitrogen / liquid_helium
  -> cryogenic thermal core
  -> superconducting material preparation
  -> superconducting coils
  -> magnetic-field generation ring
  -> magnetic-confinement experiment
  -> MHD generation array
  -> FE feedback to cryogenics, coil winding and magnetic infrastructure
```

超导线圈的下游消费者：

- 托卡马克环、磁约束、反物质遏制、高场
  材料研究和选定的科幻 2.0 结构。
- 通过约瑟夫森/超导量子位生产的量子器件。
- 通过紧凑型高功率磁铁和通信硬件的空间系统。

## 7. 残局：第25-30阶段

### 7.1 科幻工业2.0物流

```text
1 Quantum compression workshop
  -> quantum compact -> strange-matter precursor
2 Spacetime rift stabilizer
  <- quantum compact + FE
  -> spacetime anchor + rift-stability crystal
3 Matter reconstruction tower
  <- quantum compact + spacetime anchor + selected material
  -> reconstructed matter + waste particles
4 Hyperdimensional energy well
  <- spacetime anchor + rift-stability crystal + compressed alloy block
  -> FE + dimensional crystal + higher-dimensional particle
5 Stargate array
  <- spacetime anchor + dimensional crystal + higher-dimensional particle
  -> interstellar transport capability + coordinate data

6 Gravity well anchor
  -> graviton beam + gravity-direction matrix
7 Casimir industrial array
  <- compressed alloy block + superconducting coil
  -> Casimir crystal + vacuum-energy liquid
8 Time crystal stabilizer
  <- Casimir crystal
  -> time-crystal ingot + time-shift field
9 Strange matter cultivation ring
  <- time-crystal ingot
  -> strange-matter droplet + anomalous particle
10 Artificial singularity maker
  <- strange-matter droplet + time-crystal ingot
  -> miniature singularity core + Hawking-radiation energy
11 Vacuum decay trigger array
  <- miniature singularity core + strange-matter droplet + time-crystal ingot
  -> true-vacuum energy + vacuum-fracture fragment
12 Topological defect mine
  <- miniature singularity core + true-vacuum energy
  -> cosmic-string fragment + magnetic monopole

13 Causality resetter
  <- cosmic-string fragment + time-crystal ingot + superconducting coil +
     liquid helium
  -> causality loop + reversal product
14 Dimensional folding engine
  <- graviton beam + Casimir crystal + vacuum-energy liquid
  -> dimensional-tension FE + folded-membrane fragment
15 Information materialization reactor
  <- research data + compute network + FE
  -> declared material output
16 Parallel-universe bridgehead
  <- magnetic monopole + folded-membrane fragment + liquid helium
  -> pure-state matter + cross-universe data
17 Spacetime weaving loom
  <- cosmic-string fragment + folded-membrane fragment + Casimir crystal +
     liquid helium
  -> closed-loop space node + spatial-topology crystal
18 Negative-energy factory
  <- vacuum-energy liquid + Casimir crystal + time-crystal ingot +
     liquid helium
  -> negative-energy beam + negative-mass particle
```

### 7.2 独立概念与宇宙机器接口

| 机器 | 来自现有系统的输入 | 输出到现有系统 |
|---|---|---|
| 帕斯卡发动机 | 卡西米尔阵列真空能液体 | SU 用于隔离新颖性/辅助机械网络；从来不是必需的主线源 |
| 玻色电容 | `liquid_helium`, 来自融合/MHD 的 FE | 玻色-爱因斯坦凝聚体->量子核和超导升级路线 |
| 熵减器 | 低品位固体、炉渣、尾矿； `liquid_nitrogen`;高FE | 高纯单晶->光学、半导体和量子饲料 |
| 轴子转换器 | 高空放置、有限元磁维护、超导现场服务 | 暗物质能量和可变 FE -> 残局能量网络 |
| 层流时空压缩器 | FE、液氮/氦 | 突发 FE -> 巨型结构充电缓冲器 |
| 延迟选择选择器 | 事件锚点项目，高FE，选定的解锁配方 | 选定的非关键产品；必须限制绕过研究/独特的残局输入 |
| 四维刀具 | 金属/合金锭，高FE | 时移材料 -> 残局合金和拓扑配方 |
| 影子物质合成器 | 金属锭，高FE | 暗影物质锭->隔离容器、铠甲、暗影状态链 |
| 费米子复合器 | 非金属/陶瓷/橡胶输入，高FE | 玻色化材料 -> 超导、润滑剂和量子材料变体 |
| 观察者核心 | 无需材料投入；隔离半径 | 稳定的 FE -> 仅低速率基本负载，而不是渐进旁路 |
| 宇宙基准重置器 | 宇宙弦、单极子、真真空能量、FE | 一次性有限元爆发 -> 巨型结构启动或后期研究里程碑 |
| 纠缠网络核心 | 有限元、量子处理器和超导基础设施 | 纠缠链接->无线物品/能量终端运输 |
| FTL粒子加速器 | 高 FE、高温合金/线圈服务 | 类时粒子 -> 晚期机器的绝对参考组件 |
| 宇宙弦锻造 | 结构 12 的宇宙弦碎片 | 宇宙弦线 -> 织布机、先进的锚和最终结构 |
| 黑洞农场 | 普通材料或废物、遏制和有限元 | 黑洞物质加上霍金有限元 -> 密集的残局构建源 |
| 维度侵蚀 | 高 FE、尺寸稳定组件 | 立体剥离材料+碎片->重建/折叠支撑 |
| 颞易位器 | 正常生产投入加 FE | 及时完成的​​产品；必须保留相同的配方资格和研究门 |

### 7.3 残局依赖规则

1. 结构 1-5 提供第一个时空物流和能源基础设施。
2. 结构 6-12 创建必要的物理材料：引力子束，
   卡西米尔晶体、时间晶体、奇点核心、真真空能量、宇宙
   弦和单极子。
3. 结构 13-18 使用 6-12 个输出并创建最终拓扑，
   信息、平行宇宙和负能量分支。
4. 概念/宇宙机器可以加速或专门化一个分支，但没有一个可以
   在研究其源结构之前制造一个独特的先决条件。
5. 最终的玩家选择消耗了以下组合 `closed_loop_space_node`,
   空间拓扑晶体，负能量束，宇宙弦线，纯净
   陈述事项和研究/坐标数据[G：最终配方和终端
   定义需要明确的实现]。

## 8. 生产者到消费者矩阵

| 生产者系统 | 主接口输出 | 消费系统 |
|---|---|---|
| 标准行业 | 紧固件、轴承、轴、密封件、外壳、变速器 | 所有机器系列、管道、端口、车辆、多块 |
| 水处理 | 过滤/软化/RO/EDI水 | 锅炉、电解、半导体、低温、催化剂 |
| 压缩空气 | 干燥压缩空气 | 气动系统、粉末输送、仪器、成型 |
| 工业气体 | O2/N2/Ar/CO2/H2/He | 冶金、化学合成、低温、空间、半导体 |
| 陶瓷制品 | 耐火陶瓷、结构陶瓷、电子陶瓷 | 锅炉、熔炉、催化剂、微波、电路基板 |
| 植物和林业 | 油、乳胶、树脂、纤维、单宁、木质纤维素 | 燃料、橡胶、塑料添加剂、纸张、过滤器、涂料 |
| 石油 | 燃料馏分、烯烃、芳烃、乙二醇 | 塑料、合成橡胶、溶剂、树脂、燃料 |
| 电化学 | 苛性碱、氯气、氢气、高纯金属、电镀 | PVC、纸张、铝、催化剂、电路、表面工程 |
| 塑料/橡胶 | 颗粒、模制件、软管、垫圈、密封件 | 物流、流体机械、电缆、车辆、航天设备 |
| 半导体/光学/微波 | 芯片、传感器、透镜、光纤、微波部件 | 研究、通信、量子、空间和残局控制 |
| 核/聚变 | 裂变燃料、MOX、DT/He-3 燃料、高 FE | 反应堆动力、太空基地动力、超导放大 |
| 低温/超导 | 液态气体、线圈、现场服务、MHD FE | 聚变、量子、反物质、巨型结构 |
| 太空探索 | 样本、文物、He-3 来源、行星资源 | 研究进展，低温/聚变/先进材料 |
| 科幻2.0 | 时空、真空、拓扑和负能材料 | 宇宙机器和最终玩家选择的项目 |

## 9. 缺少集成点

以下是重要的缺失合同。它们必须被实施为
新的食谱、标签或明确的研究解锁链接；本文件没有
添加它们。

| 优先事项 | 未连接的系统 | 必需的缺失链接 |
|---:|---|---|
| P0 | 动物磨坊 -> 生物化学/造纸 | `[Done]` 植物残体现在生产 `biomass_pulp` / `biomass_slurry` 用于造纸和生化加工。 |
| P0 | 核燃料->聚变燃料 | `[Done]` `deuterium + tritium -> dt_fuel`，被氘聚变和托卡马克接口所接受。 |
| P0 | 树木提取 -> 标准化学品 | `[Done]` 现有的松香/松节油精炼厂、粘合剂、油漆和萜烯配方构成了共享桥梁。 |
| P0 | 桉树/单宁 -> 水处理 | `[Done]` `tannin_powder` 是一种替代水凝试剂。 |
| P0 | 油棕 -> 生物柴油/物流 | `[Done]` 棕榈生物柴油被活塞和涡轮燃烧发动机所接受。 |
| P0 | 橡胶树/杜仲 -> 密封件 | `[Done]` 复合橡胶可生产标准硫化压力密封件。 |
| P0 | 氯碱->PVC | `[Done]` 乙烯加氯明确为现有 PVC 路线生产氯乙烯。 |
| P0 | 苛性碱 -> 纸浆/铝 | `[Done]` 氯碱氢氧化钠直接供给纸浆和铝土矿消化。 |
| P1 | 工业气体->催化剂 | `[Done]` 存在 H2/N2 氨、氩气煅烧、CO2 再生和氨/金属盐浸渍等变体。 |
| P1 | 陶瓷 -> 电子/微波 | `[Done]` 电子陶瓷基板和铁氧体磁芯为磁控管结构提供动力。 |
| P1 | 纳米材料->催化剂/复合材料/量子 | `[Done]` 纳米氧化物载体、纳米管复合材料和量子点胶体桥消耗纳米材料输出。 |
| P1 | 半导体->量子 | `[Done]` 沉积晶圆和封装硅芯片为量子光刻、传感器和通信提供支持。 |
| P1 | 光学 -> 激光/空间/量子 | `[Done]` 激光晶体和镀膜光学器件用于激光熔覆和雷达/导航；光纤为通信提供信号。 |
| P1 | 表面工程->融合 | `[Done]` 融合第一壁材料被 DT 目标变体消耗。 |
| P1 | 粉末冶金->标准件 | `[Done]` 粉末冶金齿轮和轴承升级为标准精密零件。 |
| P1 | 太空废墟 -> 研究树 | `[Done]` 文物分析将行星文物映射到第 25-29 阶段的研究数据和精炼材料。 |
| P1 | He-3 萃取 -> 氦聚变 | `[Done]` 氦聚变可接受胶囊、液氦 3、He3-D 燃料和 DT 燃料。 |
| P2 | 超导体 -> 反物质/残局 | `[Done]` 线圈和液氦生产反物质/奇点机器所需的密封瓶、磁铁和电缆。 |
| P2 | 科幻结构 -> 宇宙机器 | `[Done]` 巨型结构输出供给冷凝液、真空、宇宙弦和时间宇宙机器合约。 |
| P2 | 最终输出 -> 玩家选择 | `[Done]` 宇宙之门最终项目合同生成稳定虫洞、曲速驱动核心、屏障投影仪和重置装置。 |

## 10.循环经济和恢复循环

| 环形 | 封闭路径 | 益处 |
|---|---|---|
| 水循环 | 原水->处理->工艺用水->废水收集->中和->回用->过滤水 | 防止每个化学品生产线永远消耗原水。 |
| 金属环 | 废钢/废金属->破碎->粗锭->精炼->纯锭->标准件->磨损/废料返回 | 使回收在标准工业和电解精炼中占有一席之地。 |
| 渣循环 | 熔炼/矿渣->破碎->矿粉->再熔炼或陶瓷填料 | 减少矿石损失并为建筑陶瓷提供原料。 |
| 催化剂循环 | 废催化剂->再生->再利用；不可回收的催化剂->贵金属回收->金属盐->浸渍 | 通过操作而不是一次性制作来提高催化剂成本。 |
| 核环 | 乏燃料->剪切->溶解->钚提取->MOX组装->反应堆；残留物 -> 玻璃化废物 | 为饲养员/MOX 提供合理的游戏后期角色。 |
| 生物质循环 | 农作物残渣/棕榈壳/木材残渣->生物质浆/浆料->生化饲料；木质素 -> 炭/合成气 -> 热/FE；灰烬 -> 土壤/矿物填料 [完成] | 将农业与早期能源和碳处理联系起来。 |
| 塑料/橡胶环 | 废品/边角料 -> 研磨 -> 再生颗粒/再生橡胶 -> 挤出/混炼 | 支持批量基础设施，无需无限原始饲料。 |
| 冷却回路 | 蒸汽冷凝水和制冷回流->冷却塔/热交换器->处理水回流 | 连接蒸汽、热泵和水处理。 |
| 气体回路 | 氢气/氯气和工艺废气 -> 分离/洗涤 -> 再利用或中和 | 防止氯碱/石油气成为死端输出。 |
| 终局事件循环 | 物质重构废粒子+次元碎片->熵减器/次元侵蚀器->精选高纯度饲料【已完成】 | 防止残局工厂产生不可恢复的混乱。 |

## 11. 推荐完整游戏

1. **原始作坊，阶段 0-3。** 使用动物磨坊，种植早期作物，
   制作面粉/干草饲料，建立水或风SU，然后制作基本齿轮，
   板、棒和第一套管。
2. **机械沉降，阶段 3-5。** 构建标准紧固件、轴、
   轴承、密封件、木质/金属流体输送、原始陶瓷和
   基本水处理系列。开始种植高粱、橡胶、油棕和纤维。
3. **蒸汽工业化，阶段 5-8。** 制造锅炉壳体组件
   铁/铜/钢和耐火材料。关闭水->蒸汽->涡轮->
   冷凝水循环。生产燃料乙醇和润滑油。
4. **电气交叉，阶段 9-12。** 将机械功转换为稳定的 FE，
   精炼铜，制造 `copper_wire` 和 `basic_circuit`，然后建立盐水
   电解、压缩空气和气体处理。
5. **化学/材料园区，第 12-18 阶段。** 建造石油、氯碱、
   塑料、橡胶、纸浆、催化剂、粉末冶金、表面处理、
   围绕处理过的水和工业气体的陶瓷和光学加工。
6. **精度和计算，阶段 16-22。** 构建硅半导体，
   微波和纳米材料路线。使用高纯度气体、涂料和
   陶瓷用于制造先进的控制、传感器和计算组件。
7. **核和低温膨胀，阶段 17-24。** 关闭铀/MOX 燃料
   回收，然后制造重水/氘/氚并缩放空气
   分馏。通过太空系统获取月球资源和氦3。
8. **超导和聚变时代，第 22-25 阶段。** 供给液氦和
   将超导材料制成线圈、磁环和 MHD 发电；
   将这些场用于聚变、量子设备和高能遏制。
9. **终局材料，阶段 25-30。** 通过终局合金前进，
   无线/计算物流、科幻结构 1-12 以及解锁宇宙
   弦、单极子、时间晶体和真空能量分支。
10. **物理重写，第 30 阶段。** 完成结构 13-18 并连接
    他们的拓扑/负能量输出到选定的最终项目：
    虫洞、曲速驱动器、维度屏障或宇宙重置装置。

## 12. 后续配方传递的实施清单

1. 首先添加 P0 交接配方和正式物品/流体标签。
2. 使每个流程模块暴露至少一个上游输入和一个
   JEI/REI 中的下游消费者。
3. 每个跨系统都需要阶段性的研究进展
   桥梁食谱。
4. 将副产品和废物输出端口添加到第 10 节中的循环中。
5. 添加每个时代首次成功切换的晋级标准：
   第一个处理水、第一个蒸汽回路、第一个 FE、第一个氯、第一个
   半导体、第一个燃料组件、第一个线圈、第一个时空锚。
6. 使用相同的阶段路线和每个点更新游戏内手册
   其上游和下游系统的多块页面。

## 13. 顺利整合合约

每个完成的切换都定义在
`data/ultratech/industrial_links/*.json`。生成的合同记录了
阶段关口、研究成本、批次持续时间、FE/t、物流端点以及任何
未解决的注册。流体利用现有的动力 `ModFluids` 小路，
它创建源/流动流体、液体块、桶和锻造流体
能力支持。固体材料使用现有的可堆叠物品和锻造
项目能力路径。

| 关联 | 门 | 代表批次 | 时间/FE/t | 物流与反馈 | 回收出口 |
|---|---:|---|---|---|---|
| 生物质浆 | 12 | 2 残渣 + 250 mB 水 -> 2 浆料 + 250 mB 浆料 | 180吨/90 | 物品管+流体管；纸浆消化器状态图标 | 浆料->生化预处理 |
| DT燃料 | 24 | 100 mB D + 100 mB T -> 200 mB DT 燃料 | 240吨/600 | 低温管道；聚变燃料混合器路线卡 | 在聚变靶/反应堆中消耗 |
| 树木提取物化学 | 12 | 300 mB 粗松香 -> 2 精制松香 | 300吨/80 | 精炼和粘合线的流体管道 | 萜烯和涂层路线 |
| 单宁凝固 | 12 | 1 单宁 + 250 mB 原水 -> 250 mB 凝固水 | 180吨/110 | 物品/流体管道至凝结 | 水处理和回收 |
| 棕榈生物柴油物流 | 10 | 100 mB 生物柴油 -> 燃烧燃料 | 160吨/80 | 活塞/涡轮发动机的流体管 | 发动机输出保持在 SU/FE 网格上 |
| 橡胶压力密封 | 12 | 1 个复合橡胶 -> 2 个密封件 | 180吨/100 | 标准/流体系统的项目管道 | 磨损橡胶 -> 回收路线 |
| 氯气转PVC | 12 | 300 mB 乙烯 + 300 mB 氯 -> 500 mB VCM | 220吨/36 | 化工流体管 | VCM -> PVC 加工 |
| 碱浆/氧化铝 | 13 | 2 个木片 + 250 mB 苛性碱 -> 2 个纸浆 + 150 mB 黑液 | 240吨/110 | 耐腐蚀流体管道 | 黑液->水+生物炭回收 |
| 气体催化剂 | 17 号 | 150 mB N2 + 450 mB H2 -> 300 mB 氨 | 260吨/160 | 气体/液体管道至催化剂管线 | 废催化剂->再生/回收 |
| 陶瓷电子 | 17 号 | 电子陶瓷+铁氧体->磁控管模块 | 280吨/220 | 物品导管 | 破碎陶瓷->粉末冶金填料 |
| 纳米特种材料 | 22 | 纳米二氧化硅+氧化铝->载体坯体 | 320吨/420 | 清洁物品/流体路径 | 催化剂/复合材料/量子消耗 |
| 硅量子 | 22 | 沉积晶圆+抗蚀剂->量子衬底 | 360吨/520 | 洁净室物品导管 | 拒绝晶圆 -> 硅回收 |
| 光学精度 | 22 | 激光晶体+毛坯->激光熔覆组件 | 300吨/360 | 精密物品导管 | 涂层废品 -> 表面材料回收 |
| 融合第一墙 | 24 | 第一壁材料 + 200 mB DT -> 2 个目标 | 320吨/520 | 低温流体管 | 目标被融合消耗 |
| 粉末精密零件 | 15 | 粉末齿轮+毛坯->精密齿轮 | 220吨/180 | 物品导管 | 废料 -> 金属回收 |
| 遗址研究 | 29 | 10 个月球碎片 -> 100 个 stage-25 研究数据 | 600吨/1,500 | 神器分析终端 | 精制的人工制品材料仍然可以重复使用 |
| 氦3聚变 | 24 | 100 mB He-3 + 100 mB D -> 200 mB 混合 | 260吨/600 | 低温管道 | 被氦聚变消耗 |
| 超导安全壳 | 29 | 4 个线圈 + 250 mB 氦气 -> 密封瓶 | 360吨/800 | 低温管道+物品导管 | 废钢卷返回材料回收 |
| 科幻到宇宙机器 | 30 | 4 个弦碎片 -> 1 个宇宙弦线 | 800吨/总计60,000,000 | 终局巴士 + 物品管道 | 废物颗粒/碎片 -> 残局恢复 |
| 最终的宇宙计划 | 30 | 节点/拓扑/负能量->项目核心 | 1,800 吨 / 总计 1,000,000,000 | 宇宙之门路线卡 | 最终产品是终端水槽 |

### 13.1 所需的玩家反馈

- JEI 公开了**工业链接**类别。各路卡保持正常
  R/U 导航对其项目和流体端点有效，而工业
  循环食谱展示了他们的舞台大门。
- 研究终端显示 `Unlocking industrial link: ...` 为
  下一阶段相关的切换。
- 参与最多两条路线的材料和桶会显示其
  标准工具提示中的生产者 -> 消费者关系。
- 具有注册链接的工业过程机器显示出紧凑状态
  图标：绿色表示路线在线，琥珀色表示等待上游素材，
  红色表示输出路径被阻塞。悬停时提供详细信息，
  避免状态文本垃圾邮件。

### 13.2 误差与平衡策略

- 生成的链接 JSON 写入 `missing_endpoints`。非空列表是
  可操作的注册请求，包括所需的物品/流体 ID 和
  储存/运输实施建议；缺失的端点并非悄无声息
  视为已连接。
- 链接阶段至少被固定到最高的源/目标阶段。
  研究成本记录为基本跨系统成本，并由
  终端推荐；不得在两个系统之前呈现任何链接。
- 恢复路线故意返回低于其主要产量
  路线。 Black-liquor recovery returns 300 mB water from 500 mB input plus
  一种生物炭；残局恢复消耗 6 个废物单位来换取 1 个可重复使用的单位
  水晶饲料。

<!-- ultratech-i18n: {"source":"docs/ULTRATECH_INDUSTRIAL_SYSTEM_INTEGRATION_MASTER.md","sourceSha256":"08cdb8ebbad8fd9d46c5c496fdef057234efef04a91f2d8dc6736ded51fce613","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:24:08.914Z","model":"auto"} -->

# 超技术工业系统一体化总计划

## 地位和范围

该文件界定了UltraTech现有的物流合同。
工业系统。 20个有标记的交割已按生成方式执行
食谱和链接元数据;元数据还驱动 JEI 路由卡,研究
终端建议、材料工具提示、机器状态图标和
第一路线推进钩。

文档使用已有的 UltraTech 标识和名称
注册。 `1x` 表示一个接口项单元和 `1000 mB` 意味着一个桶
界面单位。 这些是规划批量单位,而不是替换
食谱数量。 现有食谱JSON仍然是来源
用于精确的游戏输入、输出、FE和时间值的真理。

## 螺旋推进合同

每一次执行的交割还会产生 `spiral_progression` 合同。
它把新的链条变成了工厂改造:每个合同名称至少两个
遗留部件、瓶颈、突破、相邻辅助模块和
过奖。 模块放在相容相容的相机旁. 这个
将机器切换到**辅助模式**,并将输出提高20%;
奇异性改造将第1-5个阶段由1000x提升为终端反馈回路.

| 链接阶段 | 作为批量投入保留的旧部件 | Bottleneck - > 突破 | 辅助模块 | 交叉奖励 |
|---|---|---|---|---|
| 1-4 (中文(简体) ). | `wooden_gear` + 键 `wooden_frame` | 扭矩 - > 变速箱扭矩 | 机械辅助 | 机械遗产升级 |
| 5 - 8 (中文(简体) ). | `copper_pipe` + 键 `safety_valve` | 蒸汽压力 -- -- > 高压预热 | 热预热器 | 蒸汽遗产升级 |
| 9-12 (中文(简体) ). | `steel_pressure_vessel` + 键 `pressure_gauge` | 燃料吞吐量 -- > 稳定燃烧 | 燃烧稳定器 | 燃烧遗产升级 |
| 13-20 (中文(简体) ). | `copper_wire` + 键 `basic_circuit` | 网格不稳定 - > 规范的网格 | 网格调节器 | 网格遗产升级 |
| 第21-29页 | `steel_pressure_vessel` + 键 `copper_pipe` | 低温热漏 -- > 冷却剂循环 | 低温再循环 | 低温遗产升级 |
| 30个 | `wooden_gear` + 键 `copper_pipe` | 终端密度 - > 奇数改造 | 特异性改装 | 特异性遗产升级 |

下面的链接继承了上面的适当行,所以所有20个都保留了 a
两个组成部分的遗留食谱合同: `biomass_pulp`, (中文(简体) ). `fusion_fuel`, (中文(简体) ).
`tree_extract_chemicals`, (中文(简体) ). `tannin_water_treatment`, (中文(简体) ).
`palm_biodiesel_logistics`, (中文(简体) ). `rubber_pressure_seal`, (中文(简体) ). `chlorine_pvc`, (中文(简体) ).
`caustic_pulp_alumina`, (中文(简体) ). `gas_catalyst`, (中文(简体) ). `ceramic_electronics`, (中文(简体) ).
`nano_specialty_materials`, (中文(简体) ). `silicon_quantum`, (中文(简体) ). `optics_precision`, (中文(简体) ).
`fusion_first_wall`, (中文(简体) ). `powder_precision_parts`, (中文(简体) ). `ruins_research`, (中文(简体) ).
`helium3_fusion`, (中文(简体) ). `superconducting_containment`, (中文(简体) ). `scifi_cosmic_machine`,以及
`final_cosmic_projects`。 。 。 。

每个链接的首次完成仍可通过现有的
进步,JEI路由卡 和研究-终点推荐。 现在
还制作路由卡上规划的辅助模块. 模块配方
总是包含两个前期的核心组件;每个组件都是永久性的改装,
不是消耗性升级 这保留了旧机房的用处
支持层而不是废堆。

图例:

- `[E]` 现有已登记项目、流体、机器或系统路径。
- `[G]` 所需融合差距。 它只是一项提案,必须作为建议添加。
  配方、标签或中间体在以后的执行通行证中。
- `[Done]` 与生成的食谱签定的一体化合同
  需要,运行时间输入接受。
- `->` 物质或能量流动。
- `=>` 研究或进步门。

## 1. 全系统流动

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

### 1.1 核心相切后骨

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

| 舞台带 | 能源和研究门 | 进入路线的系统 | 下一个大门前的强制性产出 |
|---|---|---|---|
| 0-2 (韩语). | 手活,动物SU | 舞台机、原始陶瓷、收割作物、木材和石料处理 | `flour`, (中文(简体) ). `hay_feed`, (中文(简体) ). `basic_gear`粘土陶瓷/倒质先质 |
| 3个5个 | 水/风力SU,变速箱 | 标准工业基础、流体管、早期橡胶、高粱、油棕榈、纸张 | `copper_plate`, (中文(简体) ). `iron_plate`, (中文(简体) ). `steel_rod`、密封物、锅炉零件、生物质饲料 |
| 5 - 8 (中文(简体) ). | 低压蒸汽和高压蒸汽 | 锅炉、蒸汽机、冷藏地基、压缩空气地基 | `low_pressure_steam`, (中文(简体) ). `high_pressure_steam`, (中文(简体) ). `fuel_ethanol`, (中文(简体) ). `lubricant_oil`铜/钢机部件 |
| 9-12 (中文(简体) ). | 内部燃烧和DC FE | 生物化学、石油进入、电化学进入、水处理、天然气加工 | `fuel_ethanol`精炼燃料, `copper_wire`, (中文(简体) ). `basic_circuit`、稳定的FE和过滤水 |
| 13-16 (中文(简体) ). | 网格FE、空调/太阳能、精密制造 | 氯碱、塑料、橡胶、光学、陶瓷、粉末冶金、地表工程 | 氯/致癌链、工程塑料、涂层部件、精密轴承和透镜 |
| 17-20 (中文(简体) ). | 高温FE和高级研究 | 核燃料、聚变燃料、低温、超合金、半导体和微波 | 燃料组件、DT燃料、液态氮/氦、高纯度硅、微波和光学组件 |
| 第21-25页 | 融合/空间和超导时代 | 氦-3,超导工厂,空间探索,量子生产 | 超导线圈、强磁场服务、液态氢/氢、量子处理器部件 |
| 第26-30页 | Endgame FE,计算,无线物流 | 反物质、末场合金、Sci-Fi 2.0、概念机器、宇宙特大机器 | 宇宙弦 Casimir 晶体 时间晶体 奇点核 负能 地貌材料 |

## 3. 早期游戏:阶段0-5

### 3.1 第一个工业循环

```text
wood / stone / iron / copper / redstone
  -> animal_power_millstone [E]
  -> flour + hay_feed + crushed/mineral preparation
  -> basic_gear + copper_plate + iron_plate + steel_rod
  -> basic_machine_casing / gearbox / water-wheel components
  -> stable SU network
```

第一个 `animal_power_millstone` 应该是从集合到
工业。 它建议的主要产出是:

| 投入 | 接口产出 | 为什么是工业之门 |
|---|---|---|
| 小麦或高粱, `1x` | `flour`, (中文(简体) ). `1x` | 开放动物饲料,食品物流和生物质处理. |
| 植物物质, `1x` | `biomass_slurry`, (中文(简体) ). `1000 mB` 或生物量中间体[提出] | 饲料发酵和热解,而不再仅作为食物来对待作物. |
| 矿石/石头, `1x` | 被碾碎或被打碎, `1x` [E在有匹配过程材料的情况下] | 在熔炉或化学加工之前创建第一个取暖步骤。 |
| 木头 `1x` | 木材纤维/锯灰中间体[ | 将早期的林业与纸张,粒子和活性碳相接. |

### 3.2 早期系统接口矩阵

| 系统 | 投入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 1. 相机 1-5 | 香草木,石,铁,铜,红石; `hay_feed`; 水流 | 苏维埃; `flour`· ; `basic_gear`; 板块/罗德;饲料标准工业、锅炉和作物加工 | 0-5 (韩语) |
| 2. 分级模块部分 | 铁/铜 -- > 基本框架;钢 -- > 强化框架;现有分级合金链 | 每个多块和大型工厂使用的接缝、通风口、变速箱、电路、舱口 | 3个+ |
| 3. 油棕榈 | `oil_palm_fruit`净水 | `crude_palm_oil` > 炼油;棕榈纤维/壳- > 纸张、活性碳和锅炉燃料 | 3个+ |
| 4. 松树/海葵树/海葵树/湖泊树 | 木头、树皮、树枝、树叶 | Res、tur、干油、橡胶烈酒、取出剂 -- -- > 化学品、橡胶、涂料、纸张 | 4+ (中文(简体) ). |
| 5. 工厂多块块 | 树木和作物饲料加水/燃料 | 粗鲁素/通心粉、粗厄卡利普特斯油、粗乌克米亚橡胶酒、精炼法克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克克 | 5-12 (中文(简体) ). |
| 10. 流体力学 | 金属板、封条、齿轮、管材 | 泵、阀门、过滤器、流动传感器、管道 -- > 所有液体工厂 | 3个+ |
| 11. 标准工业 | 平板、棒子、铜线、橡胶/封存 | 紧身衣、传送器、轴承、轴线、封口、外壳 -- -- > 每个机器配方 | 3个+ |
| 17. 陶瓷业 | 克莱/高卡林饲料、水、燃料 | 反相砖、工程陶瓷、电子陶瓷 -- -- > 炉衬、绝缘、电路底质 | 3-12 (中文(简体) ). |
| 21. 纸张/包装 | 植物纤维、棕榈纤维、木材纤维、致癌溶液 | 纸浆、纸张、纸板 - > 研究文件、包装、过滤介质 | 4-12 (中文(简体) ). |
| 24. 冷藏/热泵 | 铜管、压缩机、制冷剂、FE/SU | 冷却水和第一个冷圈 -- -- > 后期低温工厂预冷却 | 5-12 (中文(简体) ). |
| 29. 压缩空气 | 钢/铜部件、封条、FE/SU | 干压缩空气 -- > 气动工具、阀门控制、材料传输 | 5-12 (中文(简体) ). |
| 30. 工业用水处理 | 废水、过滤介质、因果/酸性 | 过滤、软化、RO和EDI水;废水流 -- > 几乎所有加工系统 | 5个+ |

### 3.3 开口建议建筑

1. 聚集出木,石,铁,铜,红石,粘土,小麦/高粱和取水.
2. 建造动物磨坊和生产 `flour`, (中文(简体) ). `hay_feed`,第一个 `basic_gear`, (中文(简体) ).
   并准备了矿物饲料。
3. 使用铜/铁板、棍子、齿轮和基本回路来创建第一个
   基本外壳、木管和水轮部件。
4. 建造水轮/风能、变速箱、小型SU分配和基本
   水处理线。
5. 分枝作物:高粱用于乙醇,橡胶树用于密封,油棕榈用于取油,
   纤维用硅/橡胶,纸浆和树脂用木材/树木输出。

## 4. 从蒸气到电气过渡:阶段5-12

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

### 4.1 蒸汽硬件合同

| 所需硬件 | 现有材料来源 | 产出已解锁 |
|---|---|---|
| 锅炉外壳 | `iron_plate`, (中文(简体) ). `copper_plate`钢紧接器、密封器、可折叠陶瓷 | 低压/高压锅炉 |
| 热能科 | 煤/煤、生物质炭、棕榈壳木炭、燃料乙醇 | `low_pressure_steam`, (中文(简体) ). `high_pressure_steam` |
| 蒸汽运输 | 铜/钢管、阀门、垫子、绝缘 | 涡轮取料、热交换、冷凝器返回 |
| 涡轮/涡轮 | 钢管、轴承、变速箱、铜线、基本电路 | 机械层的SU; 通过转换器链的过渡 FE |
| 冷却循环 | 经处理的水、泵、冷却塔/热泵组件 | 凝固恢复和稳定的涡轮运行 |

### 4.2 第5-12阶段界面矩阵

| 系统 | 投入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 6. 电化学条目 | 经处理的水、盐水、铜/锌盐、早期FE | `chlor_alkali_chlorine`, (中文(简体) ). `chlor_alkali_hydrogen`, (中文(简体) ). `chlor_alkali_sodium_hydroxide`,阴极金属产品 | 第12条 |
| 23.生化工业. | 生物质/高粱、水、酶/催化剂 | 葡萄糖/发酵汤, `fuel_ethanol`、有机酸、酶产品 -- -- > 燃料、聚合物和食物/化学途径 | 7-12 (中文(简体) ). |
| 25. 工业气体 | 空气、压缩机、干燥、冷却 | O2/N2/Ar/CO2;后期H2/He - > 炉、惰性处理、低温饲料、化学 | 9-12 (中文(简体) ). |
| 27. 塑料加工 | 乙烯/丙烯或聚合物饲料、添加剂、热 | 管子、管子、模具、发泡和热成型部件 -- -- > 管道、外壳、包装 | 12岁以上 |
| 28. 橡胶加工 | `rubber_latex`硫磺、碳黑、热 | 活化橡胶、软管、垫子、密封 -- -- > 标准工业、流体力学、车辆 | 8个+ |
| 31. 工业催化剂 | 陶瓷/ alumina载体、金属盐、酸/碱、气体 | 活化催化剂 - > 石油、氯化、氢化、有机合成、再生循环 | 12岁以上 |

## 5. 化学和材料扩展:阶段12-20

### 5.1 石油和氯-阿卡利后骨

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

### 5.2 第12-20阶段界面矩阵

| 系统 | 投入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 6. 全电化学 | 矿/水, `copper_electrolyte`, (中文(简体) ). `zinc_sulfate_solution`熔化氯化盐,FE | 氯、氢、克、阴极铜/锌/镍/铬、高纯度金属、电镀/亚硝化部分 | 第12至18页 |
| 7. 纳米材料 | 纯化化学品、载体气体、催化剂、高纯度金属/硅、FE | 纳诺粉、纳米纤维、类似石墨的胶片、量子点前体 -- > 催化剂、光学、量子设备、高端复合材料 | 16岁以上 |
| 8. 低温工程 | 分离气体,冷藏厂,FE | `liquid_nitrogen`, (中文(简体) ). `liquid_oxygen`, (中文(简体) ). `liquid_hydrogen`, (中文(简体) ). `liquid_helium`、高贵液体 - > 超导体、聚变、空间、半导体 | 18岁以上 |
| 9. 视觉 | 工业玻璃/硅、陶瓷、稀土/金属涂层、清洁水 | 光纤、激光晶体、涂层光学 -- > 传感器、激光处理、微波/空间/量子 | 15岁以上 |
| 12. 微波 | 铜导体、发酵剂/干燥剂、真空部件、FE | 磁铁、微波烧结、微波等离子体、雷达和通信部件 -- -- > 陶瓷、纳米材料、空间通信 | 17岁以上 |
| 13. 量子工业 | 高纯度硅、平面材料、量子点、超导膜、液态氦 | Josephson相接器,克比特,量子处理器,量子传感器 - > 计算研究,终端游戏机 | 22岁以上 |
| 18. 纺织品/化妆品 | 锡萨尔/大麻/植物纤维、树脂、碳/氮加固 | Yarn, 织物,预加工,复合结构部分 - > 无人机、车辆、空间和涡轮机结构 | 12岁以上 |
| 19. 地表工程 | 涂料饲料、镀盐、气体、激光/诱导能 | 硬化、硝化、涂层和粘合部分 -- -- > 涡轮机、泵、空间和聚变第一墙 | 15岁以上 |
| 20. 粉末冶金 | 金属/干粉、粘合器、压缩空气、炉热 | 接缝和近网形部件 -- > 齿轮、轴承、切割工具、精密部件 | 14岁以上 |
| 22. 硅半导体 | Quartz - > 工业硅 - > 聚硅 - > 晶体/蒸发、光阻等强化剂、气体 | 瓦费尔斯、芯片、包件 -- -- > 高级电路、控制、微波、量子和研究终端 | 16岁以上 |
| 26. 超合金 | 镍/钴/铬/钛饲料、惰性气体、真空热能、陶瓷模具 | VIM/VAR/ESR 内装物、涡轮叶片、涂层部件、聚变一墙材料 | 18岁以上 |

### 5.3 明确的消费者绘图

| 制作人 | 现有产出 | 主要消费者 |
|---|---|---|
| 油棕榈 | `crude_palm_oil`, (中文(简体) ). `refined_palm_oil`棕榈纤维 外壳木炭 | 生物柴油、润滑剂、表面活性剂、纸张、活性碳过滤器、生物质热 |
| 橡胶树和营养素 | `rubber_latex`橡胶酒 | 活化橡胶、垫子、软管、封条、运输带 |
| 松树 | 粗罗素、粗松丁 | 粘合剂/还原剂、溶剂、涂层、化学饲料[用于明确的树脂通 |
| 欧卡利普图斯 | 粗毛 e油、树皮/丁宁饲料 | 溶剂/香料侧含量、取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取 |
| 氯碱 | 氯、氢、克、盐酸 | 聚氯乙烯、氢化、纸浆漂白、水中和、铝加工 |
| 石油 | 乙烯、丙烯、丁二烯、芳香、甘醇、燃料 | 塑料、橡胶、树脂、溶剂、合成纤维、燃料 |
| 水处理 | 过滤/软化/RO/EDI水 | 锅炉、电解、半导体、低温和催化剂制备 |
| 催化植物 | 载体和活性催化剂 | 石油裂解、氢化、有机电合成、废气/废水处理 |

## 6. 核、聚变、超导和空间:第20-25阶段

### 6.1 核与融合后勤

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

重要的修正:核循环不提供聚变燃料. 这个
为裂变、增殖或熔盐提供铀和混合氧化物燃料组件
反应堆。 聚变燃料来自重水/去子/锂-去子
链条。 核电供应 中子经济需要 规模化
聚变链.

### 6.2 第20-25阶段界面矩阵

| 系统 | 投入和来源 | 产出和消费者 | 门 |
|---|---|---|---|
| 14. 核燃料循环 | 铀矿石、硫酸/硝酸, `uranium_hexafluoride`zir, ium, FE | 铀燃料组件、混合氧化物燃料组件、 二氧化钚、放射性废物 | 第17-22页 |
| 15. 聚变燃料循环 | `heavy_water`, (中文(简体) ). `deuterium`, (中文(简体) ). `liquid_lithium`中子源,低温服务 | uter、t、DT燃料[G明确交接]、聚变毯材料 | 20-24岁 |
| 16. 氦-3提取物 | 月亮回石、热、分离气体、低温植物 | 氦-3胶囊/液体-氦-3路线 - > 氦聚变,高级低温 | 21岁以上 |
| 34. 超导技术 | `liquid_nitrogen`编号 :`liquid_helium`,/t/稀土饲料,FE | 超导电线和线圈,强磁场,磁孔验证,MHD FE | 22岁以上 |
| 35. 空间废墟/勘探 | 火箭、燃料、生命支持、扫描仪、研究数据 | 行星样本 氦-3来源 稀有合金 文物 研究解锁 | 21岁以上 |
| 25. 先进工业用天然气 | 空气分离加低温分解 | 液态O2/N2/Ar、氦饲料、高纯度载体气体 -- -- > 聚变、空间和半导体 | 18岁以上 |
| 24. 制冷,高级 | 压缩机、热交换机、制冷剂、FE | 冷却前和拒热 -- > 空气分离和液气列车 | 18岁以上 |

### 6.3 超导厂闭环

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

超导线圈的下游消费者:

- 托克马克环、磁性封禁、反物质封禁、高地
  材料研究和选定的Sci-Fi 2.0结构。
- 通过Josephson/超导克比特出产的量子设备.
- 通过紧凑的高功率磁铁和通信硬件的空间系统.

## 7. 结束游戏:第25-30阶段

### 7.1 Sci-Fi工业2.0物流

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

### 7.2 独立概念和宇宙机器接口

| 机器 | 现有系统的投入 | 现有系统的产出 |
|---|---|---|
| 帕斯卡尔引擎 | 卡西米尔阵列产生的真空能液体 | 用于孤立的新颖/辅助机械网络的SU;从不要求主线源 |
| 波斯冷凝器 | `liquid_helium`,来自聚变/MHD的FE | Bose-Einstein 凝聚- > 量子核心和超导升级路线 |
| 缩放Entropy | 低级固体、渣、尾矿; `liquid_nitrogen`; 高频 | 高纯度单晶 -- > 光学、半导体和量子饲料 |
| Axion 转换器 | 高空布置、FE磁维护、超导场服务 | 暗物质能和可变 FE - > 端游戏能网络 |
| Laminar 时空压缩器 | FE,液态氮/氦 | Burst FE - > 大结构充电缓冲器 |
| 延迟选择选择器 | 事件锁定器项目, 高FE, 选定的解锁食谱 | 选定的非关键产品;必须限制绕过研究/独特的端游戏输入 |
| 四维剪接器 | 高FE金属/合金 | 时间流失的材料 -- -- > 终端游戏合金和地表学配方 |
| 阴影物质合成器 | 金属活性,高FE | 阴影物质输入 - > 隔离容器、装甲、阴影状态链 |
| Fermion 重组器 | 非金属/铁丝网/橡胶输入,高FE | 硼化材料 -- > 超导、润滑和量子材料变体 |
| 观察员核心 | 无物质输入;隔离半径 | 稳定 FE - > 低速基准载荷,而不是进取绕行 |
| 宇宙基准调整符 | 宇宙字符串、垄断、真真空能、FE | 一发FE爆破 - > 巨型结构启动或研究后期里程碑 |
| 缠绕网络核心 | FE、量子处理器和超导基础设施 | 缠绕链接 - > 无线项目/能源终端运输 |
| FTL 粒子加速器 | 高FE、超合金/石油服务 | 时间类粒子 - > 后期机器的绝对参考组件 |
| 宇宙字符串伪造 | 结构的相片弦碎片 12 | Cosmic-string 线 - > 织接线、高级锚地和最后结构 |
| 黑洞农场 | 普通材料或废物、容器和FE | 黑洞物质外加霍金 FE - > 密集的终端游戏构建种子 |
| 尺寸侵蚀器 | 高FE,维稳定元件 | 尺寸剥离材料+碎片 - > 重建/叠加支持 |
| 相位传动器 | 正常生产投入加FE | 完成的产品;必须保留同样的食谱资格和研究大门 |

### 7.3 终局依赖规则

1. 1-5结构提供了第一个时空物流和能源基础设施.
2. 结构 6-12 创造先决条件的物理材料:graviton束,
   卡西米尔晶体 时间晶体 奇点核 真真空能 宇宙
   字符串和垄断。
3. 结构13-18消耗了6-12的输出,并创造了最终的地貌,
   信息、平行单向和负能分支。
4. 概念/宇宙机可加速或专门制造分支,但无一可
   在研究源结构之前,制造一个独特的先决条件。
5. 最后的玩家选择会消耗组合 `closed_loop_space_node`, (中文(简体) ).
   空间地形晶体、负能束、宇宙弦线、纯
   国家物质和研究/协调数据[G:最终食谱和终端
   定义需要明确执行]。

## 8. 生产者对消费者矩阵

| 生产者系统 | 主要接口产出 | 消费者系统 |
|---|---|---|
| 标准工业 | 接线器、轴承、轴承、密封装置、掩体、传输装置 | 所有机器家庭、管道、港口、车辆、多块 |
| 水处理 | 过滤/软化/RO/EDI水 | 锅炉、电解器、半导体、低温、催化剂 |
| 压缩空气 | 干燥压缩空气 | 气相系统、粉末运输、仪器、模具 |
| 工业气体 | O2/N2/Ar/CO2/H2/H2 他(一) | 冶金、化学合成、低温、空间、半导体 |
| 陶瓷 | 反相、结构、电子陶瓷 | 锅炉、炉子、催化剂、微波炉、电路底板 |
| 植物和林业 | 油、乳胶、树脂、纤维、丁宁、百草枯 | 燃料、橡胶、塑料添加剂、纸张、过滤器、涂层 |
| 石油 | 燃料分数、烯烃、芳烃、甘醇 | 塑料、合成橡胶、溶剂、树脂、燃料 |
| 电化学 | 高纯度金属,电镀 | 聚氯乙烯、纸张、铝、催化剂、电路、地表工程 |
| 塑料/橡胶 | 口袋、模具零件、软管、垫子、密封器 | 后勤、流体机、电缆、车辆、空间设备 |
| 半导体/光学/微波 | 芯片、传感器、镜头、纤维、微波部件 | 研究、通信、量子、空间和终局控制 |
| 核聚变 | 机能燃料、混合氧化物、DT/He-3燃料、高FE | 反应堆动力、空间基地动力、超导放大 |
| 低温/超导 | 液态气体、管线、外地服务、多氯多氯二苯并呋喃 | 聚变、量子、反物质、巨型结构 |
| 空间探索 | 样本,文物,He-3来源,行星资源 | 研究进展、低温/聚变/先进材料 |
| 科学- Fi 2. 0 | 空间时间、真空、地貌和负能材料 | 宇宙机器和最终玩家选择项目 |

## 9. 缺少整合点

以下是缺少的重要合同。 它们必须作为
新的食谱、标签或明确的研究解锁链接;此文档没有
加上他们。

| 优先权 | 未连接的系统 | 需要的缺失链接 |
|---:|---|---|
| P0 语句 | 动物磨坊 - > 生物化学/纸张 | `[Done]` 植物残留物现已产生 `biomass_pulp` 编号 : `biomass_slurry` 用于纸张和生化加工。 |
| P0 语句 | 核燃料 - > 聚变燃料 | `[Done]` `deuterium + tritium -> dt_fuel`,被去子宫聚变和托克马克接口所接受. |
| P0 语句 | 取出树木 - > 标准化学品 | `[Done]` 现有的rosin/turpentine炼油厂、粘合剂、油漆和三联苯配方构成共享桥梁。 |
| P0 语句 | Eucalyptus/tannin - > 水处理 | `[Done]` `tannin_powder` 是一种替代的凝水试剂。 |
| P0 语句 | 油棕 -- > 生物柴油/后勤 | `[Done]` 棕榈活性柴油被活塞和涡轮发动机所接受. |
| P0 语句 | 橡胶树/eucommia -- > 海豹 | `[Done]` 复合橡胶产生标准活性压力密封. |
| P0 语句 | 氯-碱-> 聚氯乙烯 | `[Done]` 乙烯加氯明确产生氯乙烯,用于现有的聚氯乙烯通路. |
| P0 语句 | 致癌- > 纸浆/铝 | `[Done]` 氯-碱氢氧化钠直接为纸浆和铝土消化提供饲料. |
| 临1 | 工业气体 - > 催化剂 | `[Done]` 存在H2/N2氨,rg活化,CO2再生和氨/金属盐浸润变体. |
| 临1 | 陶瓷 - > 电子/微波 | `[Done]` 电子陶瓷底物和发酵芯为磁铁构造提供素材. |
| 临1 | 纳米材料 - > 催化剂/复合物/量子 | `[Done]` 纳米氧化物载体,纳米管复合材料和量子点相接桥消耗纳米材料输出. |
| 临1 | 半导体 - > 量子 | `[Done]` 投放的瓦片和包装的硅芯片为量子平面、传感器和通信提供了信息。 |
| 临1 | 光学 - > 激光/空间/量子 | `[Done]` 激光晶体和涂层光学为激光板和雷达/导航提供素材;纤维素通信。 |
| 临1 | 地表工程 - > 聚变 | `[Done]` Fusion一墙材料被DT目标变体所消耗. |
| 临1 | 粉末冶金 - > 标准部件 | `[Done]` 粉末-冶金齿轮和轴承升级为标准精密部件. |
| 临1 | 空间废墟 - > 研究树 | `[Done]` 人工分析将行星文物绘制成25-29级研究数据和精细材料. |
| 临1 | He-3 取出 - > 氦聚变 | `[Done]` 氦聚变接受胶囊,液氦-3,H3-D燃料和DT燃料. |
| 临2 | 超级导体 - > 反物质/末端游戏 | `[Done]` 焦土和液氦会产生反物质/静力机所需的密封瓶,磁铁和电缆. |
| 临2 | Sci-Fi结构 - > 宇宙机器 | `[Done]` 巨型结构输出为凝聚物、真空、宇宙弦和时间宇宙-机器合同。 |
| 临2 | 最后输出 - > 玩家选择 | `[Done]` 宇宙学 大门最终项目合同产生稳定的蠕虫孔,曲速驱动芯,屏障投影仪和重置装置. |

## 10. 循环经济和回收循环

| 循环 | 关闭路径 | 养恤金 |
|---|---|---|
| 水环 | 生水 -- -- > 处理 -- -- > 加工水 -- -- > 废水收集 -- -- > 中和 -- -- > 回收 -- -- 过滤出水 | 防止每一条化学线永远地消耗生水. |
| 金属环路 | 碎屑/废金属 -- -- > 碾碎 -- -- > 粗铜 -- -- > 精炼 -- -- > 纯铜 -- -- > 标准部件 -- -- > 已磨损/破碎还原 | 使再生利用在标准工业和电炼中占有一席之地. |
| 渣圈 | 冶炼/渣 -- -- > 碾碎 -- -- > 矿物粉 -- --再冶炼或陶瓷填料 | 减少矿石损失和饲料建筑陶瓷。 |
| 催化环 | 废催化剂 - >再生 - >再利用;不可回收催化剂 - > 贵金属回收 - > 金属盐 - > 浸渍 | 使催化剂的成本规模与操作而不是一次性的工艺相适应。 |
| 核循环 | 废燃料 - > 剪切 - > 溶解 - > 钚提取 - > 混合氧化物组装 - > 反应堆;残留- > 硫化废物 | 赋予育种者/MOX一个合理的后期角色. |
| 生物质环 | 作物残渣/棕榈壳/木材残渣 -- -- > 生物质浆/浆 -- -- > 生化饲料;lignin -- -- > Char/syngas -- -- > 热/FE;灰 -- -- > 土壤/矿物填料[ | 将农业与早期能源和碳处理联系起来。 |
| 塑料/橡胶环 | 拒绝/断层 -- > 研磨 -- > 回收的活页/回收橡胶 -- > 挤压/压缩 | 支持没有无限处子饲料的大宗基础设施。 |
| 冷却循环 | 蒸汽冷凝和冷冻还原 -- -- > 冷却塔/热交换器 -- -- > 处理后水还原 | 连通了蒸汽,热泵和水处理. |
| 气环 | 氢/氯和去气处理 - > 分离/冲洗 - >再利用或中和 | 防止氯碱/石油气成为死底产物。 |
| 结束游戏物质循环 | 物质重建废物颗粒+维度碎片 - > Entropy还原器/维度侵蚀器 - > 所选高纯度饲料 [ | 避免制造无法恢复的杂碎 |

## 11. 建议全程播放

1. ** 初级讲习班,第0-3阶段。 ** 利用动物磨坊,种出早期作物
   制造面粉/黑饲料, 建立水或风SU, 然后制造基本齿轮,
   盘子、棒子和第一弹壳
2. ** 机械结算,第3-5阶段。 ** 建造标准接缝、接缝、接缝。
   轴承、封口、木质/金属液体运输、原始陶瓷和
   基本水处理列车. 开始高粱,橡胶,油棕榈和纤维.
3. ** 蒸汽工业化,第5-8. 制造锅炉外壳组件
   铁/铜/钢和可折叠. 关闭水 - > 蒸汽 - > 涡轮 - >
   凝聚相环. 出产燃料乙醇和润滑剂.
4. ** 电子跨越,第9-12. 阶段。 ** 将机械工作转换为稳定的FE,
   炼铜,制作 `copper_wire` 财务报告和审定财务报表 `basic_circuit`然后建立浴缸
   电解、压缩空气和气体加工。
5. ** 化学/材料校园,第12至18阶段。 ** 制造石油、氯碱、
   塑料、橡胶、纸浆、催化剂、粉末冶金、表面处理,
   陶瓷和光学加工围绕被处理的水和工业气体.
6. ** 精确和计算,第16至22阶段。 ** 建立硅半导体,
   微波和纳米材料路线。 使用高纯度气体、涂层和
   制造高级控制、传感器和计算部件的陶瓷。
7. ** 核和低温扩张,第17-24阶段。 ** 关闭铀/MOX燃料
   循环利用,再制造重水/去子/去子和规模空气
   分出分出. 通过空间系统获取月球资源和氦-3.
8. ** 超导和聚变时代,第22-25阶段。 ** 饲用液态氦和
   将超导材料制成线圈、磁环和多氢能生成;
   利用这些领域进行聚变、量子装置和高能控制。
9. ** Endgame 材料,第25-30. 通过末场合金推进,
   无线/计算物流、Sci-Fi结构-112和解锁宇宙
   弦相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相接相相相接相相接相相相相相接相接相接相接相相相接相相接相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相相
10. ** 物理重写,第30阶段。 ** 完整的结构 13-18和连接
    选定最后项目的地貌/负能产出:
    虫洞,曲速驱动器,尺寸屏障,或宇宙重置装置.

## 12. 后续通道执行清单

1. 将 P0 交接配方和正式物品/流体标签先加入.
2. 使每个进程模块至少显示一个上游输入和一个
   JEI/REI的下游消费者.
3. 要求每个跨系统进行适合阶段的研究
   桥面食谱.
4. 将副产品和废物输出端口添加到第10节的循环中.
5. 为每个时代的第一次成功交接添加推进标准:
   第一次处理水,第一次蒸汽循环,第一次FE,第一次氯
   半导体,第一个燃料组装,第一个接线圈,第一个空间时锚.
6. 使用相同的舞台路径更新游戏中手册, 并分别指向
   其上下游系统的多块页。

## 13. 平稳融合合同

每个完成的交割在
`data/ultratech/industrial_links/*.json`生成的合同记录
级门、研究费用、批次持续时间、FE/t、后勤终点和任何
未解决的登记。 流体使用现有的动态 `ModFluids` 路径,
生成源/流出液体、液块、桶和福热液体
能力支持。 固体材料使用现有的可堆放物品和Forge
项能路径。

| 链接 | 门 | 代表批次 | 时间/ FE/t | 后勤和反馈 | 回收出口 |
|---|---:|---|---|---|---|
| 活体浆 | 第12条 | 2个残留物+250毫巴水- > 2个纸浆+250毫巴浆 | 180吨/90吨 | 项目管+流体管; pulp-diester 状态图标 | 浆- > 生化预处理 |
| DT燃料 | 24个 | 100 mB D+100 mB T - > 200 mB DT燃料 | 240吨/600吨 | 低温管;聚变燃料搅拌机路线卡 | 使用聚变目标/反应器 |
| 树提取化学 | 第12条 | 300mB 粗罗素 - > 2 精制罗素 | 300吨/80吨 | 取精和粘合线的流管 | Terpene和涂层路线 |
| 田宁凝结 | 第12条 | 1取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取取 | 180吨/110吨 | 用于凝固的管件/液体 | 水处理和再生 |
| 棕榈生物柴油物流 | 10个 | 100 mB 生物柴油 - > 燃烧燃料 | 160吨/80吨 | 活塞/涡轮发动机的流管 | 引擎输出停留在 SU/FE 网格上 |
| 橡胶压力密封 | 第12条 | 1个复合橡胶 -- > 2个封口 | 180吨/100吨 | 项目管道到标准/流体系统 | 橡胶 -- > 回收路线 |
| 氯到聚氯乙烯 | 第12条 | 300mB 乙烯+ 300mB 氯 - > 500 mB 氯乙烯单体 | 220吨/36吨 | 化学液管 | VCM - > 聚氯乙烯处理 |
| 恶性纸浆/阿卢米纳 | 第13条 | 2个芯片 + 250 mB 由于- > 2个纸浆 + 150 mB 黑酒 | 240吨/110吨 | 腐蚀分级液管 | 黑酒 - > 水 + 生物查尔回收 |
| 气体催化剂 | 页:1 | 150 mB N2 + 450 mB H2 - > 300 mB 氨 | 260吨/160吨 | 气体/氟化管至催化剂管 | 废催化剂 - >再生/回收 |
| 陶瓷电子产品 | 页:1 | 电子陶瓷+fer- > 磁铁模块 | 280吨/220吨 | 项目管道 | 碎陶瓷 -- -- > 粉末冶金填充器 |
| 纳米特有材料 | 22个 | Nano silica + 铝 -- > 载体绿色体 | 320吨/420吨 | 清洁物品/液体路线 | 催化剂/复合物/定量消费量 |
| 硅量子 | 22个 | 保存的瓦片 + 抵抗 - > 量子底物 | 360吨/520吨 | 清洁用品管道 | 拒绝圆盘 - > 硅循环 |
| 视觉精度 | 22个 | 激光晶体+ 空白 -- > 激光光圈组件 | 300吨/360吨 | 精密项目管道 | 涂装拒绝 - >地表材料再循环 |
| 融合第一墙 | 24个 | 第一墙材料+200mB DT - > 2个目标 | 320吨/520吨 | 低温流体管 | 目标被聚变所消耗 |
| 粉末精度部件 | 15个 | 粉末齿轮+ 空白 - > 精密齿轮 | 220吨/180吨 | 项目管道 | 碎屑 - > 金属回收 |
| 损坏研究 | 29个 | 10个月球碎片 -- > 100个级-25研究数据 | 600吨/1 500吨 | 艺术分析终端 | 加工后文物材料仍可再用 |
| 氦-3聚变 | 24个 | 100 mB He-3 + 100 mB D - > 200 mB 混合物 | 260吨/600吨 | 低温管 | 由氦聚变所消耗 |
| 超导控制 | 29个 | 4个圈+250mB氦- > 密封瓶 | 360吨/800吨 | 低温管+项目管道 | 油料废料回收 |
| 科学- Fi到宇宙机器 | 30个 | 4个字符串碎片 - > 1个宇宙字符串线 | 800吨/60 000 000美元共计 | Endgame 总线 + 项目管道 | 废物颗粒/碎片 -- -- > 终局回收 |
| 最后的宇宙项目 | 30个 | 节点/地形/负能 -- > 项目核心 | 1 800吨/1 000 000 000美元共计 | 宇宙学 大门路由卡 | 最后产品是终端汇 |

### 13.1 所需的玩家反馈

- JEI披露了一个**工业链接**类. 每张路线卡都正常
  其物品和流体端点的R/U导航活动,工业
  循环食谱显示他们的舞台大门。
- 研究终端显示 `Unlocking industrial link: ...` 联 合 国
  下个阶段相关的交接。
- 参加最多两条路线的材料和桶
  生产商 - > 标准工具提示中的消费者关系.
- 有注册链接的工业加工机器显示紧凑状态
  图标:绿色表示在线路线,琥珀表示等待上游材料,
  红色表示输出路线被封锁。 详细情况如下:
  避免状态文本垃圾邮件。

### 13.2 错误和平衡政策

- 生成链接 JSON 写入 `missing_endpoints`非空列表是一个
  可采取行动的登记申请,包括所需物品/流体身份证和
  储存/运输执行咨询;缺失的终点并非沉默
  被视为连接。
- 连接相被夹住到至少最高的源/去位相.
  研究费用作为跨系统基数成本记录,由
  (a) 终端建议;
- 有意返回的路线少于其初级生产
  路线。 黑酒回收从500 mB 输入再返回300 mB 水
  1个生物图;最终游戏回收耗用6个废物单元,可重复使用
  结晶饲料.


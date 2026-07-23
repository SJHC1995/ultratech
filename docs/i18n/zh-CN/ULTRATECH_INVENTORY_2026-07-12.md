<!-- ultratech-i18n: {"source":"docs/ULTRATECH_INVENTORY_2026-07-12.md","sourceSha256":"e843632c529ca4d8c38cd98ed74bd0774efc5831fa21d6a72e5dd612aaeebd5d","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:25:06.977Z","model":"zero-token-google-reviewed-draft"} -->


# UltraTech资产盘点 - 2026-07-12

## 范围和方法

静态审核范围： `C:\ultratech`，Forge 1.20.1，基础包
`com.halfsword.ultratech`。

此报告不会修改游戏代码或资源。它区分了四种
以前很容易混淆的不同状态：

- `✅ 已实现`：由此处检查的所需运行时路径注册和支持。
- `⚠️ 部分实现`：通过共享/通用路径注册和使用，但是
  专用逻辑、配方或验证路径不完整。
- `❌ 未实现`：缺少必需的伴随资产或处理定义。
- `📋 仅设计`：仅定义为数据/设计元数据，没有可用的运行时路径。

该项目使用大型动态注册族。商品库存为
因此列为精确的注册公式加上源枚举/表和
生成的资产计数，而不是复制 4,558 个几乎相同的行。
对于项目 ID `x`，其显示名称为 `item.ultratech.x` 在 `zh_cn.json`;
所有这样检查的键都存在。

## 执行摘要

| 区域 | 静态结果 | 地位 |
|---|---:|---|
| 项目型号 | 4,558 个独特的物品模型； 0 直接 `layer0` 纹理缺失 | ✅ |
| 块状态 | 935 个独特的方块状态 | ✅ |
| 块模型 | 1,098 个型号；扫描时缺少 35 个参考面部纹理 | ⚠️ |
| 工业流体 | 141 个流体定义，全部带有源/流/块/桶注册路径 | ✅ |
| 舞台机械 | 34 跨阶段 1-30 | ⚠️ |
| 工业加工机器 | 222个，共享BE/菜单/屏幕，296个工艺配方 | ⚠️ |
| 具有工艺配方的工业机器 | 218 / 222 | ⚠️98.2% |
| 菜单类型/客户端屏幕绑定 | 33 / 33 | ✅ |
| 语言键 | `zh_cn` 6,888； `en_us` 6,888；按键设置相同 | ✅ |
| 方面 | 14 个已注册的 JSON 维度，每个维度都绑定到一个生成器编解码器 | ✅ |
| 矿石和石油世界生成 | Datagen 配置/放置的功能和生物群系修改器存在 | ✅ |

## 1. 登记项目

### 1.1 库存结构

`ModItems` 有 134 个明确的唯一直接注册加上动态家族
注册。生成的资源审计发现 4,558 个项目模型，每个
选中的项目/块显示键解析为中文。

| 类别 | 注册来源和具体模式 | 地位 |
|---|---|---|
| 基础材料 | 显性原矿石、锭、金块、粉末、板材、棒材、线材、食品/农作物产出和早期机械零件 | ✅ |
| 天然金属 | `NativeMetal`： `raw_<metal>`, `<metal>_ingot`, `<metal>_block`, 特定宿主矿石 | ✅ |
| 合金 | `AlloyMaterial` 和 `AlloyComponent`：每种合金的组件设置变体 | ✅ |
| 电路板 | `CircuitTier` x `CircuitComponent` 通过 `CIRCUIT_ITEMS` | ✅ |
| 动力核心 | `PowerCoreType` x `PowerLevel` 通过 `POWER_CORE_ITEMS` | ✅ |
| 电机、传动装置、线圈 | `TransmissionComponent`, `CoilMaterial` x `CoilForm`, `WindingInsulation`, `MagneticCoreMaterial` | ✅ |
| 外壳和框架 | `CasingMaterial` x `CasingFunction`, `StructureFrameTier` | ✅ |
| 紧固件和密封件 | `FastenerMaterial` x `FastenerType`, `SealMaterial` x `PressureLevel`, `ConnectorVariant` | ✅ |
| 流体设备 | `FluidContainerMaterial`， 全部 `IndustrialFluid` 容器变体， `FluidPipeMaterial`, `FluidPumpTier` | ✅ |
| 化工中间体 | `ChemicalIntermediate` x `ChemicalForm` | ✅ |
| 计算和研究 | `ComputeTier`、研究资料/书籍碎片、终端升级 | ✅ |
| 航天设备 | 太空服、探测器、中继站、机器人、装配包、车辆和空间部件 | ✅ |
| 残局材料 | `EndgameTechMaterial` 加上残局盔甲/工具 | ✅ |
| 加工机器项目 | 每个项目一个块项目 `IndustrialProcessMachine` | ✅ |

### 1.2 显式基础材质和实用项目

以下是直接注册而不是枚举扩展系列。全部
有物品型号和中文显示名称键。

| 团体 | 注册ID | 地位 |
|---|---|---|
| 原料 | `raw_tin`, `raw_lead`, `raw_silver`, `raw_nickel`, `raw_uranium` | ✅ |
| 锭/金块/粉末 | `tin_ingot`, `lead_ingot`, `silver_ingot`, `nickel_ingot`, `steel_ingot`, `bronze_ingot`, `uranium_ingot`;匹配金块和尘埃族； `gallium_*` | ✅ |
| 早期组件 | `copper_wire`, `gold_wire`, `steel_rod`, `gallium_rod`, `copper_plate`, `iron_plate`, `steel_plate`, `gallium_plate`, `gallium_wire`, `gallium_foil`, `basic_gear`, `advanced_gear`, `basic_circuit`, `advanced_circuit` | ✅ |
| 农作物和有机产出 | `sorghum`, `blueberry`, `calendula`, `rubber_tree_fruit`, `oil_palm_fruit`, `castor_bean`, `sisal_bundle`, `jojoba_bean`, `industrial_hemp_fiber`, `flour`, `hay_feed`, `animal_fat` | ✅ |
| 工具 | `wrench`, `torque_wrench`, `rubber_tapping_knife`, `geological_prospector`、压力/蒸汽部件、动态维护扳手系列 | ✅ |
| 太空消耗品 | `oxygen_tank`, `empty_helium3_capsule`, `helium3_capsule`, `solid_rocket_fuel`, `ceres_ice_drill_bit` | ✅ |
| 导航/研究 | `star_chart`, `advanced_star_chart`, `creative_star_chart`, `spacecraft_navigation_core`, `identity_card`, `stellar_ruin_data`, `interstellar_trade_data`、研究芯片/数据 | ✅ |
| 车辆 | `ultratech_rocket`, `planetary_rover`, `planetary_probe`, `orbital_ascent_device`, `planet_reset_seal` | ✅ |
| 创意工具 | `creative_compute_processor`, `creative_compute_storage`, `creative_research_unlocker`, `creative_space_instrument_deployer`, `creative_space_instrument_remover` | ✅ |

### 1.3 定义与实施的空间设备

| 家庭 | 定义 | 注册项目实施 | 运行时使用 | 地位 |
|---|---:|---:|---|---|
| 行星探测器 | 7层 | 7 种变体， `PlanetaryProbeItem` | 探头保存的数据使用速度、耐用性和腐蚀场 | ✅ |
| 中继信号站 | 7层 | 7 种变体， `RelaySignalStationItem` | 探测逻辑消耗继电器级数和覆盖范围值 | ✅ |
| 太空服 | 9 层 x 4 件盔甲 | 36 种变体， `SpaceSuitArmorItem` | Tier 字段可用于环境检查；完整的跨星球运行时覆盖未经测试验证 | ⚠️ |

## 2. 注册区块

### 2.1 块族

直接的 `registerBlock(...)` 列表包含 149 个静态 ID。其余
注册的批量库存是由机器、材料、矿石、液罐生成的，
行星资源、存储、研究层和创意坦克表。

| 类别 | 登记家庭 | 地位 |
|---|---|---|
| 矿物和行星地质学 | 原生矿体、原始块、材料块、行星表面/资源、月球/火星/金星/天神星/灶神星/外行星岩石和矿石， `oil_sand_ore`, `oil_shale_ore` | ✅ |
| 机器 | 34 `StageMachine` 块，222 `IndustrialProcessMachine` 块、破碎机/锅炉/涡轮机/空间设施块 | ⚠️ |
| 导管 | `wooden_item_pipe`, `wooden_fluid_pipe`, `strain_energy_pipe`, `reinforced_strain_energy_pipe`, `resonant_strain_energy_pipe`, `conduit_bundle`, 动态管道项目 | ✅ |
| 贮存 | 分层储物盒液体罐143个创意无限罐创意能量核心 | ✅ |
| 装饰/建筑 | 工业钢块、楼梯、板、栅栏、大门、按钮、压板、活板门、门 | ✅ |
| 功能端子 | 研究、扫描仪、计算、无线电源、航天器/探测器/继电器/航天工业终端、流量传感器、动力缓冲器/输出轴 | ✅ |
| 农作物 | 大麻、高粱、蓝莓、金盏花、橡胶树、油棕、蓖麻、剑麻、荷荷巴作物块 | ✅ |
| 多块占位符 | 水车和风车占位符块，无需物品表单注册 | ⚠️ |

### 2.2 没有BlockEntity的机器块

没有注册 `StageMachine` 或者 `IndustrialProcessMachine` 缺少 BlockEntity：

- 34 台机器由专用机器的专用 BE 覆盖，
  `StageMachineBlockEntity` 其余的。
- 所有 222 台工业流程机器均涵盖在
  `IndustrialProcessMachineBlockEntity`。
- 普通地形、矿石、装饰块和
  作物块是故意的。

重要的警告是行为，而不是注册：通用舞台机器
共享通用运行时而不是单独的生产算法。

## 3. 注册流体

每一个 `IndustrialFluid` 是通过注册的 `ModFluids` 作为源流体，
流动的流体、液体块和桶。静态资源检查发现没有
缺少源/流动纹理对。

| 类别 | ID | 地位 |
|---|---|---|
| 基础 (8) | `low_pressure_steam`, `high_pressure_steam`, `distilled_water`, `lubricant_oil`, `coolant`, `compressed_air`, `creosote_oil`, `biomass_slurry` | ✅ |
| 生化 (8) | `starch_slurry`, `glucose_solution`, `ethanol_fermentation_broth`, `fuel_ethanol`, `acetic_acid`, `alkali_liquor`, `bleach`, `pyrolysis_gas` | ✅ |
| 通用化学品 (18) | `sulfuric_acid`, `hydrochloric_acid`, `nitric_acid`, `phosphoric_acid`, `liquid_epoxy_resin`, `liquid_polyethylene`, `ethylene`, `propylene`, `butadiene`, `benzene`, `toluene`, `xylene`, `ammonia`, `methanol`, `ethanol`, `acetone`, `phenol`, `liquid_rubber` | ✅ |
| 植物产业 (7) | `rubber_latex`, `rubber_seed_oil`, `crude_palm_oil`, `refined_palm_oil`, `castor_oil`, `jojoba_oil`, `precision_hydraulic_oil` | ✅ |
| 铁冶金 (3) | `iron_coal_tar`, `iron_coke_oven_gas`, `iron_blast_furnace_gas` | ✅ |
| 铜冶金 (1) | `copper_electrolyte` | ✅ |
| 铝冶金 (1) | `aluminum_caustic_soda` | ✅ |
| 氯碱 (6) | `chlor_alkali_brine`, `chlor_alkali_chlorine`, `chlor_alkali_hydrogen`, `chlor_alkali_sodium_hydroxide`, `chlor_alkali_hydrochloric_acid`, `chlor_alkali_vinyl_chloride` | ✅ |
| 硅/贵金属 (2) | `silicon_trichlorosilane`, `precious_acid_leachate` | ✅ |
| 有色冶金 (5) | `lead_electrolyte`, `zinc_sulfate_solution`, `nickel_electrolyte`, `cobalt_sulfate_solution`, `magnesium_chloride_melt` | ✅ |
| 耐火冶金 (4) | `titanium_tetrachloride`, `zirconium_tetrachloride`, `sodium_tungstate_solution`, `ammonium_tungstate_solution` | ✅ |
| 稀土 (3) | `mixed_rare_earth_chloride_solution`, `rare_earth_extractant_p507`, `naphthenic_acid_extractant` | ✅ |
| 分散金属回收 (5) | `gallium_mother_liquor`, `indium_leachate`, `germanium_chloride_solution`, `selenium_tellurium_leachate`, `fluoride_tantalum_solution` | ✅ |
| 非金属矿产 (2) | `kaolin_slurry`, `phosphate_slurry` | ✅ |
| 石油 (20) | `crude_oil`, `heavy_crude_oil`, `desalted_crude_oil`, `petroleum_gas`, `petroleum_gasoline`, `petroleum_naphtha`, `petroleum_kerosene`, `petroleum_diesel`, `petroleum_heavy_oil`, `petroleum_vacuum_gasoil`, `petroleum_residual_oil`, `petroleum_asphalt`, `petroleum_cracked_gas`, `petroleum_reformate`, `petroleum_aromatics`, `petroleum_ethylene`, `petroleum_propylene`, `petroleum_butadiene`, `petroleum_ethylene_glycol`, `petroleum_styrene` | ✅ |
| 精密制造 (14) | `precision_dielectric_fluid`, `precision_electrolyte`, `waterjet_slurry`, `semiconductor_cutting_fluid`, `semiconductor_lapping_slurry`, `semiconductor_cmp_slurry`, `photoresist_solution`, `semiconductor_etching_gas`, `semiconductor_cvd_gas`, `ald_precursor_gas`, `quantum_dot_solvent`, `subspace_field_plasma`, `quantum_beam_flux`, `dark_matter_slurry` | ✅ |
| 核工业 (14) | `heavy_water`, `deuterium`, `tritium`, `uranium_hexafluoride`, `liquid_sodium`, `hot_molten_salt`, `cold_molten_salt`, `uranium_tetrafluoride`, `hydrogen_fluoride`, `hydrogen_chloride`, `sodium_hydroxide`, `liquid_lithium`, `hot_reactor_coolant`, `cold_reactor_coolant` | ✅ |
| 低温 (12) | `liquid_hydrogen`, `liquid_helium`, `liquid_nitrogen`, `liquid_oxygen`, `liquid_neon`, `liquid_argon`, `liquid_krypton`, `liquid_xenon`, `liquid_ozone`, `liquid_fluorine`, `liquid_methane`, `liquid_carbon_dioxide` | ✅ |
| 终局之战 (8) | `antihydrogen`, `exotic_slurry`, `quantum_fluid`, `void_energy_fluid`, `spacetime_condensate`, `shadow_state_fluid`, `cosmic_primal_fluid`, `nihility_essence_fluid` | ✅ |

## 4. 机器

### 4.1舞台机器 (34)

所有阶段ID都有中文 `block.ultratech.<id>` 和
`container.ultratech.<id>` 键。 1-24 级各为一台机器；阶段
25-30有多台机器。

| 阶段 | 注册ID | 显示名称 | 块实体/GUI | 地位 |
|---:|---|---|---|---|
| 1 | `animal_power_millstone` | 畜力磨盘 | 专用BE/菜单/屏幕 | ✅ |
| 2 | `water_wheel` | 水车轮 | 专用BE/菜单/屏幕 | ⚠️ |
| 3 | `windmill_tower` | 风车塔 | 专用BE；没有专门的菜单 | ⚠️ |
| 4 | `mechanical_gearbox` | 齿轮箱 | 专用BE/菜单/屏幕 | ✅ |
| 5 | `low_pressure_boiler` | 低压锅炉 | 专用BE/菜单/屏幕 | ✅ |
| 6 | `high_pressure_boiler` | 高压锅炉 | 专用BE/菜单/屏幕 | ✅ |
| 7 | `steam_turbine` | L3蒸汽轮机 | 通用/专用涡轮机路径 | ⚠️ |
| 8 | `stirling_engine` | 斯特林发动机 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 9 | `piston_combustion_engine` | 活塞内燃机 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 10 | `turbo_combustion_engine` | 涡轮内燃机 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 11 | `gas_turbine` | 燃气轮机 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 12 | `thermoelectric_generator` | 热电发生器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 13 | `dc_converter_station` | 直流换流站 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 14 | `ac_substation_tower` | 交流变电塔 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 15 | `photovoltaic_matrix` | 光伏矩阵 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 16 | `solar_thermal_collector` | 光热集热器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 17 号 | `fission_reactor` | 裂变反应堆 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 18 | `breeder_reactor` | 增殖反应器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 19 | `molten_salt_reactor` | 熔盐反应器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 20 | `deuterium_fusion_reactor` | 氘聚变堆 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 21 | `helium_fusion_reactor` | 氦聚变堆 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 22 | `proton_accelerator` | 质子加速器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 23 | `tokamak_ring` | 托卡马克环 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 24 | `laser_fusion_chamber` | 激光聚变室 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 25 | `muon_generator`, `strange_matter_compressor` | 缪子发生器、奇异物质压缩器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 26 | `degenerate_matter_generator` | 简并态发生器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 28 | `antimatter_collector`, `casimir_extractor` | 反物质收集器、卡西米尔提取器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 29 | `singularity_generator`, `void_energy_siphon` | 奇点发电机、虚空能量汲取器 | 共享舞台BE/菜单/屏幕 | ⚠️ |
| 30 | `cosmic_gate`, `nihility_engine`, `genesis_core` | 寰宇之门、虚无引擎、创世核心 | 共享舞台BE/菜单/屏幕 | ⚠️ |

注意：没有第 27 阶段条目 `StageMachine.MACHINES`;第 25、26 阶段，
28、29 和 30 占剩余 10 个条目。

### 4.2 工业加工机器 (222)

所有 222 个条目都有一个注册块， `IndustrialProcessMachineBlockEntity`,
`IndustrialProcessMachineMenu`， 和 `IndustrialProcessMachineScreen`。这是
一种共享实现，而不是 222 个独立的 BE/菜单/屏幕类。

| 模块 | ID | 工艺配方覆盖范围 | 地位 |
|---|---|---:|---|
| 古法工业 | `primitive_mortar_workbench`, `primitive_kiln`, `primitive_comminutor`, `primitive_wooden_tank`, `primitive_ceramic_tank` | 4/5 | ⚠️ |
| 高粱生物塑料 | `sorghum_harvester`, `sorghum_crusher`, `starch_separator`, `liquefaction_reactor`, `saccharification_tank`, `fermentation_tank`, `molecular_sieve_dehydration_tower`, `steam_explosion_machine`, `alkali_treatment_tank`, `bleaching_system`, `pyrolysis_reactor`, `activation_furnace`, `ethylene_synthesis_tower`, `polymerization_reactor`, `ethylene_glycol_line`, `synthetic_rubber_line`, `esterification_reactor`, `spinning_machine`, `bioplastic_molder` | 19/19 | ✅ |
| 橡胶树 | `latex_coagulation_vat`, `rubber_sheet_roller`, `rubber_smokehouse`, `rubber_seed_oil_press`, `rubber_vulcanization_tank`, `rubber_compound_mixer` | 6/6 | ✅ |
| 油棕 | `palm_steaming_tank`, `palm_thresher`, `palm_screw_press`, `palm_clarification_pool`, `palm_refining_tower`, `palm_fractionation_crystallizer`, `palm_transesterification_reactor`, `palm_saponification_kettle` | 8/8 | ✅ |
| 前面麻 | `castor_dehuller`, `castor_oil_press`, `castor_hydrolysis_kettle`, `castor_cracking_reactor`, `castor_polymerization_kettle`, `castor_isocyanate_synthesis_tower`, `castor_esterification_reactor` | 7/7 | ✅ |
| 剑麻 | `sisal_decorticator`, `sisal_washing_trough`, `sisal_drying_kiln`, `sisal_carding_machine`, `sisal_spinning_machine`, `sisal_rope_maker`, `sisal_loom`, `sisal_wet_former` | 8/8 | ✅ |
| 霍霍巴 | `jojoba_dehuller`, `jojoba_cold_press`, `jojoba_precision_filter`, `jojoba_winterization_crystallizer`, `jojoba_blending_kettle`, `jojoba_vacuum_deaerator` | 6/6 | ✅ |
| 铁系冶金 | `iron_ore_crusher`, `iron_screening_machine`, `iron_sintering_furnace`, `iron_coke_oven`, `iron_blast_furnace`, `iron_basic_oxygen_converter`, `iron_electric_arc_furnace`, `iron_continuous_caster`, `iron_rolling_mill`, `iron_alloy_furnace`, `iron_quenching_tank` | 11/11 | ✅ |
| 铜系 冶金 | `copper_ore_crusher`, `copper_ball_mill`, `copper_flotation_cell`, `copper_smelting_furnace`, `copper_converting_furnace`, `copper_anode_furnace`, `copper_electrolytic_cell`, `copper_wire_drawing_machine`, `copper_rolling_mill`, `copper_bronze_furnace`, `copper_brass_furnace` | 11/11 | ✅ |
| 铝系冶金 | `aluminum_bauxite_crusher`, `aluminum_ball_mill`, `aluminum_digestion_reactor`, `aluminum_precipitation_tank`, `aluminum_rotary_kiln`, `aluminum_molten_salt_cell`, `aluminum_ingot_caster`, `aluminum_extrusion_press`, `aluminum_alloy_furnace` | 9/9 | ✅ |
| 氯碱化工 | `chlor_alkali_salt_crusher`, `chlor_alkali_dissolution_tank`, `chlor_alkali_electrolytic_cell`, `chlor_alkali_hydrochloric_acid_tower`, `chlor_alkali_chlorination_reactor` | 5/5 | ✅ |
| 硅系工业 | `silicon_quartz_crusher`, `silicon_sand_washer`, `silicon_smelting_furnace`, `silicon_glass_melting_kiln`, `silicon_polysilicon_reactor`, `silicon_crystal_furnace`, `silicon_slicing_machine`, `silicon_photovoltaic_assembly_line` | 8/8 | ✅ |
| 贵金属回收 | `precious_anode_slime_collector`, `precious_acid_leach_reactor`, `precious_solvent_extraction_tower`, `precious_reduction_furnace` | 4/4 | ✅ |
| 有色金属 | `mineral_jaw_crusher`, `mineral_cone_crusher`, `mineral_ball_mill`, `mineral_jig`, `mineral_shaking_table`, `mineral_flotation_cell`, `mineral_filter_press`, `mineral_drying_kiln`, `mineral_reverberatory_furnace`, `mineral_blast_furnace`, `mineral_converter`, `mineral_electrolytic_cell`, `zinc_leaching_tank`, `zinc_purification_tank`, `magnesium_chlorination_reactor`, `molten_salt_electrolytic_cell` | 13/16 | ⚠️ |
| 稀有难熔金属 | `mineral_magnetic_separator`, `titanium_chlorination_furnace`, `titanium_distillation_column`, `kroll_reduction_vessel`, `vacuum_arc_remelting_furnace`, `tungsten_alkali_digestion_reactor`, `mineral_ion_exchange_column`, `hydrogen_reduction_furnace`, `powder_metallurgy_press`, `zirconium_chlorination_furnace` | 10/10 | ✅ |
| 稀土冶金 | `rare_earth_decomposition_reactor`, `rare_earth_solvent_extraction_tower`, `rare_earth_ion_exchange_column`, `rare_earth_precipitation_kiln`, `rare_earth_molten_salt_cell` | 5/5 | ✅ |
| 分散金属回收 | `dispersed_metal_leaching_tank`, `dispersed_solvent_extraction_tower`, `dispersed_reduction_furnace`, `chlorination_distillation_column`, `vanadium_roasting_kiln`, `fluoride_extraction_column` | 6/6 | ✅ |
| 金属非矿物 | `nonmetallic_crusher`, `nonmetallic_ball_mill`, `nonmetallic_flotation_cell`, `nonmetallic_drying_kiln`, `graphite_purification_reactor`, `graphitization_furnace`, `fluorite_dryer`, `barite_gravity_table`, `magnesite_sintering_kiln`, `kaolin_pulping_tank`, `kaolin_hydrocyclone`, `kaolin_bleaching_separator`, `phosphate_acidulation_tank`, `phosphorus_electric_furnace` | 14/14 | ✅ |
| 精密制造 | `cnc_milling_machine`, `edm_machine`, `laser_cutting_machine`, `vacuum_heat_treatment_furnace`, `deep_hole_drilling_machine`, `five_axis_machining_center`, `electrolytic_polishing_machine`, `waterjet_cutting_machine`, `ultra_precision_lathe`, `monocrystal_growth_furnace`, `wafer_slicing_machine`, `wafer_lapping_machine`, `cmp_machine`, `photolithography_stepper`, `plasma_etcher`, `cvd_furnace`, `pvd_system`, `ion_implanter`, `wafer_annealing_furnace`, `wafer_probe_station`, `wafer_dicing_saw`, `chip_packaging_machine`, `mbe_growth_system`, `electron_beam_lithography_machine`, `nanoimprint_machine`, `ald_furnace`, `nanoparticle_synthesis_reactor`, `transparent_conductive_film_deposition_system`, `laser_direct_write_lithography_machine`, `multiphoton_polymerization_3d_printer`, `superconducting_film_deposition_system`, `quantum_dot_synthesis_reactor`, `topological_insulator_preparation_system`, `two_dimensional_material_cvd_furnace`, `squid_fabrication_line`, `molecular_assembler`, `self_assembly_nano_reactor`, `plasma_catalytic_reactor`, `directed_energy_workbench`, `stress_field_forming_machine`, `quantum_beam_etcher`, `topological_matter_synthesis_furnace`, `subspace_forge`, `time_crystal_growth_furnace`, `dark_matter_purification_tower` | 45/45 | ✅ |
| 石油工业 | `petroleum_drilling_platform`, `petroleum_oil_gas_separator`, `petroleum_storage_tank`, `petroleum_desalter`, `petroleum_atmospheric_distillation_tower`, `petroleum_vacuum_distillation_tower`, `petroleum_catalytic_cracking_reactor`, `petroleum_hydrocracking_reactor`, `petroleum_delayed_coker`, `petroleum_catalytic_reformer`, `petroleum_hydrotreating_reactor`, `petroleum_steam_cracker`, `petroleum_polyethylene_kettle`, `petroleum_polypropylene_kettle`, `petroleum_ethylene_glycol_reactor`, `petroleum_pvc_polymerization_kettle`, `petroleum_styrene_reactor`, `petroleum_polyester_polycondensation_kettle`, `petroleum_nylon_polymerization_kettle` | 19/19 | ✅ |

四个缺失的“工业流程”配方是：

1. `primitive_ceramic_tank`
2. `mineral_shaking_table`
3. `mineral_filter_press`
4. `zinc_purification_tank`

他们确实有机器方块的正常制作配方；缺少的是
机器BE消耗的运行时输入/输出工业配方。

## 5. 依赖链和断点

下面的箭头描述了注册的机器/模块路径
机器和生成的工业配方。绿色状态意味着每个列出的
机器至少有一种工业配方，但尚未测试过平衡
一个鲜活的世界。

| 链 | 注册路线 | 断点 |
|---|---|---|
| 铁 | 铁矿石->破碎机->筛分->烧结->高炉->转炉/电弧炉->连铸机->轧钢->合金炉/淬火；焦炉供给焦炭/副产品 | 工业配方报道中未发现任何内容 |
| 铜 | 铜矿石->破碎机->球磨机->浮选->熔炼->吹炼->阳极炉->电解->拉丝/轧制/青铜/黄铜 | 没有找到 |
| 铝 | 铝土矿 -> 破碎机 -> 球磨机 -> 拜耳消化 -> 沉淀 -> 回转窑 -> 熔盐槽 -> 铸锭机 -> 挤压/合金 | 没有找到 |
| 硅 | 石英->破碎机->清洗机->熔炼/玻璃窑炉->多晶硅反应炉->结晶炉->切片->光伏线 | 没有找到 |
| 石油 | 钻井->油气分离/储存->脱盐装置->常减压蒸馏->裂化/加氢裂化/焦化/重整/加氢处理->蒸汽裂解装置->聚合物/乙二醇/PVC/苯乙烯/聚酯/尼龙 | 没有找到 |
| 高粱 | 收获/粉碎->淀粉分离->液化->糖化->发酵->脱水->乙烯/聚合物支链；秸秆→汽爆→加碱→漂白→酯化→纺丝→成型 | 没有找到 |
| 橡皮 | 攻丝→乳胶凝固→压辊→烟熏室→手胶路线或硫化→混炼机 | 没有找到 |
| 油棕 | 蒸汽->脱粒->螺旋压榨->澄清->精炼->分馏或酯交换/皂化 | 没有找到 |
| 蓖麻 | 脱壳→榨油→水解→裂解→聚合/异氰酸酯/酯化 | 没有找到 |
| 剑麻 | 脱芯机 -> 水洗 -> 干燥 -> 梳理 -> 纺纱 -> 绳索/织机/湿法成型 | 没有找到 |
| 荷荷巴油 | 脱皮→冷榨→精密过滤→防冻→混匀→真空脱泡 | 没有找到 |
| 有色总路线 | 颚式破碎机->圆锥破碎机->球磨机->跳汰机->摇床->浮选->压滤机->干燥->炉/转炉/电解；锌分厂->浸出->净化 | `mineral_shaking_table`, `mineral_filter_press`, `zinc_purification_tank` 没有工业配方 |
| 原始路线 | 砂浆工作台 -> 窑炉/粉碎机 -> 木质/陶瓷罐 | `primitive_ceramic_tank` 没有工业配方 |

## 6. GUI、容器和屏幕

`ModMenuTypes` 注册 33 种菜单类型和 `UltraTech` 正好注册 33
客户 `MenuScreens`。以下是故意的非 GUI 功能 BE，
不会自动丢失 UI：

- `PowerMonitorBlockEntity`
- `KineticOutputShaftBlockEntity`
- `StrainEnergyPipeBlockEntity`
- `WoodenItemPipeBlockEntity`
- `WoodenFluidPipeBlockEntity`
- `ConduitBundleBlockEntity`
- `HandCrankBlockEntity`
- `WaterFlowSensorBlockEntity`
- `WoodenAqueductBlockEntity`
- `WindmillTowerBlockEntity`

222 台加工机器使用一个共享菜单/屏幕。 34台机器使用
专用或共享舞台菜单如上所示。屏幕菜单不丢失
通过静态注册比较发现绑定。

## 7. 网络和进展数据流

### 研究、计算和无线充电

```text
Research terminal request
  -> inference compute terminal production
  -> compute broadcast terminal aggregation
  -> player research/compute saved data
  -> wireless power request terminal consumes ceil(FE / 100) compute
  -> wireless power broadcast terminal totals requests
  -> power input terminal asks wired FE network
  -> wireless receiver priority distribution
```

| 规则 | 静态执行结果 | 地位 |
|---|---|---|
| 计算管理成本 | `ceil(requestFE / 100)` | ✅ |
| 广播需求乘数 | `1.2` | ✅ |
| 有线电网请求乘数 | 收到广播x `1.4` = 原始需求 x `1.68` | ✅ |
| 接收器效率 | 随机的 `0.89` 到 `0.94` | ✅ |
| 接收调度 | 高/中/低优先级，同优先级循环 | ✅ |
| 端到端封闭 | 请求、广播、输入和接收器路径通过 `WirelessPowerNetwork` | ⚠️ |

剩余风险：

- `tickBroadcast()` 读取之前输入 FE 的上一个快照
  `tickInput()` 写入下一个值，因此分配可能会滞后一个刻度。
- `ResearchTerminalBlockEntity` 报告 `0` 用于本地计算生产和
  能源成本；它在设计上依赖于外部计算网络。
- 持久性、多人游戏、跨维度行为和滴答顺序效应
  在此静态审核中未进行运行时测试。

## 8.维度和世界生成

### 8.1 尺寸注册

所有 14 维 JSON 文件都存在并指定生成器：

| 维度ID | 发电机 | 地位 |
|---|---|---|
| `space` | `ultratech:space` | ✅ |
| `lunar` | `ultratech:lunar` | ✅ |
| `moon` | `ultratech:lunar` | ✅ |
| `martian` | `ultratech:martian` | ✅ |
| `mercurian` | `ultratech:mercurian` | ✅ |
| `venusian` | `ultratech:venusian` | ✅ |
| `ceres` | `ultratech:ceres` | ✅ |
| `vesta` | `ultratech:vesta` | ✅ |
| `ionian` | `ultratech:ionian` | ✅ |
| `jovian` | `ultratech:space` | ✅ |
| `saturnian` | `ultratech:saturnian` | ⚠️ |
| `uranian` | `ultratech:uranian` | ✅ |
| `neptunian` | `ultratech:neptunian` | ✅ |
| `plutonian` | `ultratech:plutonian` | ✅ |

土星需要一个产品决策，而不是缺少的发电机修复：

- `SpaceBody.SATURN` 被标记 `implemented=true` 和 `saturnian` 有一个
  完整的发电机/资源表。
- 正常的 `SpaceTransitionHandler` 明确显示着陆路径
  `saturn_forbidden` 而不是传送玩家。
- 其他目标级代码路径仍然可以解析 `SATURNIAN`。

这与原定的“气体巨星，禁止前往”规则相冲突
应当明确。

### 8.2 矿石和石油 Worldgen

`ModOreWorldGenProvider` 生成配置的特征、放置的特征和
为原生矿石和石油锻造生物群落修饰剂：

- 原油：Y 10-60，普通/海洋/海滩一体化。
- 重油：Y 10-50，海洋/沼泽一体化。
- 油砂：Y 10-80，荒地。
- 油页岩：Y 10-80，正常/荒地/海洋。
- 原油湖修饰符：沙漠/海洋，稀有度30。

地位： `✅` worldgen 通过生成的数据包资源进行连接。

与要求的石油设计的偏差：实施使用普通
矿石特征放置和生物群系修改器，而不是自定义的单纯形噪声矿脉
分配。该特定设计要求的状态： `⚠️`。

## 9. 资源、语言和战利品关闭

### 9.1 语言

- `zh_cn.json` 和 `en_us.json` 是有效的 UTF-8 JSON。
- 两者都包含 6,888 个密钥。
- 它们的按键组是相同的。
- 中文按键包括3,914个项目条目、925个块条目、74个流体类型
  条目、304 个容器条目和 742 个 GUI 条目。
- 所有 4,558 个扫描的物品模型均解析物品或块中文名称
  钥匙。

结果： `✅` 没有发现按阶段/类别划分的静态语言键差距。

### 9.2 纹理和模型

- 直接引用的项目模型 `layer0` 缺少纹理： `0`。
- 扫描时丢失块模型纹理引用： `35`。

缺少面部纹理：

```text
muon_generator_left/right/back
strange_matter_compressor_left/right/back
degenerate_matter_generator_left/right/back
antimatter_collector_left/right/back
casimir_extractor_left/right/back
singularity_generator_left/right/back
void_energy_siphon_left/right/back
cosmic_gate_left/right/back
nihility_engine_left/right/back
genesis_core_left/right/back
windmill_tower_left/right/back/top/bottom
```

这些是模型参考缺失，而不是项目图标缺失。生成/未跟踪
工作树资源可能会在新的数据生成/资源后更改此结果
关闭通行证。

### 9.3 战利品

简单名称中有 306 个没有同名战利品表文件的块 ID
比较。这不是已确认的缺陷计数，因为该集合包括
流体块并明确 `noLootTable` 创意块。语义战利品
在将其中任何一个视为缺失滴之前，仍需要进行审核。

## 10. 差距总结

| 优先事项 | 差距 | 证据 | 建议采取的行动 |
|---|---|---|---|
| P0 | 四台加工机器不能进行任何工业操作 | 不 `industrial_process` 陶瓷罐、摇床、压滤机、锌净化罐配方 | 为每个输入/输出配方添加并测试一个封闭的输入/输出配方 |
| P1 | 35 个块模型面部纹理参考未解决 | 十台后期机器缺少左/右/后；风车缺少五个面 | 添加/重新链接精确的 PNG 并运行资源关闭检查 |
| P1 | Saturn的实现状态是矛盾的 | 车身标记为已实施；维度/生成器存在；标准旅行拒绝着陆 | 使土星仅在轨道上运行或允许实心尺寸，但删除混合状态 |
| P2 | 舞台机械大多是通用的 | 已注册 34 人，多人分享 `StageMachineBlockEntity` 而不是单独的食谱/逻辑 | 优先考虑发电阶段的独特机制 |
| P2 | 油脉设计与规格不同 | 标准矿石特征，而非单纯形噪声矿脉 | 仅当视觉/游戏玩法差异很重要时才实施自定义噪声分布 |
| P2 | 无线电源滴答顺序未经测试 | 广播读取先前的输入快照 | 添加服务器端订单/多人测试用例 |
| P2 | 战利品比较不完整 | 306 名称不匹配包括故意的无战利品区块 | 在创建战利品文件之前按块行为进行分类 |

## 11. 建议的下一步行动

1. 解决四个 P0 工业配方差距并执行机器输入/输出
   每个的烟雾测试。
2. 修复 35 个未解析的块面纹理引用，然后运行 ​​Forge
   关闭检查器并加载客户端资源重新加载。
3. 决定土星的典型行为：仅轨道运行的气态巨星还是可登陆的
   固体核心抽象。对齐 `SpaceBody`、目标分辨率和过渡
   代码。
4. 为无线请求添加确定性测试或调试跟踪 -> 广播 ->
   有线输入 -> 接收器在连续的蜱虫传递中传递。
5. 从后期电源链开始审核通用级机器逻辑，其中
   视觉注册目前超过了独特的游戏行为。
6. 运行语义战利品表审核，之前排除液体/无战利品块
   将 306 个原始不匹配视为缺陷。

## 源文件已审核

- `src/main/java/com/halfsword/ultratech/registry/ModItems.java`
- `src/main/java/com/halfsword/ultratech/registry/ModBlocks.java`
- `src/main/java/com/halfsword/ultratech/registry/ModFluids.java`
- `src/main/java/com/halfsword/ultratech/registry/ModBlockEntities.java`
- `src/main/java/com/halfsword/ultratech/registry/ModMenuTypes.java`
- `src/main/java/com/halfsword/ultratech/registry/ModWorldGen.java`
- `src/main/java/com/halfsword/ultratech/content/StageMachine.java`
- `src/main/java/com/halfsword/ultratech/content/IndustrialProcessMachine.java`
- `src/main/java/com/halfsword/ultratech/content/IndustrialFluid.java`
- `src/main/java/com/halfsword/ultratech/content/ProbeTier.java`
- `src/main/java/com/halfsword/ultratech/content/RelayStationTier.java`
- `src/main/java/com/halfsword/ultratech/content/SpaceSuitTier.java`
- `src/main/java/com/halfsword/ultratech/content/SpaceBody.java`
- `src/main/java/com/halfsword/ultratech/world/UltraTechDimensions.java`
- `src/main/java/com/halfsword/ultratech/world/SpaceTransitionHandler.java`
- `src/main/java/com/halfsword/ultratech/blockentity/WirelessPowerNetwork.java`
- `src/main/java/com/halfsword/ultratech/blockentity/WirelessPowerBlockEntity.java`
- `src/main/java/com/halfsword/ultratech/datagen/ModOreWorldGenProvider.java`
- `src/main/resources/assets/ultratech/lang/zh_cn.json`
- `src/main/resources/assets/ultratech/lang/en_us.json`
- 生成的模型、方块状态、配方、战利品表和世界生成数据

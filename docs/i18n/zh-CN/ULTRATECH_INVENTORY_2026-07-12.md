<!-- ultratech-i18n: {"source":"docs/ULTRATECH_INVENTORY_2026-07-12.md","sourceSha256":"e843632c529ca4d8c38cd98ed74bd0774efc5831fa21d6a72e5dd612aaeebd5d","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:25:06.977Z","model":"auto"} -->

# 超技术资产库存 - 2026-07-12

## 范围和方法

静态审计范围: `C:\ultratech`,Forge 1.20.1,基包
`com.halfsword.ultratech`。 。 。 。

此报告不修改游戏玩法代码或资源 。 它区分了四个
以前容易混淆的不同状态:

- `✅ 已实现`: 已登记, 并由在此检查的运行时路径支持 。
- `⚠️ 部分实现`: 通过共享/基因路径登记和可以使用,但
  专用逻辑、配方或验证路径不完整。
- `❌ 未实现`:缺少所需的配套资产或处理定义。
- `📋 仅设计`:仅被定义为没有可用运行时路径的数据/设计元数据.

该项目使用大型动态登记家庭。 库存物品是:
因此,作为准确的登记公式加上源注/表格和
,而不是重复4,558行接近相同的行。
对于一个项目标识 `x`,其显示名称为 `item.ultratech.x` 内 `zh_cn.json`· ;
所有已检查的密钥都存在 。

## 执行摘要

| 区域 | 静态结果 | 状态 |
|---|---:|---|
| 项目模型 | 4 558个独有项目型号;0个直接 `layer0` 纹理缺失 | ✅ |
| 区块 | 935个独特的区块 | ✅ |
| 块模型 | 1 098个模型;扫描时缺失35个参考面部纹理 | ⚠️ |
| 工业液体 | 141个流体定义,均有源/流/块/桶登记路径 | ✅ |
| 相机 | 34 跨阶段 1-30 | ⚠️ |
| 工业加工机 | 222,共享BE/菜单/屏幕,296个流程配方 | ⚠️ |
| 具有工艺配方的工业机器 | 218/222 (中文(简体) ). | —— 98.2% |
| 菜单类型/ 客户端屏幕绑定 | 33/33 (英语). | ✅ |
| 语言密钥 | `zh_cn` - 6 888个; `en_us` 6 888; 键集相同 | ✅ |
| 尺寸 | 14个已注册的JSON尺寸,每个尺寸都装入发电机编码器 | ✅ |
| 石油和石油世界 | Datagen 配置/布置特征和生物变异剂 | ✅ |

## 1. 登记的项目

### 1.1 库存结构

`ModItems` 拥有134个明确、独特的直接登记和动态家庭
登记。 生成的资源审计发现4,558项模型和每项
选中的项目/ 块以中文显示密钥解析度。

| 类别 | 登记来源和确切模式 | 状态 |
|---|---|---|
| 基本资料 | 明确的生矿石、活料、小块、粉尘、板块、棒子、电线、粮食/作物产出和早期机械部件 | ✅ |
| 原生金属 | `NativeMetal`数字 : `raw_<metal>`, (中文(简体) ). `<metal>_ingot`, (中文(简体) ). `<metal>_block`,特定主机矿石 | ✅ |
| 合金 | `AlloyMaterial` 财务报告和审定财务报表 `AlloyComponent`:每个合金的组件设置变体 | ✅ |
| 电路板 | `CircuitTier` 页:1 `CircuitComponent` 通过 `CIRCUIT_ITEMS` | ✅ |
| 动力核心 | `PowerCoreType` 页:1 `PowerLevel` 通过 `POWER_CORE_ITEMS` | ✅ |
| 汽车、传输、线圈 | `TransmissionComponent`, (中文(简体) ). `CoilMaterial` 页:1 `CoilForm`, (中文(简体) ). `WindingInsulation`, (中文(简体) ). `MagneticCoreMaterial` | ✅ |
| 带和框 | `CasingMaterial` 页:1 `CasingFunction`, (中文(简体) ). `StructureFrameTier` | ✅ |
| 贴纸和印章 | `FastenerMaterial` 页:1 `FastenerType`, (中文(简体) ). `SealMaterial` 页:1 `PressureLevel`, (中文(简体) ). `ConnectorVariant` | ✅ |
| 流体设备 | `FluidContainerMaterial`全部 `IndustrialFluid` 集装箱变体, `FluidPipeMaterial`, (中文(简体) ). `FluidPumpTier` | ✅ |
| 化学中间体 | `ChemicalIntermediate` 页:1 `ChemicalForm` | ✅ |
| 计算和研究 | `ComputeTier`、研究数据/书籍碎片、终端升级 | ✅ |
| 空间设备 | 太空服、探测器、中继站、机器人、装配包、飞行器和空间部件 | ✅ |
| 结束游戏材料 | `EndgameTechMaterial` + 末端游戏装甲/工具 | ✅ |
| 加工设备 | 每块一个 `IndustrialProcessMachine` | ✅ |

### 1.2 明确的基本材料和使用物品

以下是直接登记而不是扩大的家庭。 全体
有项目模型和中国显示名密钥。

| 组 | 注册的身份证 | 状态 |
|---|---|---|
| 原材料 | `raw_tin`, (中文(简体) ). `raw_lead`, (中文(简体) ). `raw_silver`, (中文(简体) ). `raw_nickel`, (中文(简体) ). `raw_uranium` | ✅ |
| 内脏/内脏/灰尘 | `tin_ingot`, (中文(简体) ). `lead_ingot`, (中文(简体) ). `silver_ingot`, (中文(简体) ). `nickel_ingot`, (中文(简体) ). `steel_ingot`, (中文(简体) ). `bronze_ingot`, (中文(简体) ). `uranium_ingot`与花粉相匹配; `gallium_*` | ✅ |
| 早期组件 | `copper_wire`, (中文(简体) ). `gold_wire`, (中文(简体) ). `steel_rod`, (中文(简体) ). `gallium_rod`, (中文(简体) ). `copper_plate`, (中文(简体) ). `iron_plate`, (中文(简体) ). `steel_plate`, (中文(简体) ). `gallium_plate`, (中文(简体) ). `gallium_wire`, (中文(简体) ). `gallium_foil`, (中文(简体) ). `basic_gear`, (中文(简体) ). `advanced_gear`, (中文(简体) ). `basic_circuit`, (中文(简体) ). `advanced_circuit` | ✅ |
| 作物和有机产出 | `sorghum`, (中文(简体) ). `blueberry`, (中文(简体) ). `calendula`, (中文(简体) ). `rubber_tree_fruit`, (中文(简体) ). `oil_palm_fruit`, (中文(简体) ). `castor_bean`, (中文(简体) ). `sisal_bundle`, (中文(简体) ). `jojoba_bean`, (中文(简体) ). `industrial_hemp_fiber`, (中文(简体) ). `flour`, (中文(简体) ). `hay_feed`, (中文(简体) ). `animal_fat` | ✅ |
| 工具 | `wrench`, (中文(简体) ). `torque_wrench`, (中文(简体) ). `rubber_tapping_knife`, (中文(简体) ). `geological_prospector`,压力/分队部件,动态维护-扳手家族 | ✅ |
| 空间消耗品 | `oxygen_tank`, (中文(简体) ). `empty_helium3_capsule`, (中文(简体) ). `helium3_capsule`, (中文(简体) ). `solid_rocket_fuel`, (中文(简体) ). `ceres_ice_drill_bit` | ✅ |
| 导航/研究 | `star_chart`, (中文(简体) ). `advanced_star_chart`, (中文(简体) ). `creative_star_chart`, (中文(简体) ). `spacecraft_navigation_core`, (中文(简体) ). `identity_card`, (中文(简体) ). `stellar_ruin_data`, (中文(简体) ). `interstellar_trade_data`,研究芯片/数据 | ✅ |
| 车辆 | `ultratech_rocket`, (中文(简体) ). `planetary_rover`, (中文(简体) ). `planetary_probe`, (中文(简体) ). `orbital_ascent_device`, (中文(简体) ). `planet_reset_seal` | ✅ |
| 创意工具 | `creative_compute_processor`, (中文(简体) ). `creative_compute_storage`, (中文(简体) ). `creative_research_unlocker`, (中文(简体) ). `creative_space_instrument_deployer`, (中文(简体) ). `creative_space_instrument_remover` | ✅ |

### 1.3 已执行的Versus空间设备

| 家属 | 定义 | 登记的项目执行情况 | 运行时间使用 | 状态 |
|---|---:|---:|---|---|
| 行星探测器 | 7级 | 7个变体, `PlanetaryProbeItem` | 探测保存的数据使用速度、耐久性和腐蚀性字段 | ✅ |
| 中继信号站 | 7级 | 7个变体, `RelaySignalStationItem` | 中继进程和覆盖值被探测逻辑所消耗 | ✅ |
| 太空服 | 9个级x4个装甲部件 | 36个变体, `SpaceSuitArmorItem` | 环境检查可使用分级场;整个跨行星运行时间覆盖没有测试核实 | ⚠️ |

## 2. 已登记的区块

### 2.1 集体家庭

直接 `registerBlock(...)` 列表包含149个静态ID. 其余部分
由机器、材料、矿石、流体罐、
行星资源、储存、研究层次和创造性的坦克表。

| 类别 | 登记家庭 | 状态 |
|---|---|---|
| 矿物和行星地质学 | 原生矿石宿主、原料块、材料块、行星地表/资源、月球/火星/月球/地表/地表/地表/地表/地表岩石和地表, `oil_sand_ore`, (中文(简体) ). `oil_shale_ore` | ✅ |
| 机器 | 页:1 `StageMachine` 区块,222 `IndustrialProcessMachine` 碎块、碎块/锅炉/涡轮/空间设施块 | ⚠️ |
| 管道 | `wooden_item_pipe`, (中文(简体) ). `wooden_fluid_pipe`, (中文(简体) ). `strain_energy_pipe`, (中文(简体) ). `reinforced_strain_energy_pipe`, (中文(简体) ). `resonant_strain_energy_pipe`, (中文(简体) ). `conduit_bundle`,动态管道项目 | ✅ |
| 存储 | 分级储存箱、液箱、143个创造性无限储罐、创造性能核心 | ✅ |
| 装饰/建筑 | 工业用钢板、楼梯、板子、栅栏、大门、按钮、压力板、门和门 | ✅ |
| 功能终端 | 研究、扫描、计算、无线电源、航天器/探测/中继/空间工业终端、流动传感器、动力缓冲/输出轴 | ✅ |
| 作物 | 香草、高粱、蓝莓、卡伦杜拉、橡胶树、油棕榈、铸油器、小丝、乔乔巴作物块 | ✅ |
| 多块占位符 | 无项目表登记的水轮和风车占地块 | ⚠️ |

### 2.2 无屏蔽的机器块

未登记 `StageMachine` 或者说 `IndustrialProcessMachine` 缺少块实体 :

- 34台舞台机由专用BES覆盖,用于特殊机器和
  `StageMachineBlockEntity` 剩下的钱
- 所有222个工业加工机都由
  `IndustrialProcessMachineBlockEntity`。 。 。 。
- 普通地形、矿石、装饰地块和
  作物块是故意的。

重要的警告是行为,而不是注册:通用舞台机
共享一个通用运行时间,而不是拥有单个生产算法.

## 3. 已登记的流体

每个 `IndustrialFluid` 通过 `ModFluids` 作为源流,
流出液体,液体块和桶。 静态资源检查找不到
缺少源/流的纹理对 。

| 类别 | 身份证 | 状态 |
|---|---|---|
| 基础(8) | `low_pressure_steam`, (中文(简体) ). `high_pressure_steam`, (中文(简体) ). `distilled_water`, (中文(简体) ). `lubricant_oil`, (中文(简体) ). `coolant`, (中文(简体) ). `compressed_air`, (中文(简体) ). `creosote_oil`, (中文(简体) ). `biomass_slurry` | ✅ |
| 生化(8). | `starch_slurry`, (中文(简体) ). `glucose_solution`, (中文(简体) ). `ethanol_fermentation_broth`, (中文(简体) ). `fuel_ethanol`, (中文(简体) ). `acetic_acid`, (中文(简体) ). `alkali_liquor`, (中文(简体) ). `bleach`, (中文(简体) ). `pyrolysis_gas` | ✅ |
| 一般化学品(18) | `sulfuric_acid`, (中文(简体) ). `hydrochloric_acid`, (中文(简体) ). `nitric_acid`, (中文(简体) ). `phosphoric_acid`, (中文(简体) ). `liquid_epoxy_resin`, (中文(简体) ). `liquid_polyethylene`, (中文(简体) ). `ethylene`, (中文(简体) ). `propylene`, (中文(简体) ). `butadiene`, (中文(简体) ). `benzene`, (中文(简体) ). `toluene`, (中文(简体) ). `xylene`, (中文(简体) ). `ammonia`, (中文(简体) ). `methanol`, (中文(简体) ). `ethanol`, (中文(简体) ). `acetone`, (中文(简体) ). `phenol`, (中文(简体) ). `liquid_rubber` | ✅ |
| 植物工业(7) | `rubber_latex`, (中文(简体) ). `rubber_seed_oil`, (中文(简体) ). `crude_palm_oil`, (中文(简体) ). `refined_palm_oil`, (中文(简体) ). `castor_oil`, (中文(简体) ). `jojoba_oil`, (中文(简体) ). `precision_hydraulic_oil` | ✅ |
| 铁冶(3). | `iron_coal_tar`, (中文(简体) ). `iron_coke_oven_gas`, (中文(简体) ). `iron_blast_furnace_gas` | ✅ |
| 铜冶(1) | `copper_electrolyte` | ✅ |
| 铝冶金 (1) | `aluminum_caustic_soda` | ✅ |
| 氯碱(6) | `chlor_alkali_brine`, (中文(简体) ). `chlor_alkali_chlorine`, (中文(简体) ). `chlor_alkali_hydrogen`, (中文(简体) ). `chlor_alkali_sodium_hydroxide`, (中文(简体) ). `chlor_alkali_hydrochloric_acid`, (中文(简体) ). `chlor_alkali_vinyl_chloride` | ✅ |
| 硅/贵金属(2) | `silicon_trichlorosilane`, (中文(简体) ). `precious_acid_leachate` | ✅ |
| 有色冶金(5) | `lead_electrolyte`, (中文(简体) ). `zinc_sulfate_solution`, (中文(简体) ). `nickel_electrolyte`, (中文(简体) ). `cobalt_sulfate_solution`, (中文(简体) ). `magnesium_chloride_melt` | ✅ |
| 反相冶金 (4) | `titanium_tetrachloride`, (中文(简体) ). `zirconium_tetrachloride`, (中文(简体) ). `sodium_tungstate_solution`, (中文(简体) ). `ammonium_tungstate_solution` | ✅ |
| 稀土(3) | `mixed_rare_earth_chloride_solution`, (中文(简体) ). `rare_earth_extractant_p507`, (中文(简体) ). `naphthenic_acid_extractant` | ✅ |
| 分散金属回收(5) | `gallium_mother_liquor`, (中文(简体) ). `indium_leachate`, (中文(简体) ). `germanium_chloride_solution`, (中文(简体) ). `selenium_tellurium_leachate`, (中文(简体) ). `fluoride_tantalum_solution` | ✅ |
| 非金属矿物(2) | `kaolin_slurry`, (中文(简体) ). `phosphate_slurry` | ✅ |
| 石油(20) | `crude_oil`, (中文(简体) ). `heavy_crude_oil`, (中文(简体) ). `desalted_crude_oil`, (中文(简体) ). `petroleum_gas`, (中文(简体) ). `petroleum_gasoline`, (中文(简体) ). `petroleum_naphtha`, (中文(简体) ). `petroleum_kerosene`, (中文(简体) ). `petroleum_diesel`, (中文(简体) ). `petroleum_heavy_oil`, (中文(简体) ). `petroleum_vacuum_gasoil`, (中文(简体) ). `petroleum_residual_oil`, (中文(简体) ). `petroleum_asphalt`, (中文(简体) ). `petroleum_cracked_gas`, (中文(简体) ). `petroleum_reformate`, (中文(简体) ). `petroleum_aromatics`, (中文(简体) ). `petroleum_ethylene`, (中文(简体) ). `petroleum_propylene`, (中文(简体) ). `petroleum_butadiene`, (中文(简体) ). `petroleum_ethylene_glycol`, (中文(简体) ). `petroleum_styrene` | ✅ |
| 精密制造(14) | `precision_dielectric_fluid`, (中文(简体) ). `precision_electrolyte`, (中文(简体) ). `waterjet_slurry`, (中文(简体) ). `semiconductor_cutting_fluid`, (中文(简体) ). `semiconductor_lapping_slurry`, (中文(简体) ). `semiconductor_cmp_slurry`, (中文(简体) ). `photoresist_solution`, (中文(简体) ). `semiconductor_etching_gas`, (中文(简体) ). `semiconductor_cvd_gas`, (中文(简体) ). `ald_precursor_gas`, (中文(简体) ). `quantum_dot_solvent`, (中文(简体) ). `subspace_field_plasma`, (中文(简体) ). `quantum_beam_flux`, (中文(简体) ). `dark_matter_slurry` | ✅ |
| 核工业(14个) | `heavy_water`, (中文(简体) ). `deuterium`, (中文(简体) ). `tritium`, (中文(简体) ). `uranium_hexafluoride`, (中文(简体) ). `liquid_sodium`, (中文(简体) ). `hot_molten_salt`, (中文(简体) ). `cold_molten_salt`, (中文(简体) ). `uranium_tetrafluoride`, (中文(简体) ). `hydrogen_fluoride`, (中文(简体) ). `hydrogen_chloride`, (中文(简体) ). `sodium_hydroxide`, (中文(简体) ). `liquid_lithium`, (中文(简体) ). `hot_reactor_coolant`, (中文(简体) ). `cold_reactor_coolant` | ✅ |
| 低温(12) | `liquid_hydrogen`, (中文(简体) ). `liquid_helium`, (中文(简体) ). `liquid_nitrogen`, (中文(简体) ). `liquid_oxygen`, (中文(简体) ). `liquid_neon`, (中文(简体) ). `liquid_argon`, (中文(简体) ). `liquid_krypton`, (中文(简体) ). `liquid_xenon`, (中文(简体) ). `liquid_ozone`, (中文(简体) ). `liquid_fluorine`, (中文(简体) ). `liquid_methane`, (中文(简体) ). `liquid_carbon_dioxide` | ✅ |
| 结束游戏(8) | `antihydrogen`, (中文(简体) ). `exotic_slurry`, (中文(简体) ). `quantum_fluid`, (中文(简体) ). `void_energy_fluid`, (中文(简体) ). `spacetime_condensate`, (中文(简体) ). `shadow_state_fluid`, (中文(简体) ). `cosmic_primal_fluid`, (中文(简体) ). `nihility_essence_fluid` | ✅ |

## 4. 机器

### 4.1 相机(34)

所有阶段的身份证都有中文 `block.ultratech.<id>` 财务报告和审定财务报表
`container.ultratech.<id>` 键。 1-24阶段各为一台;
25-30拥有多台机器.

| 阶段 | 注册的身份证 | 显示名称 | 块实体/ 图形界面 | 状态 |
|---:|---|---|---|---|
| 1个 | `animal_power_millstone` | 畜力磨盘 | 专用BE/菜单/屏幕 | ✅ |
| 2个 | `water_wheel` | 水车轮 | 专用BE/菜单/屏幕 | ⚠️ |
| 3个 | `windmill_tower` | 风车塔 | 专用BE; 无专用菜单 | ⚠️ |
| 页:1 | `mechanical_gearbox` | 齿轮箱 | 专用BE/菜单/屏幕 | ✅ |
| 页:1 | `low_pressure_boiler` | 低压锅炉 | 专用BE/菜单/屏幕 | ✅ |
| 6个 | `high_pressure_boiler` | 高压锅炉 | 专用BE/菜单/屏幕 | ✅ |
| 第7条 | `steam_turbine` | L3 蒸汽轮机 | 通用/专用涡轮路由 | ⚠️ |
| 第8条 | `stirling_engine` | 斯特林发动机 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第9条 | `piston_combustion_engine` | 活塞内燃机 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 10个 | `turbo_combustion_engine` | 涡轮内燃机 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第11个 | `gas_turbine` | 燃气轮机 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第12条 | `thermoelectric_generator` | 热电发生器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第13条 | `dc_converter_station` | 直流换流站 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 页:1 | `ac_substation_tower` | 交流变电塔 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 15个 | `photovoltaic_matrix` | 光伏矩阵 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 16个 | `solar_thermal_collector` | 光热集热器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 页:1 | `fission_reactor` | 裂变反应堆 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第 18 条 | `breeder_reactor` | 增殖反应器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第 19 条 | `molten_salt_reactor` | 熔盐反应器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 20国 | `deuterium_fusion_reactor` | 氘聚变堆 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 21国 | `helium_fusion_reactor` | 氦聚变堆 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 22个 | `proton_accelerator` | 质子加速器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第23条 | `tokamak_ring` | 托卡马克环 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 24个 | `laser_fusion_chamber` | 激光聚变室 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第 25 条 | `muon_generator`, (中文(简体) ). `strange_matter_compressor` | 缪子发生器、奇异物质压缩器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第26条 | `degenerate_matter_generator` | 简并态发生器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 第28条 | `antimatter_collector`, (中文(简体) ). `casimir_extractor` | 反物质收集器、卡西米尔提取器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 29个 | `singularity_generator`, (中文(简体) ). `void_energy_siphon` | 奇点发电机、虚空能量汲取器 | 共享阶段BE/菜单/屏幕 | ⚠️ |
| 30个 | `cosmic_gate`, (中文(简体) ). `nihility_engine`, (中文(简体) ). `genesis_core` | 寰宇之门、虚无引擎、创世核心 | 共享阶段BE/菜单/屏幕 | ⚠️ |

注:没有第27阶段条目。 `StageMachine.MACHINES`;第25、26阶段,
28,29和30是其余10个条目的账号.

### 4.2 工业加工机(222)

所有222个条目都有一个注册区块, `IndustrialProcessMachineBlockEntity`, (中文(简体) ).
`IndustrialProcessMachineMenu`,以及 `IndustrialProcessMachineScreen`这是
一个共同执行,而不是222个独立的BE/菜单/屏幕类。

| 模块 | 身份证 | 流程重复覆盖 | 状态 |
|---|---|---:|---|
| 古法工业 | `primitive_mortar_workbench`, (中文(简体) ). `primitive_kiln`, (中文(简体) ). `primitive_comminutor`, (中文(简体) ). `primitive_wooden_tank`, (中文(简体) ). `primitive_ceramic_tank` | 第4/5条 | ⚠️ |
| 高粱生物塑料 | `sorghum_harvester`, (中文(简体) ). `sorghum_crusher`, (中文(简体) ). `starch_separator`, (中文(简体) ). `liquefaction_reactor`, (中文(简体) ). `saccharification_tank`, (中文(简体) ). `fermentation_tank`, (中文(简体) ). `molecular_sieve_dehydration_tower`, (中文(简体) ). `steam_explosion_machine`, (中文(简体) ). `alkali_treatment_tank`, (中文(简体) ). `bleaching_system`, (中文(简体) ). `pyrolysis_reactor`, (中文(简体) ). `activation_furnace`, (中文(简体) ). `ethylene_synthesis_tower`, (中文(简体) ). `polymerization_reactor`, (中文(简体) ). `ethylene_glycol_line`, (中文(简体) ). `synthetic_rubber_line`, (中文(简体) ). `esterification_reactor`, (中文(简体) ). `spinning_machine`, (中文(简体) ). `bioplastic_molder` | 19/19 (英语). | ✅ |
| 橡胶树 | `latex_coagulation_vat`, (中文(简体) ). `rubber_sheet_roller`, (中文(简体) ). `rubber_smokehouse`, (中文(简体) ). `rubber_seed_oil_press`, (中文(简体) ). `rubber_vulcanization_tank`, (中文(简体) ). `rubber_compound_mixer` | 第6/6号决定 | ✅ |
| 油棕 | `palm_steaming_tank`, (中文(简体) ). `palm_thresher`, (中文(简体) ). `palm_screw_press`, (中文(简体) ). `palm_clarification_pool`, (中文(简体) ). `palm_refining_tower`, (中文(简体) ). `palm_fractionation_crystallizer`, (中文(简体) ). `palm_transesterification_reactor`, (中文(简体) ). `palm_saponification_kettle` | 第8/8号决议 | ✅ |
| 蓖麻 | `castor_dehuller`, (中文(简体) ). `castor_oil_press`, (中文(简体) ). `castor_hydrolysis_kettle`, (中文(简体) ). `castor_cracking_reactor`, (中文(简体) ). `castor_polymerization_kettle`, (中文(简体) ). `castor_isocyanate_synthesis_tower`, (中文(简体) ). `castor_esterification_reactor` | 第7/7号决定 | ✅ |
| 剑麻 | `sisal_decorticator`, (中文(简体) ). `sisal_washing_trough`, (中文(简体) ). `sisal_drying_kiln`, (中文(简体) ). `sisal_carding_machine`, (中文(简体) ). `sisal_spinning_machine`, (中文(简体) ). `sisal_rope_maker`, (中文(简体) ). `sisal_loom`, (中文(简体) ). `sisal_wet_former` | 第8/8号决议 | ✅ |
| 霍霍巴 | `jojoba_dehuller`, (中文(简体) ). `jojoba_cold_press`, (中文(简体) ). `jojoba_precision_filter`, (中文(简体) ). `jojoba_winterization_crystallizer`, (中文(简体) ). `jojoba_blending_kettle`, (中文(简体) ). `jojoba_vacuum_deaerator` | 第6/6号决定 | ✅ |
| 铁系冶金 | `iron_ore_crusher`, (中文(简体) ). `iron_screening_machine`, (中文(简体) ). `iron_sintering_furnace`, (中文(简体) ). `iron_coke_oven`, (中文(简体) ). `iron_blast_furnace`, (中文(简体) ). `iron_basic_oxygen_converter`, (中文(简体) ). `iron_electric_arc_furnace`, (中文(简体) ). `iron_continuous_caster`, (中文(简体) ). `iron_rolling_mill`, (中文(简体) ). `iron_alloy_furnace`, (中文(简体) ). `iron_quenching_tank` | 第11/11号决议 | ✅ |
| 铜系冶金 | `copper_ore_crusher`, (中文(简体) ). `copper_ball_mill`, (中文(简体) ). `copper_flotation_cell`, (中文(简体) ). `copper_smelting_furnace`, (中文(简体) ). `copper_converting_furnace`, (中文(简体) ). `copper_anode_furnace`, (中文(简体) ). `copper_electrolytic_cell`, (中文(简体) ). `copper_wire_drawing_machine`, (中文(简体) ). `copper_rolling_mill`, (中文(简体) ). `copper_bronze_furnace`, (中文(简体) ). `copper_brass_furnace` | 第11/11号决议 | ✅ |
| 铝系冶金 | `aluminum_bauxite_crusher`, (中文(简体) ). `aluminum_ball_mill`, (中文(简体) ). `aluminum_digestion_reactor`, (中文(简体) ). `aluminum_precipitation_tank`, (中文(简体) ). `aluminum_rotary_kiln`, (中文(简体) ). `aluminum_molten_salt_cell`, (中文(简体) ). `aluminum_ingot_caster`, (中文(简体) ). `aluminum_extrusion_press`, (中文(简体) ). `aluminum_alloy_furnace` | 第9/9号决议 | ✅ |
| 氯碱化工 | `chlor_alkali_salt_crusher`, (中文(简体) ). `chlor_alkali_dissolution_tank`, (中文(简体) ). `chlor_alkali_electrolytic_cell`, (中文(简体) ). `chlor_alkali_hydrochloric_acid_tower`, (中文(简体) ). `chlor_alkali_chlorination_reactor` | 第5/5条 | ✅ |
| 硅系工业 | `silicon_quartz_crusher`, (中文(简体) ). `silicon_sand_washer`, (中文(简体) ). `silicon_smelting_furnace`, (中文(简体) ). `silicon_glass_melting_kiln`, (中文(简体) ). `silicon_polysilicon_reactor`, (中文(简体) ). `silicon_crystal_furnace`, (中文(简体) ). `silicon_slicing_machine`, (中文(简体) ). `silicon_photovoltaic_assembly_line` | 第8/8号决议 | ✅ |
| 贵金属回收 | `precious_anode_slime_collector`, (中文(简体) ). `precious_acid_leach_reactor`, (中文(简体) ). `precious_solvent_extraction_tower`, (中文(简体) ). `precious_reduction_furnace` | 第4/4号决议 | ✅ |
| 有色金属 | `mineral_jaw_crusher`, (中文(简体) ). `mineral_cone_crusher`, (中文(简体) ). `mineral_ball_mill`, (中文(简体) ). `mineral_jig`, (中文(简体) ). `mineral_shaking_table`, (中文(简体) ). `mineral_flotation_cell`, (中文(简体) ). `mineral_filter_press`, (中文(简体) ). `mineral_drying_kiln`, (中文(简体) ). `mineral_reverberatory_furnace`, (中文(简体) ). `mineral_blast_furnace`, (中文(简体) ). `mineral_converter`, (中文(简体) ). `mineral_electrolytic_cell`, (中文(简体) ). `zinc_leaching_tank`, (中文(简体) ). `zinc_purification_tank`, (中文(简体) ). `magnesium_chlorination_reactor`, (中文(简体) ). `molten_salt_electrolytic_cell` | 第13/16号 | ⚠️ |
| 稀有难熔金属 | `mineral_magnetic_separator`, (中文(简体) ). `titanium_chlorination_furnace`, (中文(简体) ). `titanium_distillation_column`, (中文(简体) ). `kroll_reduction_vessel`, (中文(简体) ). `vacuum_arc_remelting_furnace`, (中文(简体) ). `tungsten_alkali_digestion_reactor`, (中文(简体) ). `mineral_ion_exchange_column`, (中文(简体) ). `hydrogen_reduction_furnace`, (中文(简体) ). `powder_metallurgy_press`, (中文(简体) ). `zirconium_chlorination_furnace` | 第10/10号决定 | ✅ |
| 稀土冶金 | `rare_earth_decomposition_reactor`, (中文(简体) ). `rare_earth_solvent_extraction_tower`, (中文(简体) ). `rare_earth_ion_exchange_column`, (中文(简体) ). `rare_earth_precipitation_kiln`, (中文(简体) ). `rare_earth_molten_salt_cell` | 第5/5条 | ✅ |
| 分散金属回收 | `dispersed_metal_leaching_tank`, (中文(简体) ). `dispersed_solvent_extraction_tower`, (中文(简体) ). `dispersed_reduction_furnace`, (中文(简体) ). `chlorination_distillation_column`, (中文(简体) ). `vanadium_roasting_kiln`, (中文(简体) ). `fluoride_extraction_column` | 第6/6号决定 | ✅ |
| 非金属矿物 | `nonmetallic_crusher`, (中文(简体) ). `nonmetallic_ball_mill`, (中文(简体) ). `nonmetallic_flotation_cell`, (中文(简体) ). `nonmetallic_drying_kiln`, (中文(简体) ). `graphite_purification_reactor`, (中文(简体) ). `graphitization_furnace`, (中文(简体) ). `fluorite_dryer`, (中文(简体) ). `barite_gravity_table`, (中文(简体) ). `magnesite_sintering_kiln`, (中文(简体) ). `kaolin_pulping_tank`, (中文(简体) ). `kaolin_hydrocyclone`, (中文(简体) ). `kaolin_bleaching_separator`, (中文(简体) ). `phosphate_acidulation_tank`, (中文(简体) ). `phosphorus_electric_furnace` | 第14/14号决议 | ✅ |
| 精密制造 | `cnc_milling_machine`, (中文(简体) ). `edm_machine`, (中文(简体) ). `laser_cutting_machine`, (中文(简体) ). `vacuum_heat_treatment_furnace`, (中文(简体) ). `deep_hole_drilling_machine`, (中文(简体) ). `five_axis_machining_center`, (中文(简体) ). `electrolytic_polishing_machine`, (中文(简体) ). `waterjet_cutting_machine`, (中文(简体) ). `ultra_precision_lathe`, (中文(简体) ). `monocrystal_growth_furnace`, (中文(简体) ). `wafer_slicing_machine`, (中文(简体) ). `wafer_lapping_machine`, (中文(简体) ). `cmp_machine`, (中文(简体) ). `photolithography_stepper`, (中文(简体) ). `plasma_etcher`, (中文(简体) ). `cvd_furnace`, (中文(简体) ). `pvd_system`, (中文(简体) ). `ion_implanter`, (中文(简体) ). `wafer_annealing_furnace`, (中文(简体) ). `wafer_probe_station`, (中文(简体) ). `wafer_dicing_saw`, (中文(简体) ). `chip_packaging_machine`, (中文(简体) ). `mbe_growth_system`, (中文(简体) ). `electron_beam_lithography_machine`, (中文(简体) ). `nanoimprint_machine`, (中文(简体) ). `ald_furnace`, (中文(简体) ). `nanoparticle_synthesis_reactor`, (中文(简体) ). `transparent_conductive_film_deposition_system`, (中文(简体) ). `laser_direct_write_lithography_machine`, (中文(简体) ). `multiphoton_polymerization_3d_printer`, (中文(简体) ). `superconducting_film_deposition_system`, (中文(简体) ). `quantum_dot_synthesis_reactor`, (中文(简体) ). `topological_insulator_preparation_system`, (中文(简体) ). `two_dimensional_material_cvd_furnace`, (中文(简体) ). `squid_fabrication_line`, (中文(简体) ). `molecular_assembler`, (中文(简体) ). `self_assembly_nano_reactor`, (中文(简体) ). `plasma_catalytic_reactor`, (中文(简体) ). `directed_energy_workbench`, (中文(简体) ). `stress_field_forming_machine`, (中文(简体) ). `quantum_beam_etcher`, (中文(简体) ). `topological_matter_synthesis_furnace`, (中文(简体) ). `subspace_forge`, (中文(简体) ). `time_crystal_growth_furnace`, (中文(简体) ). `dark_matter_purification_tower` | 第45/45号决议 | ✅ |
| 石油工业 | `petroleum_drilling_platform`, (中文(简体) ). `petroleum_oil_gas_separator`, (中文(简体) ). `petroleum_storage_tank`, (中文(简体) ). `petroleum_desalter`, (中文(简体) ). `petroleum_atmospheric_distillation_tower`, (中文(简体) ). `petroleum_vacuum_distillation_tower`, (中文(简体) ). `petroleum_catalytic_cracking_reactor`, (中文(简体) ). `petroleum_hydrocracking_reactor`, (中文(简体) ). `petroleum_delayed_coker`, (中文(简体) ). `petroleum_catalytic_reformer`, (中文(简体) ). `petroleum_hydrotreating_reactor`, (中文(简体) ). `petroleum_steam_cracker`, (中文(简体) ). `petroleum_polyethylene_kettle`, (中文(简体) ). `petroleum_polypropylene_kettle`, (中文(简体) ). `petroleum_ethylene_glycol_reactor`, (中文(简体) ). `petroleum_pvc_polymerization_kettle`, (中文(简体) ). `petroleum_styrene_reactor`, (中文(简体) ). `petroleum_polyester_polycondensation_kettle`, (中文(简体) ). `petroleum_nylon_polymerization_kettle` | 19/19 (英语). | ✅ |

四个缺失的 * 工业加工* 配方是:

1. `primitive_ceramic_tank`
2. `mineral_shaking_table`
3. `mineral_filter_press`
4. `zinc_purification_tank`

他们确实有正常的 机器区块的配方。
机器消耗的运行时间输入/输出工业配方。

## 5. 依赖链和断点

下面的箭头描述已注册的机器/模块路径
机器和生产工业食谱。 绿色地位意味着每一个列出的
机器至少有一种工业配方,但没有在
一个活的世界。

| 链条 | 注册路线 | 断点 |
|---|---|---|
| 铁 | 铁矿石 -- -- > 碾碎器 -- -- > 筛选 -- -- > 烧结 -- -- > 爆破炉 -- -- > 转换器/电弧炉 -- -- > 连续铸造 -- -- > 滚动 -- -- > 合金炉 -- -- 平整;焦炭炉 -- -- 饲料可乐/副产品 | 在工业食谱的覆盖范围中没有发现 |
| 铜 | 铜矿石 -- -- > 压碎器 -- -- > 球磨坊 -- -- > 浮出水面 -- -- > 熔炼 -- -- > 转换 -- -- > 阳极炉 -- -- > 电解 -- -- > 有线图画/滚动/青铜/罩 | 无 |
| 铝 | 铝土 - > 压碎器 - > 球磨- > Bayer消化 -- > 降水 -- > 旋转窑 -- > 熔盐电池 -- -- > 沉淀器 -- -- 挤压/合金 | 无 |
| 硅 | Quartz - > 粉碎器 - > 洗衣机 - > 冶炼/玻璃窑 - > 多硅反应堆 - > 晶体炉 - > 切片 - > 光伏线 | 无 |
| 石油 | 钻 -- -- > 油气分离器/储存 -- -- > 脱盐 -- -- > 大气/真空蒸馏 -- -- > 裂解/裂解/裂解/腐蚀/再造/水分 -- -- > 蒸汽裂解 -- -- > 聚合物/乙烯-庚醇/PVC/苯乙烯/聚合物/尼龙 | 无 |
| 高粱 | 收割/碾碎 - >淀粉分离 - > 液相分离 - > 神圣化 - > 发酵 - > 脱水 - > 乙烯/聚合分枝;吸管 - > 蒸汽爆炸 - > 碱 - > 漂白 - > 酯化 - > 旋转 - > 模具 | 无 |
| 橡胶 | 接接- > 乳胶凝固- > 滚筒- > 烟房- > 手用橡胶路线或硫化- > 化合物搅拌器 | 无 |
| 油棕榈 | Steam - > stesh - > 螺旋压 - > 澄清 - > 精炼 - >分化或转酯/承接 | 无 |
| 卡斯特尔 | 脱壳->油压->水解->裂解->聚合/异氰酸盐/酯化 | 无 |
| 西萨尔 | 装饰器 - > 清洗 - > 干燥 - > 接卡 - > 旋转 - > 绳子/卢姆/湿地形成 | 无 |
| 乔乔巴 | Dehull - > 冷压 - > 精密过滤器 - > 冬季化 - > 混合 - > 真空去除 | 无 |
| 有色人种通航路线 | Jaw crusher - > Cone crusher - > Ball mill - > jig - > 摇摆表 - > flotation - > 过滤器压压 - >干燥 - > 炉子/变压器/电解;锌分支 - > 浸出 - > 净化 | `mineral_shaking_table`, (中文(简体) ). `mineral_filter_press`, (中文(简体) ). `zinc_purification_tank` 没有工业食谱 |
| 原始路线 | 迫击炮工地 -- -- > 窑/炉 -- -- > 木/油罐 | `primitive_ceramic_tank` 没有工业食谱 |

## 6. 图形用户界面、集装箱和屏幕

`ModMenuTypes` 登记33个菜单类型和 `UltraTech` 登记簿 准确33
客户端 `MenuScreens`以下是有意非GUI功能BES,
不自动丢失 UI :

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

222处理机使用一个共享菜单/屏幕. 使用34台相机
专用或共享的舞台菜单,如上所示。 没有缺少菜单到屏幕
通过静态登记比较发现了约束。

## 7. 网络和进步数据流动

### 研究、计算和无线电力

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

| 规则 | 静态执行结果 | 状态 |
|---|---|---|
| 计算管理费用 | `ceil(requestFE / 100)` | ✅ |
| 广播需求乘数 | `1.2` | ✅ |
| 线网请求乘数 | 收到广播x `1.4` = 最初需求x `1.68` | ✅ |
| 接收效率 | 随机 `0.89` 改为 `0.94` | ✅ |
| 接收者排程 | 高/中/低优先,同优先轮 Robin | ✅ |
| 端到端关闭 | 请求、广播、输入和接收路径通过 `WirelessPowerNetwork` | ⚠️ |

残余风险:

- `tickBroadcast()` 阅读前一个输入 FE 的快照
  `tickInput()` 写入下个值,因此分布可以滞后一个勾选。
- `ResearchTerminalBlockEntity` 报告 `0` 用于当地计算
  能源成本;它依靠外部计算网络的设计。
- 持久性,多人游戏,交叉分化行为和滴答顺序效果
  在这次静态审计中,没有经过运行时间测试。

## 8. 尺寸与世界代

### 8.1 尺寸登记

所有14个维度的 JSON 文件都存在并指定了生成器 :

| 尺寸标识 | 发电机 | 状态 |
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

土星需要一个产品决定,而不是一个缺失的发电机修复:

- `SpaceBody.SATURN` 标记 `implemented=true` 财务报告和审定财务报表 `saturnian` 有一个
  完整的生成器/资源表。
- 寻常 `SpaceTransitionHandler` 明确显示着陆路径
  `saturn_forbidden` 而不是传送玩家。
- 其他目标级别的代码路径仍然可以解决 `SATURNIAN`。 。 。 。

这与意图的"天然气巨头,禁止前往"统治和
应明确无误。

### 8.2 Ore and Petroleum Worldgen公司

`ModOreWorldGenProvider` 生成配置的特性, 设置的特性和
用于原生矿石和石油的生物变异剂:

- 原油:Y-10-60,正常/海洋/水分整合。
- 重油:Y-10-50,出洋/出出同.
- 油砂:Y-10-80,恶地.
- 油页岩:Y-10-80,正常/坏地/海洋.
- 原油湖改型:沙漠/海洋,稀有30.

状态 : `✅` Worldgen通过生成的数据包资源连接.

偏离所要求的石油设计:实施时使用香草
矿石特性定位和生物修饰剂,而非自定义的简单噪音静脉
分发。 这一具体设计要求的现状: `⚠️`。 。 。 。

## 9. 资源、语言和 Loot 关闭

### 9.1 语文

- `zh_cn.json` 财务报告和审定财务报表 `en_us.json` 是有效的 UTF-8 JSON。
- 两者都包含有6,888个密钥.
- 他们的钥匙组完全一样
- 中键包括3,914个物品条目,925个块条目,74个流体类型
  条目、304个集装箱条目和742个图形用户界面条目。
- 所有4,558个被扫描的项目模型解决一个项目或块名中文
  键。

结果 : `✅` 没有按阶段/类别发现静态语言键缺口。

### 9.2 纹理和模型

- 直接引用的项目模型 `layer0` 缺少纹理 : `0`。 。 。 。
- 扫描时缺少块模型纹理引用 : `35`。 。 。 。

缺少面部纹理 :

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

这些都是模型参考缺失,而不是项-icon缺失。 生成/未跟踪
工作树资源在更新数据源/资源后可能会改变这一结果
关闭通行证。

### 9.3 抢劫

有306个街区ID 没有同名抢劫表文件 在简单的名字
比较。 这不是一个确认的缺陷数 因为集包括
流体块和明确 `noLootTable` 创意块. 语义上的掠夺
在将其中任何一种情况视为缺失情况之前,仍需进行审计。

## 10. 差距摘要

| 优先权 | 差距 | 证据 | 建议采取的行动 |
|---|---|---|---|
| P0 语句 | 四台加工机无法进行任何工业操作 | 没有 `industrial_process` 陶瓷罐、摇动台、过滤器、锌纯化罐的配方 | 为每个输入/输出添加并测试一个封闭输入/输出配方 |
| 临1 | 35个块模型面纹理参考未解决 | 10台后期机器缺乏左/右/后;风车缺乏5个面孔 | 添加/重新链接精确的 PNG 并运行资源关闭检查 |
| 临1 | 土星的执行状况自相矛盾 | 已执行标记;存在尺寸/生成器;标准旅行拒绝着陆 | 仅允许土星轨道运行或允许固核尺寸,但去除混合状态 |
| 临2 | 舞台机大多是通用的 | 34个已登记,许多份额 `StageMachineBlockEntity` 而不是个人食谱/日志 | 优先考虑发电阶段的独特机械 |
| 临2 | 石油静脉设计与规格不同 | 标准矿石特性, 而非简单噪音静脉 | 只有在视觉/游戏区分重要时才执行自定义的噪音分配 |
| 临2 | 无线电源勾选顺序未测试 | 广播读取以前的输入快照 | 添加服务器侧勾选顺序/多人测试例 |
| 临2 | Loot 比较不完整 | 306个名称不匹配包括故意的无污块 | 在创建掠夺文件前按块行为分类 |

## 11. 建议的下一步行动

1. 解决4个P0工业食谱缺口,执行机器输入/产出
   每个都做烟雾测试
2. 修复35个未解决的块面纹理引用, 然后运行 Forge
   关闭检查器并装入客户端资源重新装入 。
3. 决定土星的犬类行为: 仅轨道气体巨型或可着陆
   固核抽象. 对齐 `SpaceBody`、目标解决和过渡
   代码。
4. 为无线请求添加决定性测试或调试跟踪 - > 广播 - >
   有线输入 - > 接收器在接连滴答中发送。
5. 审计通用相机逻辑,从后期动力链开始,其中
   视觉注册目前超过了独特的游戏游戏行为.
6. 进行语义性抢掠表审计,其中不包括液体/无沥青块
   将306个原始错配作为缺陷处理.

## 源文件已审计

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
- 生成的模型、块态、食谱、掠夺表和世界源数据


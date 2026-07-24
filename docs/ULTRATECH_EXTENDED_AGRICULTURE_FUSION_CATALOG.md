# UltraTech Extended Crafting × Mystical Agriculture 融合目录

> 由 ExtendedAgricultureFusionCatalog 和 DataGen 自动导出；本目录共有 **512** 项。
> 每项配方由 `forge:mod_loaded` 条件保护；缺少任意外部模组时，该配方不会载入，也不会阻塞 UltraTech 主线。
> 外部物品 ID 是兼容层引用，不是 UltraTech 的内置依赖；在未装入目标整合环境的开发工作区中，实际物品注册表仍须在联调时逐项确认。

## 合成基础设施

- L2–L5：4×4、5×5、6×6、7×7 Extended Crafting 框架平台 + UltraTech 控制核心，分别在阶段 4、8、12、16 解锁。
- L6：8×8 Extended Crafting 框架平台 + UltraTech 控制核心，阶段 19。
- L7：9×9 Extended Crafting 框架平台 + UltraTech 控制核心，阶段 23。
- L8：10×10 UltraTech 创世组装平台，阶段 27；官方 Extended Crafting 1.20.1 原生桌面最高为 9×9，L8 不假定其存在未证实 API。
- 精密组装线：5×3×5，阶段 19；工业装配机：7×5×7，阶段 25。二者均以 Extended Crafting 框架和 UltraTech 控制器形成结构，并消费带有对应设施字段的融合配方。
- 每台控制器在放置时绑定放置者的研究档案；执行时同时校验配方阶段与目录中的研究节点，自动化供料不能绕过研究门槛。

## A. 精华/作物融合材料（140）

### inferium_carbon_fiber — 下级精华碳纤维 / Inferium Carbon Fiber
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:inferium_essence + mekanism:alloy_infused → ultratech:inferium_carbon_fiber
- **工业用途**：Stable agricultural feedstock for carbon fiber industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_silicon_wafer — 下级精华硅晶圆 / Inferium Silicon Wafer
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:inferium_essence + thermal:machine_pulverizer → ultratech:inferium_silicon_wafer
- **工业用途**：Stable agricultural feedstock for silicon wafer industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_ceramic_matrix — 下级精华陶瓷基体 / Inferium Ceramic Matrix
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:inferium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:inferium_ceramic_matrix
- **工业用途**：Stable agricultural feedstock for ceramic matrix industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_copper_busbar — 下级精华铜母排 / Inferium Copper Busbar
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:inferium_essence + enderio:conduit_binder → ultratech:inferium_copper_busbar
- **工业用途**：Stable agricultural feedstock for copper busbar industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_steel_laminate — 下级精华钢层压板 / Inferium Steel Laminate
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:inferium_essence + avaritia:neutron_ingot → ultratech:inferium_steel_laminate
- **工业用途**：Stable agricultural feedstock for steel laminate industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_titanium_mesh — 下级精华钛网 / Inferium Titanium Mesh
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:inferium_essence + mekanism:alloy_infused → ultratech:inferium_titanium_mesh
- **工业用途**：Stable agricultural feedstock for titanium mesh industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_nickel_foam — 下级精华镍泡沫 / Inferium Nickel Foam
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:inferium_essence + thermal:machine_pulverizer → ultratech:inferium_nickel_foam
- **工业用途**：Stable agricultural feedstock for nickel foam industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_graphite_die — 下级精华石墨模具 / Inferium Graphite Die
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:inferium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:inferium_graphite_die
- **工业用途**：Stable agricultural feedstock for graphite die industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_polymer_resin — 下级精华聚合树脂 / Inferium Polymer Resin
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:inferium_essence + enderio:conduit_binder → ultratech:inferium_polymer_resin
- **工业用途**：Stable agricultural feedstock for polymer resin industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_glass_fiber — 下级精华玻璃纤维 / Inferium Glass Fiber
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:inferium_essence + avaritia:neutron_ingot → ultratech:inferium_glass_fiber
- **工业用途**：Stable agricultural feedstock for glass fiber industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_bearing_cage — 下级精华轴承保持架 / Inferium Bearing Cage
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:inferium_essence + mekanism:alloy_infused → ultratech:inferium_bearing_cage
- **工业用途**：Stable agricultural feedstock for bearing cage industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_heat_sink — 下级精华散热器 / Inferium Heat Sink
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:inferium_essence + thermal:machine_pulverizer → ultratech:inferium_heat_sink
- **工业用途**：Stable agricultural feedstock for heat sink industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_precision_gear — 下级精华精密齿轮 / Inferium Precision Gear
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:inferium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:inferium_precision_gear
- **工业用途**：Stable agricultural feedstock for precision gear industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_circuit_substrate — 下级精华电路基板 / Inferium Circuit Substrate
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:inferium_essence + enderio:conduit_binder → ultratech:inferium_circuit_substrate
- **工业用途**：Stable agricultural feedstock for circuit substrate industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_coil_winding — 下级精华线圈绕组 / Inferium Coil Winding
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:inferium_essence + avaritia:neutron_ingot → ultratech:inferium_coil_winding
- **工业用途**：Stable agricultural feedstock for coil winding industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_pressure_shell — 下级精华压力壳体 / Inferium Pressure Shell
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:inferium_essence + mekanism:alloy_infused → ultratech:inferium_pressure_shell
- **工业用途**：Stable agricultural feedstock for pressure shell industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_fluid_manifold — 下级精华流体歧管 / Inferium Fluid Manifold
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:inferium_essence + thermal:machine_pulverizer → ultratech:inferium_fluid_manifold
- **工业用途**：Stable agricultural feedstock for fluid manifold industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_cable_harness — 下级精华线缆线束 / Inferium Cable Harness
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:inferium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:inferium_cable_harness
- **工业用途**：Stable agricultural feedstock for cable harness industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_sensor_array — 下级精华传感阵列 / Inferium Sensor Array
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:inferium_essence + enderio:conduit_binder → ultratech:inferium_sensor_array
- **工业用途**：Stable agricultural feedstock for sensor array industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_filter_membrane — 下级精华滤膜 / Inferium Filter Membrane
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:inferium_essence + avaritia:neutron_ingot → ultratech:inferium_filter_membrane
- **工业用途**：Stable agricultural feedstock for filter membrane industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_catalyst_bed — 下级精华催化床 / Inferium Catalyst Bed
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:inferium_essence + mekanism:alloy_infused → ultratech:inferium_catalyst_bed
- **工业用途**：Stable agricultural feedstock for catalyst bed industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_pump_impeller — 下级精华泵叶轮 / Inferium Pump Impeller
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:inferium_essence + thermal:machine_pulverizer → ultratech:inferium_pump_impeller
- **工业用途**：Stable agricultural feedstock for pump impeller industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_alloy_plate — 下级精华合金板 / Inferium Alloy Plate
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:inferium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:inferium_alloy_plate
- **工业用途**：Stable agricultural feedstock for alloy plate industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_machine_casing — 下级精华机器外壳 / Inferium Machine Casing
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:inferium_essence + enderio:conduit_binder → ultratech:inferium_machine_casing
- **工业用途**：Stable agricultural feedstock for machine casing industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_quantum_dot — 下级精华量子点 / Inferium Quantum Dot
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:inferium_essence + avaritia:neutron_ingot → ultratech:inferium_quantum_dot
- **工业用途**：Stable agricultural feedstock for quantum dot industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_superconductor — 下级精华超导体 / Inferium Superconductor
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:inferium_essence + mekanism:alloy_infused → ultratech:inferium_superconductor
- **工业用途**：Stable agricultural feedstock for superconductor industrial batches.
- **阶段 / 设施**：阶段 7 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### inferium_field_lattice — 下级精华场晶格 / Inferium Field Lattice
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:inferium_essence + thermal:machine_pulverizer → ultratech:inferium_field_lattice
- **工业用途**：Stable agricultural feedstock for field lattice industrial batches.
- **阶段 / 设施**：阶段 8 / l3_5x5
- **研究映射**：mystical_agriculture_stage_6

### inferium_genesis_plate — 下级精华创世板 / Inferium Genesis Plate
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:inferium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:inferium_genesis_plate
- **工业用途**：Stable agricultural feedstock for genesis plate industrial batches.
- **阶段 / 设施**：阶段 6 / l2_4x4
- **研究映射**：mystical_agriculture_stage_6

### prudentium_carbon_fiber — 中级精华碳纤维 / Prudentium Carbon Fiber
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:prudentium_carbon_fiber
- **工业用途**：Stable agricultural feedstock for carbon fiber industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_silicon_wafer — 中级精华硅晶圆 / Prudentium Silicon Wafer
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:prudentium_silicon_wafer
- **工业用途**：Stable agricultural feedstock for silicon wafer industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_ceramic_matrix — 中级精华陶瓷基体 / Prudentium Ceramic Matrix
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:prudentium_ceramic_matrix
- **工业用途**：Stable agricultural feedstock for ceramic matrix industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_copper_busbar — 中级精华铜母排 / Prudentium Copper Busbar
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:prudentium_copper_busbar
- **工业用途**：Stable agricultural feedstock for copper busbar industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_steel_laminate — 中级精华钢层压板 / Prudentium Steel Laminate
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:prudentium_steel_laminate
- **工业用途**：Stable agricultural feedstock for steel laminate industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_titanium_mesh — 中级精华钛网 / Prudentium Titanium Mesh
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:prudentium_titanium_mesh
- **工业用途**：Stable agricultural feedstock for titanium mesh industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_nickel_foam — 中级精华镍泡沫 / Prudentium Nickel Foam
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:prudentium_nickel_foam
- **工业用途**：Stable agricultural feedstock for nickel foam industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_graphite_die — 中级精华石墨模具 / Prudentium Graphite Die
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:prudentium_graphite_die
- **工业用途**：Stable agricultural feedstock for graphite die industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_polymer_resin — 中级精华聚合树脂 / Prudentium Polymer Resin
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:prudentium_polymer_resin
- **工业用途**：Stable agricultural feedstock for polymer resin industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_glass_fiber — 中级精华玻璃纤维 / Prudentium Glass Fiber
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:prudentium_glass_fiber
- **工业用途**：Stable agricultural feedstock for glass fiber industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_bearing_cage — 中级精华轴承保持架 / Prudentium Bearing Cage
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:prudentium_bearing_cage
- **工业用途**：Stable agricultural feedstock for bearing cage industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_heat_sink — 中级精华散热器 / Prudentium Heat Sink
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:prudentium_heat_sink
- **工业用途**：Stable agricultural feedstock for heat sink industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_precision_gear — 中级精华精密齿轮 / Prudentium Precision Gear
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:prudentium_precision_gear
- **工业用途**：Stable agricultural feedstock for precision gear industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_circuit_substrate — 中级精华电路基板 / Prudentium Circuit Substrate
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:prudentium_circuit_substrate
- **工业用途**：Stable agricultural feedstock for circuit substrate industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_coil_winding — 中级精华线圈绕组 / Prudentium Coil Winding
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:prudentium_coil_winding
- **工业用途**：Stable agricultural feedstock for coil winding industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_pressure_shell — 中级精华压力壳体 / Prudentium Pressure Shell
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:prudentium_pressure_shell
- **工业用途**：Stable agricultural feedstock for pressure shell industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_fluid_manifold — 中级精华流体歧管 / Prudentium Fluid Manifold
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:prudentium_fluid_manifold
- **工业用途**：Stable agricultural feedstock for fluid manifold industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_cable_harness — 中级精华线缆线束 / Prudentium Cable Harness
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:prudentium_cable_harness
- **工业用途**：Stable agricultural feedstock for cable harness industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_sensor_array — 中级精华传感阵列 / Prudentium Sensor Array
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:prudentium_sensor_array
- **工业用途**：Stable agricultural feedstock for sensor array industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_filter_membrane — 中级精华滤膜 / Prudentium Filter Membrane
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:prudentium_filter_membrane
- **工业用途**：Stable agricultural feedstock for filter membrane industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_catalyst_bed — 中级精华催化床 / Prudentium Catalyst Bed
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:prudentium_catalyst_bed
- **工业用途**：Stable agricultural feedstock for catalyst bed industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_pump_impeller — 中级精华泵叶轮 / Prudentium Pump Impeller
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:prudentium_pump_impeller
- **工业用途**：Stable agricultural feedstock for pump impeller industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_alloy_plate — 中级精华合金板 / Prudentium Alloy Plate
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:prudentium_alloy_plate
- **工业用途**：Stable agricultural feedstock for alloy plate industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_machine_casing — 中级精华机器外壳 / Prudentium Machine Casing
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:prudentium_machine_casing
- **工业用途**：Stable agricultural feedstock for machine casing industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_quantum_dot — 中级精华量子点 / Prudentium Quantum Dot
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:prudentium_quantum_dot
- **工业用途**：Stable agricultural feedstock for quantum dot industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_superconductor — 中级精华超导体 / Prudentium Superconductor
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:prudentium_superconductor
- **工业用途**：Stable agricultural feedstock for superconductor industrial batches.
- **阶段 / 设施**：阶段 11 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### prudentium_field_lattice — 中级精华场晶格 / Prudentium Field Lattice
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:prudentium_field_lattice
- **工业用途**：Stable agricultural feedstock for field lattice industrial batches.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### prudentium_genesis_plate — 中级精华创世板 / Prudentium Genesis Plate
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:prudentium_genesis_plate
- **工业用途**：Stable agricultural feedstock for genesis plate industrial batches.
- **阶段 / 设施**：阶段 10 / l3_5x5
- **研究映射**：mystical_agriculture_stage_10

### tertium_carbon_fiber — 高级精华碳纤维 / Tertium Carbon Fiber
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:tertium_carbon_fiber
- **工业用途**：Stable agricultural feedstock for carbon fiber industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_silicon_wafer — 高级精华硅晶圆 / Tertium Silicon Wafer
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:tertium_silicon_wafer
- **工业用途**：Stable agricultural feedstock for silicon wafer industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_ceramic_matrix — 高级精华陶瓷基体 / Tertium Ceramic Matrix
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:tertium_ceramic_matrix
- **工业用途**：Stable agricultural feedstock for ceramic matrix industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_copper_busbar — 高级精华铜母排 / Tertium Copper Busbar
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:tertium_copper_busbar
- **工业用途**：Stable agricultural feedstock for copper busbar industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_steel_laminate — 高级精华钢层压板 / Tertium Steel Laminate
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:tertium_steel_laminate
- **工业用途**：Stable agricultural feedstock for steel laminate industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_titanium_mesh — 高级精华钛网 / Tertium Titanium Mesh
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:tertium_titanium_mesh
- **工业用途**：Stable agricultural feedstock for titanium mesh industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_nickel_foam — 高级精华镍泡沫 / Tertium Nickel Foam
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:tertium_nickel_foam
- **工业用途**：Stable agricultural feedstock for nickel foam industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_graphite_die — 高级精华石墨模具 / Tertium Graphite Die
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:tertium_graphite_die
- **工业用途**：Stable agricultural feedstock for graphite die industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_polymer_resin — 高级精华聚合树脂 / Tertium Polymer Resin
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:tertium_polymer_resin
- **工业用途**：Stable agricultural feedstock for polymer resin industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_glass_fiber — 高级精华玻璃纤维 / Tertium Glass Fiber
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:tertium_glass_fiber
- **工业用途**：Stable agricultural feedstock for glass fiber industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_bearing_cage — 高级精华轴承保持架 / Tertium Bearing Cage
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:tertium_bearing_cage
- **工业用途**：Stable agricultural feedstock for bearing cage industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_heat_sink — 高级精华散热器 / Tertium Heat Sink
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:tertium_heat_sink
- **工业用途**：Stable agricultural feedstock for heat sink industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_precision_gear — 高级精华精密齿轮 / Tertium Precision Gear
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:tertium_precision_gear
- **工业用途**：Stable agricultural feedstock for precision gear industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_circuit_substrate — 高级精华电路基板 / Tertium Circuit Substrate
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:tertium_circuit_substrate
- **工业用途**：Stable agricultural feedstock for circuit substrate industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_coil_winding — 高级精华线圈绕组 / Tertium Coil Winding
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:tertium_coil_winding
- **工业用途**：Stable agricultural feedstock for coil winding industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_pressure_shell — 高级精华压力壳体 / Tertium Pressure Shell
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:tertium_pressure_shell
- **工业用途**：Stable agricultural feedstock for pressure shell industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_fluid_manifold — 高级精华流体歧管 / Tertium Fluid Manifold
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:tertium_fluid_manifold
- **工业用途**：Stable agricultural feedstock for fluid manifold industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_cable_harness — 高级精华线缆线束 / Tertium Cable Harness
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:tertium_cable_harness
- **工业用途**：Stable agricultural feedstock for cable harness industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_sensor_array — 高级精华传感阵列 / Tertium Sensor Array
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:tertium_sensor_array
- **工业用途**：Stable agricultural feedstock for sensor array industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_filter_membrane — 高级精华滤膜 / Tertium Filter Membrane
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:tertium_filter_membrane
- **工业用途**：Stable agricultural feedstock for filter membrane industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_catalyst_bed — 高级精华催化床 / Tertium Catalyst Bed
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:tertium_catalyst_bed
- **工业用途**：Stable agricultural feedstock for catalyst bed industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_pump_impeller — 高级精华泵叶轮 / Tertium Pump Impeller
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:tertium_pump_impeller
- **工业用途**：Stable agricultural feedstock for pump impeller industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_alloy_plate — 高级精华合金板 / Tertium Alloy Plate
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:tertium_alloy_plate
- **工业用途**：Stable agricultural feedstock for alloy plate industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_machine_casing — 高级精华机器外壳 / Tertium Machine Casing
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:tertium_machine_casing
- **工业用途**：Stable agricultural feedstock for machine casing industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_quantum_dot — 高级精华量子点 / Tertium Quantum Dot
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:tertium_quantum_dot
- **工业用途**：Stable agricultural feedstock for quantum dot industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_superconductor — 高级精华超导体 / Tertium Superconductor
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:tertium_superconductor
- **工业用途**：Stable agricultural feedstock for superconductor industrial batches.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### tertium_field_lattice — 高级精华场晶格 / Tertium Field Lattice
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:tertium_field_lattice
- **工业用途**：Stable agricultural feedstock for field lattice industrial batches.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### tertium_genesis_plate — 高级精华创世板 / Tertium Genesis Plate
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:tertium_genesis_plate
- **工业用途**：Stable agricultural feedstock for genesis plate industrial batches.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### imperium_carbon_fiber — 终极精华碳纤维 / Imperium Carbon Fiber
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:imperium_carbon_fiber
- **工业用途**：Stable agricultural feedstock for carbon fiber industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_silicon_wafer — 终极精华硅晶圆 / Imperium Silicon Wafer
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:imperium_silicon_wafer
- **工业用途**：Stable agricultural feedstock for silicon wafer industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_ceramic_matrix — 终极精华陶瓷基体 / Imperium Ceramic Matrix
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:imperium_ceramic_matrix
- **工业用途**：Stable agricultural feedstock for ceramic matrix industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_copper_busbar — 终极精华铜母排 / Imperium Copper Busbar
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:imperium_copper_busbar
- **工业用途**：Stable agricultural feedstock for copper busbar industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_steel_laminate — 终极精华钢层压板 / Imperium Steel Laminate
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:imperium_steel_laminate
- **工业用途**：Stable agricultural feedstock for steel laminate industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_titanium_mesh — 终极精华钛网 / Imperium Titanium Mesh
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:imperium_titanium_mesh
- **工业用途**：Stable agricultural feedstock for titanium mesh industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_nickel_foam — 终极精华镍泡沫 / Imperium Nickel Foam
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:imperium_nickel_foam
- **工业用途**：Stable agricultural feedstock for nickel foam industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_graphite_die — 终极精华石墨模具 / Imperium Graphite Die
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:imperium_graphite_die
- **工业用途**：Stable agricultural feedstock for graphite die industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_polymer_resin — 终极精华聚合树脂 / Imperium Polymer Resin
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:imperium_polymer_resin
- **工业用途**：Stable agricultural feedstock for polymer resin industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_glass_fiber — 终极精华玻璃纤维 / Imperium Glass Fiber
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:imperium_glass_fiber
- **工业用途**：Stable agricultural feedstock for glass fiber industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_bearing_cage — 终极精华轴承保持架 / Imperium Bearing Cage
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:imperium_bearing_cage
- **工业用途**：Stable agricultural feedstock for bearing cage industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_heat_sink — 终极精华散热器 / Imperium Heat Sink
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:imperium_heat_sink
- **工业用途**：Stable agricultural feedstock for heat sink industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_precision_gear — 终极精华精密齿轮 / Imperium Precision Gear
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:imperium_precision_gear
- **工业用途**：Stable agricultural feedstock for precision gear industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_circuit_substrate — 终极精华电路基板 / Imperium Circuit Substrate
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:imperium_circuit_substrate
- **工业用途**：Stable agricultural feedstock for circuit substrate industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_coil_winding — 终极精华线圈绕组 / Imperium Coil Winding
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:imperium_coil_winding
- **工业用途**：Stable agricultural feedstock for coil winding industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_pressure_shell — 终极精华压力壳体 / Imperium Pressure Shell
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:imperium_pressure_shell
- **工业用途**：Stable agricultural feedstock for pressure shell industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_fluid_manifold — 终极精华流体歧管 / Imperium Fluid Manifold
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:imperium_fluid_manifold
- **工业用途**：Stable agricultural feedstock for fluid manifold industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_cable_harness — 终极精华线缆线束 / Imperium Cable Harness
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:imperium_cable_harness
- **工业用途**：Stable agricultural feedstock for cable harness industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_sensor_array — 终极精华传感阵列 / Imperium Sensor Array
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:imperium_sensor_array
- **工业用途**：Stable agricultural feedstock for sensor array industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_filter_membrane — 终极精华滤膜 / Imperium Filter Membrane
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:imperium_filter_membrane
- **工业用途**：Stable agricultural feedstock for filter membrane industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_catalyst_bed — 终极精华催化床 / Imperium Catalyst Bed
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:imperium_catalyst_bed
- **工业用途**：Stable agricultural feedstock for catalyst bed industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_pump_impeller — 终极精华泵叶轮 / Imperium Pump Impeller
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:imperium_pump_impeller
- **工业用途**：Stable agricultural feedstock for pump impeller industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_alloy_plate — 终极精华合金板 / Imperium Alloy Plate
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:imperium_alloy_plate
- **工业用途**：Stable agricultural feedstock for alloy plate industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_machine_casing — 终极精华机器外壳 / Imperium Machine Casing
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:imperium_machine_casing
- **工业用途**：Stable agricultural feedstock for machine casing industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_quantum_dot — 终极精华量子点 / Imperium Quantum Dot
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:imperium_quantum_dot
- **工业用途**：Stable agricultural feedstock for quantum dot industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### imperium_superconductor — 终极精华超导体 / Imperium Superconductor
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:imperium_superconductor
- **工业用途**：Stable agricultural feedstock for superconductor industrial batches.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_field_lattice — 终极精华场晶格 / Imperium Field Lattice
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:imperium_field_lattice
- **工业用途**：Stable agricultural feedstock for field lattice industrial batches.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### imperium_genesis_plate — 终极精华创世板 / Imperium Genesis Plate
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:imperium_genesis_plate
- **工业用途**：Stable agricultural feedstock for genesis plate industrial batches.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### supremium_carbon_fiber — 至尊精华碳纤维 / Supremium Carbon Fiber
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:supremium_essence + avaritia:neutron_ingot → ultratech:supremium_carbon_fiber
- **工业用途**：Stable agricultural feedstock for carbon fiber industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_silicon_wafer — 至尊精华硅晶圆 / Supremium Silicon Wafer
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:supremium_essence + mekanism:alloy_infused → ultratech:supremium_silicon_wafer
- **工业用途**：Stable agricultural feedstock for silicon wafer industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_ceramic_matrix — 至尊精华陶瓷基体 / Supremium Ceramic Matrix
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:supremium_essence + thermal:machine_pulverizer → ultratech:supremium_ceramic_matrix
- **工业用途**：Stable agricultural feedstock for ceramic matrix industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_copper_busbar — 至尊精华铜母排 / Supremium Copper Busbar
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:supremium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:supremium_copper_busbar
- **工业用途**：Stable agricultural feedstock for copper busbar industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_steel_laminate — 至尊精华钢层压板 / Supremium Steel Laminate
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:supremium_essence + enderio:conduit_binder → ultratech:supremium_steel_laminate
- **工业用途**：Stable agricultural feedstock for steel laminate industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_titanium_mesh — 至尊精华钛网 / Supremium Titanium Mesh
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:supremium_essence + avaritia:neutron_ingot → ultratech:supremium_titanium_mesh
- **工业用途**：Stable agricultural feedstock for titanium mesh industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_nickel_foam — 至尊精华镍泡沫 / Supremium Nickel Foam
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:supremium_essence + mekanism:alloy_infused → ultratech:supremium_nickel_foam
- **工业用途**：Stable agricultural feedstock for nickel foam industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_graphite_die — 至尊精华石墨模具 / Supremium Graphite Die
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:supremium_essence + thermal:machine_pulverizer → ultratech:supremium_graphite_die
- **工业用途**：Stable agricultural feedstock for graphite die industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_polymer_resin — 至尊精华聚合树脂 / Supremium Polymer Resin
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:supremium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:supremium_polymer_resin
- **工业用途**：Stable agricultural feedstock for polymer resin industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_glass_fiber — 至尊精华玻璃纤维 / Supremium Glass Fiber
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:supremium_essence + enderio:conduit_binder → ultratech:supremium_glass_fiber
- **工业用途**：Stable agricultural feedstock for glass fiber industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_bearing_cage — 至尊精华轴承保持架 / Supremium Bearing Cage
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:supremium_essence + avaritia:neutron_ingot → ultratech:supremium_bearing_cage
- **工业用途**：Stable agricultural feedstock for bearing cage industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_heat_sink — 至尊精华散热器 / Supremium Heat Sink
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:supremium_essence + mekanism:alloy_infused → ultratech:supremium_heat_sink
- **工业用途**：Stable agricultural feedstock for heat sink industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_precision_gear — 至尊精华精密齿轮 / Supremium Precision Gear
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:supremium_essence + thermal:machine_pulverizer → ultratech:supremium_precision_gear
- **工业用途**：Stable agricultural feedstock for precision gear industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_circuit_substrate — 至尊精华电路基板 / Supremium Circuit Substrate
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:supremium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:supremium_circuit_substrate
- **工业用途**：Stable agricultural feedstock for circuit substrate industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_coil_winding — 至尊精华线圈绕组 / Supremium Coil Winding
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:supremium_essence + enderio:conduit_binder → ultratech:supremium_coil_winding
- **工业用途**：Stable agricultural feedstock for coil winding industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_pressure_shell — 至尊精华压力壳体 / Supremium Pressure Shell
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:supremium_essence + avaritia:neutron_ingot → ultratech:supremium_pressure_shell
- **工业用途**：Stable agricultural feedstock for pressure shell industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_fluid_manifold — 至尊精华流体歧管 / Supremium Fluid Manifold
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:supremium_essence + mekanism:alloy_infused → ultratech:supremium_fluid_manifold
- **工业用途**：Stable agricultural feedstock for fluid manifold industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_cable_harness — 至尊精华线缆线束 / Supremium Cable Harness
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:supremium_essence + thermal:machine_pulverizer → ultratech:supremium_cable_harness
- **工业用途**：Stable agricultural feedstock for cable harness industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_sensor_array — 至尊精华传感阵列 / Supremium Sensor Array
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:supremium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:supremium_sensor_array
- **工业用途**：Stable agricultural feedstock for sensor array industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_filter_membrane — 至尊精华滤膜 / Supremium Filter Membrane
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:supremium_essence + enderio:conduit_binder → ultratech:supremium_filter_membrane
- **工业用途**：Stable agricultural feedstock for filter membrane industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_catalyst_bed — 至尊精华催化床 / Supremium Catalyst Bed
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:supremium_essence + avaritia:neutron_ingot → ultratech:supremium_catalyst_bed
- **工业用途**：Stable agricultural feedstock for catalyst bed industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_pump_impeller — 至尊精华泵叶轮 / Supremium Pump Impeller
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:supremium_essence + mekanism:alloy_infused → ultratech:supremium_pump_impeller
- **工业用途**：Stable agricultural feedstock for pump impeller industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_alloy_plate — 至尊精华合金板 / Supremium Alloy Plate
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:supremium_essence + thermal:machine_pulverizer → ultratech:supremium_alloy_plate
- **工业用途**：Stable agricultural feedstock for alloy plate industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_machine_casing — 至尊精华机器外壳 / Supremium Machine Casing
- **涉及模组**：mysticalagriculture、pneumaticcraft
- **输入结构**：mysticalagriculture:supremium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:supremium_machine_casing
- **工业用途**：Stable agricultural feedstock for machine casing industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_quantum_dot — 至尊精华量子点 / Supremium Quantum Dot
- **涉及模组**：mysticalagriculture、enderio
- **输入结构**：mysticalagriculture:supremium_essence + enderio:conduit_binder → ultratech:supremium_quantum_dot
- **工业用途**：Stable agricultural feedstock for quantum dot industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_superconductor — 至尊精华超导体 / Supremium Superconductor
- **涉及模组**：mysticalagriculture、avaritia
- **输入结构**：mysticalagriculture:supremium_essence + avaritia:neutron_ingot → ultratech:supremium_superconductor
- **工业用途**：Stable agricultural feedstock for superconductor industrial batches.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_field_lattice — 至尊精华场晶格 / Supremium Field Lattice
- **涉及模组**：mysticalagriculture、mekanism
- **输入结构**：mysticalagriculture:supremium_essence + mekanism:alloy_infused → ultratech:supremium_field_lattice
- **工业用途**：Stable agricultural feedstock for field lattice industrial batches.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### supremium_genesis_plate — 至尊精华创世板 / Supremium Genesis Plate
- **涉及模组**：mysticalagriculture、thermal
- **输入结构**：mysticalagriculture:supremium_essence + thermal:machine_pulverizer → ultratech:supremium_genesis_plate
- **工业用途**：Stable agricultural feedstock for genesis plate industrial batches.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

## B. 奇点/终局融合材料（110）

### singularity_compressed_substrate_1 — 压缩奇点基底 / Compressed Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_compressed_substrate_1
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_quantized_alloy_1 — 量子化奇点合金 / Quantized Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_quantized_alloy_1
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_resonant_ceramic_1 — 谐振奇点陶瓷 / Resonant Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_resonant_ceramic_1
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_digital_coil_1 — 数字奇点线圈 / Digital Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_digital_coil_1
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_catalytic_matrix_1 — 催化奇点矩阵 / Catalytic Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_catalytic_matrix_1
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_cryogenic_substrate_2 — 低温奇点基底 / Cryogenic Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_cryogenic_substrate_2
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_entangled_alloy_2 — 纠缠奇点合金 / Entangled Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_entangled_alloy_2
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_recursive_ceramic_2 — 递归奇点陶瓷 / Recursive Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_recursive_ceramic_2
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_stabilized_coil_2 — 稳定奇点线圈 / Stabilized Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_stabilized_coil_2
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_terminal_matrix_2 — 终端奇点矩阵 / Terminal Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_terminal_matrix_2
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_lattice_substrate_3 — 晶格奇点基底 / Lattice Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_lattice_substrate_3
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_inertial_alloy_3 — 惯性奇点合金 / Inertial Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_inertial_alloy_3
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_spectral_ceramic_3 — 谱域奇点陶瓷 / Spectral Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_spectral_ceramic_3
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_genesis_coil_3 — 创世奇点线圈 / Genesis Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_genesis_coil_3
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_recovery_matrix_3 — 回收奇点矩阵 / Recovery Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_recovery_matrix_3
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_field_substrate_4 — 场奇点基底 / Field Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_field_substrate_4
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_pulse_alloy_4 — 脉冲奇点合金 / Pulse Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_pulse_alloy_4
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_fusion_ceramic_4 — 聚变奇点陶瓷 / Fusion Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_fusion_ceramic_4
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_inventory_coil_4 — 库存奇点线圈 / Inventory Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_inventory_coil_4
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_assembly_matrix_4 — 组装奇点矩阵 / Assembly Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_assembly_matrix_4
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_routing_substrate_5 — 路由奇点基底 / Routing Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_routing_substrate_5
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_reactive_alloy_5 — 反应奇点合金 / Reactive Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_reactive_alloy_5
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_compressed_ceramic_5 — 压缩奇点陶瓷 / Compressed Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_compressed_ceramic_5
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_quantized_coil_5 — 量子化奇点线圈 / Quantized Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_quantized_coil_5
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_resonant_matrix_5 — 谐振奇点矩阵 / Resonant Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_resonant_matrix_5
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_digital_substrate_6 — 数字奇点基底 / Digital Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_digital_substrate_6
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_catalytic_alloy_6 — 催化奇点合金 / Catalytic Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_catalytic_alloy_6
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_cryogenic_ceramic_6 — 低温奇点陶瓷 / Cryogenic Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_cryogenic_ceramic_6
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### singularity_entangled_coil_6 — 纠缠奇点线圈 / Entangled Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_entangled_coil_6
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_recursive_matrix_6 — 递归奇点矩阵 / Recursive Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_recursive_matrix_6
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_stabilized_substrate_7 — 稳定奇点基底 / Stabilized Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_stabilized_substrate_7
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_terminal_alloy_7 — 终端奇点合金 / Terminal Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_terminal_alloy_7
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### singularity_lattice_ceramic_7 — 晶格奇点陶瓷 / Lattice Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_lattice_ceramic_7
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_inertial_coil_7 — 惯性奇点线圈 / Inertial Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_inertial_coil_7
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_spectral_matrix_7 — 谱域奇点矩阵 / Spectral Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_spectral_matrix_7
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_genesis_substrate_8 — 创世奇点基底 / Genesis Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_genesis_substrate_8
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / l6_8x8
- **研究映射**：extended_crafting_stage_27

### singularity_recovery_alloy_8 — 回收奇点合金 / Recovery Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_recovery_alloy_8
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_field_ceramic_8 — 场奇点陶瓷 / Field Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_field_ceramic_8
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_pulse_coil_8 — 脉冲奇点线圈 / Pulse Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_pulse_coil_8
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_fusion_matrix_8 — 聚变奇点矩阵 / Fusion Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_fusion_matrix_8
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_inventory_substrate_9 — 库存奇点基底 / Inventory Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_inventory_substrate_9
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_assembly_alloy_9 — 组装奇点合金 / Assembly Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_assembly_alloy_9
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_routing_ceramic_9 — 路由奇点陶瓷 / Routing Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_routing_ceramic_9
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_reactive_coil_9 — 反应奇点线圈 / Reactive Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_reactive_coil_9
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_compressed_matrix_9 — 压缩奇点矩阵 / Compressed Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_compressed_matrix_9
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_quantized_substrate_10 — 量子化奇点基底 / Quantized Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_quantized_substrate_10
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_resonant_alloy_10 — 谐振奇点合金 / Resonant Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_resonant_alloy_10
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_digital_ceramic_10 — 数字奇点陶瓷 / Digital Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_digital_ceramic_10
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_catalytic_coil_10 — 催化奇点线圈 / Catalytic Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_catalytic_coil_10
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_cryogenic_matrix_10 — 低温奇点矩阵 / Cryogenic Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_cryogenic_matrix_10
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_entangled_substrate_11 — 纠缠奇点基底 / Entangled Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_entangled_substrate_11
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_recursive_alloy_11 — 递归奇点合金 / Recursive Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_recursive_alloy_11
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_stabilized_ceramic_11 — 稳定奇点陶瓷 / Stabilized Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_stabilized_ceramic_11
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_terminal_coil_11 — 终端奇点线圈 / Terminal Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_terminal_coil_11
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_lattice_matrix_11 — 晶格奇点矩阵 / Lattice Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_lattice_matrix_11
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_inertial_substrate_12 — 惯性奇点基底 / Inertial Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_inertial_substrate_12
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_spectral_alloy_12 — 谱域奇点合金 / Spectral Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_spectral_alloy_12
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_genesis_ceramic_12 — 创世奇点陶瓷 / Genesis Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_genesis_ceramic_12
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_recovery_coil_12 — 回收奇点线圈 / Recovery Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_recovery_coil_12
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_field_matrix_12 — 场奇点矩阵 / Field Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_field_matrix_12
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_pulse_substrate_13 — 脉冲奇点基底 / Pulse Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_pulse_substrate_13
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_fusion_alloy_13 — 聚变奇点合金 / Fusion Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_fusion_alloy_13
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_inventory_ceramic_13 — 库存奇点陶瓷 / Inventory Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_inventory_ceramic_13
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_assembly_coil_13 — 组装奇点线圈 / Assembly Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_assembly_coil_13
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / l7_9x9
- **研究映射**：extended_crafting_stage_19

### singularity_routing_matrix_13 — 路由奇点矩阵 / Routing Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_routing_matrix_13
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_reactive_substrate_14 — 反应奇点基底 / Reactive Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_reactive_substrate_14
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_compressed_alloy_14 — 压缩奇点合金 / Compressed Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_compressed_alloy_14
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_quantized_ceramic_14 — 量子化奇点陶瓷 / Quantized Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_quantized_ceramic_14
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### singularity_resonant_coil_14 — 谐振奇点线圈 / Resonant Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_resonant_coil_14
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_digital_matrix_14 — 数字奇点矩阵 / Digital Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_digital_matrix_14
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / l7_9x9
- **研究映射**：extended_crafting_stage_27

### singularity_catalytic_substrate_15 — 催化奇点基底 / Catalytic Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_catalytic_substrate_15
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / precision_assembly_line
- **研究映射**：extended_crafting_stage_27

### singularity_cryogenic_alloy_15 — 低温奇点合金 / Cryogenic Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_cryogenic_alloy_15
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / precision_assembly_line
- **研究映射**：extended_crafting_stage_27

### singularity_entangled_ceramic_15 — 纠缠奇点陶瓷 / Entangled Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_entangled_ceramic_15
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_recursive_coil_15 — 递归奇点线圈 / Recursive Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_recursive_coil_15
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_stabilized_matrix_15 — 稳定奇点矩阵 / Stabilized Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_stabilized_matrix_15
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_terminal_substrate_16 — 终端奇点基底 / Terminal Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_terminal_substrate_16
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_lattice_alloy_16 — 晶格奇点合金 / Lattice Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_lattice_alloy_16
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_inertial_ceramic_16 — 惯性奇点陶瓷 / Inertial Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_inertial_ceramic_16
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_spectral_coil_16 — 谱域奇点线圈 / Spectral Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_spectral_coil_16
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_genesis_matrix_16 — 创世奇点矩阵 / Genesis Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_genesis_matrix_16
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_recovery_substrate_17 — 回收奇点基底 / Recovery Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_recovery_substrate_17
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / precision_assembly_line
- **研究映射**：extended_crafting_stage_27

### singularity_field_alloy_17 — 场奇点合金 / Field Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_field_alloy_17
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / precision_assembly_line
- **研究映射**：extended_crafting_stage_27

### singularity_pulse_ceramic_17 — 脉冲奇点陶瓷 / Pulse Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_pulse_ceramic_17
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / precision_assembly_line
- **研究映射**：extended_crafting_stage_27

### singularity_fusion_coil_17 — 聚变奇点线圈 / Fusion Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_fusion_coil_17
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / precision_assembly_line
- **研究映射**：extended_crafting_stage_27

### singularity_inventory_matrix_17 — 库存奇点矩阵 / Inventory Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_inventory_matrix_17
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_assembly_substrate_18 — 组装奇点基底 / Assembly Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_assembly_substrate_18
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_routing_alloy_18 — 路由奇点合金 / Routing Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_routing_alloy_18
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_reactive_ceramic_18 — 反应奇点陶瓷 / Reactive Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_reactive_ceramic_18
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / precision_assembly_line
- **研究映射**：extended_crafting_stage_19

### singularity_compressed_coil_18 — 压缩奇点线圈 / Compressed Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_compressed_coil_18
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_quantized_matrix_18 — 量子化奇点矩阵 / Quantized Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_quantized_matrix_18
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_resonant_substrate_19 — 谐振奇点基底 / Resonant Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_resonant_substrate_19
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_digital_alloy_19 — 数字奇点合金 / Digital Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_digital_alloy_19
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### singularity_catalytic_ceramic_19 — 催化奇点陶瓷 / Catalytic Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_catalytic_ceramic_19
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_cryogenic_coil_19 — 低温奇点线圈 / Cryogenic Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_cryogenic_coil_19
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_entangled_matrix_19 — 纠缠奇点矩阵 / Entangled Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_entangled_matrix_19
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_recursive_substrate_20 — 递归奇点基底 / Recursive Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_recursive_substrate_20
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_stabilized_alloy_20 — 稳定奇点合金 / Stabilized Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_stabilized_alloy_20
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / industrial_assembler
- **研究映射**：extended_crafting_stage_19

### singularity_terminal_ceramic_20 — 终端奇点陶瓷 / Terminal Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_terminal_ceramic_20
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / industrial_assembler
- **研究映射**：extended_crafting_stage_19

### singularity_lattice_coil_20 — 晶格奇点线圈 / Lattice Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_lattice_coil_20
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 21 / industrial_assembler
- **研究映射**：extended_crafting_stage_19

### singularity_inertial_matrix_20 — 惯性奇点矩阵 / Inertial Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_inertial_matrix_20
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 22 / industrial_assembler
- **研究映射**：extended_crafting_stage_19

### singularity_spectral_substrate_21 — 谱域奇点基底 / Spectral Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_spectral_substrate_21
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 23 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### singularity_genesis_alloy_21 — 创世奇点合金 / Genesis Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_genesis_alloy_21
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 24 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### singularity_recovery_ceramic_21 — 回收奇点陶瓷 / Recovery Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_recovery_ceramic_21
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 25 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### singularity_field_coil_21 — 场奇点线圈 / Field Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_field_coil_21
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 26 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### singularity_pulse_matrix_21 — 脉冲奇点矩阵 / Pulse Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_pulse_matrix_21
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 27 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_fusion_substrate_22 — 聚变奇点基底 / Fusion Singularity Substrate
- **涉及模组**：extendedcrafting、avaritia、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + mekanism:alloy_infused → ultratech:singularity_fusion_substrate_22
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 28 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_inventory_alloy_22 — 库存奇点合金 / Inventory Singularity Alloy
- **涉及模组**：extendedcrafting、avaritia、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + thermal:machine_pulverizer → ultratech:singularity_inventory_alloy_22
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 29 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_assembly_ceramic_22 — 组装奇点陶瓷 / Assembly Singularity Ceramic
- **涉及模组**：extendedcrafting、avaritia、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_assembly_ceramic_22
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 30 / industrial_assembler
- **研究映射**：extended_crafting_stage_27

### singularity_routing_coil_22 — 路由奇点线圈 / Routing Singularity Coil
- **涉及模组**：extendedcrafting、avaritia、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + enderio:conduit_binder → ultratech:singularity_routing_coil_22
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 19 / industrial_assembler
- **研究映射**：extended_crafting_stage_19

### singularity_reactive_matrix_22 — 反应奇点矩阵 / Reactive Singularity Matrix
- **涉及模组**：extendedcrafting、avaritia、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + avaritia:neutron_ingot + avaritia:neutron_ingot → ultratech:singularity_reactive_matrix_22
- **工业用途**：High-density terminal intermediate with an explicit recovery-oriented consumer.
- **阶段 / 设施**：阶段 20 / industrial_assembler
- **研究映射**：extended_crafting_stage_19

## C. 大工作台组件（100）

### assembly_l4_frame_1 — L4组装框架 / Level 4 Assembly Frame
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_frame_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_core_1 — L5组装核心 / Level 5 Assembly Core
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_core_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_accelerator_1 — L6组装加速器 / Level 6 Assembly Accelerator
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_accelerator_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_stabilizer_1 — L7组装稳定器 / Level 7 Assembly Stabilizer
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_stabilizer_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_matrix_1 — L8组装矩阵 / Level 8 Assembly Matrix
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_matrix_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_bus_1 — L4组装总线 / Level 4 Assembly Bus
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_bus_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_anchor_1 — L5组装锚 / Level 5 Assembly Anchor
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_anchor_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_manifold_1 — L6组装歧管 / Level 6 Assembly Manifold
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_manifold_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_injector_1 — L7组装注入器 / Level 7 Assembly Injector
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_injector_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_buffer_1 — L8组装缓冲器 / Level 8 Assembly Buffer
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_buffer_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_router_1 — L4组装路由器 / Level 4 Assembly Router
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_router_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_catalyst_1 — L5组装催化剂 / Level 5 Assembly Catalyst
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_catalyst_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_cooler_1 — L6组装冷却器 / Level 6 Assembly Cooler
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_cooler_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_shroud_1 — L7组装护罩 / Level 7 Assembly Shroud
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_shroud_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_fixture_1 — L8组装夹具 / Level 8 Assembly Fixture
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_fixture_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_clamp_1 — L4组装卡箍 / Level 4 Assembly Clamp
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_clamp_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_lattice_1 — L5组装晶格 / Level 5 Assembly Lattice
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_lattice_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_controller_1 — L6组装控制器 / Level 6 Assembly Controller
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_controller_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_pedestal_1 — L7组装基座 / Level 7 Assembly Pedestal
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_pedestal_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_bridge_1 — L8组装桥接器 / Level 8 Assembly Bridge
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_bridge_1
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_frame_2 — L4组装框架 / Level 4 Assembly Frame
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_frame_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_core_2 — L5组装核心 / Level 5 Assembly Core
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_core_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_accelerator_2 — L6组装加速器 / Level 6 Assembly Accelerator
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_accelerator_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_stabilizer_2 — L7组装稳定器 / Level 7 Assembly Stabilizer
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_stabilizer_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_matrix_2 — L8组装矩阵 / Level 8 Assembly Matrix
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_matrix_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_bus_2 — L4组装总线 / Level 4 Assembly Bus
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_bus_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_anchor_2 — L5组装锚 / Level 5 Assembly Anchor
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_anchor_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_manifold_2 — L6组装歧管 / Level 6 Assembly Manifold
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_manifold_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_injector_2 — L7组装注入器 / Level 7 Assembly Injector
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_injector_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_buffer_2 — L8组装缓冲器 / Level 8 Assembly Buffer
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_buffer_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_router_2 — L4组装路由器 / Level 4 Assembly Router
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_router_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_catalyst_2 — L5组装催化剂 / Level 5 Assembly Catalyst
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_catalyst_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_cooler_2 — L6组装冷却器 / Level 6 Assembly Cooler
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_cooler_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_shroud_2 — L7组装护罩 / Level 7 Assembly Shroud
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_shroud_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_fixture_2 — L8组装夹具 / Level 8 Assembly Fixture
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_fixture_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_clamp_2 — L4组装卡箍 / Level 4 Assembly Clamp
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_clamp_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_lattice_2 — L5组装晶格 / Level 5 Assembly Lattice
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_lattice_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_controller_2 — L6组装控制器 / Level 6 Assembly Controller
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_controller_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_pedestal_2 — L7组装基座 / Level 7 Assembly Pedestal
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_pedestal_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_bridge_2 — L8组装桥接器 / Level 8 Assembly Bridge
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_bridge_2
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_frame_3 — L4组装框架 / Level 4 Assembly Frame
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_frame_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_core_3 — L5组装核心 / Level 5 Assembly Core
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_core_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_accelerator_3 — L6组装加速器 / Level 6 Assembly Accelerator
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_accelerator_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_stabilizer_3 — L7组装稳定器 / Level 7 Assembly Stabilizer
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_stabilizer_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_matrix_3 — L8组装矩阵 / Level 8 Assembly Matrix
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_matrix_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_bus_3 — L4组装总线 / Level 4 Assembly Bus
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_bus_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_anchor_3 — L5组装锚 / Level 5 Assembly Anchor
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_anchor_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_manifold_3 — L6组装歧管 / Level 6 Assembly Manifold
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_manifold_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_injector_3 — L7组装注入器 / Level 7 Assembly Injector
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_injector_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_buffer_3 — L8组装缓冲器 / Level 8 Assembly Buffer
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_buffer_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_router_3 — L4组装路由器 / Level 4 Assembly Router
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_router_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_catalyst_3 — L5组装催化剂 / Level 5 Assembly Catalyst
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_catalyst_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_cooler_3 — L6组装冷却器 / Level 6 Assembly Cooler
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_cooler_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_shroud_3 — L7组装护罩 / Level 7 Assembly Shroud
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_shroud_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_fixture_3 — L8组装夹具 / Level 8 Assembly Fixture
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_fixture_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_clamp_3 — L4组装卡箍 / Level 4 Assembly Clamp
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_clamp_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_lattice_3 — L5组装晶格 / Level 5 Assembly Lattice
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_lattice_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_controller_3 — L6组装控制器 / Level 6 Assembly Controller
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_controller_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_pedestal_3 — L7组装基座 / Level 7 Assembly Pedestal
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_pedestal_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_bridge_3 — L8组装桥接器 / Level 8 Assembly Bridge
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_bridge_3
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_frame_4 — L4组装框架 / Level 4 Assembly Frame
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_frame_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_core_4 — L5组装核心 / Level 5 Assembly Core
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_core_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_accelerator_4 — L6组装加速器 / Level 6 Assembly Accelerator
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_accelerator_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_stabilizer_4 — L7组装稳定器 / Level 7 Assembly Stabilizer
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_stabilizer_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_matrix_4 — L8组装矩阵 / Level 8 Assembly Matrix
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_matrix_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_bus_4 — L4组装总线 / Level 4 Assembly Bus
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_bus_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_anchor_4 — L5组装锚 / Level 5 Assembly Anchor
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_anchor_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_manifold_4 — L6组装歧管 / Level 6 Assembly Manifold
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_manifold_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_injector_4 — L7组装注入器 / Level 7 Assembly Injector
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_injector_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_buffer_4 — L8组装缓冲器 / Level 8 Assembly Buffer
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_buffer_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_router_4 — L4组装路由器 / Level 4 Assembly Router
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_router_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_catalyst_4 — L5组装催化剂 / Level 5 Assembly Catalyst
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_catalyst_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_cooler_4 — L6组装冷却器 / Level 6 Assembly Cooler
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_cooler_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_shroud_4 — L7组装护罩 / Level 7 Assembly Shroud
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_shroud_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_fixture_4 — L8组装夹具 / Level 8 Assembly Fixture
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_fixture_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_clamp_4 — L4组装卡箍 / Level 4 Assembly Clamp
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_clamp_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_lattice_4 — L5组装晶格 / Level 5 Assembly Lattice
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_lattice_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_controller_4 — L6组装控制器 / Level 6 Assembly Controller
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_controller_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_pedestal_4 — L7组装基座 / Level 7 Assembly Pedestal
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_pedestal_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_bridge_4 — L8组装桥接器 / Level 8 Assembly Bridge
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_bridge_4
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_frame_5 — L4组装框架 / Level 4 Assembly Frame
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_frame_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_core_5 — L5组装核心 / Level 5 Assembly Core
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_core_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_accelerator_5 — L6组装加速器 / Level 6 Assembly Accelerator
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_accelerator_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_stabilizer_5 — L7组装稳定器 / Level 7 Assembly Stabilizer
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_stabilizer_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_matrix_5 — L8组装矩阵 / Level 8 Assembly Matrix
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_matrix_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_bus_5 — L4组装总线 / Level 4 Assembly Bus
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_bus_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_anchor_5 — L5组装锚 / Level 5 Assembly Anchor
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_anchor_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_manifold_5 — L6组装歧管 / Level 6 Assembly Manifold
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_manifold_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_injector_5 — L7组装注入器 / Level 7 Assembly Injector
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_injector_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_buffer_5 — L8组装缓冲器 / Level 8 Assembly Buffer
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_buffer_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_router_5 — L4组装路由器 / Level 4 Assembly Router
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_router_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_catalyst_5 — L5组装催化剂 / Level 5 Assembly Catalyst
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_catalyst_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_cooler_5 — L6组装冷却器 / Level 6 Assembly Cooler
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_cooler_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_shroud_5 — L7组装护罩 / Level 7 Assembly Shroud
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_shroud_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_fixture_5 — L8组装夹具 / Level 8 Assembly Fixture
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_fixture_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

### assembly_l4_clamp_5 — L4组装卡箍 / Level 4 Assembly Clamp
- **涉及模组**：extendedcrafting、mekanism
- **输入结构**：extendedcrafting:crafting_core + mekanism:alloy_infused → ultratech:assembly_l4_clamp_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### assembly_l5_lattice_5 — L5组装晶格 / Level 5 Assembly Lattice
- **涉及模组**：extendedcrafting、thermal
- **输入结构**：extendedcrafting:crafting_core + thermal:machine_pulverizer → ultratech:assembly_l5_lattice_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 12 / l5_7x7
- **研究映射**：extended_crafting_stage_12

### assembly_l6_controller_5 — L6组装控制器 / Level 6 Assembly Controller
- **涉及模组**：extendedcrafting、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + pneumaticcraft:compressed_iron_ingot → ultratech:assembly_l6_controller_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：extended_crafting_stage_19

### assembly_l7_pedestal_5 — L7组装基座 / Level 7 Assembly Pedestal
- **涉及模组**：extendedcrafting、enderio
- **输入结构**：extendedcrafting:crafting_core + enderio:conduit_binder → ultratech:assembly_l7_pedestal_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：extended_crafting_stage_23

### assembly_l8_bridge_5 — L8组装桥接器 / Level 8 Assembly Bridge
- **涉及模组**：extendedcrafting、avaritia
- **输入结构**：extendedcrafting:crafting_core + avaritia:neutron_ingot → ultratech:assembly_l8_bridge_5
- **工业用途**：Structural or control component for the staged large-worktable upgrade path.
- **阶段 / 设施**：阶段 27 / l8_10x10
- **研究映射**：extended_crafting_stage_27

## D. 跨模组工艺链材料（80）

### crystallized_alloy_1 — 结晶合金 / Crystallized Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_alloy_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### digital_matrix_1 — 数字矩阵 / Digital Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_matrix_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### essence_redstone_conduit_1 — 精华红石导管 / Essence Redstone Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_conduit_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### crop_inductive_controller_1 — 作物感应控制器 / Crop Inductive Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_controller_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### pneumatic_essence_cartridge_1 — 气压精华卡匣 / Pneumatic Essence Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_cartridge_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### ender_singularity_catalyst_1 — 末影奇点催化剂 / Ender Singularity Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_catalyst_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### quantum_harvest_array_1 — 量子收获阵列 / Quantum Harvest Array
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_array_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### thermal_growth_capsule_1 — 热力生长胶囊 / Thermal Growth Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_capsule_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### conduit_seed_alloy_1 — 导管种子合金 / Conduit Seed Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_alloy_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### compressed_biomass_matrix_1 — 压缩生物质矩阵 / Compressed Biomass Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_matrix_1
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### crystallized_conduit_2 — 结晶导管 / Crystallized Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_conduit_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### digital_controller_2 — 数字控制器 / Digital Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_controller_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### essence_redstone_cartridge_2 — 精华红石卡匣 / Essence Redstone Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_cartridge_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### crop_inductive_catalyst_2 — 作物感应催化剂 / Crop Inductive Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_catalyst_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### pneumatic_essence_array_2 — 气压精华阵列 / Pneumatic Essence Array
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_array_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### ender_singularity_capsule_2 — 末影奇点胶囊 / Ender Singularity Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_capsule_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### quantum_harvest_alloy_2 — 量子收获合金 / Quantum Harvest Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_alloy_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### thermal_growth_matrix_2 — 热力生长矩阵 / Thermal Growth Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_matrix_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### conduit_seed_conduit_2 — 导管种子导管 / Conduit Seed Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_conduit_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### compressed_biomass_controller_2 — 压缩生物质控制器 / Compressed Biomass Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_controller_2
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### crystallized_cartridge_3 — 结晶卡匣 / Crystallized Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_cartridge_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### digital_catalyst_3 — 数字催化剂 / Digital Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_catalyst_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### essence_redstone_array_3 — 精华红石阵列 / Essence Redstone Array
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_array_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### crop_inductive_capsule_3 — 作物感应胶囊 / Crop Inductive Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_capsule_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### pneumatic_essence_alloy_3 — 气压精华合金 / Pneumatic Essence Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_alloy_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### ender_singularity_matrix_3 — 末影奇点矩阵 / Ender Singularity Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_matrix_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### quantum_harvest_conduit_3 — 量子收获导管 / Quantum Harvest Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_conduit_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### thermal_growth_controller_3 — 热力生长控制器 / Thermal Growth Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_controller_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### conduit_seed_cartridge_3 — 导管种子卡匣 / Conduit Seed Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_cartridge_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### compressed_biomass_catalyst_3 — 压缩生物质催化剂 / Compressed Biomass Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_catalyst_3
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### crystallized_array_4 — 结晶阵列 / Crystallized Array
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_array_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### digital_capsule_4 — 数字胶囊 / Digital Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_capsule_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### essence_redstone_alloy_4 — 精华红石合金 / Essence Redstone Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_alloy_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### crop_inductive_matrix_4 — 作物感应矩阵 / Crop Inductive Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_matrix_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### pneumatic_essence_conduit_4 — 气压精华导管 / Pneumatic Essence Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_conduit_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### ender_singularity_controller_4 — 末影奇点控制器 / Ender Singularity Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_controller_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### quantum_harvest_cartridge_4 — 量子收获卡匣 / Quantum Harvest Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_cartridge_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### thermal_growth_catalyst_4 — 热力生长催化剂 / Thermal Growth Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_catalyst_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### conduit_seed_array_4 — 导管种子阵列 / Conduit Seed Array
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_array_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### compressed_biomass_capsule_4 — 压缩生物质胶囊 / Compressed Biomass Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_capsule_4
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### crystallized_alloy_5 — 结晶合金 / Crystallized Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_alloy_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### digital_matrix_5 — 数字矩阵 / Digital Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_matrix_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### essence_redstone_conduit_5 — 精华红石导管 / Essence Redstone Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_conduit_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### crop_inductive_controller_5 — 作物感应控制器 / Crop Inductive Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_controller_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### pneumatic_essence_cartridge_5 — 气压精华卡匣 / Pneumatic Essence Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_cartridge_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### ender_singularity_catalyst_5 — 末影奇点催化剂 / Ender Singularity Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_catalyst_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### quantum_harvest_array_5 — 量子收获阵列 / Quantum Harvest Array
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_array_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### thermal_growth_capsule_5 — 热力生长胶囊 / Thermal Growth Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_capsule_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### conduit_seed_alloy_5 — 导管种子合金 / Conduit Seed Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_alloy_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### compressed_biomass_matrix_5 — 压缩生物质矩阵 / Compressed Biomass Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_matrix_5
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### crystallized_conduit_6 — 结晶导管 / Crystallized Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_conduit_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### digital_controller_6 — 数字控制器 / Digital Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_controller_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### essence_redstone_cartridge_6 — 精华红石卡匣 / Essence Redstone Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_cartridge_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### crop_inductive_catalyst_6 — 作物感应催化剂 / Crop Inductive Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_catalyst_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### pneumatic_essence_array_6 — 气压精华阵列 / Pneumatic Essence Array
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_array_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### ender_singularity_capsule_6 — 末影奇点胶囊 / Ender Singularity Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_capsule_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### quantum_harvest_alloy_6 — 量子收获合金 / Quantum Harvest Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_alloy_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### thermal_growth_matrix_6 — 热力生长矩阵 / Thermal Growth Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_matrix_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### conduit_seed_conduit_6 — 导管种子导管 / Conduit Seed Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_conduit_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### compressed_biomass_controller_6 — 压缩生物质控制器 / Compressed Biomass Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_controller_6
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### crystallized_cartridge_7 — 结晶卡匣 / Crystallized Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_cartridge_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### digital_catalyst_7 — 数字催化剂 / Digital Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_catalyst_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### essence_redstone_array_7 — 精华红石阵列 / Essence Redstone Array
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_array_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### crop_inductive_capsule_7 — 作物感应胶囊 / Crop Inductive Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_capsule_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### pneumatic_essence_alloy_7 — 气压精华合金 / Pneumatic Essence Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_alloy_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### ender_singularity_matrix_7 — 末影奇点矩阵 / Ender Singularity Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_matrix_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### quantum_harvest_conduit_7 — 量子收获导管 / Quantum Harvest Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_conduit_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### thermal_growth_controller_7 — 热力生长控制器 / Thermal Growth Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_controller_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### conduit_seed_cartridge_7 — 导管种子卡匣 / Conduit Seed Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_cartridge_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### compressed_biomass_catalyst_7 — 压缩生物质催化剂 / Compressed Biomass Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_catalyst_7
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### crystallized_array_8 — 结晶阵列 / Crystallized Array
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:crystallized_array_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### digital_capsule_8 — 数字胶囊 / Digital Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:digital_capsule_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### essence_redstone_alloy_8 — 精华红石合金 / Essence Redstone Alloy
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_redstone_alloy_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### crop_inductive_matrix_8 — 作物感应矩阵 / Crop Inductive Matrix
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:crop_inductive_matrix_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：extended_crafting_stage_8

### pneumatic_essence_conduit_8 — 气压精华导管 / Pneumatic Essence Conduit
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:pneumatic_essence_conduit_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### ender_singularity_controller_8 — 末影奇点控制器 / Ender Singularity Controller
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + mekanism:alloy_infused → ultratech:ender_singularity_controller_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### quantum_harvest_cartridge_8 — 量子收获卡匣 / Quantum Harvest Cartridge
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + thermal:machine_pulverizer → ultratech:quantum_harvest_cartridge_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### thermal_growth_catalyst_8 — 热力生长催化剂 / Thermal Growth Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:thermal_growth_catalyst_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：extended_crafting_stage_12

### conduit_seed_array_8 — 导管种子阵列 / Conduit Seed Array
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + enderio:conduit_binder → ultratech:conduit_seed_array_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：extended_crafting_stage_16

### compressed_biomass_capsule_8 — 压缩生物质胶囊 / Compressed Biomass Capsule
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:tertium_essence + avaritia:neutron_ingot → ultratech:compressed_biomass_capsule_8
- **工业用途**：Cross-mod process bridge that turns a separate automation subsystem into a traceable industrial input.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：extended_crafting_stage_16

## E. 融合机器/设备模块（50）

### cultivation_driver_module_1 — 培育驱动模块 / Cultivation Driver Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:cultivation_driver_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### singularity_feeder_module_1 — 奇点供料模块 / Singularity Feeder Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:singularity_feeder_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### matrix_regulator_module_1 — 矩阵调节模块 / Matrix Regulator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:matrix_regulator_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### quantum_press_module_1 — 量子压制模块 / Quantum Press Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:quantum_press_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 19 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### essence_reclaimer_module_1 — 精华回收模块 / Essence Reclaimer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:essence_reclaimer_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 20 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### terminal_router_module_1 — 终端路由模块 / Terminal Router Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:terminal_router_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 21 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### precision_injector_module_1 — 精密注入模块 / Precision Injector Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:precision_injector_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 22 / l5_7x7
- **研究映射**：mystical_agriculture_stage_22

### harvest_condenser_module_1 — 收获冷凝模块 / Harvest Condenser Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:harvest_condenser_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 23 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### field_laminator_module_1 — 场层压模块 / Field Laminator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:field_laminator_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 24 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### assembly_buffer_module_1 — 组装缓冲模块 / Assembly Buffer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:assembly_buffer_module_1
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 25 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### cultivation_driver_module_2 — 培育驱动模块 / Cultivation Driver Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:cultivation_driver_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 26 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### singularity_feeder_module_2 — 奇点供料模块 / Singularity Feeder Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:singularity_feeder_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 27 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### matrix_regulator_module_2 — 矩阵调节模块 / Matrix Regulator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:matrix_regulator_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 28 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### quantum_press_module_2 — 量子压制模块 / Quantum Press Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:quantum_press_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 29 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### essence_reclaimer_module_2 — 精华回收模块 / Essence Reclaimer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:essence_reclaimer_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 30 / l5_7x7
- **研究映射**：extended_crafting_stage_23

### terminal_router_module_2 — 终端路由模块 / Terminal Router Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:terminal_router_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 16 / l6_8x8
- **研究映射**：mystical_agriculture_stage_14

### precision_injector_module_2 — 精密注入模块 / Precision Injector Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:precision_injector_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 17 / l6_8x8
- **研究映射**：mystical_agriculture_stage_14

### harvest_condenser_module_2 — 收获冷凝模块 / Harvest Condenser Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:harvest_condenser_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 18 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### field_laminator_module_2 — 场层压模块 / Field Laminator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:field_laminator_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### assembly_buffer_module_2 — 组装缓冲模块 / Assembly Buffer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:assembly_buffer_module_2
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### cultivation_driver_module_3 — 培育驱动模块 / Cultivation Driver Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:cultivation_driver_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### singularity_feeder_module_3 — 奇点供料模块 / Singularity Feeder Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:singularity_feeder_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### matrix_regulator_module_3 — 矩阵调节模块 / Matrix Regulator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:matrix_regulator_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 23 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### quantum_press_module_3 — 量子压制模块 / Quantum Press Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:quantum_press_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 24 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### essence_reclaimer_module_3 — 精华回收模块 / Essence Reclaimer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:essence_reclaimer_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 25 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### terminal_router_module_3 — 终端路由模块 / Terminal Router Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:terminal_router_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 26 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### precision_injector_module_3 — 精密注入模块 / Precision Injector Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:precision_injector_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 27 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### harvest_condenser_module_3 — 收获冷凝模块 / Harvest Condenser Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:harvest_condenser_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 28 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### field_laminator_module_3 — 场层压模块 / Field Laminator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:field_laminator_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 29 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### assembly_buffer_module_3 — 组装缓冲模块 / Assembly Buffer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:assembly_buffer_module_3
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 30 / l6_8x8
- **研究映射**：extended_crafting_stage_23

### cultivation_driver_module_4 — 培育驱动模块 / Cultivation Driver Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:cultivation_driver_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 16 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_14

### singularity_feeder_module_4 — 奇点供料模块 / Singularity Feeder Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:singularity_feeder_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 17 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_14

### matrix_regulator_module_4 — 矩阵调节模块 / Matrix Regulator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:matrix_regulator_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 18 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_18

### quantum_press_module_4 — 量子压制模块 / Quantum Press Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:quantum_press_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 19 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_18

### essence_reclaimer_module_4 — 精华回收模块 / Essence Reclaimer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:essence_reclaimer_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 20 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_18

### terminal_router_module_4 — 终端路由模块 / Terminal Router Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:terminal_router_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 21 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_18

### precision_injector_module_4 — 精密注入模块 / Precision Injector Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:precision_injector_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 22 / precision_assembly_line
- **研究映射**：mystical_agriculture_stage_22

### harvest_condenser_module_4 — 收获冷凝模块 / Harvest Condenser Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:harvest_condenser_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 23 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### field_laminator_module_4 — 场层压模块 / Field Laminator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:field_laminator_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 24 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### assembly_buffer_module_4 — 组装缓冲模块 / Assembly Buffer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:assembly_buffer_module_4
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 25 / precision_assembly_line
- **研究映射**：extended_crafting_stage_23

### cultivation_driver_module_5 — 培育驱动模块 / Cultivation Driver Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:cultivation_driver_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 26 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### singularity_feeder_module_5 — 奇点供料模块 / Singularity Feeder Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:singularity_feeder_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 27 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### matrix_regulator_module_5 — 矩阵调节模块 / Matrix Regulator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:matrix_regulator_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 28 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### quantum_press_module_5 — 量子压制模块 / Quantum Press Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:quantum_press_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 29 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### essence_reclaimer_module_5 — 精华回收模块 / Essence Reclaimer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:essence_reclaimer_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 30 / industrial_assembler
- **研究映射**：extended_crafting_stage_23

### terminal_router_module_5 — 终端路由模块 / Terminal Router Module
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + mekanism:alloy_infused → ultratech:terminal_router_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 16 / industrial_assembler
- **研究映射**：mystical_agriculture_stage_14

### precision_injector_module_5 — 精密注入模块 / Precision Injector Module
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + thermal:machine_pulverizer → ultratech:precision_injector_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 17 / industrial_assembler
- **研究映射**：mystical_agriculture_stage_14

### harvest_condenser_module_5 — 收获冷凝模块 / Harvest Condenser Module
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:harvest_condenser_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 18 / industrial_assembler
- **研究映射**：mystical_agriculture_stage_18

### field_laminator_module_5 — 场层压模块 / Field Laminator Module
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + enderio:conduit_binder → ultratech:field_laminator_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 19 / industrial_assembler
- **研究映射**：mystical_agriculture_stage_18

### assembly_buffer_module_5 — 组装缓冲模块 / Assembly Buffer Module
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:ultimate_singularity + mysticalagriculture:imperium_essence + avaritia:neutron_ingot → ultratech:assembly_buffer_module_5
- **工业用途**：Controller-grade device module; consumed by a future complete machine implementation rather than placed as a fake machine.
- **阶段 / 设施**：阶段 20 / industrial_assembler
- **研究映射**：mystical_agriculture_stage_18

## F. 融合消耗品/催化剂（32）

### growth_catalyst_1 — 生长催化剂 / Growth Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:growth_catalyst_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：mystical_agriculture_stage_6

### compression_medium_1 — 压缩介质 / Compression Medium
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:compression_medium_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 9 / l4_6x6
- **研究映射**：mystical_agriculture_stage_6

### precision_flux_1 — 精密焊剂 / Precision Flux
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:precision_flux_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### singularity_seal_1 — 奇点密封剂 / Singularity Seal
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:singularity_seal_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### essence_coolant_1 — 精华冷却剂 / Essence Coolant
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:essence_coolant_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### assembly_solvent_1 — 组装溶剂 / Assembly Solvent
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:assembly_solvent_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### crop_resonator_1 — 作物谐振剂 / Crop Resonator
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:crop_resonator_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### terminal_stabilizer_1 — 终局稳定剂 / Terminal Stabilizer
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:terminal_stabilizer_1
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### growth_catalyst_2 — 生长催化剂 / Growth Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:growth_catalyst_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### compression_medium_2 — 压缩介质 / Compression Medium
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:compression_medium_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### precision_flux_2 — 精密焊剂 / Precision Flux
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:precision_flux_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### singularity_seal_2 — 奇点密封剂 / Singularity Seal
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:singularity_seal_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### essence_coolant_2 — 精华冷却剂 / Essence Coolant
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:essence_coolant_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 20 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### assembly_solvent_2 — 组装溶剂 / Assembly Solvent
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:assembly_solvent_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 21 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

### crop_resonator_2 — 作物谐振剂 / Crop Resonator
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:crop_resonator_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 22 / l6_8x8
- **研究映射**：mystical_agriculture_stage_22

### terminal_stabilizer_2 — 终局稳定剂 / Terminal Stabilizer
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:terminal_stabilizer_2
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 23 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### growth_catalyst_3 — 生长催化剂 / Growth Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:growth_catalyst_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 24 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### compression_medium_3 — 压缩介质 / Compression Medium
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:compression_medium_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 25 / l7_9x9
- **研究映射**：mystical_agriculture_stage_22

### precision_flux_3 — 精密焊剂 / Precision Flux
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:precision_flux_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 26 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### singularity_seal_3 — 奇点密封剂 / Singularity Seal
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:singularity_seal_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 27 / l7_9x9
- **研究映射**：mystical_agriculture_stage_26

### essence_coolant_3 — 精华冷却剂 / Essence Coolant
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:essence_coolant_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 8 / l4_6x6
- **研究映射**：mystical_agriculture_stage_6

### assembly_solvent_3 — 组装溶剂 / Assembly Solvent
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:assembly_solvent_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 9 / l4_6x6
- **研究映射**：mystical_agriculture_stage_6

### crop_resonator_3 — 作物谐振剂 / Crop Resonator
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:crop_resonator_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 10 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### terminal_stabilizer_3 — 终局稳定剂 / Terminal Stabilizer
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:terminal_stabilizer_3
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 11 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### growth_catalyst_4 — 生长催化剂 / Growth Catalyst
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:growth_catalyst_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 12 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### compression_medium_4 — 压缩介质 / Compression Medium
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:compression_medium_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 13 / l4_6x6
- **研究映射**：mystical_agriculture_stage_10

### precision_flux_4 — 精密焊剂 / Precision Flux
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:precision_flux_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 14 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### singularity_seal_4 — 奇点密封剂 / Singularity Seal
- **涉及模组**：extendedcrafting、mysticalagriculture、pneumaticcraft
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + pneumaticcraft:compressed_iron_ingot → ultratech:singularity_seal_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 15 / l4_6x6
- **研究映射**：mystical_agriculture_stage_14

### essence_coolant_4 — 精华冷却剂 / Essence Coolant
- **涉及模组**：extendedcrafting、mysticalagriculture、enderio
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + enderio:conduit_binder → ultratech:essence_coolant_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 16 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### assembly_solvent_4 — 组装溶剂 / Assembly Solvent
- **涉及模组**：extendedcrafting、mysticalagriculture、avaritia
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + avaritia:neutron_ingot → ultratech:assembly_solvent_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 17 / l5_7x7
- **研究映射**：mystical_agriculture_stage_14

### crop_resonator_4 — 作物谐振剂 / Crop Resonator
- **涉及模组**：extendedcrafting、mysticalagriculture、mekanism
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + mekanism:alloy_infused → ultratech:crop_resonator_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 18 / l5_7x7
- **研究映射**：mystical_agriculture_stage_18

### terminal_stabilizer_4 — 终局稳定剂 / Terminal Stabilizer
- **涉及模组**：extendedcrafting、mysticalagriculture、thermal
- **输入结构**：extendedcrafting:crafting_core + mysticalagriculture:prudentium_essence + thermal:machine_pulverizer → ultratech:terminal_stabilizer_4
- **工业用途**：Consumed catalyst that preserves a visible operating cost for high-density fusion assembly.
- **阶段 / 设施**：阶段 19 / l6_8x8
- **研究映射**：mystical_agriculture_stage_18

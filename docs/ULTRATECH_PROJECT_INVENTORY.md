# UltraTech Full Project Inventory

- Generated date: 2026-06-30
- Workspace: `C:\ultratech`
- Mod ID: `ultratech`
- Target: Minecraft Forge `1.20.1 / 47.4.4`, Java 17
- Purpose: complete snapshot for next-step planning. Chinese names are included where they exist in source data.

## 1. Project Scale

- Java source files: **158**
- Main resource files: **2804**
- Generated resource files: **7342**
- Generated item models: **2527**
- Generated block models: **236**
- Generated blockstates: **210**
- Main item textures: **2312**
- Main block textures: **379**
- Generated recipes: **1620**
- Generated loot tables: **204**
- Generated item tags: **640**

Source package counts:
- `block`: 15 Java files
- `blockentity`: 16 Java files
- `compat`: 3 Java files
- `content`: 36 Java files
- `datagen`: 15 Java files
- `fluid`: 1 Java files
- `item`: 49 Java files
- `loot`: 1 Java files
- `menu`: 6 Java files
- `recipe`: 1 Java files
- `registry`: 8 Java files
- `screen`: 6 Java files

## 2. Creative Tabs

Total creative tabs: **16**
- `UltraTech-Materials` / registry id: `ultratech_materials`
- `UltraTech-Ores` / registry id: `ultratech_ores`
- `UltraTech-Circuits` / registry id: `ultratech_circuits`
- `UltraTech-Compute Research` / registry id: `ultratech_compute_research`
- `UltraTech-Wireless Power` / registry id: `ultratech_wireless_power`
- `UltraTech-Power Cores` / registry id: `ultratech_power_cores`
- `UltraTech-Transmission` / registry id: `ultratech_transmission`
- `UltraTech-Casings` / registry id: `ultratech_casings`
- `UltraTech-Electromagnetics` / registry id: `ultratech_electromagnetics`
- `UltraTech-Mechanical Parts` / registry id: `ultratech_mechanical_parts`
- `UltraTech-Material Components` / registry id: `ultratech_material_components`
- `UltraTech-Technical Components` / registry id: `ultratech_technical_components`
- `UltraTech-Fluid Systems` / registry id: `ultratech_fluid_systems`
- `UltraTech-Chemical Intermediates` / registry id: `ultratech_chemical_intermediates`
- `UltraTech-Endgame Tech` / registry id: `ultratech_endgame_tech`
- `UltraTech-Machines` / registry id: `ultratech_machines`

## 3. Content System Summary

| System | Count | Notes |
|---|---:|---|
| Native metals | 21 | Includes gallium; each has raw ore, raw block, material components, and 4 ore hosts. |
| Ore host variants | 84 | overworld_stone, deepslate, end_stone, netherrack. |
| Alloys | 30 | All synthetic, no natural ore generation. |
| Native+alloy basic component set | 459 | ingot/block/plate/rod/gear/screw/ring/casing/cable. |
| Circuit items | 99 | 8 tiers x 12 components + silicon wafer/photoresist/etching solution. |
| Power cores | 48 | 8 core types x 6 power levels. |
| Transmission components | 80 | 8 categories, 80 components. |
| Casings | 120 | 15 materials x 8 functions. |
| Structure frames | 8 | 8 tiers. |
| Coils | 180 | 12 materials x 15 forms. |
| Windings | 192 | 16 layers x 12 insulation types. |
| Magnetic cores | 15 | 15 materials. |
| Fasteners | 120 | 12 materials x 10 types. |
| Seals | 60 | 10 materials x 6 pressure levels. |
| Connectors | 18 | pipe/cable/fluid coupler variants. |
| Technical components | 129 | Sensors, controllers, displays, protection, cooling. |
| Industrial fluids | 60 | 60 fluids with bucket/block/container support. |
| Fluid containers | 480 | 60 fluids x 8 container materials. |
| Fluid pipes | 8 | 8 materials. |
| Fluid pumps | 8 | 8 tiers. |
| Chemical intermediate items | 141 | 47 chemicals x powder/crystal/granule. |
| Endgame tech materials | 45 | Shadow/Quantum/Spacetime/Cosmic/Nihility families. |
| Compute/research items | 46 | 8 processors + 8 storages + 30 research data items. |
| Wireless power content | 7 | 4 block components + identity card/portable charger/quantum link. |
| Stage machines | 34 | Stages 1-30; late stages contain multiple machines. |

## 4. Native Metals and Ores

- Native metals: **21**
- Ore blocks: 21 x 4 hosts = **84**
- Raw blocks: **21**
- Gallium is included as a registered native metal.

| id | ZH | EN | Mining tier | Hardness |
|---|---|---|---|---:|
| `copper` | 铜 | Copper | STONE | 3.0F |
| `tin` | 锡 | Tin | STONE | 3.0F |
| `iron` | 铁 | Iron | STONE | 3.0F |
| `gold` | 金 | Gold | IRON | 3.2F |
| `lead` | 铅 | Lead | STONE | 3.4F |
| `uranium` | 铀 | Uranium | IRON | 4.2F |
| `plutonium` | 钚 | Plutonium | DIAMOND | 5.0F |
| `titanium` | 钛 | Titanium | IRON | 4.4F |
| `tungsten` | 钨 | Tungsten | DIAMOND | 5.8F |
| `niobium` | 铌 | Niobium | DIAMOND | 5.0F |
| `beryllium` | 铍 | Beryllium | IRON | 4.0F |
| `nickel` | 镍 | Nickel | STONE | 3.4F |
| `chromium` | 铬 | Chromium | IRON | 4.4F |
| `silicon` | 硅 | Silicon | STONE | 3.0F |
| `aluminum` | 铝 | Aluminum | STONE | 3.0F |
| `gallium` | 镓 | Gallium | STONE | 2.8F |
| `silver` | 银 | Silver | STONE | 3.2F |
| `zirconium` | 锆 | Zirconium | IRON | 4.5F |
| `vanadium` | 钒 | Vanadium | IRON | 4.2F |
| `molybdenum` | 钼 | Molybdenum | IRON | 4.8F |
| `rhenium` | 铼 | Rhenium | DIAMOND | 5.6F |

## 5. Alloys and Material Components

- Alloys: **30**
- Alloy component items/blocks: 30 x 9 = **270**
- Native metal + alloy component scale: (21 + 30) x 9 = **459**

| id | ZH | EN | Stage | Hardness | Conductivity |
|---|---|---|---:|---:|---:|
| `bronze` | 青铜 | Bronze | 4-8 | 3.6F | 42 |
| `brass` | 黄铜 | Brass | 4-8 | 3.4F | 37 |
| `steel` | 钢 | Steel | 4-8 | 5.0F | 12 |
| `red_copper` | 红铜 | Red Copper | 4-8 | 3.2F | 72 |
| `white_copper` | 白铜 | White Copper | 4-8 | 3.8F | 24 |
| `electrum` | 琥珀金 | Electrum | 4-8 | 3.1F | 70 |
| `stainless_steel` | 不锈钢 | Stainless Steel | 9-16 | 6.0F | 10 |
| `tungsten_steel` | 钨钢 | Tungsten Steel | 9-16 | 7.4F | 8 |
| `aluminum_bronze` | 铝青铜 | Aluminum Bronze | 9-16 | 4.4F | 32 |
| `beryllium_copper` | 铍铜 | Beryllium Copper | 9-16 | 4.8F | 45 |
| `manganese_steel` | 锰钢 | Manganese Steel | 9-16 | 6.8F | 9 |
| `invar` | 因瓦合金 | Invar | 9-16 | 5.2F | 15 |
| `titanium_alloy` | 钛合金 | Titanium Alloy | 17-24 | 7.0F | 18 |
| `nickel_superalloy` | 镍基合金 | Nickel Superalloy | 17-24 | 7.2F | 16 |
| `cobalt_alloy` | 钴合金 | Cobalt Alloy | 17-24 | 7.1F | 14 |
| `zirconium_alloy` | 锆合金 | Zirconium Alloy | 17-24 | 6.5F | 12 |
| `hastelloy` | 哈氏合金 | Hastelloy | 17-24 | 7.6F | 13 |
| `inconel` | 因科镍 | Inconel | 17-24 | 7.4F | 14 |
| `niobium_titanium` | 铌钛合金 | Niobium-Titanium Alloy | 25-28 | 8.0F | 20 |
| `tantalum_alloy` | 钽合金 | Tantalum Alloy | 25-28 | 8.6F | 12 |
| `rhenium_alloy` | 铼合金 | Rhenium Alloy | 25-28 | 8.4F | 16 |
| `tungsten_rhenium` | 钨铼合金 | Tungsten-Rhenium Alloy | 25-28 | 9.0F | 14 |
| `molybdenum_rhenium` | 钼铼合金 | Molybdenum-Rhenium Alloy | 25-28 | 8.8F | 15 |
| `shadow_alloy` | 暗影合金 | Shadow Alloy | 29-30 | 10.0F | 4 |
| `quantum_alloy` | 量子合金 | Quantum Alloy | 29-30 | 11.0F | 90 |
| `spacetime_alloy` | 时空合金 | Spacetime Alloy | 29-30 | 11.5F | 55 |
| `singularity_alloy` | 奇点合金 | Singularity Alloy | 29-30 | 12.0F | 35 |
| `void_alloy` | 虚空合金 | Void Alloy | 29-30 | 12.5F | 20 |
| `cosmic_alloy` | 寰宇合金 | Cosmic Alloy | 29-30 | 13.5F | 65 |
| `nihility_alloy` | 虚无合金 | Nihility Alloy | 29-30 | 15.0F | 0 |

## 6. Stage Machines

Current `StageMachine.MACHINES`: **34** machines. Note: the stage 25-30 request listed 10 endgame machines, so the actual total is 34 rather than exactly 30.
Stage 1 `animal_power_millstone` and Stage 2 `water_wheel` are merged into this table and use dedicated BlockEntity/Menu/Screen implementations.

| Stage | id | ZH | Family | Base rate | Managed rate | Compute | Fluid | Model theme |
|---:|---|---|---|---:|---:|---:|---:|---|
| 1 | `animal_power_millstone` | 畜力磨盘 | `primitive` | 12 | 12 | 0 | 0 | 16x18x16, C4, stone ring, timber yoke, worn axle |
| 2 | `water_wheel` | 水车轮 | `primitive` | 24 | 24 | 0 | 500 | 24x28x12, C8, oversized wooden wheel with wet bronze hub |
| 3 | `windmill_tower` | 风车塔 | `primitive` | 36 | 36 | 0 | 700 | 20x34x20, C4, vertical tower, canvas vanes, oak frame |
| 4 | `mechanical_gearbox` | 齿轮箱 | `primitive` | 48 | 48 | 8 | 0 | 16x16x16, C2, interlocked brass gears in riveted casing |
| 5 | `low_pressure_boiler` | 低压锅炉 | `steam` | 80 | 80 | 12 | 900 | 18x22x18, C1, copper barrel, pressure seam, small chimney |
| 6 | `high_pressure_boiler` | 高压锅炉 | `steam` | 140 | 140 | 18 | 1500 | 18x24x18, C1, reinforced steel boiler, double valve crown |
| 7 | `steam_turbine` | 蒸汽轮机 | `steam` | 210 | 210 | 22 | 2200 | 22x18x16, C4, axial turbine drum with steam shroud |
| 8 | `stirling_engine` | 斯特林发动机 | `steam` | 260 | 260 | 26 | 1800 | 20x20x18, C2, hot cap piston, flywheel, cold fin stack |
| 9 | `piston_combustion_engine` | 活塞内燃机 | `combustion` | 360 | 360 | 32 | 0 | 22x18x18, C2, four piston bank, crankcase, exhaust manifold |
| 10 | `turbo_combustion_engine` | 涡轮内燃机 | `combustion` | 520 | 520 | 42 | 0 | 22x20x18, C2, turbocharger spiral over compact engine block |
| 11 | `gas_turbine` | 燃气轮机 | `combustion` | 760 | 760 | 56 | 0 | 24x18x18, C4, jet turbine cone, compressor rings, hot nozzle |
| 12 | `thermoelectric_generator` | 热电发生器 | `electric` | 820 | 820 | 72 | 0 | 18x18x18, C4, stacked thermal plates and red-blue gradient fins |
| 13 | `dc_converter_station` | 直流换流站 | `electric` | 1100 | 1100 | 96 | 0 | 20x22x20, C2, rectifier columns, bus bars, red polarity core |
| 14 | `ac_substation_tower` | 交流变电塔 | `electric` | 1500 | 1500 | 128 | 0 | 24x30x24, C4, open lattice tower with ceramic insulators |
| 15 | `photovoltaic_matrix` | 光伏矩阵 | `electric` | 1750 | 1750 | 180 | 0 | 28x8x28, C4, folded solar matrix panels on servo pedestal |
| 16 | `solar_thermal_collector` | 光热集热器 | `electric` | 1900 | 1900 | 220 | 0 | 30x14x24, C2, parabolic mirror trough and molten heat pipe |
| 17 | `fission_reactor` | 裂变反应堆 | `nuclear` | 2800 | 2800 | 320 | 3000 | 24x26x24, C4, armored reactor vessel, control rods, hazard glow |
| 18 | `breeder_reactor` | 增殖反应器 | `nuclear` | 3600 | 3600 | 420 | 3600 | 24x28x24, C4, dual core breeder shell with neutron reflector bands |
| 19 | `molten_salt_reactor` | 熔盐反应器 | `nuclear` | 4300 | 4300 | 520 | 6000 | 26x24x26, C4, glowing salt loops around graphite moderator |
| 20 | `deuterium_fusion_reactor` | 氘聚变堆 | `fusion` | 6200 | 6200 | 680 | 4200 | 26x26x26, C8, blue plasma bottle with injector petals |
| 21 | `helium_fusion_reactor` | 氦聚变堆 | `fusion` | 8400 | 168000 | 860 | 4200 | 26x28x26, C8, gold-blue fusion chamber and helium exhaust vanes |
| 22 | `proton_accelerator` | 质子加速器 | `fusion` | 10500 | 4200000 | 1050 | 2000 | 32x18x16, C2, linear accelerator tube with focusing magnets |
| 23 | `tokamak_ring` | 托卡马克环 | `fusion` | 14000 | 112000000 | 1300 | 5000 | 30x30x30, C8, toroidal ring coils wrapped around plasma donut |
| 24 | `laser_fusion_chamber` | 激光聚变室 | `fusion` | 18000 | 2880000000 | 1600 | 2600 | 28x28x28, C6, faceted target chamber with radial laser emitters |
| 25 | `muon_generator` | 渺子发生器 | `exotic` | 23000 | 73600000000 | 2100 | 0 | 24x28x24, C4, muon cascade column with violet decay rings |
| 26 | `strange_matter_compressor` | 奇异物质压缩器 | `exotic` | 30000 | 1920000000000 | 2700 | 1400 | 26x24x26, C4, diamond anvil cage squeezing iridescent core |
| 27 | `degenerate_matter_generator` | 简并态发生器 | `exotic` | 42000 | 53760000000000 | 3500 | 0 | 26x30x26, C6, white dwarf lattice with gravitational braces |
| 28 | `antimatter_collector` | 反物质收集器 | `endgame` | 62000 | 1587200000000000 | 4600 | 0 | 28x28x28, C8, magnetic bottle with pink annihilation halo |
| 28 | `casimir_extractor` | 卡西米尔提取器 | `endgame` | 76000 | 1945600000000000 | 5200 | 0 | 30x18x30, Mirror, nano plate vacuum gap with force-field shimmer |
| 29 | `singularity_generator` | 奇点发电机 | `endgame` | 110000 | 56320000000000000 | 7000 | 0 | 30x30x30, C8, black-hole core suspended in nested containment rings |
| 29 | `void_energy_siphon` | 虚空能量汲取器 | `endgame` | 140000 | 71680000000000000 | 8200 | 0 | 28x34x28, C4, obsidian siphon tower pulling blue-black filaments |
| 30 | `cosmic_gate` | 寰宇之门 | `endgame` | 190000 | 1945600000000000000 | 10000 | 0 | 32x36x12, C2, standing portal gate with gold star lattice |
| 30 | `nihility_engine` | 虚无引擎 | `endgame` | 260000 | 2662400000000000000 | 13000 | 0 | 30x30x30, C8, void turbine consuming light around white singular core |
| 30 | `genesis_core` | 创世核心 | `endgame` | 360000 | 3686400000000000000 | 16000 | 0 | 32x32x32, C12, miniature creation lattice and rotating prismatic shell |

## 7. Implemented Blocks, BlockEntities, Menus, Screens

### Block classes (15)
- `AnimalMillBlock`
- `BasicCrusherBlock`
- `BasicKineticBufferBlock`
- `HandCrankBlock`
- `IndustrialCropBlock`
- `ResearchTerminalBlock`
- `StageMachineBlock`
- `TallIndustrialCropBlock`
- `WaterFlowSensorBlock`
- `WaterPoweredConveyorBlock`
- `WaterWheelBlock`
- `WirelessPowerBlock`
- `WoodenAqueductBlock`
- `WoodenFluidPipeBlock`
- `WoodenItemPipeBlock`

### BlockEntity classes (13)
- `AnimalMillBlockEntity`
- `BasicCrusherBlockEntity`
- `BasicKineticBufferBlockEntity`
- `HandCrankBlockEntity`
- `ResearchTerminalBlockEntity`
- `StageMachineBlockEntity`
- `WaterFlowSensorBlockEntity`
- `WaterPoweredConveyorBlockEntity`
- `WaterWheelBlockEntity`
- `WirelessPowerBlockEntity`
- `WoodenAqueductBlockEntity`
- `WoodenFluidPipeBlockEntity`
- `WoodenItemPipeBlockEntity`

### Menu classes (6)
- `AnimalMillMenu`
- `BasicCrusherMenu`
- `ResearchTerminalMenu`
- `StageMachineMenu`
- `WaterWheelMenu`
- `WirelessPowerMenu`

### Screen classes (6)
- `AnimalMillScreen`
- `BasicCrusherScreen`
- `ResearchTerminalScreen`
- `StageMachineScreen`
- `WaterWheelScreen`
- `WirelessPowerScreen`

GUI rule now in use: no direct text labels on machine panels; values are presented through bars, icons, status lights, and hover tooltips.

## 8. Stage 1 and Stage 2 Status

### Stage 1: Animal Power Era
- Machine: `animal_power_millstone` / Animal Mill, dedicated BlockEntity/Menu/Screen.
- Items: `wooden_frame`, `stone_millstone`, `belt_drive_wheel`, `wooden_gear`, `hay_feed`, `flour`.
- `iron_bolt` is reused from the fastener system, not duplicated.
- Logistics: `wooden_item_pipe`, `hand_crank`.

### Stage 2: Water Wheel Era
- Machine: `water_wheel` / Water Wheel, dedicated BlockEntity/Menu/Screen.
- Items: `wooden_water_wheel_blade`, `wooden_rotor`, `wet_gear`.
- Blocks: `water_flow_sensor`, `wooden_aqueduct`, `basic_kinetic_buffer`, `wooden_fluid_pipe`, `water_powered_conveyor`.

## 9. Datagen, Recipes, Compatibility

- Datagen entry: `ModDataGenerators`.
- Providers: blockstates, item models, recipes, loot tables, tags, ore worldgen, stage texture providers.
- JEI: `UltraTechJeiPlugin`, `BasicCrusherRecipeCategory`.
- The One Probe: `TheOneProbeCompat`.
- Loot modifier: `AnimalFatLootModifier`.

## 10. Health Check

| Check | Result |
|---|---:|
| Missing texture/model references | 0 |
| Duplicate main/generated resources | 0 |
| zh_cn bad entries | 0 |
| en_us bad entries | 0 |

Last successful validation commands:
```powershell
.\gradlew.bat runData
.\gradlew.bat processResources compileJava
```

## 11. Planning Recommendations

- [ ] Build Stage 3 Windmill Era next, following the merged stage-machine pattern used by Stage 1 and 2.
- [ ] Connect tech tree unlocks to recipe availability and machine usability.
- [ ] Unify machine power abstractions: SU, Steam, Combustion, FE, Nuclear, Fusion, Exotic, Void/Quantum.
- [ ] Replace placeholder/cube-style stage machine models with realistic industrial models over time.
- [ ] Add more JEI recipe categories beyond the basic crusher.
- [ ] Add machine-specific TOP probe information.
- [ ] Keep `src/main/resources` and `src/generated/resources` paths non-overlapping to avoid duplicate resource failures.

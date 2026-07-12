# UltraTech Asset Inventory - 2026-07-12

## Scope And Method

Static audit scope: `C:\ultratech`, Forge 1.20.1, base package
`com.halfsword.ultratech`.

This report does not modify gameplay code or resources. It distinguishes four
different states which were previously easy to conflate:

- `✅ 已实现`: registered and backed by the required runtime path checked here.
- `⚠️ 部分实现`: registered and usable through a shared/generic path, but a
  dedicated logic, recipe, or validation path is incomplete.
- `❌ 未实现`: a required companion asset or processing definition is absent.
- `📋 仅设计`: defined only as data/design metadata without a usable runtime path.

The project uses large dynamic registration families. The item inventory is
therefore listed as exact registration formulas plus the source enum/table and
the generated asset count, rather than duplicating 4,558 near-identical rows.
For an item ID `x`, its display name is `item.ultratech.x` in `zh_cn.json`;
all such checked keys are present.

## Executive Summary

| Area | Static result | Status |
|---|---:|---|
| Item models | 4,558 unique item models; 0 direct `layer0` texture misses | ✅ |
| Blockstates | 935 unique blockstates | ✅ |
| Block models | 1,098 models; 35 referenced face textures absent at scan time | ⚠️ |
| Industrial fluids | 141 fluid definitions, all with source/flowing/block/bucket registration path | ✅ |
| Stage machines | 34 across stages 1-30 | ⚠️ |
| Industrial-process machines | 222, shared BE/menu/screen, 296 process recipes | ⚠️ |
| Industrial machines with a process recipe | 218 / 222 | ⚠️ 98.2% |
| Menu types / client screen bindings | 33 / 33 | ✅ |
| Language keys | `zh_cn` 6,888; `en_us` 6,888; key sets identical | ✅ |
| Dimensions | 14 registered JSON dimensions, each bound to a generator codec | ✅ |
| Ore and petroleum worldgen | Datagen configured/placed features and biome modifiers present | ✅ |

## 1. Registered Items

### 1.1 Inventory Structure

`ModItems` has 134 explicit unique direct registrations plus dynamic family
registrations. The generated resource audit finds 4,558 item models and every
checked item/block display key resolves in Chinese.

| Category | Registration source and exact pattern | Status |
|---|---|---|
| Basic materials | Explicit raw ores, ingots, nuggets, dusts, plates, rods, wires, food/crop outputs and early mechanical parts | ✅ |
| Native metals | `NativeMetal`: `raw_<metal>`, `<metal>_ingot`, `<metal>_block`, host-specific ores | ✅ |
| Alloys | `AlloyMaterial` and `AlloyComponent`: component-set variants per alloy | ✅ |
| Circuit boards | `CircuitTier` x `CircuitComponent` via `CIRCUIT_ITEMS` | ✅ |
| Power cores | `PowerCoreType` x `PowerLevel` via `POWER_CORE_ITEMS` | ✅ |
| Motors, transmission, coils | `TransmissionComponent`, `CoilMaterial` x `CoilForm`, `WindingInsulation`, `MagneticCoreMaterial` | ✅ |
| Casings and frames | `CasingMaterial` x `CasingFunction`, `StructureFrameTier` | ✅ |
| Fasteners and seals | `FastenerMaterial` x `FastenerType`, `SealMaterial` x `PressureLevel`, `ConnectorVariant` | ✅ |
| Fluid equipment | `FluidContainerMaterial`, all `IndustrialFluid` container variants, `FluidPipeMaterial`, `FluidPumpTier` | ✅ |
| Chemical intermediates | `ChemicalIntermediate` x `ChemicalForm` | ✅ |
| Compute and research | `ComputeTier`, research data/book fragments, terminal upgrades | ✅ |
| Space equipment | Space suits, probes, relay stations, robots, assembly packages, vehicles and space components | ✅ |
| Endgame material | `EndgameTechMaterial` plus endgame armor/tools | ✅ |
| Process-machine items | One block item for each `IndustrialProcessMachine` | ✅ |

### 1.2 Explicit Base Material And Utility Items

The following are direct registrations rather than enum-expanded families. All
have item models and Chinese display-name keys.

| Group | Registered IDs | Status |
|---|---|---|
| Raw materials | `raw_tin`, `raw_lead`, `raw_silver`, `raw_nickel`, `raw_uranium` | ✅ |
| Ingots/nuggets/dusts | `tin_ingot`, `lead_ingot`, `silver_ingot`, `nickel_ingot`, `steel_ingot`, `bronze_ingot`, `uranium_ingot`; matching nugget and dust families; `gallium_*` | ✅ |
| Early components | `copper_wire`, `gold_wire`, `steel_rod`, `gallium_rod`, `copper_plate`, `iron_plate`, `steel_plate`, `gallium_plate`, `gallium_wire`, `gallium_foil`, `basic_gear`, `advanced_gear`, `basic_circuit`, `advanced_circuit` | ✅ |
| Crops and organic outputs | `sorghum`, `blueberry`, `calendula`, `rubber_tree_fruit`, `oil_palm_fruit`, `castor_bean`, `sisal_bundle`, `jojoba_bean`, `industrial_hemp_fiber`, `flour`, `hay_feed`, `animal_fat` | ✅ |
| Tools | `wrench`, `torque_wrench`, `rubber_tapping_knife`, `geological_prospector`, pressure/steam parts, dynamic maintenance-wrench family | ✅ |
| Space consumables | `oxygen_tank`, `empty_helium3_capsule`, `helium3_capsule`, `solid_rocket_fuel`, `ceres_ice_drill_bit` | ✅ |
| Navigation/research | `star_chart`, `advanced_star_chart`, `creative_star_chart`, `spacecraft_navigation_core`, `identity_card`, `stellar_ruin_data`, `interstellar_trade_data`, research chips/data | ✅ |
| Vehicles | `ultratech_rocket`, `planetary_rover`, `planetary_probe`, `orbital_ascent_device`, `planet_reset_seal` | ✅ |
| Creative tools | `creative_compute_processor`, `creative_compute_storage`, `creative_research_unlocker`, `creative_space_instrument_deployer`, `creative_space_instrument_remover` | ✅ |

### 1.3 Defined Versus Implemented Space Equipment

| Family | Defined | Registered item implementation | Runtime use | Status |
|---|---:|---:|---|---|
| Planetary probes | 7 tiers | 7 variants, `PlanetaryProbeItem` | Probe saved data uses speed, durability and corrosion fields | ✅ |
| Relay signal stations | 7 tiers | 7 variants, `RelaySignalStationItem` | Relay progression and coverage values are consumed by probe logic | ✅ |
| Space suits | 9 tiers x 4 armor pieces | 36 variants, `SpaceSuitArmorItem` | Tier fields are available to environment checks; full cross-planet runtime coverage is not test-verified | ⚠️ |

## 2. Registered Blocks

### 2.1 Block Families

The direct `registerBlock(...)` list contains 149 static IDs. The remaining
registered block inventory is generated from machine, material, ore, fluid tank,
planetary-resource, storage, research-tier and creative-tank tables.

| Category | Registration families | Status |
|---|---|---|
| Minerals and planetary geology | Native ore hosts, raw blocks, material blocks, planetary surfaces/resources, lunar/martian/venusian/ceresian/vestan/outer-planet rocks and ores, `oil_sand_ore`, `oil_shale_ore` | ✅ |
| Machines | 34 `StageMachine` blocks, 222 `IndustrialProcessMachine` blocks, crusher/boiler/turbine/space facility blocks | ⚠️ |
| Conduits | `wooden_item_pipe`, `wooden_fluid_pipe`, `strain_energy_pipe`, `reinforced_strain_energy_pipe`, `resonant_strain_energy_pipe`, `conduit_bundle`, dynamic conduit items | ✅ |
| Storage | Tiered storage boxes, fluid tanks, 143 creative infinite tanks, creative energy core | ✅ |
| Decorative/building | Industrial steel block, stairs, slab, fence, gate, button, pressure plate, trapdoor and door | ✅ |
| Functional terminals | Research, scanner, compute, wireless power, spacecraft/probe/relay/space-industry terminals, flow sensor, kinetic buffer/output shaft | ✅ |
| Crops | Hemp, sorghum, blueberry, calendula, rubber tree, oil palm, castor, sisal, jojoba crop blocks | ✅ |
| Multiblock placeholders | Water-wheel and windmill placeholder blocks, registered without item form | ⚠️ |

### 2.2 Machine Blocks Without BlockEntity

No registered `StageMachine` or `IndustrialProcessMachine` lacks a BlockEntity:

- 34 stage machines are covered by dedicated BEs for special machines and
  `StageMachineBlockEntity` for the rest.
- All 222 industrial process machines are covered by
  `IndustrialProcessMachineBlockEntity`.
- The absence of a BlockEntity on ordinary terrain, ores, decorative blocks and
  crop blocks is intentional.

The important caveat is behavioral, not registration: generic stage machines
share a generic runtime instead of having individual production algorithms.

## 3. Registered Fluids

Every `IndustrialFluid` is registered through `ModFluids` as source fluid,
flowing fluid, liquid block and bucket. The static resource check found no
missing source/flowing texture pair.

| Category | IDs | Status |
|---|---|---|
| Basic (8) | `low_pressure_steam`, `high_pressure_steam`, `distilled_water`, `lubricant_oil`, `coolant`, `compressed_air`, `creosote_oil`, `biomass_slurry` | ✅ |
| Bio-chemical (8) | `starch_slurry`, `glucose_solution`, `ethanol_fermentation_broth`, `fuel_ethanol`, `acetic_acid`, `alkali_liquor`, `bleach`, `pyrolysis_gas` | ✅ |
| General chemical (18) | `sulfuric_acid`, `hydrochloric_acid`, `nitric_acid`, `phosphoric_acid`, `liquid_epoxy_resin`, `liquid_polyethylene`, `ethylene`, `propylene`, `butadiene`, `benzene`, `toluene`, `xylene`, `ammonia`, `methanol`, `ethanol`, `acetone`, `phenol`, `liquid_rubber` | ✅ |
| Botanical industry (7) | `rubber_latex`, `rubber_seed_oil`, `crude_palm_oil`, `refined_palm_oil`, `castor_oil`, `jojoba_oil`, `precision_hydraulic_oil` | ✅ |
| Iron metallurgy (3) | `iron_coal_tar`, `iron_coke_oven_gas`, `iron_blast_furnace_gas` | ✅ |
| Copper metallurgy (1) | `copper_electrolyte` | ✅ |
| Aluminum metallurgy (1) | `aluminum_caustic_soda` | ✅ |
| Chlor-alkali (6) | `chlor_alkali_brine`, `chlor_alkali_chlorine`, `chlor_alkali_hydrogen`, `chlor_alkali_sodium_hydroxide`, `chlor_alkali_hydrochloric_acid`, `chlor_alkali_vinyl_chloride` | ✅ |
| Silicon/precious metals (2) | `silicon_trichlorosilane`, `precious_acid_leachate` | ✅ |
| Nonferrous metallurgy (5) | `lead_electrolyte`, `zinc_sulfate_solution`, `nickel_electrolyte`, `cobalt_sulfate_solution`, `magnesium_chloride_melt` | ✅ |
| Refractory metallurgy (4) | `titanium_tetrachloride`, `zirconium_tetrachloride`, `sodium_tungstate_solution`, `ammonium_tungstate_solution` | ✅ |
| Rare earth (3) | `mixed_rare_earth_chloride_solution`, `rare_earth_extractant_p507`, `naphthenic_acid_extractant` | ✅ |
| Dispersed metal recovery (5) | `gallium_mother_liquor`, `indium_leachate`, `germanium_chloride_solution`, `selenium_tellurium_leachate`, `fluoride_tantalum_solution` | ✅ |
| Nonmetallic minerals (2) | `kaolin_slurry`, `phosphate_slurry` | ✅ |
| Petroleum (20) | `crude_oil`, `heavy_crude_oil`, `desalted_crude_oil`, `petroleum_gas`, `petroleum_gasoline`, `petroleum_naphtha`, `petroleum_kerosene`, `petroleum_diesel`, `petroleum_heavy_oil`, `petroleum_vacuum_gasoil`, `petroleum_residual_oil`, `petroleum_asphalt`, `petroleum_cracked_gas`, `petroleum_reformate`, `petroleum_aromatics`, `petroleum_ethylene`, `petroleum_propylene`, `petroleum_butadiene`, `petroleum_ethylene_glycol`, `petroleum_styrene` | ✅ |
| Precision manufacturing (14) | `precision_dielectric_fluid`, `precision_electrolyte`, `waterjet_slurry`, `semiconductor_cutting_fluid`, `semiconductor_lapping_slurry`, `semiconductor_cmp_slurry`, `photoresist_solution`, `semiconductor_etching_gas`, `semiconductor_cvd_gas`, `ald_precursor_gas`, `quantum_dot_solvent`, `subspace_field_plasma`, `quantum_beam_flux`, `dark_matter_slurry` | ✅ |
| Nuclear industry (14) | `heavy_water`, `deuterium`, `tritium`, `uranium_hexafluoride`, `liquid_sodium`, `hot_molten_salt`, `cold_molten_salt`, `uranium_tetrafluoride`, `hydrogen_fluoride`, `hydrogen_chloride`, `sodium_hydroxide`, `liquid_lithium`, `hot_reactor_coolant`, `cold_reactor_coolant` | ✅ |
| Cryogenic (12) | `liquid_hydrogen`, `liquid_helium`, `liquid_nitrogen`, `liquid_oxygen`, `liquid_neon`, `liquid_argon`, `liquid_krypton`, `liquid_xenon`, `liquid_ozone`, `liquid_fluorine`, `liquid_methane`, `liquid_carbon_dioxide` | ✅ |
| Endgame (8) | `antihydrogen`, `exotic_slurry`, `quantum_fluid`, `void_energy_fluid`, `spacetime_condensate`, `shadow_state_fluid`, `cosmic_primal_fluid`, `nihility_essence_fluid` | ✅ |

## 4. Machines

### 4.1 Stage Machines (34)

All stage IDs have Chinese `block.ultratech.<id>` and
`container.ultratech.<id>` keys. Stages 1-24 are one machine each; stages
25-30 have multiple machines.

| Stage | Registered ID | Display name | BlockEntity / GUI | Status |
|---:|---|---|---|---|
| 1 | `animal_power_millstone` | 畜力磨盘 | dedicated BE/menu/screen | ✅ |
| 2 | `water_wheel` | 水车轮 | dedicated BE/menu/screen | ⚠️ |
| 3 | `windmill_tower` | 风车塔 | dedicated BE; no dedicated menu | ⚠️ |
| 4 | `mechanical_gearbox` | 齿轮箱 | dedicated BE/menu/screen | ✅ |
| 5 | `low_pressure_boiler` | 低压锅炉 | dedicated BE/menu/screen | ✅ |
| 6 | `high_pressure_boiler` | 高压锅炉 | dedicated BE/menu/screen | ✅ |
| 7 | `steam_turbine` | L3 蒸汽轮机 | generic/dedicated turbine path | ⚠️ |
| 8 | `stirling_engine` | 斯特林发动机 | shared stage BE/menu/screen | ⚠️ |
| 9 | `piston_combustion_engine` | 活塞内燃机 | shared stage BE/menu/screen | ⚠️ |
| 10 | `turbo_combustion_engine` | 涡轮内燃机 | shared stage BE/menu/screen | ⚠️ |
| 11 | `gas_turbine` | 燃气轮机 | shared stage BE/menu/screen | ⚠️ |
| 12 | `thermoelectric_generator` | 热电发生器 | shared stage BE/menu/screen | ⚠️ |
| 13 | `dc_converter_station` | 直流换流站 | shared stage BE/menu/screen | ⚠️ |
| 14 | `ac_substation_tower` | 交流变电塔 | shared stage BE/menu/screen | ⚠️ |
| 15 | `photovoltaic_matrix` | 光伏矩阵 | shared stage BE/menu/screen | ⚠️ |
| 16 | `solar_thermal_collector` | 光热集热器 | shared stage BE/menu/screen | ⚠️ |
| 17 | `fission_reactor` | 裂变反应堆 | shared stage BE/menu/screen | ⚠️ |
| 18 | `breeder_reactor` | 增殖反应器 | shared stage BE/menu/screen | ⚠️ |
| 19 | `molten_salt_reactor` | 熔盐反应器 | shared stage BE/menu/screen | ⚠️ |
| 20 | `deuterium_fusion_reactor` | 氘聚变堆 | shared stage BE/menu/screen | ⚠️ |
| 21 | `helium_fusion_reactor` | 氦聚变堆 | shared stage BE/menu/screen | ⚠️ |
| 22 | `proton_accelerator` | 质子加速器 | shared stage BE/menu/screen | ⚠️ |
| 23 | `tokamak_ring` | 托卡马克环 | shared stage BE/menu/screen | ⚠️ |
| 24 | `laser_fusion_chamber` | 激光聚变室 | shared stage BE/menu/screen | ⚠️ |
| 25 | `muon_generator`, `strange_matter_compressor` | 缪子发生器、奇异物质压缩器 | shared stage BE/menu/screen | ⚠️ |
| 26 | `degenerate_matter_generator` | 简并态发生器 | shared stage BE/menu/screen | ⚠️ |
| 28 | `antimatter_collector`, `casimir_extractor` | 反物质收集器、卡西米尔提取器 | shared stage BE/menu/screen | ⚠️ |
| 29 | `singularity_generator`, `void_energy_siphon` | 奇点发电机、虚空能量汲取器 | shared stage BE/menu/screen | ⚠️ |
| 30 | `cosmic_gate`, `nihility_engine`, `genesis_core` | 寰宇之门、虚无引擎、创世核心 | shared stage BE/menu/screen | ⚠️ |

Note: there is no stage 27 entry in `StageMachine.MACHINES`; stages 25, 26,
28, 29 and 30 account for the remaining 10 entries.

### 4.2 Industrial Process Machines (222)

All 222 entries have a registered block, `IndustrialProcessMachineBlockEntity`,
`IndustrialProcessMachineMenu`, and `IndustrialProcessMachineScreen`. This is
one shared implementation, not 222 independent BE/menu/screen classes.

| Module | IDs | Process-recipe coverage | Status |
|---|---|---:|---|
| 古法工业 | `primitive_mortar_workbench`, `primitive_kiln`, `primitive_comminutor`, `primitive_wooden_tank`, `primitive_ceramic_tank` | 4/5 | ⚠️ |
| 高粱生物塑料 | `sorghum_harvester`, `sorghum_crusher`, `starch_separator`, `liquefaction_reactor`, `saccharification_tank`, `fermentation_tank`, `molecular_sieve_dehydration_tower`, `steam_explosion_machine`, `alkali_treatment_tank`, `bleaching_system`, `pyrolysis_reactor`, `activation_furnace`, `ethylene_synthesis_tower`, `polymerization_reactor`, `ethylene_glycol_line`, `synthetic_rubber_line`, `esterification_reactor`, `spinning_machine`, `bioplastic_molder` | 19/19 | ✅ |
| 橡胶树 | `latex_coagulation_vat`, `rubber_sheet_roller`, `rubber_smokehouse`, `rubber_seed_oil_press`, `rubber_vulcanization_tank`, `rubber_compound_mixer` | 6/6 | ✅ |
| 油棕 | `palm_steaming_tank`, `palm_thresher`, `palm_screw_press`, `palm_clarification_pool`, `palm_refining_tower`, `palm_fractionation_crystallizer`, `palm_transesterification_reactor`, `palm_saponification_kettle` | 8/8 | ✅ |
| 蓖麻 | `castor_dehuller`, `castor_oil_press`, `castor_hydrolysis_kettle`, `castor_cracking_reactor`, `castor_polymerization_kettle`, `castor_isocyanate_synthesis_tower`, `castor_esterification_reactor` | 7/7 | ✅ |
| 剑麻 | `sisal_decorticator`, `sisal_washing_trough`, `sisal_drying_kiln`, `sisal_carding_machine`, `sisal_spinning_machine`, `sisal_rope_maker`, `sisal_loom`, `sisal_wet_former` | 8/8 | ✅ |
| 霍霍巴 | `jojoba_dehuller`, `jojoba_cold_press`, `jojoba_precision_filter`, `jojoba_winterization_crystallizer`, `jojoba_blending_kettle`, `jojoba_vacuum_deaerator` | 6/6 | ✅ |
| 铁系冶金 | `iron_ore_crusher`, `iron_screening_machine`, `iron_sintering_furnace`, `iron_coke_oven`, `iron_blast_furnace`, `iron_basic_oxygen_converter`, `iron_electric_arc_furnace`, `iron_continuous_caster`, `iron_rolling_mill`, `iron_alloy_furnace`, `iron_quenching_tank` | 11/11 | ✅ |
| 铜系冶金 | `copper_ore_crusher`, `copper_ball_mill`, `copper_flotation_cell`, `copper_smelting_furnace`, `copper_converting_furnace`, `copper_anode_furnace`, `copper_electrolytic_cell`, `copper_wire_drawing_machine`, `copper_rolling_mill`, `copper_bronze_furnace`, `copper_brass_furnace` | 11/11 | ✅ |
| 铝系冶金 | `aluminum_bauxite_crusher`, `aluminum_ball_mill`, `aluminum_digestion_reactor`, `aluminum_precipitation_tank`, `aluminum_rotary_kiln`, `aluminum_molten_salt_cell`, `aluminum_ingot_caster`, `aluminum_extrusion_press`, `aluminum_alloy_furnace` | 9/9 | ✅ |
| 氯碱化工 | `chlor_alkali_salt_crusher`, `chlor_alkali_dissolution_tank`, `chlor_alkali_electrolytic_cell`, `chlor_alkali_hydrochloric_acid_tower`, `chlor_alkali_chlorination_reactor` | 5/5 | ✅ |
| 硅系工业 | `silicon_quartz_crusher`, `silicon_sand_washer`, `silicon_smelting_furnace`, `silicon_glass_melting_kiln`, `silicon_polysilicon_reactor`, `silicon_crystal_furnace`, `silicon_slicing_machine`, `silicon_photovoltaic_assembly_line` | 8/8 | ✅ |
| 贵金属回收 | `precious_anode_slime_collector`, `precious_acid_leach_reactor`, `precious_solvent_extraction_tower`, `precious_reduction_furnace` | 4/4 | ✅ |
| 有色金属 | `mineral_jaw_crusher`, `mineral_cone_crusher`, `mineral_ball_mill`, `mineral_jig`, `mineral_shaking_table`, `mineral_flotation_cell`, `mineral_filter_press`, `mineral_drying_kiln`, `mineral_reverberatory_furnace`, `mineral_blast_furnace`, `mineral_converter`, `mineral_electrolytic_cell`, `zinc_leaching_tank`, `zinc_purification_tank`, `magnesium_chlorination_reactor`, `molten_salt_electrolytic_cell` | 13/16 | ⚠️ |
| 稀有难熔金属 | `mineral_magnetic_separator`, `titanium_chlorination_furnace`, `titanium_distillation_column`, `kroll_reduction_vessel`, `vacuum_arc_remelting_furnace`, `tungsten_alkali_digestion_reactor`, `mineral_ion_exchange_column`, `hydrogen_reduction_furnace`, `powder_metallurgy_press`, `zirconium_chlorination_furnace` | 10/10 | ✅ |
| 稀土冶金 | `rare_earth_decomposition_reactor`, `rare_earth_solvent_extraction_tower`, `rare_earth_ion_exchange_column`, `rare_earth_precipitation_kiln`, `rare_earth_molten_salt_cell` | 5/5 | ✅ |
| 分散金属回收 | `dispersed_metal_leaching_tank`, `dispersed_solvent_extraction_tower`, `dispersed_reduction_furnace`, `chlorination_distillation_column`, `vanadium_roasting_kiln`, `fluoride_extraction_column` | 6/6 | ✅ |
| 非金属矿物 | `nonmetallic_crusher`, `nonmetallic_ball_mill`, `nonmetallic_flotation_cell`, `nonmetallic_drying_kiln`, `graphite_purification_reactor`, `graphitization_furnace`, `fluorite_dryer`, `barite_gravity_table`, `magnesite_sintering_kiln`, `kaolin_pulping_tank`, `kaolin_hydrocyclone`, `kaolin_bleaching_separator`, `phosphate_acidulation_tank`, `phosphorus_electric_furnace` | 14/14 | ✅ |
| 精密制造 | `cnc_milling_machine`, `edm_machine`, `laser_cutting_machine`, `vacuum_heat_treatment_furnace`, `deep_hole_drilling_machine`, `five_axis_machining_center`, `electrolytic_polishing_machine`, `waterjet_cutting_machine`, `ultra_precision_lathe`, `monocrystal_growth_furnace`, `wafer_slicing_machine`, `wafer_lapping_machine`, `cmp_machine`, `photolithography_stepper`, `plasma_etcher`, `cvd_furnace`, `pvd_system`, `ion_implanter`, `wafer_annealing_furnace`, `wafer_probe_station`, `wafer_dicing_saw`, `chip_packaging_machine`, `mbe_growth_system`, `electron_beam_lithography_machine`, `nanoimprint_machine`, `ald_furnace`, `nanoparticle_synthesis_reactor`, `transparent_conductive_film_deposition_system`, `laser_direct_write_lithography_machine`, `multiphoton_polymerization_3d_printer`, `superconducting_film_deposition_system`, `quantum_dot_synthesis_reactor`, `topological_insulator_preparation_system`, `two_dimensional_material_cvd_furnace`, `squid_fabrication_line`, `molecular_assembler`, `self_assembly_nano_reactor`, `plasma_catalytic_reactor`, `directed_energy_workbench`, `stress_field_forming_machine`, `quantum_beam_etcher`, `topological_matter_synthesis_furnace`, `subspace_forge`, `time_crystal_growth_furnace`, `dark_matter_purification_tower` | 45/45 | ✅ |
| 石油工业 | `petroleum_drilling_platform`, `petroleum_oil_gas_separator`, `petroleum_storage_tank`, `petroleum_desalter`, `petroleum_atmospheric_distillation_tower`, `petroleum_vacuum_distillation_tower`, `petroleum_catalytic_cracking_reactor`, `petroleum_hydrocracking_reactor`, `petroleum_delayed_coker`, `petroleum_catalytic_reformer`, `petroleum_hydrotreating_reactor`, `petroleum_steam_cracker`, `petroleum_polyethylene_kettle`, `petroleum_polypropylene_kettle`, `petroleum_ethylene_glycol_reactor`, `petroleum_pvc_polymerization_kettle`, `petroleum_styrene_reactor`, `petroleum_polyester_polycondensation_kettle`, `petroleum_nylon_polymerization_kettle` | 19/19 | ✅ |

The four missing *industrial process* recipes are:

1. `primitive_ceramic_tank`
2. `mineral_shaking_table`
3. `mineral_filter_press`
4. `zinc_purification_tank`

They do have normal crafting recipes for the machine blocks; what is missing is
the runtime input/output industrial recipe consumed by the machine BE.

## 5. Dependency Chains And Breakpoints

The arrows below describe the machine/module path represented by registered
machines and generated industrial recipes. A green status means every listed
machine has at least one industrial recipe, not that balance has been tested in
a live world.

| Chain | Registered route | Breakpoint |
|---|---|---|
| Iron | Iron ore -> crusher -> screening -> sintering -> blast furnace -> converter/electric arc furnace -> continuous caster -> rolling -> alloy furnace/quenching; coke oven feeds coke/byproducts | None found in industrial recipe coverage |
| Copper | Copper ore -> crusher -> ball mill -> flotation -> smelting -> converting -> anode furnace -> electrolysis -> wire drawing/rolling/bronze/brass | None found |
| Aluminum | Bauxite -> crusher -> ball mill -> Bayer digestion -> precipitation -> rotary kiln -> molten-salt cell -> ingot caster -> extrusion/alloy | None found |
| Silicon | Quartz -> crusher -> washer -> smelting/glass kiln -> polysilicon reactor -> crystal furnace -> slicing -> photovoltaic line | None found |
| Petroleum | Drilling -> oil-gas separator/storage -> desalter -> atmospheric/vacuum distillation -> cracking/hydrocracking/coking/reforming/hydrotreating -> steam cracker -> polymer/ethylene-glycol/PVC/styrene/polyester/nylon | None found |
| Sorghum | Harvest/crush -> starch separation -> liquefaction -> saccharification -> fermentation -> dehydration -> ethylene/polymer branches; straw -> steam explosion -> alkali -> bleaching -> esterification -> spinning -> molder | None found |
| Rubber | Tapping -> latex coagulation -> roller -> smokehouse -> hand rubber route or vulcanization -> compound mixer | None found |
| Oil palm | Steam -> thresh -> screw press -> clarification -> refining -> fractionation or transesterification/saponification | None found |
| Castor | Dehull -> oil press -> hydrolysis -> cracking -> polymerization/isocyanate/esterification | None found |
| Sisal | Decorticator -> washing -> drying -> carding -> spinning -> rope/loom/wet forming | None found |
| Jojoba | Dehull -> cold press -> precision filter -> winterization -> blending -> vacuum deaeration | None found |
| Nonferrous general route | Jaw crusher -> cone crusher -> ball mill -> jig -> shaking table -> flotation -> filter press -> drying -> furnace/converter/electrolysis; zinc branch -> leach -> purification | `mineral_shaking_table`, `mineral_filter_press`, `zinc_purification_tank` have no industrial recipes |
| Primitive route | Mortar workbench -> kiln/comminutor -> wooden/ceramic tanks | `primitive_ceramic_tank` has no industrial recipe |

## 6. GUI, Containers And Screens

`ModMenuTypes` registers 33 menu types and `UltraTech` registers exactly 33
client `MenuScreens`. The following are intentionally non-GUI functional BEs,
not automatically missing UI:

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

The 222 process machines use one shared menu/screen. The 34 stage machines use
dedicated or shared stage menus as shown above. No missing menu-to-screen
binding was found by static registration comparison.

## 7. Networks And Progression Data Flow

### Research, Compute And Wireless Power

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

| Rule | Static implementation result | Status |
|---|---|---|
| Compute management cost | `ceil(requestFE / 100)` | ✅ |
| Broadcast demand multiplier | `1.2` | ✅ |
| Wired-grid request multiplier | received broadcast x `1.4` = original demand x `1.68` | ✅ |
| Receiver efficiency | random `0.89` to `0.94` | ✅ |
| Receiver scheduling | high/medium/low priority, same-priority round robin | ✅ |
| End-to-end closure | Request, broadcast, input and receiver paths are connected through `WirelessPowerNetwork` | ⚠️ |

Residual risks:

- `tickBroadcast()` reads the previous snapshot of input FE before
  `tickInput()` writes the next value, so distribution can lag by one tick.
- `ResearchTerminalBlockEntity` reports `0` for local compute production and
  energy cost; it relies on the external compute network by design.
- Persistence, multiplayer, cross-dimension behavior and tick-order effects
  were not runtime-tested in this static audit.

## 8. Dimensions And World Generation

### 8.1 Dimension Registration

All 14 dimension JSON files exist and specify a generator:

| Dimension ID | Generator | Status |
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

Saturn needs a product decision, not a missing generator fix:

- `SpaceBody.SATURN` is marked `implemented=true` and `saturnian` has a
  complete generator/resource table.
- The normal `SpaceTransitionHandler` landing path explicitly displays
  `saturn_forbidden` instead of teleporting the player.
- Other target-level code paths can still resolve `SATURNIAN`.

This conflicts with the intended "gas giant, forbidden to travel to" rule and
should be made unambiguous.

### 8.2 Ore And Petroleum Worldgen

`ModOreWorldGenProvider` generates configured features, placed features and
Forge biome modifiers for native ores and petroleum:

- Crude oil: Y 10-60, normal/ocean/beach integration.
- Heavy oil: Y 10-50, ocean/swamp integration.
- Oil sand: Y 10-80, badlands.
- Oil shale: Y 10-80, normal/badlands/ocean.
- Crude-oil lake modifiers: desert/ocean, rarity 30.

Status: `✅` worldgen is connected through generated datapack resources.

Deviation from the requested petroleum design: the implementation uses vanilla
ore feature placement and biome modifiers, not a custom Simplex-noise vein
distribution. Status for that specific design requirement: `⚠️`.

## 9. Resource, Language And Loot Closure

### 9.1 Languages

- `zh_cn.json` and `en_us.json` are valid UTF-8 JSON.
- Both contain 6,888 keys.
- Their key sets are identical.
- Chinese keys include 3,914 item entries, 925 block entries, 74 fluid-type
  entries, 304 container entries and 742 GUI entries.
- All 4,558 scanned item models resolve either an item or block Chinese name
  key.

Result: `✅` no static language-key gap was found by stage/category.

### 9.2 Textures And Models

- Item models with directly referenced `layer0` textures missing: `0`.
- Block model texture references missing at scan time: `35`.

Missing face textures:

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

These are model-reference misses, not item-icon misses. Generated/untracked
worktree resources may change this result after a fresh datagen/resource
closure pass.

### 9.3 Loot

There are 306 block IDs without a same-name loot-table file in the simple name
comparison. This is not a confirmed defect count because the set includes
fluid blocks and explicitly `noLootTable` creative blocks. A semantic loot
audit is still needed before treating any of these as missing drops.

## 10. Gap Summary

| Priority | Gap | Evidence | Recommended action |
|---|---|---|---|
| P0 | Four process machines cannot perform any industrial operation | No `industrial_process` recipe for ceramic tank, shaking table, filter press, zinc purification tank | Add and test one closed input/output recipe for each |
| P1 | 35 block-model face texture references unresolved | Ten late-stage machines lack left/right/back; windmill lacks five faces | Add/relink exact PNGs and run resource closure check |
| P1 | Saturn implementation status is contradictory | Body marked implemented; dimension/generator exist; standard travel rejects landing | Make Saturn orbit-only or allow the solid-core dimension, but remove the mixed state |
| P2 | Stage machines are mostly generic | 34 registered, many share `StageMachineBlockEntity` rather than individual recipes/logic | Prioritize unique mechanics for power-generation stages |
| P2 | Petroleum vein design differs from specification | Standard ore features, not Simplex-noise veins | Implement custom noise distribution only if that visual/gameplay distinction matters |
| P2 | Wireless power tick-order is untested | Broadcast reads previous input snapshot | Add server-side tick-order/multiplayer test cases |
| P2 | Loot comparison is incomplete | 306 name mismatches include intentional no-loot blocks | Classify by block behavior before creating loot files |

## 11. Recommended Next Actions

1. Resolve the four P0 industrial recipe gaps and execute a machine input/output
   smoke test for each.
2. Repair the 35 unresolved block face texture references, then run the Forge
   closure checker and load a client resource reload.
3. Decide Saturn's canonical behavior: orbit-only gas giant or a landable
   solid-core abstraction. Align `SpaceBody`, target resolution and transition
   code.
4. Add a deterministic test or debug trace for wireless request -> broadcast ->
   wired input -> receiver delivery across consecutive ticks.
5. Audit generic stage-machine logic starting with the late power chain, where
   visual registration currently exceeds distinct gameplay behavior.
6. Run a semantic loot-table audit that excludes liquid/no-loot blocks before
   treating the 306 raw mismatches as defects.

## Source Files Audited

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
- generated models, blockstates, recipes, loot tables and worldgen data

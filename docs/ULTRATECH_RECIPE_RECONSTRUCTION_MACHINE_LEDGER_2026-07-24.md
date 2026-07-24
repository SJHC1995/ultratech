# UltraTech 全量配方重构：逐机证据台账

> **生成来源：** `scripts/generate-recipe-reconstruction-ledger.ps1`。本台账从当前 Java 内容清单、DataGen 构造配方、配方清单和工业路线契约直接生成；不得手改。
>
> **研究边界：** 257 包研究只在 `ULTRATECH_FULL_RECIPE_RECONSTRUCTION_PLAN.md` 中以原创结构标签、路线契约和模式来源呈现。本台账不复制任何第三方配方、脚本、任务文本、数值或资产。

## 一、完整性基线

| 项目 | 当前值 | 证明方式 |
|---|---:|---|
| 阶段机 | 34 | StageMachine.java + 显式 DataGen 构造配方 |
| 工业机 | 556 | 四个 IndustrialProcessMachine 内容源 + 显式 DataGen 构造配方 |
| 工业路线 | 17 | DataGen 路线契约 |
| 运行时入口 | 554 材料工艺 + 1 状态型种植园 + 1 专用燃料机 | 配方清单、状态机和 IndustrialProcessMachineBlockEntity |

工业机行给出构造功能件（配方 `F` 槽位）；阶段机行给出优先级能力锚点。所有行均给出运行工艺 ID、阶段、工业路线、路线证据标签和恢复出口。`状态型`表示产出由成熟状态和专用交互工具完成；`专用燃料机`表示产出为 FE，而非普通配方物品。

## 二、34 台阶段机

| 阶段 | 机器 | 构造能力锚点 | 配方 ID | 研究/运行验证 |
|---:|---|---|---|---|
| 1 | `animal_power_millstone` | `G=ultratech:wooden_gear` | `ultratech:animal_power_millstone` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 2 | `water_wheel` | `F=ultratech:wooden_frame` | `ultratech:water_wheel` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 3 | `windmill_tower` | `G=ultratech:wooden_gear` | `ultratech:windmill_tower` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 4 | `mechanical_gearbox` | `C=ultratech:steel_casing` | `ultratech:mechanical_gearbox` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 5 | `low_pressure_boiler` | `P=ultratech:copper_pipe` | `ultratech:low_pressure_boiler` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 6 | `high_pressure_boiler` | `H=ultratech:steel_pressure_vessel` | `ultratech:high_pressure_boiler` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 7 | `steam_turbine` | `H=ultratech:steel_pressure_vessel` | `ultratech:steam_turbine` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 8 | `stirling_engine` | `H=ultratech:steel_pressure_vessel` | `ultratech:stirling_engine` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 9 | `piston_combustion_engine` | `C=ultratech:steel_casing` | `ultratech:piston_combustion_engine` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 10 | `turbo_combustion_engine` | `H=ultratech:steel_pressure_vessel` | `ultratech:turbo_combustion_engine` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 11 | `gas_turbine` | `H=ultratech:steel_pressure_vessel` | `ultratech:gas_turbine` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 12 | `thermoelectric_generator` | `H=ultratech:steel_pressure_vessel` | `ultratech:thermoelectric_generator` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 13 | `dc_converter_station` | `H=ultratech:basic_circuit` | `ultratech:dc_converter_station` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 14 | `ac_substation_tower` | `H=ultratech:advanced_circuit` | `ultratech:ac_substation_tower` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 15 | `photovoltaic_matrix` | `C=ultratech:steel_casing` | `ultratech:photovoltaic_matrix` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 16 | `solar_thermal_collector` | `H=ultratech:steel_pressure_vessel` | `ultratech:solar_thermal_collector` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 17 | `fission_reactor` | `H=ultratech:advanced_circuit` | `ultratech:fission_reactor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 18 | `breeder_reactor` | `H=ultratech:advanced_circuit` | `ultratech:breeder_reactor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 19 | `molten_salt_reactor` | `H=ultratech:advanced_circuit` | `ultratech:molten_salt_reactor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 20 | `deuterium_fusion_reactor` | `H=ultratech:controlled_energy_transformer` | `ultratech:deuterium_fusion_reactor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 21 | `helium_fusion_reactor` | `H=ultratech:helium3_capsule` | `ultratech:helium_fusion_reactor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 22 | `proton_accelerator` | `H=ultratech:controlled_energy_transformer` | `ultratech:proton_accelerator` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 23 | `tokamak_ring` | `H=ultratech:controlled_energy_transformer` | `ultratech:tokamak_ring` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 24 | `laser_fusion_chamber` | `H=ultratech:controlled_energy_transformer` | `ultratech:laser_fusion_chamber` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 25 | `muon_generator` | `H=ultratech:controlled_energy_transformer` | `ultratech:muon_generator` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 26 | `strange_matter_compressor` | `H=ultratech:controlled_energy_transformer` | `ultratech:strange_matter_compressor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 27 | `degenerate_matter_generator` | `H=ultratech:superconducting_magnet` | `ultratech:degenerate_matter_generator` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 28 | `antimatter_collector` | `H=ultratech:magnetic_confinement_bottle` | `ultratech:antimatter_collector` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 28 | `casimir_extractor` | `H=ultratech:casimir_crystal` | `ultratech:casimir_extractor` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 29 | `singularity_generator` | `H=ultratech:superconducting_magnet` | `ultratech:singularity_generator` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 29 | `void_energy_siphon` | `H=ultratech:micro_singularity_core` | `ultratech:void_energy_siphon` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 30 | `cosmic_gate` | `H=ultratech:spacetime_anchor` | `ultratech:cosmic_gate` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 30 | `genesis_core` | `H=ultratech:cosmic_gate` | `ultratech:genesis_core` | 前序设备构造 + 本阶段研究 + 运行能力验证 |
| 30 | `nihility_engine` | `H=ultratech:micro_singularity_core` | `ultratech:nihility_engine` | 前序设备构造 + 本阶段研究 + 运行能力验证 |

## 三、556 台工业机

### 读取规则

- **模式证据：** `evidence_tags` 和恢复出口来自该行所属的原创 UltraTech 路线契约；其样本映射与采用/拒绝规则见全量重构方案第 1、7.9 与 7.11 节。
- **稳定但慢 / 昂贵但快：** 由路线 `alternative_route` 与 `route_variants` 定义；单台机器不会被伪造成无成本双配方。
- **直接执行依据：** 修改某行之前，必须保持其构造功能件，保留其列出的运行入口，并保留相同路线的恢复出口或更明确的等价出口。

### ALUMINUM_METALLURGY（9 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``aluminum_alloy_furnace`` | ``ultratech:steel_rod`` | `aluminum/alloy` → ultratech:aluminum_alloy | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_ball_mill`` | ``ultratech:steel_rod`` | `aluminum/milled_bauxite` → ultratech:milled_bauxite | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_bauxite_crusher`` | ``ultratech:steel_rod`` | `aluminum/crushed_bauxite` → ultratech:crushed_bauxite x2 | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_digestion_reactor`` | ``ultratech:copper_pipe`` | `aluminum/sodium_aluminate` → ultratech:sodium_aluminate_liquor, ultratech:red_mud<br>`midgame/aluminum_metallurgy/aluminum_digestion_reactor_chlor_alkali_caustic` → ultratech:sodium_aluminate_liquor, ultratech:red_mud | 12, 13 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet)<br>`standard_parts_backbone` (automation_exit, first_consumer, parallelization) | off_gas_scrubbing<br>scrap_remelt |
| ``aluminum_extrusion_press`` | ``ultratech:steel_rod`` | `aluminum/profile` → ultratech:aluminum_profile x2 | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_ingot_caster`` | ``ultratech:iron_bolt`` | `aluminum/ingot_cast` → ultratech:aluminum_ingot_cast | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_molten_salt_cell`` | ``ultratech:copper_pipe`` | `aluminum/molten_charge` → ultratech:molten_aluminum_charge | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_precipitation_tank`` | ``ultratech:copper_pipe`` | `aluminum/hydroxide_precipitate` → ultratech:aluminum_hydroxide_precipitate | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``aluminum_rotary_kiln`` | ``ultratech:steel_rod`` | `aluminum/alumina` → ultratech:alumina | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |

### BIOCHEMISTRY（10 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``biochemical_crystallizer`` | ``ultratech:iron_bolt`` | `midgame/biochemistry/biochemical_crystallizer` → ultratech:biochemical_crystal | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``biochemical_dryer`` | ``ultratech:copper_pipe`` | `midgame/biochemistry/biochemical_dryer` → ultratech:biochemical_powder<br>`midgame/biochemistry/biochemical_dryer_organic_acids` → ultratech:citric_acid_product, ultratech:amino_acid_product | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``biochemical_ion_exchange_column`` | ``ultratech:copper_pipe`` | `midgame/biochemistry/biochemical_ion_exchange_column` → ultratech:purified_biochemical_product | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``biochemical_membrane_separator`` | ``ultratech:copper_pipe`` | `midgame/biochemistry/biochemical_membrane_separator` → ultratech:clarified_fermentation_liquor | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``biological_seed_tank`` | ``ultratech:copper_pipe`` | `midgame/biochemistry/biological_seed_tank` → ultratech:seed_culture | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``biomass_pretreatment_reactor`` | ``ultratech:copper_pipe`` | `integration/biomass/pulp_to_biochemistry` → ultratech:pretreated_biomass x2<br>`midgame/biochemistry/biomass_pretreatment_reactor` → ultratech:pretreated_biomass | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``culture_medium_sterilizer`` | ``ultratech:iron_bolt`` | `midgame/biochemistry/culture_medium_sterilizer` → ultratech:sterile_culture_medium | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``enzymatic_hydrolysis_reactor`` | ``ultratech:copper_pipe`` | `midgame/biochemistry/enzymatic_hydrolysis_reactor` → ultratech:saccharified_liquor | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``enzyme_immobilization_reactor`` | ``ultratech:copper_pipe`` | `midgame/biochemistry/enzyme_immobilization_reactor` → ultratech:immobilized_enzyme | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``industrial_fermenter`` | ``ultratech:iron_bolt`` | `midgame/biochemistry/industrial_fermenter` → ultratech:biochemical_fermentation_broth | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### CASTOR（7 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``castor_cracking_reactor`` | ``ultratech:copper_pipe`` | `castor/cracking` → ultratech:sebacic_acid, ultratech:heptaldehyde | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``castor_dehuller`` | ``ultratech:iron_bolt`` | `castor/dehulled_seed` → ultratech:hulled_castor_seed x2, ultratech:castor_husk | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``castor_esterification_reactor`` | ``ultratech:copper_pipe`` | `castor/bio_lubricant` → ultratech:bio_lubricant_base | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``castor_hydrolysis_kettle`` | ``ultratech:iron_bolt`` | `castor/hydrolysis` → ultratech:castor_oil_acid, ultratech:castor_glycerol | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``castor_isocyanate_synthesis_tower`` | ``ultratech:copper_pipe`` | `castor/polyurethane` → ultratech:polyurethane_prepolymer | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``castor_oil_press`` | ``ultratech:steel_rod`` | `castor/oil_press` → ultratech:castor_meal, ultratech:castor_oil 500 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``castor_polymerization_kettle`` | ``ultratech:iron_bolt`` | `castor/nylon_11` → ultratech:nylon_11_pellet x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### CERAMICS（9 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``ceramic_batch_mixer`` | ``ultratech:iron_bolt`` | `midgame/ceramics/ceramic_batch_mixer` → ultratech:mixed_ceramic_powder | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_dry_press`` | ``ultratech:steel_rod`` | `midgame/ceramics/ceramic_dry_press` → ultratech:ceramic_green_body | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_drying_kiln`` | ``ultratech:steel_rod`` | `midgame/ceramics/ceramic_drying_kiln` → ultratech:dried_ceramic_body | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_extruder`` | ``ultratech:steel_rod`` | `midgame/ceramics/ceramic_extruder` → ultratech:ceramic_green_body | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_high_temperature_sintering_furnace`` | ``ultratech:steel_rod`` | `midgame/ceramics/ceramic_high_temperature_sintering_furnace` → ultratech:sintered_ceramic_part<br>`midgame/ceramics/ceramic_high_temperature_sintering_furnace_electronic_substrate` → ultratech:electronic_ceramic_substrate<br>`midgame/ceramics/ceramic_high_temperature_sintering_furnace_ferrite_core` → ultratech:ferrite_magnetic_core | 16, 17 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_hot_isostatic_press`` | ``ultratech:steel_rod`` | `midgame/ceramics/ceramic_hot_isostatic_press` → ultratech:high_density_ceramic_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_processing_center`` | ``ultratech:iron_bolt`` | `midgame/ceramics/ceramic_processing_center` → ultratech:precision_ceramic_part<br>`midgame/ceramics/ceramic_processing_center_components` → ultratech:ceramic_bearing_component, ultratech:ceramic_insulator | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_raw_material_grinder`` | ``ultratech:steel_rod`` | `midgame/ceramics/ceramic_raw_material_grinder` → ultratech:kaolin_ceramic_powder | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ceramic_slip_casting_machine`` | ``ultratech:iron_bolt`` | `midgame/ceramics/ceramic_slip_casting_machine` → ultratech:ceramic_green_body | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### CHLOR_ALKALI（5 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``chlor_alkali_chlorination_reactor`` | ``ultratech:copper_pipe`` | `chlor_alkali/bleaching_chloride` → ultratech:bleaching_chloride<br>`chlor_alkali/pvc_resin` → ultratech:pvc_resin x2<br>`chlor_alkali/vinyl_chloride` → ultratech:chlor_alkali_vinyl_chloride 300 mB<br>`integration/chlor_alkali/ethylene_vinyl_chloride` → ultratech:chlor_alkali_vinyl_chloride 500 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet)<br>`petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing<br>polymer_regrind |
| ``chlor_alkali_dissolution_tank`` | ``ultratech:copper_pipe`` | `chlor_alkali/brine` → ultratech:chlor_alkali_brine 500 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``chlor_alkali_electrolytic_cell`` | ``ultratech:copper_pipe`` | `chlor_alkali/membrane_electrolysis` → ultratech:chlor_alkali_chlorine 300 mB, ultratech:chlor_alkali_hydrogen 150 mB, ultratech:chlor_alkali_sodium_hydroxide 300 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``chlor_alkali_hydrochloric_acid_tower`` | ``ultratech:copper_pipe`` | `chlor_alkali/hydrochloric_acid` → ultratech:chlor_alkali_hydrochloric_acid 300 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``chlor_alkali_salt_crusher`` | ``ultratech:steel_rod`` | `chlor_alkali/crushed_salt` → ultratech:crushed_salt x2<br>`chlor_alkali/rock_salt` → ultratech:rock_salt_chunk x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |

### COMPRESSED_AIR_SYSTEM（14 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``centrifugal_air_compressor`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/centrifugal_air_compressor` → ultratech:pneumatic_hot_compressed_air 500 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``compressed_air_aftercooler`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/compressed_air_aftercooler` → ultratech:pneumatic_cooled_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``compressed_air_dewpoint_meter`` | ``ultratech:steel_rod`` | `midgame/compressed_air_system/compressed_air_dewpoint_meter` → ultratech:pneumatic_clean_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``compressed_air_distributor`` | ``ultratech:steel_rod`` | `midgame/compressed_air_system/compressed_air_distributor` → ultratech:pneumatic_clean_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``compressed_air_flow_meter`` | ``ultratech:steel_rod`` | `midgame/compressed_air_system/compressed_air_flow_meter` → ultratech:pneumatic_service_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``compressed_air_water_separator`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/compressed_air_water_separator` → ultratech:pneumatic_dewatered_air 220 mB, ultratech:pneumatic_condensate 30 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``desiccant_air_dryer`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/desiccant_air_dryer` → ultratech:pneumatic_adsorption_dry_air 230 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``piston_air_compressor`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/piston_air_compressor` → ultratech:compressed_air 200 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``pneumatic_air_receiver`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/pneumatic_air_receiver` → ultratech:pneumatic_clean_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``pneumatic_precision_filter`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/pneumatic_precision_filter` → ultratech:pneumatic_clean_air 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``pneumatic_primary_air_filter`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/pneumatic_primary_air_filter` → ultratech:pneumatic_filtered_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``pneumatic_service_unit`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/pneumatic_service_unit` → ultratech:pneumatic_service_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``refrigerated_air_dryer`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/refrigerated_air_dryer` → ultratech:pneumatic_refrigerated_dry_air 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``screw_air_compressor`` | ``ultratech:copper_pipe`` | `midgame/compressed_air_system/screw_air_compressor` → ultratech:compressed_air 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |

### COPPER_METALLURGY（11 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``copper_anode_furnace`` | ``ultratech:steel_rod`` | `copper/anode` → ultratech:copper_anode | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_ball_mill`` | ``ultratech:steel_rod`` | `copper/milled_ore` → ultratech:milled_copper_ore | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_brass_furnace`` | ``ultratech:steel_rod`` | `copper/brass_charge` → ultratech:brass_charge | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_bronze_furnace`` | ``ultratech:steel_rod`` | `copper/bronze_charge` → ultratech:bronze_charge | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_converting_furnace`` | ``ultratech:steel_rod`` | `copper/blister` → ultratech:blister_copper | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_electrolytic_cell`` | ``ultratech:copper_pipe`` | `copper/cathode` → ultratech:cathode_copper, ultratech:copper_anode_slime | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_flotation_cell`` | ``ultratech:copper_pipe`` | `copper/concentrate` → ultratech:copper_concentrate | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_ore_crusher`` | ``ultratech:steel_rod`` | `copper/crushed_ore` → ultratech:crushed_copper_ore x2 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_rolling_mill`` | ``ultratech:steel_rod`` | `copper/rolled_plate` → ultratech:rolled_copper_plate x2 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_smelting_furnace`` | ``ultratech:steel_rod`` | `copper/matte` → ultratech:copper_matte | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``copper_wire_drawing_machine`` | ``ultratech:iron_bolt`` | `copper/wire_rod` → ultratech:copper_wire_rod x2 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |

### CRYOGENIC_ENGINEERING（11 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``air_filtration_compression_unit`` | ``ultratech:steel_rod`` | `cryogenic/air_filtration` → ultratech:filtered_compressed_air 900 mB<br>`cryogenic/helium_feed_gas` → ultratech:helium_rich_natural_gas 500 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``air_fractionation_column`` | ``ultratech:steel_pressure_vessel`` | `cryogenic/air_fractionation` → ultratech:liquid_nitrogen 500 mB, ultratech:liquid_oxygen 300 mB, ultratech:liquid_argon 100 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``cryogenic_distribution_manifold`` | ``ultratech:copper_pipe`` | `cryogenic/distribution` → ultratech:liquid_nitrogen 950 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``cryogenic_storage_tank`` | ``ultratech:steel_pressure_vessel`` | `cryogenic/storage/liquid_argon` → ultratech:liquid_argon_tank, ultratech:liquid_argon 1000 mB<br>`cryogenic/storage/liquid_helium` → ultratech:liquid_helium_tank, ultratech:liquid_helium 1000 mB<br>`cryogenic/storage/liquid_hydrogen` → ultratech:liquid_hydrogen_tank, ultratech:liquid_hydrogen 1000 mB<br>`cryogenic/storage/liquid_nitrogen` → ultratech:liquid_nitrogen_tank, ultratech:liquid_nitrogen 1000 mB<br>`cryogenic/storage/liquid_oxygen` → ultratech:liquid_oxygen_tank, ultratech:liquid_oxygen 1000 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``cryostat_array`` | ``ultratech:copper_pipe`` | `cryogenic/cryostat_array` → ultratech:cryogenic_coolant 450 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``dilution_refrigerator`` | ``ultratech:copper_pipe`` | `cryogenic/dilution_refrigeration` → ultratech:millikelvin_environment_module, ultratech:cryogenic_coolant 400 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``helium_extraction_tower`` | ``ultratech:steel_pressure_vessel`` | `cryogenic/helium_extraction` → ultratech:crude_helium_cartridge, ultratech:helium_tail_gas_cartridge, ultratech:crude_helium 300 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``helium_liquefier`` | ``ultratech:steel_pressure_vessel`` | `cryogenic/helium_liquefaction` → ultratech:liquid_helium 350 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``hydrogen_liquefier`` | ``ultratech:steel_pressure_vessel`` | `cryogenic/hydrogen_liquefaction` → ultratech:liquid_hydrogen 400 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``hydrogen_purifier`` | ``ultratech:high_pressure_pipe`` | `cryogenic/hydrogen_purification` → ultratech:high_purity_hydrogen_cartridge, ultratech:high_purity_hydrogen 450 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``superconductivity_test_platform`` | ``ultratech:copper_pipe`` | `cryogenic/superconductivity_test` → ultratech:superconductivity_quality_report<br>`integration/superconducting/magnetic_confinement_bottle` → ultratech:magnetic_confinement_bottle<br>`integration/superconducting/superconducting_cable` → ultratech:superconducting_cable x2<br>`integration/superconducting/superconducting_magnet` → ultratech:superconducting_magnet | 22, 29 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |

### DISPERSED_METAL_RECOVERY（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``chlorination_distillation_column`` | ``ultratech:copper_pipe`` | `dispersed/germanium` → ultratech:germanium_bearing_dust, ultratech:germanium_hydrolysate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``dispersed_metal_leaching_tank`` | ``ultratech:copper_pipe`` | `dispersed/indium` → ultratech:indium_bearing_dust, ultratech:crude_indium<br>`dispersed/selenium_tellurium` → ultratech:selenium_tellurium_bearing_material, ultratech:crude_selenium, ultratech:crude_tellurium | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``dispersed_reduction_furnace`` | ``ultratech:steel_rod`` | `dispersed/bismuth_antimony_cadmium` → ultratech:bismuth_slag, ultratech:refined_bismuth, ultratech:antimony_concentrate, ultratech:crude_antimony, ultratech:sponge_cadmium<br>`dispersed/cadmium_ingot` → ultratech:cadmium_ingot_cast<br>`dispersed/ferrovanadium` → ultratech:ferrovanadium<br>`dispersed/germanium_ingot` → ultratech:germanium_ingot_cast<br>`dispersed/indium_ingot` → ultratech:indium_ingot_cast | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``dispersed_solvent_extraction_tower`` | ``ultratech:copper_pipe`` | `dispersed/gallium` → ultratech:gallium_mother_liquor_residue, ultratech:electrolytic_gallium | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``fluoride_extraction_column`` | ``ultratech:copper_pipe`` | `dispersed/niobium` → ultratech:niobium_hydroxide, ultratech:niobium_pentoxide, ultratech:niobium_metal<br>`dispersed/tantalum` → ultratech:potassium_fluorotantalate, ultratech:tantalum_metal_powder | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``vanadium_roasting_kiln`` | ``ultratech:steel_rod`` | `dispersed/vanadium` → ultratech:vanadium_roasted_material, ultratech:vanadium_pentoxide | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### ELECTROCHEMISTRY（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``anodizing_tank`` | ``ultratech:copper_pipe`` | `electrochemistry/anodizing/black` → ultratech:anodized_aluminum_black<br>`electrochemistry/anodizing/blue` → ultratech:anodized_aluminum_blue<br>`electrochemistry/anodizing/gold` → ultratech:anodized_aluminum_gold<br>`electrochemistry/anodizing/green` → ultratech:anodized_aluminum_green<br>`electrochemistry/anodizing/natural` → ultratech:anodized_aluminum_natural<br>`electrochemistry/anodizing/purple` → ultratech:anodized_aluminum_purple<br>`electrochemistry/anodizing/red` → ultratech:anodized_aluminum_red | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``electrodialyzer`` | ``ultratech:steel_pressure_vessel`` | `electrochemistry/electrodialysis` → ultratech:purified_water 300 mB, ultratech:concentrated_brine 200 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``electroplating_tank`` | ``ultratech:copper_pipe`` | `electrochemistry/plating/chromium` → ultratech:chromium_plated_component<br>`electrochemistry/plating/copper` → ultratech:copper_plated_component<br>`electrochemistry/plating/gold` → ultratech:gold_plated_component<br>`electrochemistry/plating/nickel` → ultratech:nickel_plated_component<br>`electrochemistry/plating/platinum` → ultratech:platinum_plated_component<br>`electrochemistry/plating/silver` → ultratech:silver_plated_component<br>`electrochemistry/plating/zinc` → ultratech:zinc_plated_component | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``organic_electrosynthesis_reactor`` | ``ultratech:copper_pipe`` | `electrochemistry/glyoxylic_acid` → ultratech:glyoxylic_acid_solution 400 mB<br>`electrochemistry/sorbic_acid` → ultratech:sorbic_acid_solution 350 mB<br>`electrochemistry/tetraethyl_lead` → ultratech:tetraethyl_lead_solution 250 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plating_thickness_tester`` | ``ultratech:basic_circuit`` | `electrochemistry/inspection/chromium_plated_component` → ultratech:plating_quality_report<br>`electrochemistry/inspection/copper_plated_component` → ultratech:plating_quality_report<br>`electrochemistry/inspection/gold_plated_component` → ultratech:plating_quality_report<br>`electrochemistry/inspection/nickel_plated_component` → ultratech:plating_quality_report<br>`electrochemistry/inspection/platinum_plated_component` → ultratech:plating_quality_report<br>`electrochemistry/inspection/silver_plated_component` → ultratech:plating_quality_report<br>`electrochemistry/inspection/zinc_plated_component` → ultratech:plating_quality_report | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``water_electrolyzer`` | ``ultratech:copper_pipe`` | `electrochemistry/water_electrolysis` → ultratech:chlor_alkali_hydrogen 330 mB, ultratech:electrochemical_oxygen 165 mB | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |

### EUCALYPTUS_TREE（8 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``eucalyptus_board_press`` | ``ultratech:steel_rod`` | `eucalyptus_tree/engineered_board` → ultratech:eucalyptus_board x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_chipper`` | ``ultratech:iron_bolt`` | `eucalyptus_tree/chipping` → ultratech:eucalyptus_chip x5, ultratech:eucalyptus_bark | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_harvester`` | ``ultratech:iron_bolt`` | `eucalyptus_tree/automatic_harvest` → ultratech:eucalyptus_log x2, ultratech:eucalyptus_branch_leaf | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_leaf_distillation_kettle`` | ``ultratech:basic_mechanical_frame`` | `eucalyptus_tree/crude_oil` → ultratech:crude_eucalyptus_oil 300 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_oil_rectifier`` | ``ultratech:copper_pipe`` | `eucalyptus_tree/refined_oil` → ultratech:refined_eucalyptus_oil 260 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_plantation`` | ``ultratech:iron_bolt`` | `eucalyptus_tree/plantation_harvest` → ultratech:eucalyptus_log x3, ultratech:eucalyptus_branch_leaf x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_tannin_dryer`` | ``ultratech:copper_pipe`` | `eucalyptus_tree/tannin_powder` → ultratech:tannin_powder x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucalyptus_tannin_extraction_tank`` | ``ultratech:advanced_mechanical_frame`` | `eucalyptus_tree/tannin_solution` → ultratech:tannin_solution 350 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### EUCOMMIA_TREE（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``eucommia_extract_tank`` | ``ultratech:reinforced_mechanical_frame`` | `eucommia_tree/extraction` → ultratech:crude_eucommia_rubber_liquor 450 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucommia_leaf_collector`` | ``ultratech:iron_bolt`` | `eucommia_tree/leaf_collection` → ultratech:eucommia_leaf x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucommia_plantation`` | ``ultratech:iron_bolt`` | `eucommia_tree/plantation_harvest` → ultratech:eucommia_bark x3, ultratech:eucommia_leaf x3 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucommia_precipitation_tank`` | ``ultratech:copper_pipe`` | `eucommia_tree/precipitation` → ultratech:crude_eucommia_rubber x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucommia_refiner`` | ``ultratech:iron_bolt`` | `eucommia_tree/refining` → ultratech:refined_eucommia_rubber x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``eucommia_vulcanization_tank`` | ``ultratech:copper_pipe`` | `eucommia_tree/vulcanization` → ultratech:eucommia_rubber_product x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### FUSION_FUEL（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``fusion_fuel_injector`` | ``ultratech:steel_pressure_vessel`` | `midgame/fusion_fuel/fusion_fuel_injector` → ultratech:fusion_fuel_target x2<br>`midgame/fusion_fuel/fusion_fuel_injector_dt_fuel_target` → ultratech:fusion_fuel_target x2<br>`midgame/fusion_fuel/fusion_fuel_injector_first_wall_target` → ultratech:fusion_fuel_target x2 | 22, 24 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``fusion_fuel_mixer`` | ``ultratech:steel_pressure_vessel`` | `midgame/fusion_fuel/fusion_fuel_mixer` → ultratech:deuterium_tritium_mix 200 mB<br>`midgame/fusion_fuel/fusion_fuel_mixer_dt_fuel` → ultratech:dt_fuel 200 mB | 22, 24 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``heavy_water_electrolyzer`` | ``ultratech:steel_pressure_vessel`` | `midgame/fusion_fuel/heavy_water_electrolyzer` → ultratech:deuterium_gas_cylinder, ultratech:fusion_deuterium_gas 200 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``lithium_neutron_irradiation_reactor`` | ``ultratech:steel_pressure_vessel`` | `midgame/fusion_fuel/lithium_neutron_irradiation_reactor` → ultratech:tritium_breeding_blanket_module, ultratech:fusion_tritium_gas 100 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``tritium_extraction_tower`` | ``ultratech:steel_pressure_vessel`` | `midgame/fusion_fuel/tritium_extraction_tower` → ultratech:fusion_tritium_gas 150 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``tritium_purifier`` | ``ultratech:high_pressure_pipe`` | `midgame/fusion_fuel/tritium_purifier` → ultratech:tritium_gas_cylinder | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |

### HELIUM3_EXTRACTION（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``helium_release_furnace`` | ``ultratech:steel_rod`` | `midgame/helium3_extraction/helium_release_furnace` → ultratech:degassed_lunar_regolith<br>`midgame/helium3_extraction/helium_release_furnace_helium_outgassing` → ultratech:degassed_lunar_regolith, ultratech:crude_lunar_helium 250 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``helium3_liquefier`` | ``ultratech:steel_pressure_vessel`` | `midgame/helium3_extraction/helium3_liquefier` → ultratech:liquid_helium3_canister, ultratech:liquid_helium3 100 mB<br>`midgame/helium3_extraction/helium3_liquefier_deuterium_fuel_blend` → ultratech:helium3_deuterium_fuel 200 mB | 22, 24 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``helium3_separation_column`` | ``ultratech:steel_pressure_vessel`` | `midgame/helium3_extraction/helium3_separation_column` → ultratech:enriched_helium3_gas 100 mB, ultratech:helium4_offgas 150 mB | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``lunar_mining_platform`` | ``ultratech:steel_pressure_vessel`` | `midgame/helium3_extraction/lunar_mining_platform` → ultratech:lunar_regolith x2 | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``lunar_regolith_crusher`` | ``ultratech:steel_rod`` | `midgame/helium3_extraction/lunar_regolith_crusher` → ultratech:crushed_lunar_regolith | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |
| ``lunar_regolith_sieve`` | ``ultratech:steel_pressure_vessel`` | `midgame/helium3_extraction/lunar_regolith_sieve` → ultratech:screened_lunar_regolith | 22 | `cryogenic_field_infrastructure` (maintenance, recovery_outlet, operating_constraint) | cryogen_and_coil_recovery |

### INDUSTRIAL_CATALYSIS（16 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``active_component_impregnation_machine`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/active_component_impregnation_machine` → ultratech:impregnated_catalyst<br>`midgame/industrial_catalysis/active_component_impregnation_machine_ammonia_metal_salt` → ultratech:impregnated_catalyst, ultratech:catalyst_impregnation_liquor 250 mB | 16, 17 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``carrier_calcination_furnace`` | ``ultratech:steel_rod`` | `midgame/industrial_catalysis/carrier_calcination_furnace` → ultratech:finished_catalyst_carrier<br>`midgame/industrial_catalysis/carrier_calcination_furnace_argon_calcination` → ultratech:finished_catalyst_carrier | 16, 17 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``carrier_dryer`` | ``ultratech:copper_pipe`` | `midgame/industrial_catalysis/carrier_dryer` → ultratech:dried_catalyst_carrier | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_acid_regeneration_tank`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/catalyst_acid_regeneration_tank` → ultratech:acid_washed_catalyst | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_calcination_activation_furnace`` | ``ultratech:steel_rod`` | `midgame/industrial_catalysis/catalyst_calcination_activation_furnace` → ultratech:active_catalyst | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_carrier_forming_machine`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/catalyst_carrier_forming_machine` → ultratech:carrier_green_body<br>`midgame/industrial_catalysis/catalyst_carrier_forming_machine_nano_carrier` → ultratech:carrier_green_body | 16, 22 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer)<br>`precision_campus` (parallelization, visible_constraint, recovery_outlet) | catalyst_regeneration<br>reject_material_recovery |
| ``catalyst_coating_machine`` | ``ultratech:steel_rod`` | `midgame/industrial_catalysis/catalyst_coating_machine` → ultratech:coated_catalyst | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_dryer`` | ``ultratech:copper_pipe`` | `midgame/industrial_catalysis/catalyst_dryer` → ultratech:dried_catalyst | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_evaluation_test_bench`` | ``ultratech:basic_circuit`` | `midgame/industrial_catalysis/catalyst_evaluation_test_bench` → ultratech:catalyst_quality_report | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_reduction_activator`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/catalyst_reduction_activator` → ultratech:reduced_catalyst | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``catalyst_regeneration_furnace`` | ``ultratech:steel_rod`` | `midgame/industrial_catalysis/catalyst_regeneration_furnace` → ultratech:regenerated_catalyst<br>`midgame/industrial_catalysis/catalyst_regeneration_furnace_carbon_dioxide_regeneration` → ultratech:regenerated_catalyst | 16, 17 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``immobilized_enzyme_preparation_system`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/immobilized_enzyme_preparation_system` → ultratech:immobilized_enzyme | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``molecular_sieve_ion_exchange_tank`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/molecular_sieve_ion_exchange_tank` → ultratech:modified_zeolite, ultratech:catalyst_coating_slurry_fluid 250 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``molecular_sieve_synthesis_reactor`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/molecular_sieve_synthesis_reactor` → ultratech:zeolite_raw_powder, ultratech:catalyst_impregnation_liquor 250 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``photocatalyst_preparation_system`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/photocatalyst_preparation_system` → ultratech:photocatalyst, ultratech:enzyme_solution 50 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``precious_metal_catalyst_recovery_system`` | ``ultratech:steel_pressure_vessel`` | `midgame/industrial_catalysis/precious_metal_catalyst_recovery_system` → ultratech:precious_metal_salt_residue, ultratech:spent_catalyst_carrier | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |

### INDUSTRIAL_GASES（11 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``carbon_dioxide_reclaimer`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/carbon_dioxide_reclaimer` → ultratech:carbon_dioxide_cylinder, ultratech:high_purity_carbon_dioxide 200 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``gas_cylinder_filling_station`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/gas_cylinder_filling_station` → ultratech:oxygen_cylinder | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``gas_distribution_manifold`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/gas_distribution_manifold` → ultratech:industrial_gas_manifold | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``hydrogen_generation_purifier`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/hydrogen_generation_purifier` → ultratech:hydrogen_cylinder, ultratech:high_purity_hydrogen 200 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``industrial_air_compressor`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/industrial_air_compressor` → ultratech:dry_compressed_air 250 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``industrial_air_dryer`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/industrial_air_dryer` → ultratech:filtered_compressed_air 250 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``industrial_air_filter`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/industrial_air_filter` → ultratech:filtered_industrial_air 250 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``industrial_gas_membrane_separator`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/industrial_gas_membrane_separator` → ultratech:high_purity_oxygen 200 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``industrial_gas_purifier`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/industrial_gas_purifier` → ultratech:high_purity_nitrogen 200 mB<br>`midgame/industrial_gases/industrial_gas_purifier_ammonia_synthesis` → ultratech:ammonia 300 mB | 16, 17 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``industrial_gas_storage_tank`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/industrial_gas_storage_tank` → ultratech:high_purity_gas_cylinder | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |
| ``psa_gas_separator`` | ``ultratech:copper_pipe`` | `midgame/industrial_gases/psa_gas_separator` → ultratech:oxygen_rich_air 125 mB, ultratech:nitrogen_rich_air 125 mB | 16 | `gas_and_catalyst` (operating_constraint, recovery_outlet, first_consumer) | catalyst_regeneration |

### INDUSTRIAL_WATER_TREATMENT（22 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``activated_carbon_water_filter`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/activated_carbon_water_filter` → ultratech:dechlorinated_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``advanced_oxidation_system`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/advanced_oxidation_system` → ultratech:advanced_treated_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``biological_wastewater_reactor`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/biological_wastewater_reactor` → ultratech:water_treatment_sludge, ultratech:biologically_treated_water 220 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``boiler_deaerator`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/boiler_deaerator` → ultratech:deaerated_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``circulating_cooling_water_system`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/circulating_cooling_water_system` → ultratech:industrial_cooling_water 240 mB, ultratech:water_treatment_blowdown 10 mB<br>`midgame/industrial_water_treatment/circulating_cooling_water_system_makeup` → ultratech:industrial_cooling_water 240 mB, ultratech:water_treatment_blowdown 10 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``dissolved_air_flotation_unit`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/dissolved_air_flotation_unit` → ultratech:water_treatment_sludge, ultratech:flotation_effluent 220 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``electrodeionization_system`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/electrodeionization_system` → ultratech:high_purity_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``industrial_water_intake_station`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/industrial_water_intake_station` → ultratech:lifted_water 250 mB<br>`midgame/industrial_water_treatment/industrial_water_intake_station_groundwater` → ultratech:lifted_water 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``mixed_bed_ion_exchanger`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/mixed_bed_ion_exchanger` → ultratech:process_pure_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``multimedia_water_filter`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/multimedia_water_filter` → ultratech:filtered_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``reverse_osmosis_system`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/reverse_osmosis_system` → ultratech:reverse_osmosis_permeate 180 mB, ultratech:reverse_osmosis_brine 70 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``secondary_clarifier`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/secondary_clarifier` → ultratech:water_treatment_sludge, ultratech:advanced_treated_water 230 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``sludge_dewatering_machine`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/sludge_dewatering_machine` → ultratech:sludge_cake, ultratech:water_treatment_blowdown 150 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``terminal_ultrafilter`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/terminal_ultrafilter` → ultratech:ultrapure_water 245 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``ultrafiltration_system`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/ultrafiltration_system` → ultratech:ultrafiltered_water 230 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``wastewater_collection_basin`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/wastewater_collection_basin` → ultratech:mixed_wastewater 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``wastewater_ph_neutralization_tank`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/wastewater_ph_neutralization_tank` → ultratech:neutralized_wastewater 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``water_coagulation_reactor`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/water_coagulation_reactor` → ultratech:coagulated_water 250 mB<br>`midgame/industrial_water_treatment/water_coagulation_reactor_tannin_coagulant` → ultratech:coagulated_water 250 mB | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply)<br>`standard_parts_backbone` (automation_exit, first_consumer, parallelization) | biomass_and_black_liquor_recovery<br>scrap_remelt |
| ``water_quality_monitoring_station`` | ``ultratech:basic_circuit`` | `midgame/industrial_water_treatment/water_quality_monitoring_station` → ultratech:water_quality_report, ultratech:ultrapure_water 250 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``water_reclamation_system`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/water_reclamation_system` → ultratech:reclaimed_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``water_sedimentation_basin`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/water_sedimentation_basin` → ultratech:water_treatment_sludge, ultratech:clarified_water 220 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``water_softener`` | ``ultratech:copper_pipe`` | `midgame/industrial_water_treatment/water_softener` → ultratech:softened_water 240 mB | 12 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |

### INTEGRATION_FABRIC（10 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``avaritia_preform_foundry`` | ``ultratech:iron_bolt`` | `integration_v/core/infinity_feedback` → ultratech:infinity_feedback_matrix<br>`integration_v/core/terminal_preform` → ultratech:terminal_preform<br>`route_variants/terminal/reclaimed_preform` → ultratech:terminal_preform | 26 | `cosmic_materials` (separate_compute, recovery_outlet, endgame_continuity)<br>`terminal_compression` (batch_boundary, recovery_outlet, endgame_continuity) | exotic_waste_reclaim<br>terminal_fragment_recovery |
| ``botanic_metallurgical_infuser`` | ``ultratech:iron_bolt`` | `integration_v/core/botanic_metal_infusion` → ultratech:botanic_metal_substrate x4<br>`route_variants/infusion/botanic_fragment_recovery` → ultratech:botanic_metal_substrate x4 | 18 | `three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | failure_fragment_recovery |
| ``controlled_draconic_converter`` | ``ultratech:iron_bolt`` | `integration_v/core/controlled_energy_transformer` → ultratech:controlled_energy_transformer<br>`integration_v/core/quantum_bridge_anchor` → ultratech:quantum_bridge_anchor<br>`route_variants/network/bridge_transformer_reclamation` → ultratech:controlled_energy_transformer<br>`route_variants/network/high_density_bridge_anchor` → ultratech:quantum_bridge_anchor | 23 | `ae2_factory_fabric` (automation_exit, logistics_constraint, recovery_outlet) | contract_recovery_or_backpressure |
| ``draconic_mineralizer`` | ``ultratech:iron_bolt`` | `integration_v/core/draconic_mineral_infusion` → ultratech:draconic_mineral_substrate x4<br>`route_variants/infusion/draconic_fragment_recovery` → ultratech:draconic_mineral_substrate x4 | 19 | `three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | failure_fragment_recovery |
| ``draconic_replication_furnace`` | ``ultratech:steel_rod`` | `integration_v/core/draconic_substrate_reconstitution` → ultratech:draconic_mineral_substrate x3<br>`route_variants/infusion/draconic_restart_recovery` → ultratech:draconic_mineral_substrate x2 | 19, 20 | `three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | failure_fragment_recovery |
| ``ecological_simulator`` | ``ultratech:iron_bolt`` | `integration_v/core/monster_essence` → ultratech:monster_essence_catalyst | 26 | `three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | failure_fragment_recovery |
| ``hematic_polymer_infuser`` | ``ultratech:iron_bolt`` | `integration_v/core/hematic_polymer_infusion` → ultratech:hematic_polymer_substrate x4<br>`route_variants/infusion/hematic_fragment_recovery` → ultratech:hematic_polymer_substrate x4 | 18 | `three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | failure_fragment_recovery |
| ``hematic_rendering_tower`` | ``ultratech:copper_pipe`` | `integration_v/core/failure_fragment_recovery` → ultratech:infusion_substrate x4<br>`route_variants/infusion/low_power_fragment_recovery` → ultratech:infusion_substrate x4 | 18 | `three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | failure_fragment_recovery |
| ``industrial_contract_interface`` | ``ultratech:iron_bolt`` | `integration_v/core/network_core` → ultratech:industrial_network_core<br>`integration_v/core/subnet_controller` → ultratech:factory_subnet_controller<br>`integration_v/core/triple_domain_circuit` → ultratech:triple_domain_circuit<br>`route_variants/network/precision_subnet_controller` → ultratech:factory_subnet_controller<br>`route_variants/network/subnet_core_reclamation` → ultratech:industrial_network_core | 18 | `ae2_factory_fabric` (automation_exit, logistics_constraint, recovery_outlet)<br>`three_domain_infusion` (separate_compute, recovery_outlet, visible_next_objective) | contract_recovery_or_backpressure<br>failure_fragment_recovery |
| ``ritual_industrialization_array`` | ``ultratech:iron_bolt`` | `integration_v/core/ritual_terminal_preform` → ultratech:terminal_preform | 26 | `terminal_compression` (batch_boundary, recovery_outlet, endgame_continuity) | terminal_fragment_recovery |

### IRON_METALLURGY（11 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``iron_alloy_furnace`` | ``ultratech:steel_rod`` | `iron/alloy_steel` → ultratech:alloy_steel | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_basic_oxygen_converter`` | ``ultratech:iron_bolt`` | `iron/converter_steel` → ultratech:converter_steel, ultratech:steelmaking_slag | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_blast_furnace`` | ``ultratech:steel_rod`` | `iron/pig_iron` → ultratech:pig_iron, ultratech:blast_furnace_slag, ultratech:iron_blast_furnace_gas 520 mB | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_coke_oven`` | ``ultratech:iron_bolt`` | `iron/coke` → ultratech:coke, ultratech:iron_coal_tar 250 mB | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_continuous_caster`` | ``ultratech:iron_bolt`` | `iron/steel_billet_from_converter` → ultratech:steel_billet<br>`iron/steel_billet_from_eaf` → ultratech:steel_billet | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_electric_arc_furnace`` | ``ultratech:steel_rod`` | `iron/electric_furnace_steel` → ultratech:electric_furnace_steel | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_ore_crusher`` | ``ultratech:steel_rod`` | `iron/crushed_ore` → ultratech:crushed_iron_ore x2 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_quenching_tank`` | ``ultratech:copper_pipe`` | `iron/hardened_steel` → ultratech:hardened_steel | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_rolling_mill`` | ``ultratech:steel_rod`` | `iron/rolled_plate_from_stock` → ultratech:iron_plate<br>`iron/rolled_stock` → ultratech:rolled_steel_stock<br>`route_variants/mineral/rolled_plate` → ultratech:iron_plate | 8 | `mineral_to_metal` (batch_boundary, consumer_before_stockpiling, recovery_outlet)<br>`standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt<br>slag_and_tailings_recovery |
| ``iron_screening_machine`` | ``ultratech:iron_bolt`` | `iron/screened_concentrate` → ultratech:screened_iron_concentrate | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``iron_sintering_furnace`` | ``ultratech:steel_rod`` | `iron/sinter` → ultratech:iron_sinter | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |

### JOJOBA（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``jojoba_blending_kettle`` | ``ultratech:iron_bolt`` | `jojoba/precision_lubricant` → ultratech:precision_lubricant<br>`jojoba/rust_preventive` → ultratech:premium_rust_preventive | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``jojoba_cold_press`` | ``ultratech:steel_rod`` | `jojoba/oil` → ultratech:jojoba_oil 500 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``jojoba_dehuller`` | ``ultratech:iron_bolt`` | `jojoba/dehulled_seed` → ultratech:hulled_jojoba_seed x2, ultratech:jojoba_husk | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``jojoba_precision_filter`` | ``ultratech:copper_pipe`` | `jojoba/filtered_oil` → ultratech:filtered_jojoba_oil, ultratech:precision_hydraulic_oil 300 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``jojoba_vacuum_deaerator`` | ``ultratech:iron_bolt`` | `jojoba/hydraulic_oil` → ultratech:aviation_hydraulic_oil | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``jojoba_winterization_crystallizer`` | ``ultratech:iron_bolt`` | `jojoba/winterized_wax` → ultratech:winterized_jojoba_wax_ester, ultratech:wax_ester_residue | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### LACQUER_TREE（5 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``lacquer_filter`` | ``ultratech:copper_pipe`` | `lacquer_tree/filtering` → ultratech:filtered_lacquer 280 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``lacquer_modifier_reactor`` | ``ultratech:copper_pipe`` | `lacquer_tree/modification` → ultratech:modified_lacquer_resin x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``lacquer_paint_mixer`` | ``ultratech:iron_bolt`` | `lacquer_tree/industrial_paint` → ultratech:industrial_lacquer_paint x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``lacquer_refining_kettle`` | ``ultratech:reinforced_mechanical_frame`` | `lacquer_tree/refining` → ultratech:refined_lacquer x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``lacquer_tree_plantation`` | ``ultratech:iron_bolt`` | `lacquer_tree/plantation_maturity` → 状态转换（成熟后由专用交互收获） | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### MICROWAVE（11 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``klystron`` | ``ultratech:silicon_wafer`` | `microwave/klystron_module` → ultratech:klystron_module | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``magnetron`` | ``ultratech:silicon_wafer`` | `microwave/magnetron_module` → ultratech:magnetron_module<br>`midgame/microwave/magnetron_ceramic_ferrite_magnetron` → ultratech:magnetron_module | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_assisted_extractor`` | ``ultratech:silicon_wafer`` | `microwave/extraction` → ultratech:microwave_extract_concentrate, ultratech:microwave_extraction_liquor 300 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_coaxial_line_fabricator`` | ``ultratech:silicon_wafer`` | `microwave/coaxial_line` → ultratech:microwave_coaxial_line x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_communication_station`` | ``ultratech:silicon_wafer`` | `microwave/communication_link` → ultratech:microwave_communication_link | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_dryer`` | ``ultratech:copper_pipe`` | `microwave/dried_material` → ultratech:dried_process_material | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_plasma_generator`` | ``ultratech:silicon_wafer`` | `microwave/plasma` → ultratech:microwave_plasma 400 mB<br>`microwave/plasma_treated_part` → ultratech:microwave_plasma_treated_part | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_radar_station`` | ``ultratech:silicon_wafer`` | `microwave/radar_data` → ultratech:microwave_radar_data<br>`midgame/microwave/microwave_radar_station_coated_optics_navigation` → ultratech:microwave_radar_data | 20, 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``microwave_sintering_furnace`` | ``ultratech:steel_rod`` | `microwave/sintered_component` → ultratech:microwave_sintered_component | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``traveling_wave_tube`` | ``ultratech:silicon_wafer`` | `microwave/twt_module` → ultratech:traveling_wave_tube_module | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``waveguide_fabricator`` | ``ultratech:silicon_wafer`` | `microwave/waveguide` → ultratech:waveguide_section x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### NANOMATERIALS（12 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``coprecipitation_reactor`` | ``ultratech:steel_pressure_vessel`` | `nanomaterials/coprecipitation` → ultratech:nano_precipitate_slurry 650 mB | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``dialysis_purification_system`` | ``ultratech:silicon_wafer`` | `nanomaterials/dialysis_purification` → ultratech:nano_particle_concentrate, ultratech:nano_dispersion 400 mB | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``electrospinning_machine`` | ``ultratech:silicon_wafer`` | `nanomaterials/electrospinning` → ultratech:nanofiber_mat | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``high_energy_ball_mill`` | ``ultratech:steel_rod`` | `nanomaterials/cryogenic_ball_mill` → ultratech:nano_oxide_mixture x3 | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``hydrothermal_autoclave`` | ``ultratech:steel_pressure_vessel`` | `nanomaterials/hydrothermal_crystal` → ultratech:nano_crystal_feedstock x2<br>`nanomaterials/nano_suspension` → ultratech:nano_particle_suspension 450 mB<br>`nanomaterials/zirconia_hydrothermal` → ultratech:nano_zirconia_powder | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nano_classifier`` | ``ultratech:silicon_wafer`` | `nanomaterials/alumina_classification` → ultratech:nano_alumina_powder x2<br>`nanomaterials/oxide_classification` → ultratech:nano_silica_powder, ultratech:nano_titania_powder | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nano_cvd_furnace`` | ``ultratech:steel_rod`` | `nanomaterials/cnt_cvd` → ultratech:carbon_nanotube_powder x2<br>`nanomaterials/graphene_cvd` → ultratech:graphene_oxide<br>`nanomaterials/graphene_reduction` → ultratech:graphene_powder | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nano_pelletizer`` | ``ultratech:silicon_wafer`` | `nanomaterials/nano_pellet` → ultratech:nano_pellet_target | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nano_plasma_reactor`` | ``ultratech:steel_pressure_vessel`` | `nanomaterials/carbon_feedstock` → ultratech:nano_carbon_feedstock 500 mB<br>`nanomaterials/carbon_nanofiber` → ultratech:carbon_nanofiber_mat<br>`nanomaterials/nano_metals` → ultratech:nano_iron_powder, ultratech:nano_nickel_powder<br>`nanomaterials/noble_nano_metals` → ultratech:nano_silver_powder, ultratech:nano_gold_powder<br>`nanomaterials/quantum_dots_cdse` → ultratech:cadmium_selenide_quantum_dots<br>`nanomaterials/quantum_dots_inp` → ultratech:indium_phosphide_quantum_dots<br>`nanomaterials/quantum_dots_perovskite` → ultratech:perovskite_quantum_dots | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nano_spray_coater`` | ``ultratech:silicon_wafer`` | `nanomaterials/cnt_film` → ultratech:carbon_nanotube_film<br>`nanomaterials/nano_coating` → ultratech:graphene_film | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``sol_gel_reactor`` | ``ultratech:steel_pressure_vessel`` | `nanomaterials/quantum_dot_precursor` → ultratech:quantum_dot_precursor_solution 400 mB<br>`nanomaterials/sol_gel` → ultratech:nano_sol_gel 600 mB<br>`nanomaterials/spinning_solution` → ultratech:polymer_spinning_solution 600 mB<br>`nanomaterials/wet_aerogel_gel` → ultratech:wet_aerogel_gel 500 mB | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``supercritical_dryer`` | ``ultratech:copper_pipe`` | `nanomaterials/carbon_aerogel` → ultratech:carbon_aerogel<br>`nanomaterials/carbon_dioxide_supercritical` → ultratech:supercritical_carbon_dioxide 500 mB<br>`nanomaterials/oxide_aerogel` → ultratech:metal_oxide_aerogel<br>`nanomaterials/supercritical_drying` → ultratech:silica_aerogel | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### NONFERROUS_METALLURGY（16 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``magnesium_chlorination_reactor`` | ``ultratech:copper_pipe`` | `nonferrous/magnesium_chloride` → ultratech:anhydrous_magnesium_chloride | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_ball_mill`` | ``ultratech:steel_rod`` | `nonferrous/nickel_separation` → ultratech:separated_nickel_concentrate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_blast_furnace`` | ``ultratech:steel_rod`` | `nonferrous/crude_lead` → ultratech:crude_lead, ultratech:lead_anode_slime<br>`nonferrous/low_nickel_matte` → ultratech:low_grade_nickel_matte | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_cone_crusher`` | ``ultratech:steel_rod`` | `nonferrous/zinc_crushed` → ultratech:crushed_zinc_ore x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_converter`` | ``ultratech:iron_bolt`` | `nonferrous/high_nickel_matte` → ultratech:high_grade_nickel_matte | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_drying_kiln`` | ``ultratech:steel_rod`` | `nonferrous/calcined_magnesia` → ultratech:calcined_magnesia<br>`nonferrous/cobalt_roasted` → ultratech:roasted_cobalt_ore<br>`nonferrous/lead_sinter` → ultratech:lead_sinter, ultratech:sulfuric_acid 150 mB<br>`nonferrous/tin_roasted` → ultratech:roasted_tin_ore<br>`nonferrous/zinc_oxide` → ultratech:zinc_oxide, ultratech:sulfuric_acid 150 mB<br>`refractory/molybdenum_oxide` → ultratech:molybdenum_oxide, ultratech:rhenium_byproduct | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_electrolytic_cell`` | ``ultratech:copper_pipe`` | `nonferrous/cathode_cobalt` → ultratech:cathode_cobalt, ultratech:cobalt_powder<br>`nonferrous/cathode_zinc` → ultratech:cathode_zinc<br>`nonferrous/electrolytic_nickel` → ultratech:electrolytic_nickel, ultratech:nickel_powder<br>`nonferrous/pure_lead` → ultratech:pure_lead_cathode | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_filter_press`` | ``ultratech:copper_pipe`` | `nonmetallic/kaolin_filter_cake` → ultratech:fine_kaolin, ultratech:distilled_water 250 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_flotation_cell`` | ``ultratech:copper_pipe`` | `nonferrous/lead_concentrate` → ultratech:lead_concentrate<br>`nonferrous/nickel_concentrate` → ultratech:nickel_concentrate<br>`nonferrous/zinc_concentrate` → ultratech:zinc_concentrate<br>`refractory/molybdenum_concentrate` → ultratech:molybdenum_concentrate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_jaw_crusher`` | ``ultratech:steel_rod`` | `nonferrous/cobalt_crushed` → ultratech:crushed_cobalt_ore<br>`nonferrous/lead_crushed` → ultratech:crushed_lead_ore x2<br>`nonferrous/magnesite_dolomite` → ultratech:crushed_magnesite_dolomite x2<br>`nonferrous/tin_crushed` → ultratech:crushed_tin_ore x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_jig`` | ``ultratech:iron_bolt`` | `nonferrous/tin_concentrate` → ultratech:tin_concentrate<br>`refractory/tungsten_concentrate` → ultratech:tungsten_concentrate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_reverberatory_furnace`` | ``ultratech:steel_rod`` | `nonferrous/crude_tin` → ultratech:crude_tin<br>`nonferrous/refined_lead` → ultratech:refined_lead<br>`nonferrous/refined_tin` → ultratech:refined_tin<br>`nonferrous/zinc_ingot` → ultratech:zinc_ingot_cast | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_shaking_table`` | ``ultratech:iron_bolt`` | `nonferrous/tin_gravity_concentrate` → ultratech:tin_concentrate, ultratech:imperfection | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``molten_salt_electrolytic_cell`` | ``ultratech:copper_pipe`` | `nonferrous/magnesium_ingot` → ultratech:molten_magnesium_charge, ultratech:magnesium_ingot_cast, ultratech:chlor_alkali_chlorine 250 mB<br>`refractory/high_purity_titanium` → ultratech:titanium_ingot, ultratech:chlor_alkali_chlorine 250 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``zinc_leaching_tank`` | ``ultratech:copper_pipe`` | `nonferrous/cobalt_liquor` → ultratech:cobalt_purified_liquor<br>`nonferrous/zinc_sulfate_solution` → ultratech:zinc_sulfate_solution 500 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``zinc_purification_tank`` | ``ultratech:copper_pipe`` | `nonferrous/purified_zinc_liquor` → ultratech:purified_zinc_liquor, ultratech:cadmium_byproduct | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### NONMETALLIC_MINERALS（14 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``barite_gravity_table`` | ``ultratech:iron_bolt`` | `nonmetallic/barite_concentrate` → ultratech:barite_concentrate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``fluorite_dryer`` | ``ultratech:copper_pipe`` | `nonmetallic/fluorite_grade` → ultratech:acid_grade_fluorite, ultratech:metallurgical_fluorite | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``graphite_purification_reactor`` | ``ultratech:copper_pipe`` | `nonmetallic/high_purity_graphite` → ultratech:high_purity_graphite | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``graphitization_furnace`` | ``ultratech:steel_rod`` | `nonmetallic/artificial_graphite` → ultratech:artificial_graphite<br>`route_variants/high_purity/nano_carbon_recovery` → ultratech:high_purity_graphite | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``kaolin_bleaching_separator`` | ``ultratech:copper_pipe`` | `nonmetallic/high_white_kaolin` → ultratech:high_white_kaolin | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``kaolin_hydrocyclone`` | ``ultratech:iron_bolt`` | `nonmetallic/fine_kaolin` → ultratech:fine_kaolin | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``kaolin_pulping_tank`` | ``ultratech:copper_pipe`` | `nonmetallic/kaolin_slurry` → ultratech:raw_kaolin, ultratech:kaolin_slurry_item, ultratech:kaolin_slurry 500 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``magnesite_sintering_kiln`` | ``ultratech:steel_rod`` | `nonmetallic/dead_burned_magnesia` → ultratech:dead_burned_magnesia, ultratech:refractory_brick_batch | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nonmetallic_ball_mill`` | ``ultratech:steel_rod`` | `nonmetallic/barite_powder` → ultratech:barite_powder<br>`nonmetallic/fluorite` → ultratech:fluorite_powder x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nonmetallic_crusher`` | ``ultratech:steel_rod`` | `nonmetallic/barite` → ultratech:crushed_barite x2<br>`nonmetallic/graphite_powder` → ultratech:graphite_powder x2<br>`nonmetallic/magnesite` → ultratech:crushed_magnesite x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nonmetallic_drying_kiln`` | ``ultratech:steel_rod`` | `nonmetallic/calcined_kaolin` → ultratech:calcined_kaolin<br>`nonmetallic/light_magnesia` → ultratech:light_burned_magnesia | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nonmetallic_flotation_cell`` | ``ultratech:copper_pipe`` | `nonmetallic/fluorite_concentrate` → ultratech:fluorite_concentrate<br>`nonmetallic/graphite_concentrate` → ultratech:graphite_concentrate<br>`nonmetallic/phosphate` → ultratech:phosphate_concentrate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``phosphate_acidulation_tank`` | ``ultratech:copper_pipe`` | `nonmetallic/ammonium_phosphate` → ultratech:ammonium_phosphate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``phosphorus_electric_furnace`` | ``ultratech:steel_rod`` | `nonmetallic/yellow_phosphorus` → ultratech:yellow_phosphorus | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### NUCLEAR_FUEL_CYCLE（18 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``fuel_assembly_machine`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/fuel_assembly_machine` → ultratech:uranium_fuel_assembly | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``fuel_pellet_press`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/fuel_pellet_press` → ultratech:fuel_pellet x4 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``fuel_pellet_sintering_furnace`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/fuel_pellet_sintering_furnace` → ultratech:sintered_fuel_pellet x4 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``fuel_rod_assembly_station`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/fuel_rod_assembly_station` → ultratech:uranium_fuel_rod | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``mox_fuel_assembly_machine`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/mox_fuel_assembly_machine` → ultratech:mox_fuel_assembly | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``plutonium_conversion_furnace`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/plutonium_conversion_furnace` → ultratech:plutonium_dioxide, ultratech:vitrified_radioactive_waste | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``plutonium_extraction_tower`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/plutonium_extraction_tower` → ultratech:plutonium_solution 200 mB, ultratech:purified_uranium_solution 250 mB | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``plutonium_pellet_press`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/plutonium_pellet_press` → ultratech:plutonium_fuel_pellet x4 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``spent_fuel_dissolver`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/spent_fuel_dissolver` → ultratech:uranium_plutonium_nitrate_solution 500 mB | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``spent_fuel_shear`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/spent_fuel_shear` → ultratech:spent_fuel_segments x4 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_acid_leach_tank`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/uranium_acid_leach_tank` → ultratech:uranium_tailings, ultratech:uranium_sulfate_solution 500 mB | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_ball_mill`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/uranium_ball_mill` → ultratech:uranium_ore_powder x2 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_calcination_furnace`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/uranium_calcination_furnace` → ultratech:uranium_trioxide | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_conversion_furnace`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/uranium_conversion_furnace` → ultratech:uranium_hexafluoride 250 mB | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_gas_centrifuge`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/uranium_gas_centrifuge` → ultratech:uranium_dioxide_powder, ultratech:depleted_uranium_hexafluoride, ultratech:uranium_hexafluoride 75 mB | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_ore_crusher`` | ``ultratech:steel_rod`` | `midgame/nuclear_fuel_cycle/uranium_ore_crusher` → ultratech:crushed_uranium_ore x2 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_precipitation_tank`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/uranium_precipitation_tank` → ultratech:ammonium_diuranate x2 | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |
| ``uranium_solvent_extraction_tower`` | ``ultratech:steel_pressure_vessel`` | `midgame/nuclear_fuel_cycle/uranium_solvent_extraction_tower` → ultratech:purified_uranium_solution 400 mB | 20 | `nuclear_material_cycle` (closed_loop, recovery_outlet, safety_constraint) | mox_and_vitrified_waste |

### OIL_PALM（15 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``oil_palm_plantation`` | ``ultratech:iron_bolt`` | `oil_palm/plantation_harvest` → ultratech:oil_palm_fresh_fruit_bunch x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_activation_kiln`` | ``ultratech:steel_rod`` | `oil_palm/activated_carbon` → ultratech:palm_activated_carbon<br>`oil_palm/shell_charcoal` → ultratech:palm_shell_charcoal | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_biomass_power_furnace`` | ``ultratech:steel_rod`` | 专用燃料状态机：油棕残渣 → FE（`tickPalmBiomassFurnace`） | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_clarification_pool`` | ``ultratech:iron_bolt`` | `oil_palm/clarified_oil` → ultratech:palm_sludge, ultratech:degummed_palm_oil 420 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_digester_tank`` | ``ultratech:copper_pipe`` | `oil_palm/digested_pulp` → ultratech:digested_palm_pulp 750 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_feed_pelletizer`` | ``ultratech:iron_bolt`` | `oil_palm/feed_pellet` → ultratech:feed_pellet x3 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_fractionation_crystallizer`` | ``ultratech:iron_bolt`` | `oil_palm/fractionation` → ultratech:palm_oil_24c 180 mB, ultratech:palm_oil_33c 160 mB, ultratech:palm_oil_44c 130 mB<br>`oil_palm/palm_wax` → ultratech:palm_wax | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_kernel_press`` | ``ultratech:steel_rod`` | `oil_palm/kernel_oil` → ultratech:palm_kernel_expeller, ultratech:palm_kernel_oil 350 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_kernel_refining_tower`` | ``ultratech:copper_pipe`` | `oil_palm/oleochemical_intermediate` → ultratech:oleochemical_intermediate, ultratech:crude_palm_glycerol<br>`oil_palm/refined_kernel_oil` → ultratech:refined_palm_kernel_oil 260 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_refining_tower`` | ``ultratech:copper_pipe`` | `oil_palm/bio_lubricant` → ultratech:palm_bio_lubricant, ultratech:industrial_grease<br>`oil_palm/fatty_acid_cut` → ultratech:palm_fatty_acid, ultratech:stearic_acid, ultratech:oleic_acid<br>`oil_palm/refined_glycerol` → ultratech:refined_palm_glycerol<br>`oil_palm/refined_oil` → ultratech:refined_palm_oil 350 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_saponification_kettle`` | ``ultratech:iron_bolt`` | `oil_palm/soap` → ultratech:soap_bar x2, ultratech:palm_fatty_acid_salt, ultratech:palm_glycerol 100 mB<br>`oil_palm/surfactant` → ultratech:palm_surfactant x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_screw_press`` | ``ultratech:steel_rod`` | `oil_palm/crude_oil` → ultratech:palm_kernel x2, ultratech:palm_fiber, ultratech:palm_shell, ultratech:crude_palm_oil 550 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_steaming_tank`` | ``ultratech:copper_pipe`` | `oil_palm/steamed_bunch` → ultratech:sterilized_palm_fruit_bunch | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_thresher`` | ``ultratech:iron_bolt`` | `oil_palm/threshed_fruit` → ultratech:palm_fruit x6, ultratech:empty_palm_bunch | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``palm_transesterification_reactor`` | ``ultratech:copper_pipe`` | `oil_palm/biodiesel` → ultratech:palm_biodiesel 450 mB, ultratech:palm_glycerol 100 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### OPTICS（14 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``fiber_coating_curing_machine`` | ``ultratech:steel_rod`` | `optics/cable_fiber` → ultratech:optical_cable<br>`optics/coat_fiber` → ultratech:coated_optical_fiber x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``fiber_preform_fabrication_station`` | ``ultratech:silicon_wafer`` | `optics/fiber_preform` → ultratech:fiber_preform | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``glass_annealing_furnace`` | ``ultratech:steel_rod`` | `optics/anneal_glass_blank` → ultratech:annealed_optical_glass_blank<br>`optics/cast_optical_glass` → ultratech:optical_glass_ingot x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ion_beam_assisted_coater`` | ``ultratech:silicon_wafer`` | `optics/beam_splitter` → ultratech:beam_splitter<br>`optics/filter` → ultratech:optical_filter<br>`optics/mirror` → ultratech:optical_mirror | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``laser_crystal_growth_furnace`` | ``ultratech:steel_rod`` | `optics/grow_laser_crystal` → ultratech:laser_crystal_rod | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``laser_crystal_processing_system`` | ``ultratech:silicon_wafer`` | `optics/finish_laser_crystal` → ultratech:laser_crystal | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_centering_edging_machine`` | ``ultratech:silicon_wafer`` | `optics/lens` → ultratech:optical_lens<br>`optics/prism` → ultratech:optical_prism<br>`optics/window` → ultratech:optical_window | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_fiber_drawing_tower`` | ``ultratech:steel_pressure_vessel`` | `optics/draw_fiber` → ultratech:bare_optical_fiber x4 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_glass_cutter`` | ``ultratech:steel_rod`` | `optics/cut_optical_glass` → ultratech:formed_optical_glass_blank x2 | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_glass_melting_furnace`` | ``ultratech:steel_rod`` | `optics/melt_optical_glass` → ultratech:molten_optical_glass 1000 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_grinding_machine`` | ``ultratech:silicon_wafer`` | `optics/rough_grind` → ultratech:rough_optical_blank | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_lapping_machine`` | ``ultratech:silicon_wafer`` | `optics/fine_lap` → ultratech:lapped_optical_blank | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``optical_polishing_machine`` | ``ultratech:silicon_wafer`` | `optics/polish` → ultratech:polished_optical_blank | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``vacuum_coating_machine`` | ``ultratech:steel_rod`` | `optics/ar_coating` → ultratech:ar_coated_optics<br>`optics/hr_coating` → ultratech:hr_coated_optics | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### PAPER_PACKAGING（13 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``corrugated_board_machine`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/corrugated_board_machine` → ultratech:corrugated_board | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``paper_cutter`` | ``ultratech:steel_rod`` | `midgame/paper_packaging/paper_cutter` → ultratech:cut_paper<br>`midgame/paper_packaging/paper_cutter_industrial_grades` → ultratech:industrial_filter_paper, ultratech:industrial_insulation_paper | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``paper_dryer`` | ``ultratech:copper_pipe`` | `midgame/paper_packaging/paper_dryer` → ultratech:dry_paper | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``paper_headbox`` | ``ultratech:iron_bolt`` | `integration/biomass/pulp_to_paper` → ultratech:wet_paper_web x2<br>`midgame/paper_packaging/paper_headbox` → ultratech:wet_paper_web | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``paper_press`` | ``ultratech:steel_rod`` | `midgame/paper_packaging/paper_press` → ultratech:pressed_wet_paper | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``paper_winder`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/paper_winder` → ultratech:paper_roll | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pulp_beater`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/pulp_beater` → ultratech:beaten_pulp | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pulp_bleaching_tower`` | ``ultratech:copper_pipe`` | `midgame/paper_packaging/pulp_bleaching_tower` → ultratech:bleached_pulp | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pulp_digester`` | ``ultratech:iron_bolt`` | `integration/biomass/eucalyptus_residue_to_pulp` → ultratech:biomass_pulp x2, ultratech:biomass_slurry 250 mB<br>`integration/biomass/palm_residue_to_pulp` → ultratech:biomass_pulp x2, ultratech:biomass_slurry 250 mB<br>`integration/biomass/pine_residue_to_pulp` → ultratech:biomass_pulp x2, ultratech:biomass_slurry 250 mB<br>`integration/biomass/sisal_residue_to_pulp` → ultratech:biomass_pulp x2, ultratech:biomass_slurry 250 mB<br>`midgame/paper_packaging/pulp_digester` → ultratech:raw_pulp<br>`midgame/paper_packaging/pulp_digester_caustic_pulp` → ultratech:raw_pulp x2, ultratech:black_liquor 150 mB | 12, 13 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply)<br>`petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | biomass_and_black_liquor_recovery<br>off_gas_scrubbing |
| ``pulp_molding_machine`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/pulp_molding_machine` → ultratech:paper_pulp_molding | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pulp_refiner`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/pulp_refiner` → ultratech:refined_pulp | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pulp_washer_screen`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/pulp_washer_screen` → ultratech:washed_pulp | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``wood_chipper`` | ``ultratech:iron_bolt`` | `midgame/paper_packaging/wood_chipper` → ultratech:industrial_wood_chip | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### PETROLEUM（19 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``petroleum_atmospheric_distillation_tower`` | ``ultratech:copper_pipe`` | `petroleum/atmospheric_diesel` → ultratech:petroleum_diesel 220 mB<br>`petroleum/atmospheric_gas` → ultratech:petroleum_gas 140 mB<br>`petroleum/atmospheric_gasoline` → ultratech:petroleum_gasoline 180 mB<br>`petroleum/atmospheric_heavy_oil` → ultratech:petroleum_heavy_oil 300 mB<br>`petroleum/atmospheric_kerosene` → ultratech:petroleum_kerosene 160 mB<br>`petroleum/atmospheric_naphtha` → ultratech:petroleum_naphtha 180 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_catalytic_cracking_reactor`` | ``ultratech:copper_pipe`` | `petroleum/catalytic_cracked_gas` → ultratech:petroleum_cracked_gas 600 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_catalytic_reformer`` | ``ultratech:steel_pressure_vessel`` | `petroleum/aromatics` → ultratech:petroleum_aromatics 420 mB<br>`petroleum/reformate` → ultratech:petroleum_reformate 600 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_delayed_coker`` | ``ultratech:steel_pressure_vessel`` | `petroleum/delayed_coke` → ultratech:petroleum_coke, ultratech:petroleum_asphalt 300 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_desalter`` | ``ultratech:steel_pressure_vessel`` | `petroleum/desalted_crude` → ultratech:desalted_crude_oil 900 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_drilling_platform`` | ``ultratech:steel_pressure_vessel`` | `petroleum/drilled_crude` → ultratech:crude_oil 1000 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_ethylene_glycol_reactor`` | ``ultratech:copper_pipe`` | `petroleum/ethylene_glycol` → ultratech:petroleum_ethylene_glycol 300 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_hydrocracking_reactor`` | ``ultratech:copper_pipe`` | `petroleum/hydrocracked_diesel` → ultratech:petroleum_diesel 600 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_hydrotreating_reactor`` | ``ultratech:copper_pipe`` | `petroleum/hydrotreated_diesel` → ultratech:petroleum_diesel 650 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_nylon_polymerization_kettle`` | ``ultratech:steel_pressure_vessel`` | `petroleum/nylon6` → ultratech:nylon6_pellet x2 | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_oil_gas_separator`` | ``ultratech:copper_pipe`` | `petroleum/oil_sand_crude` → ultratech:heavy_crude_oil 500 mB<br>`petroleum/oil_shale_crude` → ultratech:crude_oil 350 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_polyester_polycondensation_kettle`` | ``ultratech:steel_pressure_vessel`` | `petroleum/polyester` → ultratech:pet_pellet x2 | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_polyethylene_kettle`` | ``ultratech:steel_pressure_vessel`` | `petroleum/polyethylene` → ultratech:polyethylene_pellet_petro x2 | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_polypropylene_kettle`` | ``ultratech:steel_pressure_vessel`` | `petroleum/polypropylene` → ultratech:polypropylene_pellet x2 | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_pvc_polymerization_kettle`` | ``ultratech:steel_pressure_vessel`` | `petroleum/pvc` → ultratech:pvc_pellet_petro x2 | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_steam_cracker`` | ``ultratech:steel_pressure_vessel`` | `petroleum/butadiene` → ultratech:petroleum_butadiene 180 mB<br>`petroleum/ethylene` → ultratech:petroleum_ethylene 320 mB<br>`petroleum/propylene` → ultratech:petroleum_propylene 240 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_storage_tank`` | ``ultratech:copper_pipe`` | `petroleum/stored_crude` → ultratech:crude_oil 1000 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_styrene_reactor`` | ``ultratech:copper_pipe`` | `petroleum/polystyrene` → ultratech:polystyrene_pellet x2<br>`petroleum/styrene` → ultratech:petroleum_styrene 300 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |
| ``petroleum_vacuum_distillation_tower`` | ``ultratech:copper_pipe`` | `petroleum/residual_oil` → ultratech:petroleum_residual_oil 350 mB<br>`petroleum/vacuum_gasoil` → ultratech:petroleum_vacuum_gasoil 550 mB | 12 | `petrochemical_platform` (batch_boundary, logistics_constraint, recovery_outlet) | off_gas_scrubbing |

### PINE_TREE（10 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``pine_adhesive_reactor`` | ``ultratech:copper_pipe`` | `pine_tree/adhesive` → ultratech:pine_adhesive x2 | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pine_paint_mixing_kettle`` | ``ultratech:iron_bolt`` | `pine_tree/paint` → ultratech:pine_paint x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pine_paper_digester`` | ``ultratech:iron_bolt`` | `pine_tree/wood_pulp` → ultratech:pine_wood_pulp 700 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pine_paper_former`` | ``ultratech:iron_bolt`` | `pine_tree/paper` → ultratech:pine_paper x4 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pine_plantation`` | ``ultratech:iron_bolt`` | `pine_tree/plantation_harvest` → ultratech:pine_log x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pine_resin_distiller`` | ``ultratech:basic_mechanical_frame`` | `pine_tree/resin_distillation` → ultratech:crude_rosin 300 mB, ultratech:crude_turpentine 200 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pine_woodwork_table`` | ``ultratech:iron_bolt`` | `pine_tree/beam` → ultratech:pine_beam x3<br>`pine_tree/charcoal` → ultratech:pine_charcoal x2<br>`pine_tree/chip` → ultratech:pine_wood_chip x6<br>`pine_tree/plank` → ultratech:pine_plank x4 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``rosin_refining_kettle`` | ``ultratech:iron_bolt`` | `pine_tree/refined_rosin` → ultratech:refined_rosin x2 | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``terpene_synthesis_tower`` | ``ultratech:copper_pipe`` | `pine_tree/terpene_intermediate` → ultratech:terpene_intermediate 260 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``turpentine_rectifier`` | ``ultratech:copper_pipe`` | `pine_tree/refined_turpentine` → ultratech:refined_turpentine 225 mB | 12 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### PLASTIC_PROCESSING（14 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``blow_molding_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/blow_molding_machine` → ultratech:blow_molded_part | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``cast_film_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/cast_film_machine` → ultratech:plastic_sheet, ultratech:plastic_film x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``injection_molding_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/injection_molding_machine` → ultratech:injection_molded_part, ultratech:plastic_scrap | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_color_mixer`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_color_mixer` → ultratech:colored_plastic_pellet x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_compounding_pelletizer`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_compounding_pelletizer` → ultratech:modified_plastic_pellet x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_dryer`` | ``ultratech:copper_pipe`` | `midgame/plastic_processing/plastic_dryer` → ultratech:dry_plastic_pellet x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_foaming_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_foaming_machine` → ultratech:foam_plastic_part x2, ultratech:foam_plastic_board | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_pipe_extrusion_line`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_pipe_extrusion_line` → ultratech:plastic_pipe_stock, ultratech:plastic_pipe x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_recycling_pelletizer`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_recycling_pelletizer` → ultratech:recycled_plastic_pellet x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_trimming_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_trimming_machine` → ultratech:trimmed_plastic_part, ultratech:plastic_scrap | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``plastic_welding_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/plastic_welding_machine` → ultratech:plastic_welded_assembly | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``single_screw_extruder`` | ``ultratech:steel_rod`` | `midgame/plastic_processing/single_screw_extruder` → ultratech:plastic_profile, ultratech:plastic_rod_stock | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``thermoforming_machine`` | ``ultratech:iron_bolt`` | `midgame/plastic_processing/thermoforming_machine` → ultratech:thermoformed_part | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``twin_screw_extruder`` | ``ultratech:steel_rod`` | `midgame/plastic_processing/twin_screw_extruder` → ultratech:plastic_profile x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |

### POWDER_METALLURGY（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``pim_debinding_furnace`` | ``ultratech:steel_rod`` | `midgame/powder_metallurgy/pim_debinding_furnace` → ultratech:debound_powder_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``powder_compaction_press`` | ``ultratech:steel_rod`` | `midgame/powder_metallurgy/powder_compaction_press` → ultratech:powder_compact | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``powder_injection_molding_machine`` | ``ultratech:iron_bolt`` | `midgame/powder_metallurgy/powder_injection_molding_machine` → ultratech:powder_injection_molded_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``powder_mixer`` | ``ultratech:iron_bolt`` | `midgame/powder_metallurgy/powder_mixer` → ultratech:mixed_metal_powder | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``powder_sintering_furnace`` | ``ultratech:steel_rod`` | `midgame/powder_metallurgy/powder_sintering_furnace` → ultratech:powder_sintered_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``powder_sizing_machine`` | ``ultratech:iron_bolt`` | `midgame/powder_metallurgy/powder_sizing_machine` → ultratech:sized_powder_part<br>`midgame/powder_metallurgy/powder_sizing_machine_precision_parts` → ultratech:powder_metallurgy_gear, ultratech:powder_metallurgy_bearing | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### PRECIOUS_METAL（4 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``precious_acid_leach_reactor`` | ``ultratech:copper_pipe`` | `precious/solution` → ultratech:precious_metal_solution | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``precious_anode_slime_collector`` | ``ultratech:iron_bolt`` | `precious/anode_slime` → ultratech:acid_leached_anode_slime | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``precious_reduction_furnace`` | ``ultratech:steel_rod`` | `precious/refined_gold` → ultratech:refined_gold<br>`precious/refined_palladium` → ultratech:refined_palladium<br>`precious/refined_platinum` → ultratech:refined_platinum<br>`precious/refined_silver` → ultratech:refined_silver | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``precious_solvent_extraction_tower`` | ``ultratech:copper_pipe`` | `precious/gold_salt` → ultratech:gold_salt<br>`precious/palladium_salt` → ultratech:palladium_salt<br>`precious/platinum_salt` → ultratech:platinum_salt<br>`precious/silver_salt` → ultratech:silver_salt | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### PRECISION_MANUFACTURING（45 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``ald_furnace`` | ``ultratech:steel_rod`` | `precision/nano_film_substrate` → ultratech:nano_film_substrate | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``chip_packaging_machine`` | ``ultratech:silicon_wafer`` | `precision/packaged_chip` → ultratech:packaged_chip | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``cmp_machine`` | ``ultratech:silicon_wafer`` | `precision/ultra_flat_wafer` → ultratech:ultra_flat_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``cnc_milling_machine`` | ``ultratech:steel_rod`` | `precision/cnc_precision_component` → ultratech:precision_component, ultratech:gearbox_housing, ultratech:turbine_blade_blank<br>`precision/precision_metal_blank` → ultratech:precision_metal_blank | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``cvd_furnace`` | ``ultratech:steel_rod`` | `precision/oxide_film_wafer` → ultratech:oxide_film_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``dark_matter_purification_tower`` | ``ultratech:copper_pipe`` | `precision/pure_dark_matter` → ultratech:pure_dark_matter | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``deep_hole_drilling_machine`` | ``ultratech:silicon_wafer`` | `precision/deep_bore_precision_shaft` → ultratech:deep_bore_precision_shaft | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``directed_energy_workbench`` | ``ultratech:silicon_wafer`` | `precision/directed_precision_part` → ultratech:directed_precision_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``edm_machine`` | ``ultratech:silicon_wafer`` | `precision/high_precision_cavity` → ultratech:high_precision_cavity | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``electrolytic_polishing_machine`` | ``ultratech:silicon_wafer`` | `precision/mirror_metal_part` → ultratech:mirror_metal_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``electron_beam_lithography_machine`` | ``ultratech:silicon_wafer`` | `precision/nano_patterned_wafer` → ultratech:nano_patterned_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``five_axis_machining_center`` | ``ultratech:steel_rod`` | `precision/five_axis_surface_component` → ultratech:five_axis_surface_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ion_implanter`` | ``ultratech:silicon_wafer`` | `precision/doped_wafer` → ultratech:doped_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``laser_cutting_machine`` | ``ultratech:silicon_wafer`` | `precision/precision_sheet` → ultratech:precision_sheet x2 | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``laser_direct_write_lithography_machine`` | ``ultratech:silicon_wafer`` | `precision/micro_nano_structure` → ultratech:micro_nano_structure | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mbe_growth_system`` | ``ultratech:silicon_wafer`` | `precision/superlattice_material` → ultratech:superlattice_material | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``molecular_assembler`` | ``ultratech:silicon_wafer`` | `precision/molecular_precision_structure` → ultratech:molecular_precision_structure | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``monocrystal_growth_furnace`` | ``ultratech:steel_rod`` | `precision/monocrystal_silicon_boule` → ultratech:monocrystal_silicon_boule | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``multiphoton_polymerization_3d_printer`` | ``ultratech:silicon_wafer`` | `precision/micro_3d_structure` → ultratech:micro_3d_structure | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nanoimprint_machine`` | ``ultratech:silicon_wafer`` | `precision/nanostructured_wafer` → ultratech:nanostructured_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``nanoparticle_synthesis_reactor`` | ``ultratech:copper_pipe`` | `precision/metal_nanoparticles` → ultratech:metal_nanoparticles | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``photolithography_stepper`` | ``ultratech:silicon_wafer`` | `precision/patterned_wafer` → ultratech:patterned_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``plasma_catalytic_reactor`` | ``ultratech:copper_pipe`` | `precision/high_energy_chemical` → ultratech:high_energy_chemical | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``plasma_etcher`` | ``ultratech:silicon_wafer`` | `precision/microstructured_wafer` → ultratech:microstructured_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``pvd_system`` | ``ultratech:silicon_wafer`` | `precision/metallized_wafer` → ultratech:metallized_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_beam_etcher`` | ``ultratech:silicon_wafer`` | `precision/atomic_flat_wafer` → ultratech:atomic_flat_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_dot_synthesis_reactor`` | ``ultratech:copper_pipe`` | `precision/quantum_dot_solution` → ultratech:quantum_dot_solution, ultratech:quantum_dot_solvent 250 mB | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``self_assembly_nano_reactor`` | ``ultratech:copper_pipe`` | `precision/self_assembled_nanostructure` → ultratech:self_assembled_nanostructure | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``squid_fabrication_line`` | ``ultratech:silicon_wafer`` | `precision/squid_sensor` → ultratech:squid_sensor | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``stress_field_forming_machine`` | ``ultratech:silicon_wafer`` | `precision/near_net_shape_part` → ultratech:near_net_shape_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``subspace_forge`` | ``ultratech:silicon_wafer`` | `precision/compressed_state_alloy` → ultratech:compressed_state_alloy | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superconducting_film_deposition_system`` | ``ultratech:silicon_wafer`` | `precision/superconducting_film` → ultratech:superconducting_film | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``time_crystal_growth_furnace`` | ``ultratech:steel_rod`` | `precision/time_crystal` → ultratech:time_crystal | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``topological_insulator_preparation_system`` | ``ultratech:silicon_wafer`` | `precision/topological_insulator_film` → ultratech:topological_insulator_film | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``topological_matter_synthesis_furnace`` | ``ultratech:steel_rod`` | `precision/topological_quantum_material` → ultratech:topological_quantum_material | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``transparent_conductive_film_deposition_system`` | ``ultratech:silicon_wafer`` | `precision/conductive_glass` → ultratech:conductive_glass | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``two_dimensional_material_cvd_furnace`` | ``ultratech:steel_rod`` | `precision/graphene_mos2_film` → ultratech:graphene_mos2_film | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ultra_precision_lathe`` | ``ultratech:steel_rod`` | `precision/ultra_precision_rotor` → ultratech:ultra_precision_rotor | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``vacuum_heat_treatment_furnace`` | ``ultratech:steel_rod`` | `precision/vacuum_annealed_part` → ultratech:vacuum_annealed_part<br>`precision/vacuum_hardened_part` → ultratech:vacuum_hardened_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_annealing_furnace`` | ``ultratech:steel_rod`` | `precision/activated_wafer` → ultratech:activated_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_dicing_saw`` | ``ultratech:silicon_wafer`` | `precision/chip_die` → ultratech:chip_die x8 | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_lapping_machine`` | ``ultratech:silicon_wafer`` | `precision/ground_wafer` → ultratech:ground_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_probe_station`` | ``ultratech:silicon_wafer`` | `precision/tested_wafer` → ultratech:tested_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_slicing_machine`` | ``ultratech:silicon_wafer`` | `precision/raw_wafer_slice` → ultratech:raw_wafer_slice x4 | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``waterjet_cutting_machine`` | ``ultratech:silicon_wafer`` | `precision/high_precision_cut_part` → ultratech:high_precision_cut_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### PRIMITIVE（5 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``primitive_ceramic_tank`` | ``minecraft:clay_ball`` | `primitive/kaolin_slurry` → ultratech:kaolin_slurry_item, ultratech:kaolin_slurry 500 mB | 2 | `mechanical_foundation` (automation_exit, recovery_outlet, visible_next_objective) | tailings_to_building |
| ``primitive_comminutor`` | ``ultratech:stone_millstone`` | `primitive/cassiterite_powder` → ultratech:powder_cassiterite x2<br>`primitive/galena_powder` → ultratech:powder_galena x2<br>`primitive/malachite_powder` → ultratech:powder_malachite x2<br>`route_variants/mechanical/ore_block_malachite` → ultratech:powder_malachite | 2 | `mechanical_foundation` (automation_exit, recovery_outlet, visible_next_objective) | tailings_to_building |
| ``primitive_kiln`` | ``minecraft:clay_ball`` | `primitive/ceramic_bowl` → ultratech:ceramic_bowl<br>`primitive/ceramic_pot` → ultratech:mixed_mortar_hard_ceramic_pot<br>`primitive/condensed_brick` → ultratech:condensed_brick<br>`primitive/plant_ash` → ultratech:plant_ash<br>`primitive/quicklime` → ultratech:simple_calcium_oxide<br>`primitive/rough_bronze_ingot` → ultratech:ingot_rough_bronze<br>`route_variants/mechanical/biogenic_quicklime` → ultratech:simple_calcium_oxide | 2, 3 | `mechanical_foundation` (automation_exit, recovery_outlet, visible_next_objective) | tailings_to_building |
| ``primitive_mortar_workbench`` | ``ultratech:stone_millstone`` | `primitive/briquette` → ultratech:briquette x4<br>`primitive/furnace_brick` → ultratech:furnace_brick x2<br>`primitive/loess` → ultratech:loess x2, ultratech:imperfection<br>`primitive/mixed_mortar_ball` → ultratech:mixed_mortar_ball x2<br>`primitive/slaked_lime` → ultratech:simple_calcium_hydroxide<br>`primitive/unfired_brick` → ultratech:simple_brick_embryo x2<br>`primitive/unfired_ceramic_pot` → ultratech:mixed_mortar_hard_ceramic_pot_embryo<br>`primitive/unfired_clay_bowl` → ultratech:unfired_clay_bowl<br>`route_variants/mechanical/charcoal_briquette` → ultratech:briquette x4 | 2, 4 | `mechanical_foundation` (automation_exit, recovery_outlet, visible_next_objective) | tailings_to_building |
| ``primitive_wooden_tank`` | ``ultratech:wooden_gear`` | `rubber/latex_bulk` → ultratech:rubber_latex 500 mB | 2 | `mechanical_foundation` (automation_exit, recovery_outlet, visible_next_objective) | tailings_to_building |

### QUANTUM_INDUSTRY（12 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``josephson_junction_fabrication_system`` | ``ultratech:silicon_wafer`` | `quantum/josephson_junction` → ultratech:josephson_junction | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_communication_module_assembler`` | ``ultratech:silicon_wafer`` | `midgame/quantum_industry/quantum_communication_module_assembler_silicon_control_chip` → ultratech:quantum_communication_module<br>`quantum/communication_module` → ultratech:quantum_communication_module | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_dot_laser_packager`` | ``ultratech:silicon_wafer`` | `quantum/quantum_dot_laser` → ultratech:quantum_dot_laser | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_dot_self_assembly_reactor`` | ``ultratech:steel_pressure_vessel`` | `midgame/quantum_industry/quantum_dot_self_assembly_reactor_nano_quantum_dot_bridge` → ultratech:quantum_dot_colloid_capsule<br>`quantum/quantum_dot_colloid` → ultratech:quantum_dot_colloid_capsule, ultratech:quantum_dot_colloid 400 mB | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_electron_beam_lithography_system`` | ``ultratech:silicon_wafer`` | `midgame/quantum_industry/quantum_electron_beam_lithography_system_silicon_control_substrate` → ultratech:quantum_nanopatterned_substrate<br>`quantum/nanopatterned_substrate` → ultratech:quantum_nanopatterned_substrate | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_mbe_system`` | ``ultratech:silicon_wafer`` | `quantum/quantum_well_wafer` → ultratech:quantum_well_wafer | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_memory_fabrication_system`` | ``ultratech:silicon_wafer`` | `quantum/memory_unit` → ultratech:quantum_memory_unit | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_processor_assembly_table`` | ``ultratech:silicon_wafer`` | `quantum/processor_module` → ultratech:quantum_processor_module | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_sensor_packager`` | ``ultratech:silicon_wafer`` | `midgame/quantum_industry/quantum_sensor_packager_silicon_control_chip` → ultratech:quantum_sensor<br>`quantum/sensor` → ultratech:quantum_sensor | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``quantum_two_dimensional_cvd_furnace`` | ``ultratech:steel_rod`` | `quantum/two_dimensional_film` → ultratech:two_dimensional_material_film | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superconducting_qubit_fabrication_station`` | ``ultratech:silicon_wafer`` | `quantum/qubit_chip` → ultratech:superconducting_qubit_chip | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``topological_quantum_material_synthesis_furnace`` | ``ultratech:steel_rod`` | `quantum/topological_crystal` → ultratech:topological_quantum_crystal | 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### RARE_EARTH_METALLURGY（5 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``rare_earth_decomposition_reactor`` | ``ultratech:copper_pipe`` | `rare_earth/mixed_chloride` → ultratech:mixed_rare_earth_chloride, ultratech:mixed_rare_earth_chloride_solution 500 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``rare_earth_ion_exchange_column`` | ``ultratech:copper_pipe`` | `rare_earth/single_chloride` → ultratech:single_rare_earth_chloride | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``rare_earth_molten_salt_cell`` | ``ultratech:copper_pipe`` | `rare_earth/metal` → ultratech:rare_earth_metal, ultratech:rare_earth_magnet_blend | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``rare_earth_precipitation_kiln`` | ``ultratech:steel_rod`` | `rare_earth/oxide` → ultratech:rare_earth_oxide, ultratech:rare_earth_polishing_powder | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``rare_earth_solvent_extraction_tower`` | ``ultratech:copper_pipe`` | `rare_earth/group_separation` → ultratech:light_rare_earth_group, ultratech:heavy_rare_earth_group | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### REFRACTORY_METALLURGY（10 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``hydrogen_reduction_furnace`` | ``ultratech:steel_rod`` | `refractory/molybdenum_powder` → ultratech:ammonium_molybdate, ultratech:process_molybdenum_powder<br>`refractory/tungsten_powder` → ultratech:process_tungsten_powder | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``kroll_reduction_vessel`` | ``ultratech:copper_pipe`` | `refractory/sponge_titanium` → ultratech:sponge_titanium<br>`refractory/sponge_zirconium` → ultratech:refined_zirconium_tetrachloride, ultratech:hafnium_fraction, ultratech:sponge_zirconium | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_ion_exchange_column`` | ``ultratech:copper_pipe`` | `refractory/tungsten_oxide` → ultratech:ammonium_paratungstate, ultratech:tungsten_oxide | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``mineral_magnetic_separator`` | ``ultratech:copper_pipe`` | `rare_earth/concentrate` → ultratech:rare_earth_concentrate<br>`refractory/titanium_concentrate` → ultratech:titanium_concentrate<br>`refractory/zircon_concentrate` → ultratech:zircon_concentrate | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``powder_metallurgy_press`` | ``ultratech:steel_rod`` | `refractory/molybdenum_stock` → ultratech:molybdenum_stock<br>`refractory/tungsten_stock` → ultratech:tungsten_stock | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``titanium_chlorination_furnace`` | ``ultratech:steel_rod`` | `refractory/ticl4` → ultratech:titanium_tetrachloride 500 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``titanium_distillation_column`` | ``ultratech:copper_pipe`` | `refractory/refined_ticl4` → ultratech:refined_titanium_tetrachloride | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``tungsten_alkali_digestion_reactor`` | ``ultratech:copper_pipe`` | `refractory/sodium_tungstate` → ultratech:ammonium_tungstate_solution 500 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``vacuum_arc_remelting_furnace`` | ``ultratech:steel_rod`` | `refractory/titanium_stock` → ultratech:titanium_ingot_cast, ultratech:titanium_stock | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``zirconium_chlorination_furnace`` | ``ultratech:steel_rod`` | `refractory/zirconium_chloride` → ultratech:zirconium_tetrachloride 500 mB | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### REFRIGERATION（9 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``absorption_chiller`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/absorption_chiller` → ultratech:cold_water_module<br>`route_variants/thermal/absorption_chiller_high_pressure` → ultratech:cold_water_module | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``freeze_dryer`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/freeze_dryer` → ultratech:freeze_dried_material<br>`route_variants/thermal/freeze_dryer_cooling_service` → ultratech:freeze_dried_material | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``heat_pump_system`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/heat_pump_system` → ultratech:heat_pump_module<br>`route_variants/thermal/heat_pump_pure_water` → ultratech:heat_pump_module | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``industrial_cooling_tower`` | ``ultratech:steel_pressure_vessel`` | `midgame/refrigeration/industrial_cooling_tower` → ultratech:cooling_tower_module<br>`route_variants/thermal/cooling_tower_recirculation` → ultratech:cooling_tower_module | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``refrigerant_compressor`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/refrigerant_compressor` → ultratech:high_pressure_refrigerant<br>`route_variants/thermal/refrigerant_compressor_precool` → ultratech:high_pressure_refrigerant | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``refrigerant_condenser`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/refrigerant_condenser` → ultratech:condensed_refrigerant<br>`route_variants/thermal/refrigerant_condenser_precool` → ultratech:condensed_refrigerant | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``refrigerant_evaporator`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/refrigerant_evaporator` → ultratech:refrigerant_cartridge<br>`route_variants/thermal/refrigerant_evaporator_service` → ultratech:refrigerant_cartridge | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``refrigerant_expansion_valve`` | ``ultratech:copper_pipe`` | `midgame/refrigeration/refrigerant_expansion_valve` → ultratech:expanded_refrigerant<br>`route_variants/thermal/refrigerant_expansion_controlled` → ultratech:expanded_refrigerant | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |
| ``thermal_controller`` | ``ultratech:steel_rod`` | `midgame/refrigeration/thermal_controller` → ultratech:heat_pump_module<br>`route_variants/thermal/thermal_controller_precision` → ultratech:heat_pump_module | 12 | `thermal_logistics` (energy_infrastructure, recovery_outlet, visible_constraint) | condensate_recovery |

### RUBBER_PROCESSING（12 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``plate_vulcanizer`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/plate_vulcanizer` → ultratech:vulcanized_rubber_seal x2, ultratech:vulcanized_rubber_sheet | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_abrasion_tester`` | ``ultratech:basic_circuit`` | `midgame/rubber_processing/rubber_abrasion_tester` → ultratech:rubber_wear_report | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_calender`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_calender` → ultratech:rubber_sheet x2, ultratech:rubberized_cord_fabric | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_cutting_machine`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_cutting_machine` → ultratech:rubber_precured_blank x2, ultratech:rubber_test_coupon | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_final_mill`` | ``ultratech:steel_rod`` | `midgame/rubber_processing/rubber_final_mill` → ultratech:final_mix_rubber x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_hose_crimper`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_hose_crimper` → ultratech:hydraulic_hose_assembly, ultratech:pneumatic_hose_assembly, ultratech:water_hose_assembly | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_injection_vulcanizer`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_injection_vulcanizer` → ultratech:precision_rubber_part x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_internal_mixer`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_internal_mixer` → ultratech:compounded_rubber x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_masticator`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_masticator` → ultratech:masticated_rubber | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_profile_extruder`` | ``ultratech:steel_rod`` | `midgame/rubber_processing/rubber_profile_extruder` → ultratech:rubber_profile, ultratech:rubber_precured_blank | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``rubber_reclaiming_machine`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/rubber_reclaiming_machine` → ultratech:reclaimed_rubber x2 | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |
| ``tire_vulcanizer`` | ``ultratech:iron_bolt`` | `midgame/rubber_processing/tire_vulcanizer` → ultratech:passenger_tire, ultratech:truck_tire, ultratech:offroad_tire | 12 | `electrochemical_polymer` (automation_exit, energy_constraint, recovery_outlet) | polymer_regrind |

### RUBBER_TREE（6 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``latex_coagulation_vat`` | ``ultratech:iron_bolt`` | `rubber/coagulated_latex_sheet` → ultratech:coagulated_latex_sheet x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``rubber_compound_mixer`` | ``ultratech:iron_bolt`` | `rubber/mixed_rubber` → ultratech:rubber_seal x2, ultratech:rubber_conveyor_belt | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``rubber_seed_oil_press`` | ``ultratech:steel_rod`` | `rubber/seed_oil` → ultratech:rubber_seed_oil 250 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``rubber_sheet_roller`` | ``ultratech:steel_rod`` | `rubber/pressed_latex_sheet` → ultratech:pressed_latex_sheet | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``rubber_smokehouse`` | ``ultratech:iron_bolt`` | `rubber/smoked_rubber_sheet` → ultratech:smoked_rubber_sheet | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``rubber_vulcanization_tank`` | ``ultratech:copper_pipe`` | `rubber/industrial_rubber` → ultratech:industrial_rubber | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### SILICON_INDUSTRY（20 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``silicon_acid_wash_tank`` | ``ultratech:copper_pipe`` | `midgame/silicon_industry/silicon_acid_wash_tank` → ultratech:acid_washed_silicon | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_chip_packager`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/silicon_chip_packager` → ultratech:independent_packaged_chip | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_crystal_furnace`` | ``ultratech:steel_rod`` | `silicon/monocrystal` → ultratech:monocrystal_silicon_ingot | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_cvd_deposition_furnace`` | ``ultratech:steel_rod`` | `midgame/silicon_industry/silicon_cvd_deposition_furnace` → ultratech:deposited_silicon_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_die_saw`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/silicon_die_saw` → ultratech:silicon_chip_die | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_fluidized_bed_reactor`` | ``ultratech:copper_pipe`` | `midgame/silicon_industry/silicon_fluidized_bed_reactor` → ultratech:silicon_process_powder<br>`midgame/silicon_industry/silicon_fluidized_bed_reactor_trichlorosilane` → ultratech:silicon_trichlorosilane 250 mB | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_glass_melting_kiln`` | ``ultratech:steel_rod`` | `silicon/glass_batch` → ultratech:glass_batch<br>`silicon/industrial_glass` → ultratech:industrial_glass x2 | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_ion_implanter`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/silicon_ion_implanter` → ultratech:doped_silicon_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_photolithography_machine`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/silicon_photolithography_machine` → ultratech:photolithographic_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_photovoltaic_assembly_line`` | ``ultratech:silicon_wafer`` | `silicon/photovoltaic_cell` → ultratech:photovoltaic_cell | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_plasma_etcher`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/silicon_plasma_etcher` → ultratech:etched_silicon_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_polysilicon_reactor`` | ``ultratech:copper_pipe`` | `silicon/polysilicon` → ultratech:polysilicon | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_powder_mill`` | ``ultratech:steel_rod`` | `midgame/silicon_industry/silicon_powder_mill` → ultratech:metallurgical_grade_silicon | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_quartz_crusher`` | ``ultratech:steel_rod`` | `silicon/crushed_quartz_sand` → ultratech:crushed_quartz_sand x2 | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_sand_washer`` | ``ultratech:silicon_wafer`` | `silicon/washed_quartz_sand` → ultratech:washed_quartz_sand | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_siemens_reactor`` | ``ultratech:copper_pipe`` | `midgame/silicon_industry/silicon_siemens_reactor` → ultratech:polysilicon_rod<br>`midgame/silicon_industry/silicon_siemens_reactor_polysilicon` → ultratech:polysilicon_rod | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_slicing_machine`` | ``ultratech:silicon_wafer`` | `silicon/wafer_blank` → ultratech:silicon_wafer_blank x4 | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``silicon_smelting_furnace`` | ``ultratech:steel_rod`` | `silicon/industrial_silicon` → ultratech:industrial_silicon | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_grinding_machine`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/wafer_grinding_machine` → ultratech:ground_silicon_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``wafer_polishing_machine`` | ``ultratech:silicon_wafer`` | `midgame/silicon_industry/wafer_polishing_machine` → ultratech:polished_silicon_wafer | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### SISAL（8 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``sisal_carding_machine`` | ``ultratech:iron_bolt`` | `sisal/carded_sliver` → ultratech:carded_sisal_sliver | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_decorticator`` | ``ultratech:iron_bolt`` | `sisal/scraped_fiber` → ultratech:scraped_sisal_fiber, ultratech:sisal_residue | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_drying_kiln`` | ``ultratech:steel_rod`` | `sisal/dried_fiber` → ultratech:dried_sisal_fiber | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_loom`` | ``ultratech:iron_bolt`` | `sisal/cloth` → ultratech:industrial_sisal_cloth | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_rope_maker`` | ``ultratech:iron_bolt`` | `sisal/polishing_wheel` → ultratech:polishing_wheel<br>`sisal/rope` → ultratech:sisal_rope | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_spinning_machine`` | ``ultratech:iron_bolt`` | `sisal/yarn` → ultratech:sisal_yarn x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_washing_trough`` | ``ultratech:iron_bolt`` | `sisal/washed_fiber` → ultratech:washed_sisal_fiber, ultratech:short_sisal_fiber | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sisal_wet_former`` | ``ultratech:iron_bolt`` | `sisal/paper` → ultratech:insulation_paper, ultratech:filter_paper | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### SORGHUM_BIOPLASTIC（19 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``activation_furnace`` | ``ultratech:steel_rod`` | `sorghum/activated_carbon` → ultratech:activated_carbon | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``alkali_treatment_tank`` | ``ultratech:copper_pipe`` | `sorghum/cellulose_slurry` → ultratech:cellulose_slurry, ultratech:lignin | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``bioplastic_molder`` | ``ultratech:steel_rod`` | `sorghum/bioplastic_part` → ultratech:bioplastic_part | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``bleaching_system`` | ``ultratech:iron_bolt`` | `sorghum/high_purity_cellulose` → ultratech:high_purity_cellulose | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``esterification_reactor`` | ``ultratech:copper_pipe`` | `sorghum/cellulose_acetate` → ultratech:cellulose_acetate | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``ethylene_glycol_line`` | ``ultratech:iron_bolt`` | `sorghum/antifreeze` → ultratech:antifreeze | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``ethylene_synthesis_tower`` | ``ultratech:copper_pipe`` | `sorghum/ethylene` → ultratech:ethylene 300 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``fermentation_tank`` | ``ultratech:copper_pipe`` | `sorghum/ethanol_fermentation_broth` → ultratech:ethanol_fermentation_broth 500 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``liquefaction_reactor`` | ``ultratech:copper_pipe`` | `sorghum/gelatinized_starch` → ultratech:gelatinized_starch | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``molecular_sieve_dehydration_tower`` | ``ultratech:copper_pipe`` | `sorghum/fuel_ethanol` → ultratech:fuel_ethanol 400 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``polymerization_reactor`` | ``ultratech:copper_pipe`` | `sorghum/polyethylene_pellet` → ultratech:polyethylene_pellet x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``pyrolysis_reactor`` | ``ultratech:copper_pipe`` | `sorghum/biochar` → ultratech:biochar, ultratech:pyrolysis_gas 250 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``saccharification_tank`` | ``ultratech:copper_pipe`` | `sorghum/glucose_solution` → ultratech:glucose_solution 500 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sorghum_crusher`` | ``ultratech:steel_rod`` | `sorghum/crushed_stalk` → ultratech:crushed_sorghum_stalk | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``sorghum_harvester`` | ``ultratech:iron_bolt`` | `sorghum/harvest` → ultratech:sorghum_grain, ultratech:sorghum_stalk | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``spinning_machine`` | ``ultratech:iron_bolt`` | `sorghum/bioplastic_pellet` → ultratech:bioplastic_pellet x2 | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``starch_separator`` | ``ultratech:copper_pipe`` | `sorghum/starch_slurry` → ultratech:bran, ultratech:starch_slurry 500 mB | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``steam_explosion_machine`` | ``ultratech:iron_bolt`` | `sorghum/exploded_stalk` → ultratech:exploded_stalk | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |
| ``synthetic_rubber_line`` | ``ultratech:iron_bolt`` | `sorghum/synthetic_rubber` → ultratech:synthetic_rubber | 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply) | biomass_and_black_liquor_recovery |

### STANDARD_INDUSTRY（12 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``bearing_assembler`` | ``ultratech:iron_bolt`` | `standard_industry/bearing_assembly` → ultratech:bearing_assembly | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``bearing_grinder`` | ``ultratech:steel_rod`` | `standard_industry/bearing_ring` → ultratech:precision_bearing_ring | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``cold_header`` | ``ultratech:iron_bolt`` | `standard_industry/fastener_blank` → ultratech:fastener_blank x4 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``gear_grinding_machine`` | ``ultratech:iron_bolt`` | `standard_industry/precision_gear` → ultratech:precision_gear<br>`standard_industry/ultra_precision_gear` → ultratech:ultra_precision_gear | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``gear_hobbing_machine`` | ``ultratech:iron_bolt`` | `standard_industry/gear_blank` → ultratech:machined_gear_blank x2 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``parts_packaging_machine`` | ``ultratech:iron_bolt`` | `midgame/standard_industry/parts_packaging_machine_powder_bearing_standard` → ultratech:bearing_assembly<br>`midgame/standard_industry/parts_packaging_machine_powder_gear_standard` → ultratech:precision_gear<br>`standard_industry/fastener_kit` → ultratech:fastener_kit<br>`standard_industry/sealing_kit` → ultratech:sealing_kit<br>`standard_industry/standard_parts_kit` → ultratech:standard_parts_kit<br>`standard_industry/transmission_kit` → ultratech:transmission_kit | 15, 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``parts_washer`` | ``ultratech:iron_bolt`` | `standard_industry/clean_part` → ultratech:clean_standard_part<br>`standard_industry/mix_cleaning_solution` → ultratech:parts_cleaning_solution 500 mB | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``precision_grinder`` | ``ultratech:steel_rod`` | `standard_industry/high_precision_shaft` → ultratech:high_precision_shaft<br>`standard_industry/precision_shaft` → ultratech:precision_shaft | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``precision_lathe`` | ``ultratech:steel_rod`` | `standard_industry/machine_housing` → ultratech:machine_housing<br>`standard_industry/shaft_blank` → ultratech:shaft_blank | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``seal_vulcanizer`` | ``ultratech:iron_bolt`` | `midgame/standard_industry/seal_vulcanizer_natural_rubber_pressure_seal` → ultratech:vulcanized_seal x2<br>`standard_industry/vulcanized_seal` → ultratech:vulcanized_seal x2 | 12, 8 | `biobased_industry` (alternative_route, recovery_outlet, renewable_supply)<br>`standard_parts_backbone` (automation_exit, first_consumer, parallelization) | biomass_and_black_liquor_recovery<br>scrap_remelt |
| ``standard_parts_inspection_station`` | ``ultratech:basic_circuit`` | `standard_industry/inspection` → ultratech:certified_standard_part, ultratech:standard_parts_quality_report | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |
| ``threading_machine`` | ``ultratech:iron_bolt`` | `standard_industry/threaded_fastener` → ultratech:threaded_fastener x2 | 8 | `standard_parts_backbone` (automation_exit, first_consumer, parallelization) | scrap_remelt |

### SUPERALLOYS（8 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``electroslag_remelting_furnace`` | ``ultratech:steel_rod`` | `midgame/superalloys/electroslag_remelting_furnace` → ultratech:esr_superalloy_ingot | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``isothermal_forging_press`` | ``ultratech:steel_rod`` | `midgame/superalloys/isothermal_forging_press` → ultratech:superalloy_forging | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superalloy_coating_machine`` | ``ultratech:steel_rod`` | `midgame/superalloys/superalloy_coating_machine` → ultratech:thermal_barrier_coated_part<br>`midgame/superalloys/superalloy_coating_machine_first_wall` → ultratech:thermal_barrier_coated_part, ultratech:fusion_first_wall_material | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superalloy_heat_treatment_furnace`` | ``ultratech:steel_rod`` | `midgame/superalloys/superalloy_heat_treatment_furnace` → ultratech:heat_treated_superalloy_part | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superalloy_machining_center`` | ``ultratech:steel_rod`` | `midgame/superalloys/superalloy_machining_center` → ultratech:precision_superalloy_part | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superalloy_precision_casting_system`` | ``ultratech:steel_pressure_vessel`` | `midgame/superalloys/superalloy_precision_casting_system` → ultratech:superalloy_casting<br>`midgame/superalloys/superalloy_precision_casting_system_directional_blades` → ultratech:single_crystal_blade, ultratech:directionally_solidified_blade | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``superalloy_vacuum_arc_remelting_furnace`` | ``ultratech:steel_rod`` | `midgame/superalloys/superalloy_vacuum_arc_remelting_furnace` → ultratech:var_superalloy_ingot | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``vacuum_induction_melting_furnace`` | ``ultratech:steel_rod`` | `midgame/superalloys/vacuum_induction_melting_furnace` → ultratech:vim_superalloy_ingot | 20 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### SURFACE_ENGINEERING（10 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``abrasive_blasting_machine`` | ``ultratech:iron_bolt`` | `midgame/surface_engineering/abrasive_blasting_machine` → ultratech:abrasive_cleaned_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``carbonitriding_furnace`` | ``ultratech:steel_rod`` | `midgame/surface_engineering/carbonitriding_furnace` → ultratech:carbonitrided_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``coating_inspection_station`` | ``ultratech:basic_circuit`` | `midgame/surface_engineering/coating_inspection_station` → ultratech:coating_quality_report | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``gas_nitriding_furnace`` | ``ultratech:steel_rod`` | `midgame/surface_engineering/gas_nitriding_furnace` → ultratech:nitrided_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``hardfacing_welder`` | ``ultratech:iron_bolt`` | `midgame/surface_engineering/hardfacing_welder` → ultratech:hardfaced_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``hvof_spray_system`` | ``ultratech:iron_bolt`` | `midgame/surface_engineering/hvof_spray_system` → ultratech:hvof_coated_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``induction_hardening_machine`` | ``ultratech:iron_bolt`` | `midgame/surface_engineering/induction_hardening_machine` → ultratech:induction_hardened_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``laser_cladding_machine`` | ``ultratech:iron_bolt`` | `midgame/surface_engineering/laser_cladding_machine` → ultratech:laser_clad_component<br>`midgame/surface_engineering/laser_cladding_machine_laser_crystal_processing` → ultratech:laser_clad_component | 16, 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``thermal_spray_system`` | ``ultratech:iron_bolt`` | `midgame/surface_engineering/thermal_spray_system` → ultratech:thermal_sprayed_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``vacuum_carburizing_furnace`` | ``ultratech:steel_rod`` | `midgame/surface_engineering/vacuum_carburizing_furnace` → ultratech:carburized_component | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

### TEXTILE_COMPOSITES（14 台）

| 机器 | 构造功能件（F） | 运行工艺与产出 | 阶段 | 路线 / 证据标签 | 恢复出口 |
|---|---|---|---|---|---|
| ``carbonization_furnace`` | ``ultratech:steel_rod`` | `midgame/textile_composites/carbonization_furnace` → ultratech:carbon_fiber_tow<br>`midgame/textile_composites/carbonization_furnace_weave` → ultratech:carbon_fiber_fabric | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``composite_autoclave`` | ``ultratech:steel_pressure_vessel`` | `midgame/textile_composites/composite_autoclave` → ultratech:composite_laminate | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``composite_cutting_machine`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/composite_cutting_machine` → ultratech:composite_structural_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``composite_molding_press`` | ``ultratech:steel_rod`` | `midgame/textile_composites/composite_molding_press` → ultratech:composite_molded_part | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``fiber_carding_machine`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/fiber_carding_machine` → ultratech:fiber_sliver | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``fiber_drawing_frame`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/fiber_drawing_frame` → ultratech:drawn_fiber_sliver | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``fiber_opener`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/fiber_opener` → ultratech:opened_fiber | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``heat_setting_machine`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/heat_setting_machine` → ultratech:heat_set_fabric | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``industrial_loom`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/industrial_loom` → ultratech:industrial_fabric<br>`midgame/textile_composites/industrial_loom_woven_fabric` → ultratech:industrial_fabric | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``needle_punch_machine`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/needle_punch_machine` → ultratech:nonwoven_fabric | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``prepreg_preparation_machine`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/prepreg_preparation_machine` → ultratech:fiber_prepreg<br>`midgame/textile_composites/prepreg_preparation_machine_nanotube_reinforced` → ultratech:carbon_fiber_composite<br>`midgame/textile_composites/prepreg_preparation_machine_resin_impregnation` → ultratech:fiber_prepreg | 16, 22 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``ring_spinning_frame`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/ring_spinning_frame` → ultratech:fine_yarn | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``roving_frame`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/roving_frame` → ultratech:roving | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |
| ``twisting_machine`` | ``ultratech:iron_bolt`` | `midgame/textile_composites/twisting_machine` → ultratech:ply_yarn | 16 | `precision_campus` (parallelization, visible_constraint, recovery_outlet) | reject_material_recovery |

## 四、验收使用方式

1. 变更某台机器前，先定位本台账的机器 ID；构造功能件、运行入口、路线契约和恢复出口构成最小保留集。
2. 若新增慢线、快线或回收线，必须更新对应 DataGen 源、重跑本台账，并同时通过配方原型、进度、清单和重构库存审计。
3. 此台账与 `ULTRATECH_FULL_RECIPE_RECONSTRUCTION_PLAN.md` 共同构成逐机执行证据：方案解释为什么改；台账证明改动落在何处且仍能恢复。

## 五、生成验证

```powershell
.\scripts\generate-recipe-reconstruction-ledger.ps1
.\scripts\generate-recipe-reconstruction-ledger.ps1 -VerifyOnly
.\scripts\verify-recipe-reconstruction-inventory.ps1
.\scripts\verify-recipe-machine-alternatives.ps1
```

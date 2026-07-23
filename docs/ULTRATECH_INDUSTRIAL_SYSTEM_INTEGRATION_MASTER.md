# UltraTech Industrial System Integration Master Plan

## Status And Scope

This document defines the logistics contract between UltraTech's existing
industrial systems. The twenty marked handoffs are implemented as generated
recipes and link metadata; the metadata also drives JEI route cards, research
terminal recommendations, material tooltips, machine status icons and
first-route advancement hooks.

The document uses existing UltraTech IDs and names whenever they are already
registered. `1x` means one interface item unit and `1000 mB` means one bucket
interface unit. These are planning batch units, not a replacement for the
canonical generated recipe quantities. Existing recipe JSON remains the source
of truth for exact in-game input, output, FE, and time values.

## Spiral Progression Contract

Every implemented handoff also has a generated `spiral_progression` contract.
It turns a new chain into a factory retrofit: each contract names at least two
legacy parts, a bottleneck, a breakthrough, an adjacent auxiliary module and a
crossing reward. The module is placed beside a compatible stage machine. It
switches the machine into **Auxiliary Mode** and raises output by 20%; the
singularity retrofit raises stages 1-5 by 1000x as the terminal feedback loop.

| Link stage | Old parts retained as bulk inputs | Bottleneck -> breakthrough | Auxiliary module | Crossing reward |
|---|---|---|---|---|
| 1-4 | `wooden_gear` + `wooden_frame` | torque -> gearbox torque | mechanical assist | mechanical legacy upgrade |
| 5-8 | `copper_pipe` + `safety_valve` | steam pressure -> high-pressure preheat | thermal preheater | steam legacy upgrade |
| 9-12 | `steel_pressure_vessel` + `pressure_gauge` | fuel throughput -> stable combustion | combustion stabilizer | combustion legacy upgrade |
| 13-20 | `copper_wire` + `basic_circuit` | grid instability -> regulated grid | grid regulator | grid legacy upgrade |
| 21-29 | `steel_pressure_vessel` + `copper_pipe` | cryogenic heat leak -> coolant recirculation | cryogenic recirculation | cryogenic legacy upgrade |
| 30 | `wooden_gear` + `copper_pipe` | terminal density -> singularity retrofit | singularity retrofit | singularity legacy upgrade |

The following links inherit the appropriate row above, so all twenty retain a
two-component legacy recipe contract: `biomass_pulp`, `fusion_fuel`,
`tree_extract_chemicals`, `tannin_water_treatment`,
`palm_biodiesel_logistics`, `rubber_pressure_seal`, `chlorine_pvc`,
`caustic_pulp_alumina`, `gas_catalyst`, `ceramic_electronics`,
`nano_specialty_materials`, `silicon_quantum`, `optics_precision`,
`fusion_first_wall`, `powder_precision_parts`, `ruins_research`,
`helium3_fusion`, `superconducting_containment`, `scifi_cosmic_machine`, and
`final_cosmic_projects`.

The first completion of each link remains discoverable through its existing
advancement, JEI route card and research-terminal recommendation. JEI now
also renders the planned auxiliary module on the route card. Module recipes
always contain two prior-era core components; each is a permanent retrofit,
not a consumable upgrade. This preserves the old machine room as a useful
support layer instead of a scrap pile.

Legend:

- `[E]` Existing registered item, fluid, machine, or system path.
- `[G]` Required integration gap. It is a proposal only and must be added as a
  recipe, tag, or intermediate in a later implementation pass.
- `[Done]` Implemented integration contract with generated recipes and, where
  needed, runtime input acceptance.
- `->` material or energy flow.
- `=>` research or progression gate.

## 1. Whole-System Flow

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

### 1.1 Core Cross-Cutting Backbone

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

## 2. Stage Gates And Player Route

| Stage band | Energy and research gate | Systems entering the route | Mandatory outputs before the next gate |
|---|---|---|---|
| 0-2 | Hand work, animal SU | Stage machine 1, primitive ceramic, crop collection, wood and stone handling | `flour`, `hay_feed`, `basic_gear`, clay ceramic/refractory precursor |
| 3-5 | Water/wind SU, gearbox | Standard industry foundation, fluid pipes, early rubber, sorghum, oil palm, paper | `copper_plate`, `iron_plate`, `steel_rod`, seals, boiler parts, biomass feed |
| 5-8 | Low/high-pressure steam and Stirling | Boilers, steam turbine, refrigeration foundation, compressed-air foundation | `low_pressure_steam`, `high_pressure_steam`, `fuel_ethanol`, `lubricant_oil`, bronze/steel machine parts |
| 9-12 | Internal-combustion and DC FE | Bio-chemistry, petroleum entry, electrochemistry entry, water treatment, gas processing | `fuel_ethanol`, refined fuels, `copper_wire`, `basic_circuit`, stable FE and filtered water |
| 13-16 | Grid FE, AC/solar, precision manufacturing | Chlor-alkali, plastics, rubber, optics, ceramics, powder metallurgy, surface engineering | chlorine/caustic chain, engineering plastics, coated parts, precision bearings and lenses |
| 17-20 | High-temperature FE and advanced research | Nuclear fuel, fusion fuel, cryogenics, superalloys, semiconductor and microwave | fuel assemblies, DT fuel, liquid nitrogen/helium, high-purity silicon, microwave and optical components |
| 21-25 | Fusion/space and superconducting era | Helium-3, superconducting factory, space exploration, quantum production | superconducting coils, strong magnetic-field service, liquid hydrogen/helium, quantum processor parts |
| 26-30 | Endgame FE, compute, wireless logistics | Antimatter, endgame alloys, Sci-Fi 2.0, concept machines, cosmic megamachines | cosmic string, Casimir crystal, time crystal, singularity core, negative energy, topology materials |

## 3. Early Game: Stage 0-5

### 3.1 First Industrial Loop

```text
wood / stone / iron / copper / redstone
  -> animal_power_millstone [E]
  -> flour + hay_feed + crushed/mineral preparation
  -> basic_gear + copper_plate + iron_plate + steel_rod
  -> basic_machine_casing / gearbox / water-wheel components
  -> stable SU network
```

The first `animal_power_millstone` should be the transition from gathering to
industry. Its recommended primary outputs are:

| Input | Interface output | Why it is an industrial gate |
|---|---|---|
| Wheat or sorghum, `1x` | `flour`, `1x` | Opens animal feed, food logistics and biomass handling. |
| Plant matter, `1x` | `biomass_slurry`, `1000 mB` or biomass intermediate [Done] | Feeds fermentation and pyrolysis instead of treating crops only as food. |
| Ore/stone, `1x` | crushed or ground mineral, `1x` [E where matching process material exists] | Creates the first beneficiation step before furnace or chemical processing. |
| Wood, `1x` | wood fiber/sawdust intermediate [Done] | Connects early forestry to paper, pellets and activated carbon. |

### 3.2 Early System Interface Matrix

| System | Inputs and source | Outputs and consumers | Gate |
|---|---|---|---|
| 1. Stage machines 1-5 | Vanilla wood, stone, iron, copper, redstone; `hay_feed`; water flow | SU; `flour`; `basic_gear`; plates/rods; feeds standard industry, boilers, crop processing | 0-5 |
| 2. Tiered modular parts | Iron/copper -> basic frame; steel -> reinforced frame; existing tier alloy chain | Casings, vents, gearboxes, circuits, hatches used by every multiblock and large factory | 3+ |
| 3. Oil palm | `oil_palm_fruit`, water | `crude_palm_oil` -> refining; palm fiber/shell -> paper, activated carbon, boiler fuel | 3+ |
| 4. Pine/eucalyptus/eucommia/lacquer trees | Logs, bark, branches, leaves | Resin, turpentine, essential oil, eucommia rubber liquor, lacquer, tannin extracts -> chemicals, rubber, coatings, paper | 4+ |
| 5. Plant multiblocks | Tree and crop feed plus water/fuel | Crude rosin/turpentine, crude eucalyptus oil, crude eucommia rubber liquor, refined lacquer, tannin solution | 5-12 |
| 10. Fluid mechanics | Metal plates, seals, gears, pipe material | Pumps, valves, filters, flow sensors, pipes -> all liquid factories | 3+ |
| 11. Standard industry | Plates, rods, copper wire, rubber/seal stock | Fasteners, transmission, bearings, shafts, seals, housings -> every machine recipe | 3+ |
| 17. Ceramic industry | Clay/high-kaolin feed, water, fuel | Refractory bricks, engineering ceramic, electronic ceramic -> furnace lining, insulation, circuit substrate | 3-12 |
| 21. Paper/packaging | Plant fiber, palm fiber, wood fiber, caustic solution | Pulp, paper, cardboard -> research documents, packaging, filter media | 4-12 |
| 24. Refrigeration/heat pump | Copper tube, compressor, refrigerant, FE/SU | Cooling water and first cold loop -> later low-temperature plant pre-cooling | 5-12 |
| 29. Compressed air | Steel/bronze parts, seals, FE/SU | Dry compressed air -> pneumatic tools, valve control, material conveying | 5-12 |
| 30. Industrial water treatment | Raw water, filter media, caustic/acid where required | Filtered, softened, RO and EDI water; wastewater streams -> nearly all process systems | 5+ |

### 3.3 Opening Recommended Build

1. Gather wood, stone, iron, copper, redstone, clay, wheat/sorghum and water.
2. Build the animal mill and produce `flour`, `hay_feed`, first `basic_gear`,
   and prepared mineral feed.
3. Use copper/iron plates, rods, gears and basic circuits to create the first
   basic casing, wooden pipes and water-wheel components.
4. Build water wheel/wind power, gearbox, small SU distribution and a basic
   water-treatment line.
5. Branch crops: sorghum for ethanol, rubber tree for seals, oil palm for oil,
   sisal/hemp for fiber, and wood/tree output for pulp and resin.

## 4. Steam To Electrical Transition: Stage 5-12

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

### 4.1 Steam Hardware Contract

| Required hardware | Existing material sources | Outputs unlocked |
|---|---|---|
| Boiler shell | `iron_plate`, `copper_plate`, steel fasteners, seals, refractory ceramic | Low/high-pressure boiler |
| Heat section | Coal/coke, biomass char, palm shell charcoal, fuel ethanol | `low_pressure_steam`, `high_pressure_steam` |
| Steam transport | Copper/steel pipe, valve, gasket, insulation | Turbine feed, heat exchange, condenser return |
| Turbine/Stirling | Steel shaft, bearings, gearbox, copper wire, basic circuit | SU at the mechanical layer; transitional FE through converter chain |
| Cooling loop | Treated water, pump, cooling tower/heat-pump components | Condensate recovery and stable turbine operation |

### 4.2 Stage 5-12 Interface Matrix

| System | Inputs and source | Outputs and consumers | Gate |
|---|---|---|---|
| 6. Electrochemistry entry | Treated water, brine, copper/zinc salts, early FE | `chlor_alkali_chlorine`, `chlor_alkali_hydrogen`, `chlor_alkali_sodium_hydroxide`, cathode metal products | 12 |
| 23. Biochemical industry | Biomass/sorghum, water, enzymes/catalyst | glucose/fermentation broth, `fuel_ethanol`, organic acids, enzyme products -> fuel, polymer and food/chemical routes | 7-12 |
| 25. Industrial gases | Air, compressor, drying, cooling | O2/N2/Ar/CO2; later H2/He -> furnaces, inert handling, cryogenic feed, chemistry | 9-12 |
| 27. Plastic processing | Ethylene/propylene or polymer feed, additives, heat | Pellets, pipe, molded, blown and thermoformed parts -> piping, housings, packaging | 12+ |
| 28. Rubber processing | `rubber_latex`/rubber feed, sulfur, carbon black, heat | Vulcanized rubber, hose, gasket, seal -> standard industry, fluid mechanics, vehicles | 8+ |
| 31. Industrial catalyst | Ceramic/alumina carrier, metal salt, acid/base, gas | Activated catalyst -> petroleum, chlorination, hydrogenation, organic synthesis, regeneration loop | 12+ |

## 5. Chemical And Materials Expansion: Stage 12-20

### 5.1 Petroleum And Chlor-Alkali Backbone

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

### 5.2 Stage 12-20 Interface Matrix

| System | Inputs and source | Outputs and consumers | Gate |
|---|---|---|---|
| 6. Full electrochemistry | Brine/water, `copper_electrolyte`, `zinc_sulfate_solution`, molten chloride salts, FE | Chlorine, hydrogen, caustic, cathode copper/zinc/nickel/chromium, high-purity metal, plating/anodized parts | 12-18 |
| 7. Nanomaterials | Purified chemicals, carrier gas, catalyst, high-purity metal/silicon, FE | Nanopowder, nanofiber, graphene-like films, quantum-dot precursor -> catalysts, optics, quantum devices, high-end composites | 16+ |
| 8. Cryogenic engineering | Separated gases, refrigeration plant, FE | `liquid_nitrogen`, `liquid_oxygen`, `liquid_hydrogen`, `liquid_helium`, noble liquids -> superconductors, fusion, space, semiconductor | 18+ |
| 9. Optics | Industrial glass/silica, ceramics, rare-earth/metal coatings, clean water | Lenses, optical fiber, laser crystal, coated optics -> sensors, laser processing, microwave/space/quantum | 15+ |
| 12. Microwave | Copper conductors, ferrite/ceramic, vacuum parts, FE | Magnetron, microwave sintering, microwave plasma, radar and communication parts -> ceramics, nanomaterials, space communications | 17+ |
| 13. Quantum industry | High-purity silicon, epitaxy materials, quantum dots, superconducting film, liquid helium | Josephson junction, qubit, quantum processor, quantum sensor -> compute research, endgame machines | 22+ |
| 18. Textile/composites | Sisal/hemp/plant fiber, resin, carbon/nano reinforcement | Yarn, fabric, prepreg, composite structural part -> drones, vehicles, space and turbine structures | 12+ |
| 19. Surface engineering | Coating feed, plating salts, gases, laser/induction energy | Hardened, nitrided, coated, cladded parts -> turbine, pumps, space and fusion first wall | 15+ |
| 20. Powder metallurgy | Metal/ceramic powder, binder, compressed air, furnace heat | Sintered and near-net-shape parts -> gears, bearings, cutting tools, precision components | 14+ |
| 22. Silicon semiconductor | Quartz -> industrial silicon -> polysilicon -> crystal/wafer, photoresist, etchant, gases | Wafers, chips, packages -> advanced circuits, controls, microwave, quantum and research terminals | 16+ |
| 26. Superalloys | Nickel/cobalt/chromium/titanium feed, inert gas, vacuum heat, ceramic molds | VIM/VAR/ESR ingots, turbine blades, coated parts, fusion first-wall material | 18+ |

### 5.3 Explicit Consumer Mapping

| Producer | Existing output | Main consumers |
|---|---|---|
| Oil palm | `crude_palm_oil`, `refined_palm_oil`, palm fiber, shell charcoal | Biodiesel, lubricant, surfactant, paper, activated-carbon filter, biomass heat |
| Rubber tree and eucommia | `rubber_latex`, eucommia rubber liquor | Vulcanized rubber, gaskets, flexible hoses, seals, conveyor belts |
| Pine | Crude rosin, crude turpentine | Adhesive/resin, solvent, coating, chemical feed [G for explicit resin routes] |
| Eucalyptus | Crude eucalyptus oil, bark/tannin feed | Solvent/fragrance side content, tannin extraction, paper chemical [G for explicit tannin-to-treatment route] |
| Chlor-alkali | Chlorine, hydrogen, caustic, hydrochloric acid | PVC, hydrogenation, pulp bleaching, water neutralization, aluminum processing |
| Petroleum | Ethylene, propylene, butadiene, aromatics, glycol, fuels | Plastic, rubber, resin, solvents, synthetic fibers, fuel |
| Water treatment | Filtered/softened/RO/EDI water | Boiler, electrolysis, semiconductor, cryogenic and catalyst preparation |
| Catalyst plant | Carrier and activated catalyst | Petroleum cracking, hydrogenation, organic electrosynthesis, exhaust/wastewater treatment |

## 6. Nuclear, Fusion, Superconducting And Space: Stage 20-25

### 6.1 Nuclear And Fusion Logistics

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

Important correction: the nuclear cycle does not provide fusion fuel. It
provides uranium and MOX fuel assemblies for fission, breeder, or molten-salt
reactors. Fusion fuel comes from the heavy-water/deuterium/lithium-tritium
chain. Nuclear power supplies the FE and neutron economy needed to scale that
fusion chain.

### 6.2 Stage 20-25 Interface Matrix

| System | Inputs and source | Outputs and consumers | Gate |
|---|---|---|---|
| 14. Nuclear fuel cycle | Uranium ore, sulfuric/nitric acid, `uranium_hexafluoride`, zirconium cladding, FE | Uranium fuel assembly, MOX fuel assembly, plutonium dioxide, radioactive waste | 17-22 |
| 15. Fusion fuel cycle | `heavy_water`, `deuterium`, `liquid_lithium`, neutron source, cryogenic service | Deuterium, tritium, DT fuel [G explicit handoff], fusion blanket materials | 20-24 |
| 16. Helium-3 extraction | Lunar regolith, heat, separated gases, cryogenic plant | Helium-3 capsule/liquid-helium-3 route -> helium fusion, advanced cryogenics | 21+ |
| 34. Superconducting technology | `liquid_nitrogen`/`liquid_helium`, niobium/titanium/rare-earth feed, FE | Superconducting wire and coil, strong magnetic field, magnetic-confinement validation, MHD FE | 22+ |
| 35. Space ruins/exploration | Rocket, fuel, life support, scanner, research data | Planetary samples, helium-3 source, rare alloys, artifacts, research unlocks | 21+ |
| 25. Industrial gas, advanced | Air separation plus cryogenic fractionation | Liquid O2/N2/Ar, helium feed, high-purity carrier gas -> fusion, space and semiconductor | 18+ |
| 24. Refrigeration, advanced | Compressor, heat exchanger, refrigerant, FE | Pre-cooling and heat rejection -> air separation and liquid-gas trains | 18+ |

### 6.3 Superconducting Factory Closed Loop

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

Downstream consumers of superconducting coils:

- Tokamak ring, magnetic confinement, antimatter containment, high-field
  materials research and selected Sci-Fi 2.0 structures.
- Quantum devices through Josephson/superconducting qubit production.
- Space systems through compact high-power magnets and communication hardware.

## 7. Endgame: Stage 25-30

### 7.1 Sci-Fi Industry 2.0 Logistics

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

### 7.2 Independent Concept And Cosmic Machine Interfaces

| Machine | Inputs from existing systems | Outputs to existing systems |
|---|---|---|
| Pascal engine | Vacuum-energy liquid from Casimir array | SU for isolated novelty/auxiliary mechanical networks; never a required mainline source |
| Bose condenser | `liquid_helium`, FE from fusion/MHD | Bose-Einstein condensate -> quantum core and superconductor upgrade route |
| Entropy reducer | Low-grade solids, slag, tailings; `liquid_nitrogen`; high FE | High-purity single crystal -> optics, semiconductor and quantum feed |
| Axion converter | High-altitude placement, FE magnetic upkeep, superconducting field service | Dark-matter energy and variable FE -> endgame energy network |
| Laminar spacetime compressor | FE, liquid nitrogen/helium | Burst FE -> megastructure charging buffer |
| Delayed choice selector | Event-anchor item, high FE, selected unlocked recipe | A selected noncritical product; must be restricted from bypassing research/unique endgame inputs |
| Four-dimensional cutter | Metal/alloy ingot, high FE | Time-displaced material -> endgame alloy and topology recipes |
| Shadow matter synthesizer | Metal ingot, high FE | Shadow-matter ingot -> isolation container, armor, shadow-state chain |
| Fermion recombiner | Nonmetal/ceramic/rubber input, high FE | Bosonized material -> superconducting, lubricant and quantum material variants |
| Observer core | No material input; isolation radius | Stable FE -> low-rate base-load only, not a progression bypass |
| Cosmic benchmark resetter | Cosmic string, monopole, true-vacuum energy, FE | One-shot FE burst -> megastructure startup or late research milestone |
| Entanglement network core | FE, quantum processor and superconducting infrastructure | Entanglement links -> wireless item/energy terminal transport |
| FTL particle accelerator | High FE, superalloy/coil service | Timelike particle -> absolute-reference components for late machines |
| Cosmic string forge | Cosmic-string fragments from structure 12 | Cosmic-string wire -> weaving loom, advanced anchors and final structures |
| Black-hole farm | Ordinary material or waste, containment and FE | Black-hole matter plus Hawking FE -> dense endgame construction feed |
| Dimensional eroder | High FE, dimensional stabilization components | Dimensional stripping material + fragments -> reconstruction/folding support |
| Temporal translocator | A normal production input plus FE | Time-completed product; must preserve the same recipe eligibility and research gate |

### 7.3 Endgame Dependency Rules

1. Structure 1-5 provide the first spacetime logistics and energy infrastructure.
2. Structure 6-12 create the prerequisite physics materials: graviton beam,
   Casimir crystal, time crystal, singularity core, true-vacuum energy, cosmic
   strings and monopoles.
3. Structure 13-18 consume the 6-12 outputs and create the final topology,
   information, parallel-universe and negative-energy branches.
4. Concept/cosmic machines may accelerate or specialize a branch, but none may
   manufacture a unique prerequisite before its source structure is researched.
5. The final player choice consumes a combination of `closed_loop_space_node`,
   spatial-topology crystal, negative-energy beam, cosmic string wire, pure
   state matter and research/coordinate data [G: final recipes and terminal
   definitions need explicit implementation].

## 8. Producer-To-Consumer Matrix

| Producer system | Primary interface outputs | Consumer systems |
|---|---|---|
| Standard industry | Fasteners, bearings, shafts, seals, housings, transmission | All machine families, pipes, ports, vehicles, multiblocks |
| Water treatment | Filtered/softened/RO/EDI water | Boilers, electrolysis, semiconductors, cryogenics, catalysts |
| Compressed air | Dry compressed air | Pneumatic systems, powder transport, instruments, molding |
| Industrial gases | O2/N2/Ar/CO2/H2/He | Metallurgy, chemical synthesis, cryogenics, space, semiconductor |
| Ceramic | Refractory, structural, electronic ceramic | Boilers, furnaces, catalysts, microwave, circuit substrate |
| Plant and forestry | Oils, latex, resin, fiber, tannin, lignocellulose | Fuels, rubber, plastic additives, paper, filters, coatings |
| Petroleum | Fuel fractions, olefins, aromatics, glycol | Plastics, synthetic rubber, solvent, resin, fuel |
| Electrochemistry | Caustic, chlorine, hydrogen, high-purity metals, plating | PVC, paper, aluminum, catalysts, circuits, surface engineering |
| Plastic/rubber | Pellets, molded parts, hose, gasket, seal | Logistics, fluid machines, cables, vehicles, space equipment |
| Semiconductor/optics/microwave | Chips, sensors, lenses, fiber, microwave parts | Research, communications, quantum, space and endgame controls |
| Nuclear/fusion | Fission fuel, MOX, DT/He-3 fuel, high FE | Reactor power, space base power, superconducting scale-up |
| Cryogenic/superconducting | Liquid gases, coils, field service, MHD FE | Fusion, quantum, antimatter, megastructures |
| Space exploration | Samples, artifacts, He-3 source, planetary resources | Research progression, cryogenic/fusion/advanced materials |
| Sci-Fi 2.0 | Spacetime, vacuum, topology and negative-energy materials | Cosmic machines and final player-choice projects |

## 9. Missing Integration Points

The following are the important missing contracts. They must be implemented as
new recipes, tags, or explicit research unlock links; this document does not
add them.

| Priority | Unconnected systems | Required missing link |
|---:|---|---|
| P0 | Animal mill -> biochemistry/paper | `[Done]` Plant residues now produce `biomass_pulp` / `biomass_slurry` for paper and biochemical processing. |
| P0 | Nuclear fuel -> fusion fuel | `[Done]` `deuterium + tritium -> dt_fuel`, accepted by deuterium fusion and Tokamak interfaces. |
| P0 | Tree extraction -> standard chemicals | `[Done]` Existing rosin/turpentine refinery, adhesive, paint and terpene recipes form the shared bridge. |
| P0 | Eucalyptus/tannin -> water treatment | `[Done]` `tannin_powder` is an alternate water-coagulation reagent. |
| P0 | Oil palm -> biodiesel/logistics | `[Done]` Palm biodiesel is accepted by piston and turbo combustion engines. |
| P0 | Rubber tree/eucommia -> seals | `[Done]` Compounded rubber produces standard vulcanized pressure seals. |
| P0 | Chlor-alkali -> PVC | `[Done]` Ethylene plus chlorine explicitly produces vinyl chloride for the existing PVC route. |
| P0 | Caustic -> pulp/aluminum | `[Done]` Chlor-alkali sodium hydroxide directly feeds pulp and bauxite digestion. |
| P1 | Industrial gas -> catalyst | `[Done]` H2/N2 ammonia, argon calcination, CO2 regeneration and ammonia/metal-salt impregnation variants exist. |
| P1 | Ceramics -> electronics/microwave | `[Done]` Electronic ceramic substrates and ferrite cores feed magnetron construction. |
| P1 | Nanomaterials -> catalyst/composite/quantum | `[Done]` Nano oxide carrier, nanotube composite and quantum-dot colloid bridges consume nanomaterial outputs. |
| P1 | Semiconductor -> quantum | `[Done]` Deposited wafers and packaged silicon chips feed quantum lithography, sensors and communications. |
| P1 | Optics -> laser/space/quantum | `[Done]` Laser crystals and coated optics feed laser cladding and radar/navigation; fiber feeds communications. |
| P1 | Surface engineering -> fusion | `[Done]` Fusion first-wall material is consumed by a DT target variant. |
| P1 | Powder metallurgy -> standard parts | `[Done]` Powder-metallurgy gears and bearings upgrade into standard precision parts. |
| P1 | Space ruins -> research tree | `[Done]` Artifact analysis maps planetary artifacts to stage 25-29 research data and refined material. |
| P1 | He-3 extraction -> helium fusion | `[Done]` Helium fusion accepts capsules, liquid helium-3, He3-D fuel and DT fuel. |
| P2 | Superconductor -> antimatter/endgame | `[Done]` Coils and liquid helium produce containment bottles, magnets and cables required by antimatter/singularity machines. |
| P2 | Sci-Fi structures -> cosmic machines | `[Done]` Megastructure outputs feed condensate, vacuum, cosmic-string and temporal cosmic-machine contracts. |
| P2 | Final outputs -> player choice | `[Done]` Cosmic Gate final-project contracts generate stable wormhole, warp drive core, barrier projector and reset device. |

## 10. Circular Economy And Recovery Loops

| Loop | Closed path | Benefit |
|---|---|---|
| Water loop | Raw water -> treatment -> process water -> wastewater collection -> neutralization -> reclamation -> filtered water | Prevents every chemical line from consuming raw water forever. |
| Metal loop | Scrap/waste metal -> crushing -> coarse ingot -> refining -> pure ingot -> standard parts -> worn/scrap return | Gives recycling a real place in standard industry and electrorefining. |
| Slag loop | Smelting/slag -> crushing -> mineral powder -> re-smelting or ceramic filler | Reduces ore loss and feeds construction ceramic. |
| Catalyst loop | Spent catalyst -> regeneration -> reuse; unrecoverable catalyst -> precious-metal recovery -> metal salts -> impregnation | Makes catalyst cost scale with operation instead of one-time crafting. |
| Nuclear loop | Spent fuel -> shear -> dissolve -> plutonium extraction -> MOX assembly -> reactor; residual -> vitrified waste | Gives breeder/MOX a justified late-game role. |
| Biomass loop | Crop residue/palm shell/wood residue -> biomass pulp/slurry -> biochemical feed; lignin -> char/syngas -> heat/FE; ash -> soil/mineral filler [Done] | Connects agriculture to early energy and carbon treatment. |
| Plastic/rubber loop | Rejects/offcuts -> grinding -> recycled pellet/reclaim rubber -> extrusion/compounding | Supports bulk infrastructure without infinite virgin feed. |
| Cooling loop | Steam condensate and refrigeration return -> cooling tower/heat exchanger -> treated-water return | Links steam, heat pump and water treatment. |
| Gas loop | Hydrogen/chlorine and process off-gas -> separation/scrubbing -> reuse or neutralization | Prevents chlor-alkali/petroleum gas from becoming dead-end outputs. |
| Endgame matter loop | Matter reconstruction waste particles + dimensional fragments -> entropy reducer/dimensional eroder -> selected high-purity feed [Done] | Keeps endgame factories from producing irrecoverable clutter. |

## 11. Recommended Full Playthrough

1. **Primitive workshop, stages 0-3.** Use the animal mill, grow early crops,
   make flour/hay feed, establish water or wind SU, then craft basic gears,
   plates, rods and the first casing.
2. **Mechanical settlement, stages 3-5.** Build standard fasteners, shafts,
   bearings, seals, wooden/metal fluid transport, primitive ceramic and a
   basic water-treatment train. Start sorghum, rubber, oil palm and fiber.
3. **Steam industrialization, stages 5-8.** Make boiler shell components from
   iron/copper/steel and refractory. Close the water -> steam -> turbine ->
   condensate loop. Produce fuel ethanol and lubricant.
4. **Electrical crossing, stages 9-12.** Convert mechanical work to stable FE,
   refine copper, make `copper_wire` and `basic_circuit`, then establish brine
   electrolysis, compressed air and gas processing.
5. **Chemical/material campus, stages 12-18.** Build petroleum, chlor-alkali,
   plastic, rubber, pulp, catalysts, powder metallurgy, surface treatment,
   ceramics and optical processing around treated water and industrial gases.
6. **Precision and compute, stages 16-22.** Build silicon semiconductor,
   microwave and nanomaterial routes. Use high-purity gases, coatings and
   ceramics to manufacture advanced control, sensor and compute components.
7. **Nuclear and cryogenic expansion, stages 17-24.** Close uranium/MOX fuel
   recycling, then make heavy water/deuterium/tritium and scale air
   fractionation. Obtain lunar resources and helium-3 through space systems.
8. **Superconducting and fusion era, stages 22-25.** Feed liquid helium and
   superconducting material into coils, magnetic rings and MHD generation;
   use those fields for fusion, quantum devices and high-energy containment.
9. **Endgame materials, stages 25-30.** Advance through endgame alloys,
   wireless/compute logistics, Sci-Fi structures 1-12, and unlock cosmic
   string, monopole, time-crystal and vacuum-energy branches.
10. **Physics rewriting, stage 30.** Complete structures 13-18 and connect
    their topology/negative-energy outputs to the selected final project:
    wormhole, warp drive, dimension barrier, or universe-reset device.

## 12. Implementation Checklist For The Follow-Up Recipe Pass

1. Add the P0 handoff recipes and formal item/fluid tags first.
2. Make every process module expose at least one upstream input and one
   downstream consumer in JEI/REI.
3. Require the stage-appropriate research advancement for every cross-system
   bridge recipe.
4. Add byproduct and waste output ports to the loops in section 10.
5. Add advancement criteria for the first successful handoff in each era:
   first treated water, first steam loop, first FE, first chlorine, first
   semiconductor, first fuel assembly, first coil, first spacetime anchor.
6. Update the in-game handbook with this same stage route and point each
   multiblock page at its upstream and downstream systems.

## 13. Smooth Integration Contract

Every completed handoff is defined in
`data/ultratech/industrial_links/*.json`. That generated contract records the
stage gate, research cost, batch duration, FE/t, logistics endpoints and any
unresolved registration. Fluids use the existing dynamic `ModFluids` path,
which creates source/flowing fluids, a liquid block, a bucket and Forge fluid
capability support. Solid materials use the existing stackable item and Forge
item-capability paths.

| Link | Gate | Representative batch | Time / FE/t | Logistics and feedback | Recovery outlet |
|---|---:|---|---|---|---|
| Biomass pulp | 12 | 2 residue + 250 mB water -> 2 pulp + 250 mB slurry | 180 t / 90 | Item pipe + fluid pipe; pulp-digester status icon | Slurry -> biochemical pretreatment |
| DT fuel | 24 | 100 mB D + 100 mB T -> 200 mB DT fuel | 240 t / 600 | Cryogenic pipe; fusion fuel mixer route card | Consumed in fusion target/reactor |
| Tree extract chemistry | 12 | 300 mB crude rosin -> 2 refined rosin | 300 t / 80 | Fluid pipe to refining and adhesive line | Terpene and coating routes |
| Tannin coagulation | 12 | 1 tannin + 250 mB raw water -> 250 mB coagulated water | 180 t / 110 | Item/fluid pipe to coagulation | Water treatment and reclamation |
| Palm biodiesel logistics | 10 | 100 mB biodiesel -> combustion fuel | 160 t / 80 | Fluid pipe to piston/turbo engine | Engine output stays on SU/FE grid |
| Rubber pressure seal | 12 | 1 compounded rubber -> 2 seals | 180 t / 100 | Item conduit to standard/fluid systems | Worn rubber -> reclaim route |
| Chlorine to PVC | 12 | 300 mB ethylene + 300 mB chlorine -> 500 mB VCM | 220 t / 36 | Chemical fluid pipe | VCM -> PVC processing |
| Caustic pulp/alumina | 13 | 2 chips + 250 mB caustic -> 2 pulp + 150 mB black liquor | 240 t / 110 | Corrosion-rated fluid pipe | Black liquor -> water + biochar recovery |
| Gas catalyst | 17 | 150 mB N2 + 450 mB H2 -> 300 mB ammonia | 260 t / 160 | Gas/fluid pipe to catalyst line | Spent catalyst -> regeneration/recovery |
| Ceramic electronics | 17 | Electronic ceramic + ferrite -> magnetron module | 280 t / 220 | Item conduit | Broken ceramic -> powder metallurgy filler |
| Nano specialty materials | 22 | Nano silica + alumina -> carrier green body | 320 t / 420 | Clean item/fluid route | Catalyst/composite/quantum consumption |
| Silicon quantum | 22 | Deposited wafer + resist -> quantum substrate | 360 t / 520 | Cleanroom item conduit | Reject wafers -> silicon recycle |
| Optics precision | 22 | Laser crystal + blank -> laser-clad component | 300 t / 360 | Precision item conduit | Coating rejects -> surface-material recycle |
| Fusion first wall | 24 | First-wall material + 200 mB DT -> 2 targets | 320 t / 520 | Cryogenic fluid pipe | Target is consumed by fusion |
| Powder precision parts | 15 | Powder gear + blank -> precision gear | 220 t / 180 | Item conduit | Scraps -> metal recovery |
| Ruins research | 29 | 10 lunar fragments -> 100 stage-25 research data | 600 t / 1,500 | Artifact analysis terminal | Refined artifact material remains reusable |
| Helium-3 fusion | 24 | 100 mB He-3 + 100 mB D -> 200 mB blend | 260 t / 600 | Cryogenic pipe | Consumed by helium fusion |
| Superconducting containment | 29 | 4 coils + 250 mB helium -> containment bottle | 360 t / 800 | Cryogenic pipe + item conduit | Coil scrap returns to material recovery |
| Sci-Fi to cosmic machines | 30 | 4 string fragments -> 1 cosmic string wire | 800 t / 60,000,000 total | Endgame bus + item conduit | Waste particles/fragments -> endgame recovery |
| Final cosmic projects | 30 | Nodes/topology/negative energy -> project core | 1,800 t / 1,000,000,000 total | Cosmic Gate route card | Final products are terminal sinks |

### 13.1 Required Player Feedback

- JEI exposes an **Industrial Links** category. Each route card keeps normal
  R/U navigation active for its item and fluid endpoints, while industrial
  loop recipes show their stage gate.
- The research terminal displays `Unlocking industrial link: ...` for the
  next stage-relevant handoff.
- Materials and buckets participating in up to two routes display their
  producer -> consumer relationship in the standard tooltip.
- Industrial-process machines with a registered link show a compact status
  icon: green means route online, amber means waiting for upstream material,
  and red means the output route is blocked. Details are provided on hover,
  avoiding status-text spam.

### 13.2 Error And Balance Policy

- Generated link JSON writes `missing_endpoints`. A non-empty list is an
  actionable registration request, including the required item/fluid ID and
  storage/transport implementation advice; missing endpoints are not silently
  treated as connected.
- Link stages are clamped to at least the highest source/destination stage.
  Research cost is recorded as the base cross-system cost and is surfaced by
  the terminal recommendation; no link may be presented before both systems.
- Recovery routes intentionally return less than their primary production
  routes. Black-liquor recovery returns 300 mB water from 500 mB input plus
  one biochar; endgame recovery consumes six waste units for one reusable
  crystal feed.

# UltraTech 32x32 Icon Redraw Batch Plan - 2026-07-09

## Goal

Redraw all UltraTech item/block icon-facing textures as 32x32 pixel art with a unified industrial style. Icons must visually match their registered name and creative-tab context instead of using generic placeholder color bars.

## Creative Tab Batches

1. UltraTech Materials
   - Metal wires, rods, plates, foils, gears, primitive industry, plant chains, mineral/oil intermediate items.
   - Visual rules: material color drives the metal; shape drives the silhouette.

2. UltraTech Ores
   - Raw ores, ingots, nuggets, dusts, ore blocks, oil sand/shale.
   - Visual rules: ore host controls stone base; metal controls ore flecks.

3. UltraTech Circuits
   - Wafers, photoresist, etching solution, CPU/GPU/logic/memory/controller parts.
   - Visual rules: green/teal circuit boards, silicon wafers, gold contacts, fine traces.

4. Compute Research
   - Research terminals, knowledge books/fragments, compute processor/storage, research data.
   - Visual rules: data chips, book/page silhouettes, blue compute accents.

5. Wireless Power
   - Identity card, portable charger, energy links, wireless terminals/receivers.
   - Visual rules: power arcs, antenna marks, charge plates, FE blue/cyan glow.

6. Power Cores
   - Motors, generators, engine cores, thermal/electric source parts.
   - Visual rules: radial cores, coils, rotors, heat or electric accents.

7. Transmission
   - Shafts, gearboxes, clutches, couplings, belts, torque components.
   - Visual rules: mechanical silhouettes are primary: shafts are diagonal rods, gears are ringed, belts are dark loops.

8. Space
   - Star charts, probes, relays, mining robots, assembly packages, planetary samples, space ores/surfaces.
   - Visual rules: dark aerospace casing, planet-specific colors, sample capsules, relay antennas.

9. Casings
   - Casings and structure frames.
   - Visual rules: framed panels with corner bolts; function shown by inner glyph/panel.

10. Electromagnetics
    - Coils, windings, magnetic cores.
    - Visual rules: copper/tier-colored coils around a dark core.

11. Mechanical Parts
    - Fasteners, seals, connectors.
    - Visual rules: bolts/screws/pins/seals retain distinct silhouettes.

12. Material Components
    - Common blocks, gears, plates, rods, wires.
    - Visual rules: consistent shape family with material palette.

13. Technical Components
    - Sensors, controllers, displays, actuators, safety and control devices.
    - Visual rules: compact electronics plus a small functional marker.

14. Fluid Systems
    - Buckets, fluid containers, fluid pipes, pumps, tanks.
    - Visual rules: fluid color is visible through glass/slot; container material forms the shell.

15. Conduits Storage
    - Conduits, storage boxes, tanks, creative tanks.
    - Visual rules: pipe/channel direction and tier color are obvious.

16. Chemical Intermediates
    - Powders, crystals, granules, pellets, chemical forms.
    - Visual rules: state/form controls silhouette; chemical family controls color.

17. Endgame Tech
    - Quantum, spacetime, cosmic, singularity, nihility, void materials.
    - Visual rules: dark industrial base with high-energy accents.

18. Endgame Equipment
    - Nihility armor/tools.
    - Visual rules: recognizable tool/armor silhouettes with purple-black energy accents.

19. Machines
    - Stage machines, industrial process machines, fluid tanks, storage blocks, steel construction blocks.
    - Visual rules: 32x32 block tiles use panels, vents, gauges, access doors, and status lights.

## Verification

- Every item/block PNG under `assets/ultratech/textures/item` and `assets/ultratech/textures/block` should be 32x32.
- `zh_cn.json` item/block/container labels should have no mojibake, no `?`, and no unexpected English remnants except accepted technical abbreviations.
- Run `gradlew build`.
- Run `gradlew runClient` and scan logs for missing model/texture/resource errors.

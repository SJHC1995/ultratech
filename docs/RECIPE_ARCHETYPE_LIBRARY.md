# UltraTech Recipe Archetype Library

This library is original UltraTech design material. It records recipe-family
contracts, not copied third-party recipes, identifiers, assets or text.

| Archetype | Stages | Batch contract | Required recovery outlet |
|---|---:|---|---|
| Raw material preparation | 1-4 | 1 raw unit -> 2 prepared units | Tailings to construction or crushing |
| Mineral beneficiation | 3-10 | 2 crushed + 250 mB water -> 2 concentrate + tailings | Ceramic filler or recovery |
| Metal smelting | 4-13 | 2 concentrate -> 2 metal + slag | Re-melt or refractory filler |
| Standard components | 4-15 | Plates + rods + fasteners -> 1-4 parts | Scrap re-melt |
| Steam cycle | 5-12 | Treated water + fuel -> steam + condensate | Condensate return |
| Biorefinery | 6-12 | Biomass + water -> fuel intermediate | Pulp, heat, soil, or char |
| Petrochemical cracking | 12-18 | 800 mB fraction -> 320-480 mB product + off-gas | Scrubbing or generation |
| Chlor-alkali polymer | 12-18 | 300 mB + 300 mB -> 500 mB monomer | Polymer regrind or neutralization |
| Industrial gas synthesis | 14-20 | 150 mB N2 + 450 mB H2 -> 300 mB ammonia | Catalyst regeneration |
| Precision materials | 15-22 | 2 high-purity feeds + substrate -> component | Reject recovery |
| Cryogenic superconducting | 20-29 | 4 coils + 250 mB liquid helium -> field part | Coil and cryogen recovery |
| Nuclear fuel cycle | 20-25 | Enrichment chain -> fuel assembly | MOX or vitrified waste |
| Multiblock startup | 21-30 | Structure parts + first charge -> infrastructure | Maintenance recovery |
| Endgame materials | 26-30 | Large batch -> scarce terminal material | Exotic waste recovery |
| Circular recovery | 4-30 | Secondary route returns less than primary route | Explicit next outlet |

`RecipeArchetype` classifies every generated or authored UltraTech recipe in
the manifest. `IndustrialRoute` ties the family to a visible player route,
alternative source, recovery outlet, JEI category and machine status icon.

The DataGen output is:

- `data/ultratech/progression_audit/recipe_archetype_coverage.json`
- `data/ultratech/industrial_routes/*.json`

Run `scripts/verify-recipe-archetypes.ps1` after DataGen. A specialist
archetype with zero classified recipes is a release blocker; advisory findings
must be resolved before the corresponding milestone is accepted.

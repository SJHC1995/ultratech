# UltraTech Progression Quality Contract

## Design Intent

UltraTech remains a long-form industrial mod. Its duration must come from
factory design, batch scaling, energy infrastructure, logistics and recovery
decisions, never from missing recipe sources or contradictory descriptions.

External progression research informed the following original rules only:

- A new age must unlock a visible capability, not only a more expensive item.
- Long processing is valid when it enables planning, automation or a new
  infrastructure decision.
- Every byproduct needs a recovery, reuse, generation, construction or
  disposal endpoint.
- Recipe viewers, tooltips, research dossiers and machine behavior must agree.

No third-party recipes, task text, textures or other resource files are copied
into UltraTech.

## Automated Contract

`ProgressionAudit` validates the code-driven research graph and industrial
integration contract during data generation and when a server starts. The
runtime pass also compares the generated recipe manifest with the active
`RecipeManager`.

Hard failures:

- Missing or later-stage research prerequisites.
- Dependency cycles.
- Missing stage-machine research coverage.
- Invalid or overlapping milestone bands.
- Invalid link stage order, time, energy or endpoint structure.
- Player research SavedData round-trip failure.
- Stage balance coverage or a total progression budget other than 700 hours.
- Missing runtime recipes or serializer drift after a server resource reload.

Advisory risks:

- `missing_source`
- `dead_byproduct`
- `ratio_outlier`
- `quest_text_mismatch`
- `jei_hidden`
- `restart_state_risk`
- `exploit_loop`
- `runtime_recipe_missing`
- `jei_coverage_gap`
- `migration_risk`
- `stage_budget_outlier`
- `manual_route_blocker`

Generated report:

`data/ultratech/progression_audit/report.json`

`data/ultratech/progression_audit/recipe_manifest.json`

Validation commands:

```powershell
.\gradlew.bat runData --no-daemon
.\scripts\verify-progression-audit.ps1
.\scripts\verify-recipe-manifest.ps1
.\scripts\verify-language-keys.ps1
.\scripts\verify-industrial-assets.ps1
```

The finalized research-terminal panels are protected assets. The asset
validation step checks their presence and PNG integrity but never regenerates
or replaces them.

Use `/utaudit` in an operator acceptance world to execute the same audit
against that world's live server resources.

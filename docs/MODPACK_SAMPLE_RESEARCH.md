# UltraTech Modpack Sample Research

UltraTech studies public expert-pack structure to improve traceability,
industrial pacing, recovery loops and failure handling. It never imports
third-party recipes, task text, localization, textures, models, sounds, jars
or scripts.

## 100-pack benchmark

The versioned catalog is `scripts/modpack-study-catalog.ps1`. It contains
exactly 100 distinct samples and the following fixed coverage:

| Category | Samples | Primary use |
| --- | ---: | --- |
| GregTech / long-form technology | 35 | Stage gates, factory scaling, multiblock escalation |
| Factory automation | 20 | Throughput, logistics, buffering, recovery |
| Expert cross-mod progression | 15 | Convergence gates and player guidance |
| Hard survival | 10 | Recoverable environmental pressure |
| Sky / constrained resources | 10 | Renewable loops and sink safety |
| Space / endgame | 10 | Infrastructure-backed exploration and terminal systems |

Each catalog record has a public source, evidence grade, study lens, original
six-field summary, and explicit UltraTech stage/archetype/route/milestone
mapping. `profiled_from_public_metadata` means the record is a safe
preliminary study profile, not a copied recipe audit. A later sparse-source
pass can raise evidence without importing third-party content.

## Collection Rules

- The registry and any sparse clones live in a local external research
  directory outside the repository.
- `scripts/collect-modpack-samples.ps1` materializes the 100-profile external
  registry first.
- `-FetchPublicSources` performs sparse Git clones only for verified public
  sources and limits checkout to configuration, scripts, quests, changelogs
  and documentation.
- `scripts/archive-modpack-samples.ps1` keeps user-supplied and public-source
  ZIP archives in a local external archive directory with a SHA-256 registry.
  Archives are never extracted into or committed to the UltraTech repository.
- Asset and mod directories are intentionally excluded. A catalog record may
  never be `pending`: every sample must have a public HTTPS source, evidence
  grade, original profile, and UltraTech mapping.

## Original Evidence Fields

Every summary uses only these original fields:

- `progression_pattern`: how capability gates are arranged.
- `recipe_pattern`: shape of an industrial process, without copied values.
- `ux_pattern`: how the player discovers the next source or consumer.
- `failure_pattern`: public maintenance risk translated into an UltraTech test.
- `adopted_rule`: an original UltraTech rule added to a recipe archetype.
- `rejected_rule`: a pattern deliberately excluded because it causes hidden
  prerequisites, repeated hand crafting, dead outputs or inaccessible data.

## Current Adoption

The sample program feeds the original `RecipeArchetype` and `IndustrialRoute`
catalogs. It does not alter gameplay directly. Gameplay changes are admitted
only after the normal source, JEI, recovery, stage-budget, migration and
manual-world checks pass.

The current study expansion also covers storage and automation topology:
separate material/fluid/energy/compute domains, explicit endpoint capacity,
full-batch dispatch, verified returns, local recovery buffering, and optional
compatibility boundaries. These are converted only into original UltraTech
contracts; sample archive content is not reused.

## Validation and use

```powershell
.\scripts\verify-modpack-study-catalog.ps1
.\scripts\collect-modpack-samples.ps1
.\scripts\verify-modpack-study-catalog.ps1 -RequireExternalRegistry
```

The benchmark preserves UltraTech's 700-hour, 30-stage, six-milestone budget.
It creates a ranked idea backlog; it does not change game balance until a
candidate passes the normal source, JEI, recovery, stage-budget, migration,
DataGen, and manual-world gates.

## User-authorized full archive study

`scripts/collect-full-modpack-archives.ps1` keeps downloadable `.mrpack` /
`.zip` archives and aggregate-only structural analysis in a local external
research directory. It never writes those archives, extracted content, or
foreign recipe data into UltraTech.

- Modrinth archives are downloaded from the published release API.
- Public GitHub configuration packs are archived from the already collected
  sparse source checkout and are labelled as source archives, not game exports.
- MCMod is used only to discover public GitHub or Modrinth release links. It
  is never used to follow cloud-disk, CurseForge, or other third-party mirrors.

# UltraTech 100-pack Benchmark and Reproducible Workbench

*2026-07-21 · Original design research and development baseline*

## Non-negotiable baseline

- Minecraft 1.20.1, Forge 47.4.4, Java 17 at `C:\Java17`, and Parchment
  2023.06.26-1.20.1.
- Preserve the 700-hour, 30-stage, six-milestone progression budget.
- Study external packs only for original design patterns. Do not copy recipes,
  task prose, assets, scripts, localization, IDs, or numeric values.

The 100-sample catalog is deliberately stratified: 35 GregTech/long-form
packs, 20 factory packs, 15 expert cross-mod packs, 10 hard-survival packs,
10 constrained-resource packs, and 10 space/endgame packs. Its machine-readable
source is `scripts/modpack-study-catalog.ps1`; external metadata and optional
sparse source checkouts stay in a local external research directory.
The initial execution stores 13 pinned public-source revisions and 87
distribution-metadata profiles. The latter are deliberately preliminary:
they guide sampling coverage but are not treated as recipe-level evidence.

The expert cross-mod stratum includes the user-supplied MCMod reference
`StellarLightTech` (`mcmod.cn/modpack/1347.html`). Its page is used for
high-level progression research only; the linked cloud-disk archive is outside
the approved MCMod/GitHub/Modrinth source boundary and is not downloaded.

## Baseline findings translated into UltraTech rules

| Signal | UltraTech rule |
| --- | --- |
| Long stages feel earned when a facility removes an identifiable old bottleneck. | Every three-stage core facility gets a generated next-objective card: old bottleneck, first-start inputs, continuous constraints, outputs, recovery exit. |
| Recipe depth is valuable when it creates a batch, logistics, recovery, or parallelization decision. | Reject recipe layers that only repeat hand crafting; retain layers tied to an `IndustrialRoute` and automation threshold. |
| A difficult pack remains readable when the first missing requirement is visible. | Research terminal, scanner, and compute broadcaster must report the same current target, cache, supplied FloPS, and blocking reason. |
| Resource pressure must have a renewable or recovery answer. | Extend route audits and machine states with missing input, energy, output full, flow break, and instability recovery guidance. |
| Late-game systems work when mature infrastructure remains relevant. | Space and terminal systems retain power, cooling, logistics, research, maintenance, and return-path obligations. |

## Ranked original Idea backlog

### P0 — player direction

1. Generate the core-facility next-objective card from existing
   `IndustrialRoute`, `RecipeArchetype`, and research data.
2. Add one shared player-facing research-status model for research terminals,
   scanner terminals, and compute broadcasters.
3. Present a direct recovery action for each machine block state: no input,
   no energy, output full, disconnected flow, and unstable process.

### P1 — recipe and factory readability

1. Require every new specialist recipe family to name its batch boundary,
   first automation point, primary consumer, and recovery outlet.
2. Add a route-audit warning when a recipe family has no visible first
   consumer or no displayed recovery endpoint.
3. Make replacement facilities explicitly state the prior capacity, pressure,
   cooling, purity, or logistics constraint that they remove.

### P2 — endgame continuity

1. Add launch-to-return route cards for space infrastructure.
2. Audit terminal construction against mature power, cooling, compute, and
   recovery requirements rather than only a final crafting cost.
3. Add milestone acceptance worlds for one constrained-resource loop and one
   recovery-loop restart scenario.

No P0/P1/P2 item changes gameplay automatically. It becomes implementation
work only after its stage, research gate, source, consumer, energy/FloPS
boundary, recovery exit, migration impact, and manual acceptance scenario are
defined.

## Workbench routine

1. Run `scripts/check-forge-env.ps1` from the installed UltraTech skill.
2. Run `.\scripts\verify-dev-workstation.ps1`; inspect Git status and sparse
   checkout before judging missing resources.
3. For research work, validate the catalog and materialize only the external
   study registry. For gameplay work, inspect neighboring code and existing
   DataGen before editing.
4. Run `runData` for recipe/resource/DataGen changes; run `build` for source
   changes; run `runClient` for GUI, machine, research, or client behavior.
5. Record changed files, command exit codes, runtime evidence, and residual
   risk in the task result.

Local agent configuration, IDE metadata, and `runclient-*.log` are
workstation-only artifacts. They are excluded through `.git/info/exclude`,
not committed to GitHub or Gitee.

## 256-archive public sampling completion

On 2026-07-21, the external study set reached 256 valid local archives. The
aggregate-only structural report is kept outside the repository in the local
external research directory. It contains hashes and archive-level structure
only; it does not extract,
reproduce, or import third-party gameplay content.

| Structural result | Count |
| --- | ---: |
| Valid archives | 256 / 256 |
| MRPACK / ZIP | 242 / 14 |
| Archive bytes | 12,101,790,651 |
| ZIP entries | 216,393 |
| Modrinth manifest file references | 37,623 |
| Archives containing configs | 230 |
| Archives containing automation-script directories | 88 |
| Archives containing quest-data directories | 53 |
| Archives containing override/resource-pack directories | 243 |

The sample set combines 219 public Modrinth distribution archives with 37
pre-existing external samples. Archive structure is evidence of packaging and
factory-support patterns only, not evidence to copy a recipe, task, script,
asset, localization string, identifier, or balance number.

## Post-sampling implementation plan

### P0 — restore legibility before adding more content

1. **Client font loading:** audit the existing client resource path and font
   registration, fix only the missing loading/binding link, then verify in
   `runClient`.
2. **One research state:** make the research desk, blank knowledge book,
   learned knowledge book, scanner terminal, and research terminal read and
   write one server-authoritative research record. The book must retain the
   specific research key, right-click learning must be idempotent, and scanner
   extraction must add visible partial progress rather than bypass a gate.
3. **Recovery feedback:** expose the same blocking reason and next action in
   the research desk, scanner terminal, research terminal, and factory
   recovery UI. This is the first implementation candidate supported by both
   the research baseline and the archive structure's prevalence of
   configuration/automation support.

Acceptance: a player can research at the desk, write one blank book, learn it
once by right-clicking, scan it into terminal progress, and recover from a
missing book, missing power/FloPS, full output, or already-learned state without
data loss.

### P1 — factory progression contracts

1. Add a generated next-objective card for each core industrial route with its
   old bottleneck, first automation input, continuous energy/FloPS constraint,
   first consumer, and recovery exit.
2. Extend the recipe/route audit so new specialist families declare batch
   boundary, automation transition, consumer, and by-product/recovery outlet.
3. Add progress-state tests for paused and resumed research/industrial work:
   missing input, missing energy, missing FloPS, disconnected logistics, and
   full output.

Acceptance: an audit can reject a route with no consumer or recovery outlet,
and each paused state has a player-visible reason plus a non-destructive resume
path.

### P2 — milestone and endgame continuity

1. Add milestone acceptance scenarios for constrained-resource bootstrap,
   batch/parallel expansion, and a recovery-loop restart.
2. Keep space/endgame gates coupled to mature power, cooling, logistics, and
   research compute rather than only one final craft.
3. Re-run the 30-stage/700-hour audit after each approved P1/P2 change; do not
   change the baseline time budget merely because the sample pool is larger.

Acceptance: all six milestones retain an explicit recovery exit and the
existing 700-hour/30-stage baseline remains intact unless a separately approved
balance change supplies evidence and migration notes.

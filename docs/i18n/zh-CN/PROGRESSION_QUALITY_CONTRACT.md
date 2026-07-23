<!-- ultratech-i18n: {"source":"docs/PROGRESSION_QUALITY_CONTRACT.md","sourceSha256":"46f1e81a602a17c264370b73062d62366bceb1345b73fa54477597a67a47e409","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:21:41.005Z","model":"manual-review"} -->

# UltraTech 进度质量契约

## 设计意图

UltraTech 始终是一款长流程工业模组。它的时长必须来自工厂设计、批量
扩张、能源基础设施、物流和回收决策，而绝不能来自配方来源缺失或彼此
矛盾的说明。

外部进度研究只用于形成以下原创规则：

- 新时代必须解锁一项可见能力，而不只是更昂贵的物品。
- 只有当长时间加工带来规划、自动化或新的基础设施决策时，它才是合理的。
- 每种副产物都必须有回收、再利用、发电、建造或处置的终点。
- 配方查看器、提示文本、研究档案与机器行为必须一致。

UltraTech 不复制任何第三方配方、任务文本、贴图或其他资源文件。

## 自动化契约

`ProgressionAudit` 会在数据生成和服务器启动时验证代码驱动的研究图与
工业集成契约。运行时检查还会把生成的配方 manifest 与当前
`RecipeManager` 进行比对。

硬失败：

- 缺少研究前置，或前置研究位于更晚阶段。
- 依赖循环。
- 阶段机器的研究覆盖缺失。
- 里程碑区间无效或相互重叠。
- 链路的阶段顺序、时间、能量或终点结构无效。
- 玩家研究 `SavedData` 往返保存失败。
- 阶段平衡覆盖缺失，或总进度预算不是 700 小时。
- 服务器资源重载后缺少运行时配方，或序列化器发生漂移。

顾问级风险：

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

生成报告：

`data/ultratech/progression_audit/report.json`

`data/ultratech/progression_audit/recipe_manifest.json`

验证命令：

```powershell
.\gradlew.bat runData --no-daemon
.\scripts\verify-progression-audit.ps1
.\scripts\verify-recipe-manifest.ps1
.\scripts\verify-language-keys.ps1
.\scripts\verify-industrial-assets.ps1
```

最终版研究终端面板属于受保护资产。资产验证步骤会检查它们是否存在、
PNG 是否完整，但绝不会重新生成或替换它们。

在管理员验收世界中使用 `/utaudit`，即可针对该世界实时的服务器资源
执行同一套审计。

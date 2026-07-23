<!-- ultratech-i18n: {"source":"docs/PROGRESSION_QUALITY_CONTRACT.md","sourceSha256":"46f1e81a602a17c264370b73062d62366bceb1345b73fa54477597a67a47e409","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:21:41.005Z","model":"auto"} -->

# 超技术进步质量合同

## 设计意向

UltraTech仍然是一种长式工业模式. 其持续时间必须来自
工厂设计、分批规模、能源基础设施、物流和回收
永远不要从缺少食谱来源或自相矛盾的描述中获取。

外部进展研究仅说明以下原始规则:

- 新时代必须释放出可见的能力,而不仅仅是更昂贵的物品.
- 长处理在允许规划、自动化或新建时有效
  基础设施决定。
- 每个副产品都需要回收、再利用、生成、建造或
  处置结束点。
- 食谱取景者,工具提示,研究档案和机器行为必须达成一致.

没有复制第三方食谱、任务文本、纹理或其他资源文件
进入超技术。

## 自动化合同

`ProgressionAudit` 验证由密码驱动的研究图表和工业图
数据生成和服务器启动时的集成合同。 这个
运行时间通过还比较了生成的食谱表和活性
`RecipeManager`。 。 。 。

硬失败 :

- 缺少或后期研究的先决条件。
- 依赖周期。
- 缺少舞台机器研究的覆盖面。
- 无效或重叠的里程碑带 。
- 无效的链接阶段顺序,时间,能量或端点结构.
- 玩家研究 SavedData 圆通故障.
- 阶段平衡覆盖或700小时以外的总进步预算。
- 服务器资源重新装入后, 丢失了运行时间配方或序列器漂移 。

咨询风险:

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

生成的报告 :

`data/ultratech/progression_audit/report.json`

`data/ultratech/progression_audit/recipe_manifest.json`

验证命令 :

```powershell
.\gradlew.bat runData --no-daemon
.\scripts\verify-progression-audit.ps1
.\scripts\verify-recipe-manifest.ps1
.\scripts\verify-language-keys.ps1
.\scripts\verify-industrial-assets.ps1
```

最终确定的研究-死板是受保护的资产。 资产
验证步骤检查他们的存在和PNG的完整性,但永远不会再生
或者替换它们。

使用 `/utaudit` 在一个运营商接受世界执行同样的审计
对抗世界的服务器资源。


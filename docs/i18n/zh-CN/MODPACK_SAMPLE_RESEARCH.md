<!-- ultratech-i18n: {"source":"docs/MODPACK_SAMPLE_RESEARCH.md","sourceSha256":"22958b5945b56df84b1bdf5aa1cb8c578819c34ffaab0250abd66f615938c18d","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:21:26.035Z","model":"manual-review"} -->

# UltraTech 整合包样本研究

UltraTech 研究公开专家整合包的结构，以改善可追溯性、工业节奏、回收
循环与故障处理。它绝不导入第三方配方、任务文本、本地化、贴图、模型、
声音、JAR 或脚本。

## 100 包基准

版本化目录为 `scripts/modpack-study-catalog.ps1`。其中恰好包含 100 个
不同样本，并采用以下固定覆盖范围：

| 类别 | 样本数 | 主要用途 |
| --- | ---: | --- |
| GregTech / 长流程科技 | 35 | 阶段门槛、工厂扩张、多方块升级 |
| 工厂自动化 | 20 | 吞吐量、物流、缓冲与回收 |
| 专家向跨模组进度 | 15 | 汇合门槛与玩家引导 |
| 硬核生存 | 10 | 可恢复的环境压力 |
| 空岛 / 受限资源 | 10 | 可再生循环与消耗出口安全性 |
| 太空 / 终局 | 10 | 由基础设施支撑的探索与终端系统 |

每条目录记录均包含公开来源、证据等级、研究视角、原创六字段摘要，以及
明确的 UltraTech 阶段/原型/路线/里程碑映射。
`profiled_from_public_metadata` 表示该记录只是安全的初步研究档案，
而非复制的配方审计。后续稀疏来源检查可以提高证据等级，但不会导入
第三方内容。

## 收集规则

- 注册表和任何稀疏克隆均放在仓库外的本地外部研究目录。
- `scripts/collect-modpack-samples.ps1` 会先实体化这份包含 100 个档案的
  外部注册表。
- `-FetchPublicSources` 仅对已验证的公开来源执行稀疏 Git 克隆，并将
  checkout 限制在配置、脚本、任务、更改日志和文档。
- `scripts/archive-modpack-samples.ps1` 将用户提供和公开来源的 ZIP 存档
  保存在本地外部存档目录，并维护 SHA-256 注册表。存档绝不解压进
  UltraTech 仓库，也绝不提交到仓库。
- 资产目录与模组目录被有意排除。目录记录不得为 `pending`：每个样本
  都必须具备公开 HTTPS 来源、证据等级、原创档案与 UltraTech 映射。

## 原创证据字段

每份摘要只使用以下原创字段：

- `progression_pattern`：能力门槛如何安排。
- `recipe_pattern`：工业过程的形态，不复制具体数值。
- `ux_pattern`：玩家如何发现下一个来源或消费者。
- `failure_pattern`：将公开维护风险转化为 UltraTech 测试。
- `adopted_rule`：加入某个配方原型的原创 UltraTech 规则。
- `rejected_rule`：因会造成隐藏前置、重复手搓、死产物或无法访问的数据
  而被明确排除的模式。

## 当前采纳情况

样本计划为原创的 `RecipeArchetype` 与 `IndustrialRoute` 目录提供输入，
但不会直接改变游戏玩法。只有在通过常规来源、JEI、回收、阶段预算、
迁移和手动世界检查后，玩法改动才会被接受。

当前研究扩展还覆盖存储与自动化拓扑：分离的物料/流体/能量/算力域，
明确的端点容量、整批调度、已验证的回流、本地回收缓冲与可选兼容边界。
这些内容只会转化为 UltraTech 的原创契约；样本存档内容不会被复用。

## 验证与使用

```powershell
.\scripts\verify-modpack-study-catalog.ps1
.\scripts\collect-modpack-samples.ps1
.\scripts\verify-modpack-study-catalog.ps1 -RequireExternalRegistry
```

该基准保持 UltraTech 的 700 小时、30 阶段、六里程碑预算。它会形成按
优先级排序的创意待办，而不会改变游戏平衡；候选项必须先通过常规来源、
JEI、回收、阶段预算、迁移、DataGen 和手动世界门槛。

## 用户授权的完整存档研究

`scripts/collect-full-modpack-archives.ps1` 将可下载的 `.mrpack` / `.zip`
存档和仅汇总的结构分析保存在本地外部研究目录。它绝不会把这些存档、
解压内容或外来配方数据写入 UltraTech。

- Modrinth 存档从已发布版本的 API 下载。
- 公开 GitHub 配置包从已收集的稀疏源码 checkout 归档，并标记为源码
  存档，而不是游戏导出包。
- MCMod 只用于发现公开的 GitHub 或 Modrinth 发布链接；绝不用来跟踪
  网盘、CurseForge 或其他第三方镜像。

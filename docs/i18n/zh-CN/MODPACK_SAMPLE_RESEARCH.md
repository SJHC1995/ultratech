<!-- ultratech-i18n: {"source":"docs/MODPACK_SAMPLE_RESEARCH.md","sourceSha256":"22958b5945b56df84b1bdf5aa1cb8c578819c34ffaab0250abd66f615938c18d","sourceLanguage":"en","targetLanguage":"zh-CN","generatedAt":"2026-07-23T11:21:26.035Z","model":"auto"} -->

# UltraTech Modpack 样本研究

UltraTech研究公共专家组合结构以改善可追踪性,
工业间距,回收回路和故障处理. 它从不进口
第三方食谱、任务文本、本地化、纹理、模型、声音、罐子
或脚本。

## 100个一揽子基准

版本目录是 `scripts/modpack-study-catalog.ps1`它包含
准确的100个不同的样本和以下固定覆盖范围:

| 类别 | 样本 | 主要用途 |
| --- | ---: | --- |
| GregTech/长式技术 | 35个 | 舞台大门、工厂规模、多块升级 |
| 工厂自动化 | 20国 | 吞吐量、后勤、缓冲、回收 |
| 专家跨模式进展 | 15个 | 趋同门和玩家指导 |
| 艰难的生存 | 10个 | 可恢复的环境压力 |
| 天空/受限资源 | 10个 | 可再生循环和汇安全 |
| 空格/ 结束游戏 | 10个 | 基础设施支持的勘探和终端系统 |

每个目录记录都有公开来源,证据等级,研究镜头,原创
6-场摘要,并明确UltraTech阶段/ Archetype/路由/里程碑
测绘. `profiled_from_public_metadata` 说明记录是保险箱
初步研究简介,不是复制的食谱审计. 后来稀有来源
通行证可以不进口第三方内容而提出证据。

## 收集规则

- 登记册和任何稀少的克隆人都生活在当地外部研究中
  目录位于仓库外。
- `scripts/collect-modpack-samples.ps1` 实现了 100 外观
  登记第一。
- `-FetchPublicSources` 执行稀疏 仅用于已核实的公开的 Git 克隆
  源和限制检查到配置、脚本、任务、更改日志
  和文献资料。
- `scripts/archive-modpack-samples.ps1` 保持用户提供和公共来源
  ZIP档案在一个具有SHA-256注册的本地外部档案目录中.
  档案从不被取入或投入到UltraTech仓库。
- 资产和模式目录被故意排除在外。 目录记录可能
  永远不会 `pending`:每个样本必须有一个公开的HTTPS来源,证据
  等级,原始剖面图,和UltraTech映射.

## 原始证据字段

每个摘要只使用这些原始字段:

- `progression_pattern`:如何安排能力门.
- `recipe_pattern`:工业过程的形状,不复制值.
- `ux_pattern`:玩家如何发现下一个来源或消费者.
- `failure_pattern`:公共维护风险被译为UltraTech测试.
- `adopted_rule`: 原"UltraTech"规则被添加到"食谱原型"中.
- `rejected_rule`: 故意排除的图案,因为它会导致隐藏
  先决条件、反复手工制作、产出死亡或无法获取的数据。

## 当前收养

样本程序输入原始 `RecipeArchetype` 财务报告和审定财务报表 `IndustrialRoute`
目录. 它不会直接改变游戏游戏。 游戏更改被接受
只有在正常来源、JEI、恢复、阶段预算、迁移和
手动世界检查通行证。

目前的研究扩展还包括储存和自动化地形:
独立的材料/流体/能/计算域、明确的终点能力,
完整批次发送、核实返回、局部恢复缓冲和可选
兼容边界。 这些只转换成原始的UltraTech
合同; 样本存档内容不重复使用。

## 审定和使用

```powershell
.\scripts\verify-modpack-study-catalog.ps1
.\scripts\collect-modpack-samples.ps1
.\scripts\verify-modpack-study-catalog.ps1 -RequireExternalRegistry
```

该基准保留了UltraTech的700小时,30个阶段,6英里长的预算.
它会创建一个排序的想法积压; 它不会改变游戏平衡, 直到
考生通过正常来源,JEI,恢复,阶段预算,迁移,
DataGen 和手动世界大门

## 用户授权的完整档案研究

`scripts/collect-full-modpack-archives.ps1` 可下载 `.mrpack` 编号 :
`.zip` 本地外部的档案和只进行综合结构分析
研究目录. 它从来不写那些档案, 提取的内容,或
外国食谱数据进入"超技术".

- Modrinth档案从已出版的发行版API下载.
- 公共 GitHub 配置包从已收集的文件夹中存档
  稀有的源检出并被贴上源档案的标签,而不是游戏输出.
- MCMod只用于发现公开的GitHub或Modrinth放出链接. 这个
  从未用于跟踪云盘、CurseForge或其他第三方镜像。


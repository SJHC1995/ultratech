# 2026-07-24：融合组装基础设施与扩展客户端联调

## 今日更新

本次将 Extended Crafting 与 Mystical Agriculture 的兼容内容整理为独立、数据驱动的融合家族：共 **512** 种 UltraTech 物品，且不与既有科技融合、科魔融合物品互相作为配方输入。目录由 DataGen 自动生成，覆盖：

| 分类 | 数量 |
| --- | ---: |
| 精华 / 作物融合材料 | 140 |
| 奇点 / 终局融合材料 | 110 |
| 大工作台组件 | 100 |
| 跨模组工艺链材料 | 80 |
| 融合机器 / 设备模块 | 50 |
| 融合消耗品 / 催化剂 | 32 |

完整条目、研究映射、外部输入结构和合成设施见：[Extended Crafting × Mystical Agriculture 融合目录](./ULTRATECH_EXTENDED_AGRICULTURE_FUSION_CATALOG.md)。

## 组装基础设施

- L2–L5：4×4 至 7×7 的受控大工作台；
- L6：8×8 融合组装平台；
- L7：9×9 融合组装平台；
- L8：UltraTech 10×10 创世组装平台。Extended Crafting 原生 1.20.1 工作台止于 9×9，L8 由 UltraTech 自己实现，不假定外部模组存在未证实 API；
- 精密组装线：5×3×5，阶段 19 起承担高密度终局批次；
- 工业装配机：7×5×7，阶段 25 起承担创世级和巨构控制器批次。

控制器在放置时绑定研究所有者；运行时同时检查阶段与对应研究档案，管道自动供料不能绕过研究门槛。

## 客户端扩展联调

已在本地 Forge 1.20.1 客户端目录安装下列兼容目标及其必要库：

- Extended Crafting、Mystical Agriculture、Cucumber；
- Mekanism、Thermal Expansion / Foundation / CoFH Core、PneumaticCraft: Repressurized、Ender IO；
- Re:Avaritia、Avaritia: Integration；
- Botania、Blood Magic、Draconic Evolution / Brandon's Core / CodeChicken Lib；
- 星辉社区版（由公开 1.20.1 Forge 源码构建）；
- Curios、Patchouli、GuideME 等依赖。

其中 Avaritia: Integration 与星辉社区版均从公开源码在本机完成构建后放入客户端目录；安装清单和 SHA-512 校验保存在本地 `run/mods/ultratech-extension-manifest.json`，该文件不提交到仓库。

> 注意：UltraTech 的 Gradle `runClient` 使用 Parchment userdev 重映射环境；部分第三方混入（Mixin）在该开发运行时会因映射重写失败，而不代表其在标准 Forge 启动器实例中必然失效。AE2 目前保留在本地禁用候选中，不作为此次融合工作台的前置依赖；后续将以标准启动器实例单独验证 AE2。

## 验证

- `runData --no-daemon`：通过；
- `build --no-daemon`：通过；
- `verify-extended-agriculture-fusion.ps1`：512 项、六类配额、研究映射、条件配方和 L2–L8 / 两种多方块资源均通过；
- 研究树、进度、配方原型和配方清单审计：通过。

本轮不改变 30 阶段、6 里程碑和 700 小时基线。

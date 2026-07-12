# UltraTech 2026-07-06 开发规划与验收记录

## 今日目标

- 重画斯特林发动机贴图，使其符合斯特林发动机原理特征，并保持 UltraTech 工业风格。
- 给 UltraTech 生成更精致的 logo，并接入 Forge 模组详情页顶部显示。
- 生成更像海报的宣传图，并更新 Gitee Pages 风格首页 `docs/index.html`。
- 继续保持蒸汽动力链表达清晰：锅炉产蒸汽，汽轮机输出 SU。

## 已完成

### 斯特林发动机贴图

- 文件：`src/main/resources/assets/ultratech/textures/block/stirling_engine.png`
- 分辨率：64x64
- 视觉结构：
  - 红铜色热端火帽和火箱。
  - 蓝白色冷端散热鳍片。
  - 中部回热管和传热通道。
  - 活塞连杆、曲柄和飞轮。
  - 深色钢制机架、铆钉、仪表和底座。

### 蒸汽轮机分级表达

- 原 `steam_turbine` 明确为 L3 蒸汽轮机。
- L1/L2 汽轮机不再通过 active/idle 两套明显不同贴图切换外观。
- 工作状态只保留运行粒子和轻微火光，避免方块贴图跳变。

### UltraTech 品牌资源

- 新增模组 logo：
  - `src/main/resources/ultratech_logo.png`
  - `docs/assets/ultratech_logo.png`
- 已在 `src/main/resources/META-INF/mods.toml` 中配置：
  - `logoFile="ultratech_logo.png"`

### 宣传海报

- 新增基础生成图：
  - `docs/assets/ultratech_promo_base.png`
- 新增最终海报：
  - `docs/assets/ultratech_promo.png`
- 海报风格：深空工业基地、蒸汽机械、SU 动力链、研究终端、发射塔、轨道卫星和远景星球。
- 文案和 logo 由本地绘制叠加，避免生成图出现错字、乱码或错误品牌。

### 博客式规划页

- 重写 `docs/index.html` 为干净 UTF-8。
- 首页使用宣传海报作为第一屏背景，顶部展示 UltraTech logo。
- 同步今日开发记录、视觉成果、下一步计划和验证命令。

## 当前验收重点

| 优先级 | 项目 | 验收标准 |
|---|---|---|
| P0 | 模组详情页 logo | `runClient` 后打开模组详情，UltraTech logo 出现在顶部且不压住文字 |
| P0 | 斯特林贴图 | 创造栏和放置后都能看到热端、冷端、回热管、飞轮特征 |
| P0 | 蒸汽动力链 | 锅炉只产蒸汽，汽轮机才输出 SU |
| P1 | 斯特林机制 | 后续接入温差、飞轮惯性和真实 SU 输出曲线 |
| P1 | TOP/JEI | 后续补齐蒸汽、温度、压力、维护、SU 输出提示 |

## 后续计划

1. 进游戏检查模组详情页 logo 比例。
2. 进游戏检查斯特林发动机与 L3 蒸汽轮机贴图。
3. 实测低压锅炉 -> L1 汽轮机 -> 动力输出轴 -> SU 管道。
4. 实测高压锅炉 -> L2 汽轮机 -> 动力输出轴 -> SU 管道。
5. 为斯特林发动机补真实温差动力逻辑。
6. 为蒸汽链机器补 TOP/JEI 状态说明。

## 验证命令

```powershell
.\gradlew.bat runData
.\gradlew.bat build
.\gradlew.bat runClient
```

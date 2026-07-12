# UltraTech 全量贴图重构计划（2026-07-09）

## 目标

全量重构 UltraTech 的物品与方块贴图，统一为精致工业风，并保持 32x32 像素规格。重构范围覆盖 `src/main/resources/assets/ultratech/textures/item` 与 `src/main/resources/assets/ultratech/textures/block`，同时检查 `src/generated/resources` 中残留的 16x16 或占位贴图。

## 质量标准

- 物品图标必须为 32x32 PNG，透明背景，主体占画布 22-28 px。
- 方块贴图必须为 32x32 PNG，正面/顶面/底面具备结构差异，不再只换色。
- 同一创造栏保持统一工业风语言，但每个名称必须有独立轮廓或关键识别点。
- 金属件使用冷灰高光、暗边、局部磨损；化工件使用容器、液位、危险色标；植物链使用真实作物轮廓；机器块使用面板、接口、管线、观察窗、热源或传动结构区分功能。
- 禁止无意义纯色块、同模板换色、无名称关联的抽象图案。
- 贴图修改后必须跑尺寸校验和模型引用检查。

## 创造栏分批

1. `ultratech_materials`
   - 基础金属件、齿轮、杆、板、线缆、工具。
   - 古法工业、高粱/蓝莓/金盏花、五种工业植物、工业矿物、石油中间体。
2. `ultratech_ores`
   - 原矿、锭、粒、粉、矿石、深层矿、下界/末地矿。
   - 方块必须突出宿主岩层差异。
3. `ultratech_machines`
   - 阶段机器、水车/风车相关、锅炉、汽轮机、工业过程机器。
   - 每台机器至少重绘正面、顶面、底面；特殊机器补侧面结构。
4. `ultratech_fluid_systems`
   - 流体桶、流体容器、管道、泵、储罐、创造无限流体罐。
   - 容器必须按材质和流体颜色双重区分。
5. `ultratech_circuits` 与 `ultratech_compute_research`
   - 晶圆、光刻、芯片、计算处理器、存储、研究数据、知识碎片。
   - 芯片与旧电路板体系保持独立视觉语言。
6. `ultratech_space`
   - 星图、探测器、中继站、采矿/组装机器人、宇航服、星球样本。
   - 航天图标使用深空蓝黑、白色结构高光和目标星球色标。
7. `ultratech_wireless_power`、`ultratech_power_cores`、`ultratech_transmission`
   - 无线能量终端、动力核心、传动轴、齿轮组、联轴器。
   - 动力件必须看出输入/输出方向。
8. `ultratech_casings`、`ultratech_electromagnetics`、`ultratech_mechanical_parts`
   - 外壳、绕组、磁芯、紧固件、密封件、接头。
   - 系列化资产按材料颜色统一，按功能形状区分。
9. `ultratech_technical_components`、`ultratech_chemical_intermediates`
   - 传感器、控制器、冷却件、化学粉末/晶体/液体/气体。
   - 化学形态必须由图标形态表达，而不只靠颜色。
10. `ultratech_endgame_tech` 与 `ultratech_endgame_equipment`
   - 终局材料、护甲与工具。
   - 保留高级感，但避免纯紫蓝发光块占位。

## 当前审计

- `src/main/resources/assets/ultratech/textures/item`：3775 张，均为 32x32。
- `src/main/resources/assets/ultratech/textures/block`：1777 张，均为 32x32。
- `src/generated/resources/assets/ultratech/textures/item`：发现 1 张 16x16。
- `src/generated/resources/assets/ultratech/textures/block`：发现 4 张 16x16。
- 主要缺陷：大量图标虽然尺寸正确，但存在同模板换色、主体过小、语义不清、机械/化工/植物辨识度不足的问题。

## 已执行批次

- 基础材料入口批：重绘金属线、板、杆、齿轮、电路、早期传动件、锅炉组件、基础作物与植物工业入口物品。
- 材料零件族批：重绘锭、粒、粉、板、杆、线、缆、齿轮、环、螺钉、螺栓、垫圈、外壳等系列图标。
- 氧化物专项批：将所有真正的氧化物/二氧化物/五氧化物图标从通用材料模板中剥离，单独重绘为粉末盘、样品瓶、晶簇或化学试剂罐，避免出现“绿色小块”这类无法识别的图标。
- 流体瓦片批：递归发现 `textures/block/fluid` 中残留单帧贴图。按原版 Minecraft 水贴图处理：`*_still` 使用原版 `water_still` 动画条染色，`*_flow` 使用原版 `water_flow` 动画条染色，并补齐 `.mcmeta`；流体动画贴图不强制 32x32 单帧。

## 执行顺序

先重绘高频基础物品与近期新增工业系统，再进入机器方块三面材质。每个批次完成后输出：

- 重绘文件清单。
- 32x32 尺寸校验结果。
- 拼图预览路径。
- 发现的未翻译键值或模型引用异常。

## 2026-07-09 进度追加：工业机器方块批次

- 批次：`ultratech_machines` / 工业过程机器三面贴图。
- 范围：从 `IndustrialProcessMachine.MACHINES` 精确解析 222 台机器，重绘 `side/top/bottom` 三面，共 666 张 32x32 PNG。
- 处理原则：按机器功能词绘制独立结构符号，而不是纯换色。破碎/球磨/筛分/电解/反应釜/蒸馏塔/烟熏房/蒸汽爆破/石油井架/晶圆设备/光刻/离子注入/量子设备等均有独立识别点。
- 校验：`batch2_changed.txt` 内 666 张贴图已检查，坏尺寸 0，空透明图 0。
- 构建验证：`.\gradlew.bat processResources` 通过。
- 预览：
  - `tmp/texture_audit/batch2_industrial_machines/batch2_key_machine_review.png`
  - `tmp/texture_audit/batch2_industrial_machines/batch2_machine_sides_sheet.png`
- 未完成：这不是全量贴图最终完成。下一批继续处理流体系统容器/无限流体罐、阶段机器、水车风车相关贴图、矿石/星球方块和剩余创造栏物品。

## 2026-07-09 进度追加：流体罐与创造无限流体罐批次

- 批次：`ultratech_fluid_systems` / 流体罐、创造无限流体罐。
- 范围：精确匹配 `creative_infinite_*_tank` 以及 `basic/advanced/cosmic/singularity/spacetime/ultimate_fluid_tank`，共 149 个罐体目标。
- 输出：重绘 `side/top/bottom` 三面，共 447 张 32x32 PNG。
- 处理原则：静止流体本体已改为原版水动画染色；本批只画容器外观。罐体统一为工业金属外壳、阀门、铆钉和液位观察窗，窗口颜色按流体类型区分，避免静止流体纹路被画到容器或液体本体上。
- 校验：`batch3_changed.txt` 内 447 张贴图已检查，坏尺寸 0，空透明图 0。
- 构建验证：`.\gradlew.bat processResources` 通过。
- 预览：
  - `tmp/texture_audit/batch3_fluid_tanks/batch3_fluid_tanks_sheet.png`
- 未完成：仍需继续处理阶段机器、水车风车、矿石/星球方块、剩余物品族和全量本地化键值审计。

## 2026-07-09 进度追加：阶段动力机器核心贴图批次

- 批次：`ultratech_machines` / 1-30 阶核心动力机器展示贴图。
- 范围：从 `StageMachine.MACHINES` 精确解析 34 个机器 ID，重绘 `block/<machine>.png`，不修改水车 OBJ 专用 64x64 模型纹理。
- 处理原则：按机器本体绘制明确图形。水车/风车/齿轮箱/锅炉/汽轮机/斯特林/内燃机/光伏/变电塔/核裂变/聚变环/激光聚变/宇宙门/创世核心等都有独立轮廓。
- 校验：`batch4_changed.txt` 内 34 张贴图已检查，坏尺寸 0，空透明图 0。
- 构建验证：`.\gradlew.bat processResources` 通过。
- 预览：
  - `tmp/texture_audit/batch4_stage_machines/batch4_stage_machine_review.png`
- 未完成：水车和风车的实际 3D 模型/占位/动画逻辑不是本批贴图范围；如果继续处理，需要单独进 runClient 看实体模型和动态结构。

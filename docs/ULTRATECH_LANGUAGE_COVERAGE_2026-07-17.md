# 全语言键审计与本地化覆盖报告

发布日期：2026-07-17

## 本次更新

本轮将 UltraTech 的语言资源从“注册内容命名”扩展为“运行时界面、提示、命令、配方查看器与世界事件的完整覆盖”。

- 扫描 `ModItems.ITEMS` 的全部注册物品，生成中英文物品名称。
- 工业材料和工业流体优先使用工艺元数据中的精确译名；其余注册内容按词根本地化。
- 补齐星图标记终端、低温结构提示、主世界返航失败等固定运行时键。
- 星图标记终端的六种颜色按钮、槽位、保存、清除、空标记和详情面板现已具备中英文文本。

## 覆盖结果

| 项目 | 结果 |
| --- | --- |
| 已生成物品语言键 | 7,056 条中文 / 7,056 条英文 |
| 源码固定可翻译键 | 7,878 条 |
| 原始 ID 兜底名称 | 0 条 |
| 中文固定键遗漏 | 0 条 |
| 英文固定键遗漏 | 0 条 |

## 审计方式

新增 `scripts/verify-language-keys.ps1`，它会合并 `src/main/resources` 与 `src/generated/resources` 的运行时语言包，并扫描 Java 与资源文件中固定写出的 UltraTech 翻译键。

```powershell
.\scripts\verify-language-keys.ps1
```

脚本会分别检查 `zh_cn` 与 `en_us`。只要任一语言缺少被源码调用的固定键，就会以非零状态退出。

## 验证

本轮已完成：

- `gradlew runData --no-daemon`
- `scripts\verify-language-keys.ps1`
- `gradlew jar --no-daemon`

运行环境：Minecraft 1.20.1、Forge 47.4.4、Java 17。

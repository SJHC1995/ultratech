# DeepSeek Harness Client — 开发移交文档

## 项目地址

- 当前源码目录：`C:\ultratech\tools\deepseek_harness_client`
- 当前可运行构建：`dist-next\win-unpacked\DeepSeek Harness Client.exe`

> 当前旧版应用仍在运行，因此新版输出到 `dist-next`，避免覆盖被占用的 `dist\win-unpacked` 目录。

## 功能概述

这是一个 Windows Electron 客户端壳，用于在单一桌面界面中运行 DeepSeek Harness Web。当前
工作区已升级为产品化 1.2.0 界面、状态机与签名 OTA：

1. 软件打开时，先检查 `http://127.0.0.1:3080/`。
2. 若服务未启动，则隐藏执行：`npx @deepseek-ai/dsh web --host 127.0.0.1 --port 3080`。
3. 界面显示阶段式启动动画、服务状态灯与“检测 / 启动 / 连接”进度，服务就绪后嵌入网页窗口。
4. 客户端的主题及语言会从嵌入网页的 `html[data-theme]`、`html[lang]` 中读取并同步更新。
5. 用户可保存 DeepSeek API Key 并查询余额；设置后自动查询，随后每 30 秒刷新一次，同时支持手动刷新。
6. 提供系统诊断窗口、服务日志、数据目录入口和一键服务重启；服务异常会显示可操作的中文状态。

## 用户操作

1. 运行 `DeepSeek Harness Client.exe`（不要单独移动该 exe，应保留同目录文件）。
2. 等待本地 DSH Web 启动并自动加载。
3. 在 **本地设置** 输入 DeepSeek API Key，点击 **保存本地设置**。
4. 顶部余额卡片将显示余额；右侧刷新按钮可以立即更新。

## 安全设计

- API Key 不传给 `127.0.0.1:3080` 网页。
- Key 仅由 Electron 主进程用于余额查询。
- Key 使用 Windows `safeStorage` 加密后，写入应用用户数据目录中的 `settings.json`。
- 渲染进程未开启 Node.js 集成；通过 `preload.js` 提供受限 IPC 接口。

## 目录与职责

| 文件 | 职责 |
|---|---|
| `main.js` | 启动 DSH、本地服务健康检测、安全存储、余额 API 请求、Electron 窗口配置 |
| `preload.js` | 向界面暴露受限桌面 IPC 方法 |
| `index.html` | 单框架 UI：本地设置、余额卡片和网页窗口 |
| `renderer.js` | 页面状态、主题/语言跟随、余额定时刷新、控件事件 |
| `styles.css` | 浅色/深色双主题与桌面 UI 样式 |
| `package.json` | NPM 脚本和 Electron Builder 构建配置 |

## 本地开发

### 前置条件

- Windows
- Node.js / npm（运行时需提供 `npx`）
- 可访问 DeepSeek API（余额功能）

### 安装依赖

```powershell
cd "C:\ultratech\tools\deepseek_harness_client"
npm install
```

### 开发启动

```powershell
npm run start
```

### 生成可运行目录

```powershell
npm run package
```

若旧输出目录被正在运行的程序锁定，使用新目录构建：

```powershell
npx electron-builder --win --dir --config.directories.output=dist-next
```

输出的 Windows 应用位于：

```text
dist-next\win-unpacked\DeepSeek Harness Client.exe
```

### 发布构建

```powershell
# Windows 安装版 Setup.exe
npm run package:installer

# 兼容便携 EXE
npm run package:portable

# 两种发布物并行构建
npm run package:release
```

安装版与兼容便携 EXE 会并行发布；客户端 OTA 优先下载经过签名清单和 SHA-256 校验的
安装版，便携 EXE 作为兼容下载与手动恢复渠道。

## 可配置项

- 本地服务地址：`main.js` 中的 `targetUrl`。
- DSH 启动命令：`main.js` 中 `startDshIfNeeded()` 的 `spawn('npx.cmd', ...)`。
- 余额自动刷新周期：`renderer.js` 最后一行的 `30000`（毫秒）。
- 客户端文案翻译：`renderer.js` 的 `strings.zh` 与 `strings.en`。
- 主题同步频率：`renderer.js` 最后一行的 `2000`（毫秒）。

## 已知注意事项

- 当前构建不是单文件便携包；必须保留 `win-unpacked` 目录完整结构。
- 启动 DSH Web 依赖系统中存在 Node.js 和 `npx`。
- 首次启动 DSH Web 可能需要较长时间，客户端会一直显示加载状态，直到 `http://127.0.0.1:3080/` 返回可用响应。
- 余额接口报错时，错误信息会直接在余额卡片中显示；请确认 API Key 有效且网络可用。

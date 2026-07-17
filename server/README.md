# UltraTech 管理服务

GitHub Pages 只能提供游客浏览的静态资料库；管理员编辑、账号授权和规划文档上传必须由本目录中的同源 Node 服务承担。

## 启动

首次启动时，在 `ultratech-pages` 根目录运行：

```powershell
.\scripts\start-admin-server.ps1 -BootstrapAdmin
```

脚本会生成并打印一个总长 **100 个可见字符** 的管理员访问码，格式为 `UT1-` 加 96 个 URL-safe 随机字符。它仅显示一次，应放入密码管理器。服务随后在 `http://127.0.0.1:4180/admin.html` 提供管理控制台。

后续启动不需要 `-BootstrapAdmin`：

```powershell
.\scripts\start-admin-server.ps1
```

启用管理员主动发布到 GitHub：

```powershell
.\scripts\start-admin-server.ps1 -EnableGitHubSync
```

该开关只允许发布按钮工作，不会自动提交。点击网页管理台或管理 EXE 中的“同步 GitHub”后，服务才会导出公开内容、生成静态百科、提交并推送到 `origin/main`。

## 账号模型

- `UT-XXXXXXXXXX`：10 位数字账号 ID，只用来识别账号。
- `UT1-...`：100 位随机访问码，只在授权时提交；服务器只保存 HMAC 哈希。
- `role`：服务器端的 `admin` 或 `visitor` 字段，是唯一的权限依据。
- `roleMarker`：管理名单中的 Unicode 不可见元数据，仅用于工具显示和导出；不参与任何鉴权。
- 多设备：每个账号有独立设备上限。相同浏览器与设备名会复用设备记录。

## 管理名单 EXE

编译 Windows 管理工具：

```powershell
.\admin-tools\build-admin-roster.ps1
```

生成的 `admin-tools/bin/UltraTechAdminRoster.exe` 可登录管理服务、拉取所有账号、创建游客/管理员账号，并在创建时显示一次访问码。新版工具还包含“网页文案”和“GitHub 发布”页：可搜索、编辑、保存百科条目，并触发同一套安全发布流程。

## 内容同步路径

1. 管理员在网页或 EXE 中保存百科文案、上传公开规划文档。
2. 服务把编辑内容保存在 `server/data/`；该目录不会提交到 Git。
3. 点击“同步 GitHub”后，发布脚本导出可公开的覆盖数据到 `data/editorial-overrides.json`，将公开文档复制到 `docs/editorial/`，并重新生成 `data/wiki-pages.json`。
4. 发布脚本只暂存这些内容文件，创建 `docs: sync editorial archive content` 提交，然后推送 `origin/main`。
5. GitHub Pages 更新后，游客可在静态站点看到同步后的文案和公开文档。

Git 凭据必须由本机 Git Credential Manager、SSH key 或部署环境提供；访问码和服务端账号数据绝不写入 GitHub。

## 部署

生产环境应将此服务部署到 HTTPS 域名，并设置：

```text
ULTRATECH_ADMIN_HOST=0.0.0.0
ULTRATECH_ADMIN_PORT=4180
ULTRATECH_HTTPS=1
ULTRATECH_AUTH_SECRET=<长期随机密钥>
```

将反向代理与静态站点配置为同一域名，使 `/api/*` 与 `admin.html` 都由管理服务处理。GitHub Pages 保留为只读游客镜像，不应承载账号数据。

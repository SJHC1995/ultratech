# 编辑档案发布流程

## 角色

- 游客账号：登录后显示自身账号 ID 和已授权设备数，只能浏览公开百科、工业档案与公开规划文档。
- 管理员账号：可以编辑百科条目、发布规划文档、签发账号，并发起 GitHub 同步。

## 同步到 GitHub

管理服务必须通过以下命令启动：

```powershell
.\scripts\start-admin-server.ps1 -EnableGitHubSync
```

然后在 `admin.html` 的“发布同步”页，或在 `UltraTechAdminRoster` 的“GitHub 发布”页点击同步。

发布过程会：

1. 导出管理员保存的百科覆盖文案。
2. 导出公开规划文档。
3. 执行 Wiki 数据生成，令 GitHub Pages 使用最新档案内容。
4. 仅暂存编辑内容、公开文档和生成后的 Wiki 数据。
5. 提交并推送到 `origin/main`。

管理员访问码、账号哈希、设备信息和私有文档始终保留在 `server/data/`，不会被导出或提交。

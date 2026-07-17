const api = (path, options = {}) => fetch(path, {
  credentials: "same-origin",
  headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  ...options
}).then(async (response) => {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `请求失败：HTTP ${response.status}`);
  return payload;
});

const state = { account: null, pages: [], selectedPage: null };
const byId = (id) => document.getElementById(id);
const message = (id, value = "", error = false) => {
  const node = byId(id);
  node.textContent = value;
  node.classList.toggle("is-error", error);
};
const escapeHtml = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

function showTab(name) {
  document.querySelectorAll("[data-admin-tab]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.adminTab === name)));
  document.querySelectorAll("[data-admin-pane]").forEach((pane) => { pane.hidden = pane.dataset.adminPane !== name; });
  if (name === "accounts") loadAccounts();
  if (name === "documents") loadDocuments();
}

function renderIdentity() {
  byId("adminIdentity").textContent = state.account
    ? `${state.account.displayName} · ${state.account.role === "admin" ? "管理员编辑模式" : "游客浏览模式"}`
    : "游客浏览模式";
  byId("adminLogin").hidden = Boolean(state.account);
  byId("adminWorkspace").hidden = !state.account || state.account.role !== "admin";
  byId("visitorWorkspace").hidden = !state.account || state.account.role !== "visitor";
  byId("logoutButton").hidden = !state.account;
  if (state.account?.role === "visitor") {
    byId("visitorName").textContent = state.account.displayName;
    byId("visitorId").textContent = state.account.id;
    byId("visitorDevices").textContent = `${state.account.deviceCount} / ${state.account.maxDevices}`;
  }
}

function renderWikiList() {
  const search = byId("wikiEditorSearch").value.trim().toLowerCase();
  const matches = state.pages.filter((page) => `${page.id} ${page.title} ${page.titleEn || ""}`.toLowerCase().includes(search)).slice(0, 240);
  byId("wikiEditorList").innerHTML = matches.map((page) => `<button type="button" data-page-id="${escapeHtml(page.id)}" class="${page.id === state.selectedPage?.id ? "is-selected" : ""}">
    <strong>${escapeHtml(page.title)}</strong><small>ultratech:${escapeHtml(page.id)}</small>
  </button>`).join("") || "<p class=\"admin-message\">没有匹配的条目。</p>";
  byId("wikiEditorList").querySelectorAll("[data-page-id]").forEach((button) => button.addEventListener("click", () => selectPage(button.dataset.pageId)));
}

async function selectPage(id) {
  try {
    const { page } = await api(`/api/admin/wiki/${encodeURIComponent(id)}`);
    state.selectedPage = page;
    byId("editorTitle").textContent = page.title;
    byId("editorId").textContent = `ultratech:${page.id}`;
    byId("editorName").value = page.title || "";
    byId("editorSummary").value = page.summary || "";
    byId("editorContent").value = page.content || "";
    byId("editorTags").value = (page.tags || []).join(", ");
    renderWikiList();
    message("wikiEditorMessage", "");
  } catch (error) {
    message("wikiEditorMessage", error.message, true);
  }
}

async function loadWiki() {
  const result = await api("/api/wiki-pages");
  state.pages = result.pages.sort((a, b) => a.title.localeCompare(b.title, "zh-CN"));
  renderWikiList();
}

async function loadDocuments() {
  try {
    const { documents } = await api("/api/admin/documents");
    byId("adminDocumentList").innerHTML = documents.map((document) => `<div class="admin-document-record">
      <div><strong>${escapeHtml(document.title)}</strong><small>${document.visibility === "public" ? "公开" : "私有"} · ${escapeHtml(document.updatedAt)}</small></div>
      <code>${escapeHtml(document.id)}</code>
    </div>`).join("") || "<p class=\"admin-message\">尚未发布规划文档。</p>";
  } catch (error) {
    message("documentMessage", error.message, true);
  }
}

async function loadAccounts() {
  try {
    const { accounts } = await api("/api/admin/accounts");
    byId("accountList").innerHTML = accounts.map((account) => `<div class="admin-account-row">
      <div><strong>${escapeHtml(account.displayName)}</strong><small>${account.role === "admin" ? "管理员" : "游客"} · ${account.deviceCount}/${account.maxDevices} 台设备 · ${account.disabled ? "已停用" : "有效"}</small></div>
      <code>${escapeHtml(account.id)}</code>
    </div>`).join("") || "<p class=\"admin-message\">暂无账号。</p>";
  } catch (error) {
    message("accountCreateMessage", error.message, true);
  }
}

byId("adminLoginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  message("adminLoginMessage", "正在验证访问码…");
  try {
    const payload = await api("/api/auth/redeem", {
      method: "POST",
      body: JSON.stringify({ code: byId("accessCode").value, deviceLabel: byId("deviceLabel").value || navigator.platform || "浏览器设备" })
    });
    state.account = payload.account;
    byId("accessCode").value = "";
    renderIdentity();
    if (state.account.role === "admin") await loadWiki();
  } catch (error) {
    message("adminLoginMessage", error.message, true);
  }
});

byId("wikiEditorSearch").addEventListener("input", renderWikiList);
byId("wikiEditorForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!state.selectedPage) return message("wikiEditorMessage", "请先选择一个百科条目。", true);
  message("wikiEditorMessage", "正在保存…");
  try {
    await api(`/api/admin/wiki/${encodeURIComponent(state.selectedPage.id)}`, {
      method: "PUT",
      body: JSON.stringify({
        title: byId("editorName").value,
        summary: byId("editorSummary").value,
        content: byId("editorContent").value,
        tags: byId("editorTags").value.split(",").map((value) => value.trim()).filter(Boolean)
      })
    });
    message("wikiEditorMessage", "已保存。资料库页面刷新后会显示新文案。");
    await loadWiki();
    await selectPage(state.selectedPage.id);
  } catch (error) {
    message("wikiEditorMessage", error.message, true);
  }
});

byId("documentFile").addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  try {
    byId("documentContent").value = await file.text();
    if (!byId("documentTitle").value) byId("documentTitle").value = file.name.replace(/\.[^.]+$/, "");
    message("documentMessage", `已载入 ${file.name}。`);
  } catch {
    message("documentMessage", "文件读取失败。", true);
  }
});

byId("documentForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  message("documentMessage", "正在发布…");
  try {
    await api("/api/admin/documents", {
      method: "POST",
      body: JSON.stringify({ title: byId("documentTitle").value, visibility: byId("documentVisibility").value, content: byId("documentContent").value })
    });
    byId("documentForm").reset();
    message("documentMessage", "规划文档已发布。");
    await loadDocuments();
  } catch (error) {
    message("documentMessage", error.message, true);
  }
});

byId("accountForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  message("accountCreateMessage", "正在签发访问码…");
  try {
    const result = await api("/api/admin/accounts", {
      method: "POST",
      body: JSON.stringify({ displayName: byId("accountName").value, role: byId("accountRole").value, maxDevices: Number(byId("accountMaxDevices").value) })
    });
    byId("accountCreatedCode").value = result.accessCode;
    message("accountCreateMessage", "账号已创建。请立即复制访问码；刷新页面后不会再次显示。");
    byId("accountForm").reset();
    byId("accountMaxDevices").value = 3;
    await loadAccounts();
  } catch (error) {
    message("accountCreateMessage", error.message, true);
  }
});

byId("refreshAccounts").addEventListener("click", loadAccounts);
byId("logoutButton").addEventListener("click", async () => {
  await api("/api/auth/logout", { method: "POST", body: "{}" }).catch(() => null);
  state.account = null;
  state.pages = [];
  state.selectedPage = null;
  renderIdentity();
  message("adminLoginMessage", "已退出授权。");
});
byId("githubSyncButton").addEventListener("click", async () => {
  const output = byId("githubSyncOutput");
  output.textContent = "正在导出编辑内容、提交并推送到 GitHub…";
  try {
    const result = await api("/api/admin/sync/github", { method: "POST", body: "{}" });
    output.textContent = [result.output, result.warning].filter(Boolean).join("\n");
  } catch (error) {
    output.textContent = `同步失败：${error.message}`;
  }
});
document.querySelectorAll("[data-admin-tab]").forEach((button) => button.addEventListener("click", () => showTab(button.dataset.adminTab)));

async function init() {
  try {
    const session = await api("/api/auth/session");
    state.account = session.account;
    renderIdentity();
    if (state.account?.role === "admin") await loadWiki();
  } catch {
    renderIdentity();
  }
}

init();

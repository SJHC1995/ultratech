import { createHmac, createHash, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import { spawn } from "node:child_process";
import { createReadStream, existsSync, mkdirSync, promises as fs } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = resolve(fileURLToPath(new URL(".", import.meta.url)));
const root = resolve(here, "..");
const dataDir = process.env.ULTRATECH_ADMIN_DATA_DIR ? resolve(process.env.ULTRATECH_ADMIN_DATA_DIR) : join(here, "data");
const documentDir = join(dataDir, "documents");
const accountsPath = join(dataDir, "accounts.json");
const overridesPath = join(dataDir, "wiki-overrides.json");
const documentsPath = join(dataDir, "planning-documents.json");
const secretPath = join(dataDir, "auth-secret.txt");
const port = Number(process.env.ULTRATECH_ADMIN_PORT || 4180);
const host = process.env.ULTRATECH_ADMIN_HOST || "127.0.0.1";
const sessionSeconds = 8 * 60 * 60;
const staticMime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
  ".zip": "application/zip"
};

for (const directory of [dataDir, documentDir]) mkdirSync(directory, { recursive: true });

async function readJson(path, fallback) {
  try {
    return JSON.parse(await fs.readFile(path, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

async function writeJson(path, value) {
  const temporary = `${path}.tmp`;
  await fs.writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await fs.rename(temporary, path);
}

let secret = process.env.ULTRATECH_AUTH_SECRET || "";
if (!secret) {
  secret = existsSync(secretPath) ? await fs.readFile(secretPath, "utf8") : randomBytes(48).toString("base64url");
  if (!existsSync(secretPath)) await fs.writeFile(secretPath, secret, { encoding: "utf8", mode: 0o600 });
}

const base64 = (value) => Buffer.from(value).toString("base64url");
const unbase64 = (value) => Buffer.from(value, "base64url");
const codeHash = (code) => createHmac("sha256", secret).update(code).digest("hex");
const hashText = (value) => createHash("sha256").update(value).digest("hex");
const roleMarker = (role) => `\u2063UT-${role === "admin" ? "A" : "V"}`;

function createAccessCode() {
  // "UT1-" plus 96 URL-safe random characters = exactly 100 visible characters.
  return `UT1-${randomBytes(72).toString("base64url")}`;
}

function createAccountId() {
  return `UT-${randomInt(0, 10_000_000_000).toString().padStart(10, "0")}`;
}

function cleanText(value, maximum, label) {
  if (typeof value !== "string") throw new Error(`${label} 必须是文本。`);
  const result = value.trim();
  if (!result || result.length > maximum) throw new Error(`${label} 长度必须在 1-${maximum} 个字符之间。`);
  return result;
}

function parseCookies(request) {
  return Object.fromEntries((request.headers.cookie || "").split(";").map((item) => {
    const index = item.indexOf("=");
    return index < 0 ? [] : [item.slice(0, index).trim(), decodeURIComponent(item.slice(index + 1).trim())];
  }).filter((entry) => entry.length));
}

function signSession(payload) {
  const data = base64(JSON.stringify(payload));
  const signature = createHmac("sha256", secret).update(data).digest("base64url");
  return `${data}.${signature}`;
}

function readSession(request) {
  const token = parseCookies(request).ut_session;
  if (!token || !token.includes(".")) return null;
  const [data, signature] = token.split(".", 2);
  const expected = createHmac("sha256", secret).update(data).digest("base64url");
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(unbase64(data).toString("utf8"));
    return payload.exp > Math.floor(Date.now() / 1000) ? payload : null;
  } catch {
    return null;
  }
}

function sendJson(response, status, data, headers = {}) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    ...headers
  });
  response.end(JSON.stringify(data));
}

function sendError(response, status, message) {
  sendJson(response, status, { error: message });
}

async function readBody(request) {
  const parts = [];
  let length = 0;
  for await (const part of request) {
    length += part.length;
    if (length > 2 * 1024 * 1024) throw new Error("请求内容超过 2 MB 限制。");
    parts.push(part);
  }
  const raw = Buffer.concat(parts).toString("utf8");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("请求不是有效的 JSON。");
  }
}

function requireSameOrigin(request) {
  const origin = request.headers.origin;
  if (!origin) return;
  const hostHeader = request.headers.host;
  if (hostHeader && new URL(origin).host !== hostHeader) throw new Error("跨站写入请求被拒绝。");
}

async function getAccounts() {
  return readJson(accountsPath, { accounts: [] });
}

async function bootstrapAccount() {
  const store = await getAccounts();
  if (store.accounts.length || !process.env.ULTRATECH_BOOTSTRAP_ADMIN_CODE) return;
  const code = process.env.ULTRATECH_BOOTSTRAP_ADMIN_CODE;
  if (!/^UT1-[A-Za-z0-9_-]{96}$/.test(code)) {
    throw new Error("ULTRATECH_BOOTSTRAP_ADMIN_CODE 必须是 UT1- 开头、总长 100 的随机访问码。");
  }
  store.accounts.push({
    id: createAccountId(),
    displayName: process.env.ULTRATECH_BOOTSTRAP_ADMIN_NAME || "本地管理员",
    role: "admin",
    roleMarker: roleMarker("admin"),
    codeHash: codeHash(code),
    maxDevices: 8,
    devices: [],
    disabled: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  await writeJson(accountsPath, store);
  console.log("已创建首个管理员账号。请妥善保管启动脚本输出的 100 位访问码。");
}

function publicAccount(account) {
  return {
    id: account.id,
    displayName: account.displayName,
    role: account.role,
    maxDevices: account.maxDevices,
    deviceCount: account.devices?.length || 0,
    disabled: Boolean(account.disabled),
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
    // Unicode 标记仅用于名单工具中的隐式分类显示，绝不参与权限判断。
    identityTag: `${account.id}${account.roleMarker || roleMarker(account.role)}`
  };
}

async function currentAccount(request) {
  const session = readSession(request);
  if (!session) return null;
  const store = await getAccounts();
  const account = store.accounts.find((entry) => entry.id === session.sub && !entry.disabled);
  return account ? { account, session } : null;
}

async function requireAdmin(request, response) {
  const current = await currentAccount(request);
  if (!current || current.account.role !== "admin") {
    sendError(response, 403, "需要管理员授权。");
    return null;
  }
  return current;
}

async function mergedWikiPages() {
  const source = await readJson(join(root, "data", "wiki-pages.json"), null);
  if (!source) throw new Error("未找到 data/wiki-pages.json；请先运行百科生成脚本。");
  const overrides = await readJson(overridesPath, {});
  const pages = source.pages.map((page) => overrides[page.id] ? {
    ...page,
    ...overrides[page.id],
    details: page.details,
    recipes: page.recipes,
    dependencies: page.dependencies
  } : page);
  return { ...source, generatedAt: new Date().toISOString(), source: `${source.source}; runtime editorial overrides`, pages };
}

function runProcess(command, args, cwd) {
  return new Promise((resolveProcess, rejectProcess) => {
    const child = spawn(command, args, { cwd, windowsHide: true, shell: false });
    let output = "";
    let error = "";
    child.stdout.on("data", (chunk) => { output += chunk; });
    child.stderr.on("data", (chunk) => { error += chunk; });
    child.on("error", rejectProcess);
    child.on("close", (code) => {
      if (code === 0) return resolveProcess({ output: output.trim(), error: error.trim() });
      rejectProcess(new Error(error.trim() || output.trim() || `同步脚本退出码：${code}`));
    });
  });
}

async function publishEditorialContent() {
  if (process.env.ULTRATECH_GITHUB_SYNC !== "1") {
    throw new Error("GitHub 同步未启用。请以 ULTRATECH_GITHUB_SYNC=1 启动管理服务，并确保本机 Git 已登录目标仓库。");
  }
  const script = join(root, "scripts", "publish-editorial-content.ps1");
  if (!existsSync(script)) throw new Error("未找到 GitHub 发布脚本。");
  const result = await runProcess("pwsh", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", script, "-DataDirectory", dataDir], root);
  return { output: result.output || "内容已同步；没有待提交的编辑变更。", warning: result.error || "" };
}

function setSessionCookie(response, token) {
  const secure = process.env.ULTRATECH_HTTPS === "1" ? "; Secure" : "";
  response.setHeader("Set-Cookie", `ut_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${sessionSeconds}${secure}`);
}

async function routeApi(request, response, pathname) {
  if (request.method === "GET" && pathname === "/api/health") {
    return sendJson(response, 200, { online: true, mode: "UltraTech Admin Service", at: new Date().toISOString() });
  }
  if (request.method === "GET" && pathname === "/api/wiki-pages") {
    return sendJson(response, 200, await mergedWikiPages(), { "Cache-Control": "no-cache" });
  }
  if (request.method === "GET" && pathname === "/api/documents") {
    const documents = await readJson(documentsPath, { documents: [] });
    return sendJson(response, 200, { documents: documents.documents.filter((document) => document.visibility === "public") });
  }
  if (request.method === "GET" && pathname === "/api/auth/session") {
    const current = await currentAccount(request);
    return sendJson(response, 200, { authenticated: Boolean(current), account: current ? publicAccount(current.account) : null });
  }
  if (request.method === "POST" && pathname === "/api/auth/redeem") {
    requireSameOrigin(request);
    const payload = await readBody(request);
    const code = cleanText(payload.code, 120, "访问码");
    const deviceLabel = cleanText(payload.deviceLabel || "未命名设备", 48, "设备名称");
    const store = await getAccounts();
    const account = store.accounts.find((entry) => !entry.disabled && entry.codeHash === codeHash(code));
    if (!account) return sendError(response, 401, "访问码无效或账号已停用。");
    const deviceKey = hashText(`${request.headers["user-agent"] || "unknown"}\n${deviceLabel}`);
    account.devices ||= [];
    let device = account.devices.find((entry) => entry.key === deviceKey);
    if (!device) {
      if (account.devices.length >= account.maxDevices) return sendError(response, 403, `该账号已达到 ${account.maxDevices} 台设备上限。`);
      device = { key: deviceKey, label: deviceLabel, firstSeenAt: new Date().toISOString(), lastSeenAt: new Date().toISOString() };
      account.devices.push(device);
    } else {
      device.lastSeenAt = new Date().toISOString();
    }
    account.updatedAt = new Date().toISOString();
    await writeJson(accountsPath, store);
    const now = Math.floor(Date.now() / 1000);
    const token = signSession({ sub: account.id, role: account.role, dev: deviceKey, iat: now, exp: now + sessionSeconds });
    setSessionCookie(response, token);
    return sendJson(response, 200, { account: publicAccount(account), expiresInSeconds: sessionSeconds });
  }
  if (request.method === "POST" && pathname === "/api/auth/logout") {
    requireSameOrigin(request);
    response.setHeader("Set-Cookie", "ut_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0");
    return sendJson(response, 200, { loggedOut: true });
  }

  if (request.method === "GET" && pathname === "/api/admin/accounts") {
    if (!await requireAdmin(request, response)) return;
    const store = await getAccounts();
    return sendJson(response, 200, { accounts: store.accounts.map(publicAccount).sort((a, b) => a.createdAt.localeCompare(b.createdAt)) });
  }
  if (request.method === "GET" && pathname === "/api/admin/wiki") {
    if (!await requireAdmin(request, response)) return;
    const pages = await mergedWikiPages();
    return sendJson(response, 200, {
      pages: pages.pages.map((page) => ({
        id: page.id,
        title: page.title,
        titleEn: page.titleEn,
        summary: page.summary,
        type: page.type,
        category: page.category,
        dossier: page.dossier || null
      }))
    });
  }
  if (request.method === "POST" && pathname === "/api/admin/accounts") {
    requireSameOrigin(request);
    if (!await requireAdmin(request, response)) return;
    const payload = await readBody(request);
    const role = payload.role === "admin" ? "admin" : "visitor";
    const maxDevices = Number(payload.maxDevices);
    if (!Number.isInteger(maxDevices) || maxDevices < 1 || maxDevices > 32) throw new Error("设备上限必须为 1-32。");
    const store = await getAccounts();
    let id = createAccountId();
    while (store.accounts.some((entry) => entry.id === id)) id = createAccountId();
    const code = createAccessCode();
    const account = {
      id,
      displayName: cleanText(payload.displayName, 48, "显示名称"),
      role,
      roleMarker: roleMarker(role),
      codeHash: codeHash(code),
      maxDevices,
      devices: [],
      disabled: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    store.accounts.push(account);
    await writeJson(accountsPath, store);
    return sendJson(response, 201, { account: publicAccount(account), accessCode: code, warning: "访问码只会在本次创建响应中返回一次，请立即交给账号持有人。" });
  }
  if (request.method === "PATCH" && pathname.startsWith("/api/admin/accounts/")) {
    requireSameOrigin(request);
    if (!await requireAdmin(request, response)) return;
    const accountId = decodeURIComponent(pathname.slice("/api/admin/accounts/".length));
    const payload = await readBody(request);
    const store = await getAccounts();
    const account = store.accounts.find((entry) => entry.id === accountId);
    if (!account) return sendError(response, 404, "账号不存在。");
    if (typeof payload.disabled === "boolean") account.disabled = payload.disabled;
    if (payload.maxDevices !== undefined) {
      const maxDevices = Number(payload.maxDevices);
      if (!Number.isInteger(maxDevices) || maxDevices < 1 || maxDevices > 32) throw new Error("设备上限必须为 1-32。");
      account.maxDevices = maxDevices;
    }
    account.updatedAt = new Date().toISOString();
    await writeJson(accountsPath, store);
    return sendJson(response, 200, { account: publicAccount(account) });
  }
  if (request.method === "GET" && pathname.startsWith("/api/admin/wiki/")) {
    if (!await requireAdmin(request, response)) return;
    const id = decodeURIComponent(pathname.slice("/api/admin/wiki/".length));
    const pages = await mergedWikiPages();
    const page = pages.pages.find((entry) => entry.id === id);
    return page ? sendJson(response, 200, { page }) : sendError(response, 404, "百科条目不存在。");
  }
  if (request.method === "PUT" && pathname.startsWith("/api/admin/wiki/")) {
    requireSameOrigin(request);
    if (!await requireAdmin(request, response)) return;
    const id = decodeURIComponent(pathname.slice("/api/admin/wiki/".length));
    const payload = await readBody(request);
    const source = await readJson(join(root, "data", "wiki-pages.json"), null);
    if (!source?.pages.some((entry) => entry.id === id)) return sendError(response, 404, "百科条目不存在。");
    const tags = Array.isArray(payload.tags) ? payload.tags.map((value) => cleanText(String(value), 32, "标签")).slice(0, 12) : undefined;
    const overrides = await readJson(overridesPath, {});
    overrides[id] = {
      ...(typeof payload.title === "string" ? { title: cleanText(payload.title, 80, "中文名称") } : {}),
      ...(typeof payload.summary === "string" ? { summary: cleanText(payload.summary, 280, "摘要") } : {}),
      ...(typeof payload.content === "string" ? { content: cleanText(payload.content, 40_000, "正文") } : {}),
      ...(tags ? { tags: [...new Set(tags)] } : {}),
      editedAt: new Date().toISOString()
    };
    await writeJson(overridesPath, overrides);
    return sendJson(response, 200, { saved: true, id, editedAt: overrides[id].editedAt });
  }
  if (request.method === "GET" && pathname === "/api/admin/documents") {
    if (!await requireAdmin(request, response)) return;
    return sendJson(response, 200, await readJson(documentsPath, { documents: [] }));
  }
  if (request.method === "POST" && pathname === "/api/admin/documents") {
    requireSameOrigin(request);
    if (!await requireAdmin(request, response)) return;
    const payload = await readBody(request);
    const title = cleanText(payload.title, 120, "文档标题");
    const content = cleanText(payload.content, 1_900_000, "文档内容");
    const visibility = payload.visibility === "private" ? "private" : "public";
    const documentId = `plan-${Date.now()}-${randomBytes(4).toString("hex")}`;
    const record = {
      id: documentId,
      title,
      visibility,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      fileName: `${documentId}.md`
    };
    const documents = await readJson(documentsPath, { documents: [] });
    documents.documents.unshift(record);
    await fs.writeFile(join(documentDir, record.fileName), content, "utf8");
    await writeJson(documentsPath, documents);
    return sendJson(response, 201, { document: record });
  }
  if (request.method === "POST" && pathname === "/api/admin/sync/github") {
    requireSameOrigin(request);
    if (!await requireAdmin(request, response)) return;
    return sendJson(response, 200, await publishEditorialContent());
  }
  return sendError(response, 404, "API 路径不存在。");
}

function staticPath(pathname) {
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const candidate = resolve(root, normalize(relative));
  const prohibited = [join(root, ".git"), join(root, "server")];
  if (!candidate.startsWith(root) || prohibited.some((directory) => candidate === directory || candidate.startsWith(`${directory}\\`) || candidate.startsWith(`${directory}/`))) return null;
  return candidate;
}

async function serveStatic(request, response, pathname) {
  const target = staticPath(pathname);
  if (!target || !existsSync(target)) return sendError(response, 404, "页面不存在。");
  const contentType = staticMime[extname(target).toLowerCase()] || "application/octet-stream";
  response.writeHead(200, {
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "same-origin",
    "X-Frame-Options": "SAMEORIGIN",
    "Cache-Control": target.includes(`${root}\\data\\`) ? "no-cache" : "public, max-age=300"
  });
  if (request.method === "HEAD") return response.end();
  createReadStream(target).pipe(response);
}

await bootstrapAccount();

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || `${host}:${port}`}`);
    if (url.pathname.startsWith("/api/")) return await routeApi(request, response, url.pathname);
    if (!["GET", "HEAD"].includes(request.method || "GET")) return sendError(response, 405, "仅支持 GET、HEAD 与 API 写入请求。");
    return await serveStatic(request, response, decodeURIComponent(url.pathname));
  } catch (error) {
    console.error(error);
    return sendError(response, 400, error instanceof Error ? error.message : "请求处理失败。");
  }
});

server.listen(port, host, () => {
  console.log(`UltraTech 管理服务已启动：http://${host}:${port}/`);
  console.log("游客可直接浏览；管理员请打开 /admin.html 兑换访问码。");
});

const DEFAULT_DOCX = "downloads/documents/UltraTextureStudio_v1.7.408_产品说明书.docx";
const allowedDocxPath = /^downloads\/documents\/[A-Za-z0-9._\-\u4e00-\u9fff]+\.docx$/u;

const query = new URLSearchParams(window.location.search);
const requestedFile = query.get("file") || DEFAULT_DOCX;
const viewer = document.getElementById("docxViewer");
const status = document.getElementById("readerStatus");
const title = document.getElementById("readerTitle");
const download = document.getElementById("docxDownload");
const printButton = document.getElementById("docxPrint");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function fileLabel(path) {
  return decodeURIComponent(path.split("/").at(-1) || "产品说明书").replace(/\.docx$/i, "");
}

async function renderDocx() {
  if (!allowedDocxPath.test(requestedFile)) {
    throw new Error("无效的 DOCX 地址。");
  }
  if (!window.docx?.renderAsync) {
    throw new Error("DOCX 阅读组件未能加载。请刷新页面后重试。");
  }

  title.textContent = fileLabel(requestedFile);
  document.title = `${title.textContent} | UltraTech`;
  download.href = `./${requestedFile}`;
  viewer.replaceChildren();

  const response = await fetch(`./${requestedFile}`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`DOCX 下载失败：HTTP ${response.status}`);
  }

  const blob = await response.blob();
  await window.docx.renderAsync(blob, viewer, undefined, {
    inWrapper: true,
    breakPages: true,
    ignoreLastRenderedPageBreak: false,
    renderHeaders: true,
    renderFooters: true,
    renderFootnotes: true,
    useBase64URL: true
  });
  status.textContent = "已加载 Word 原始页面布局；可使用浏览器打印功能导出 PDF。";
}

printButton.addEventListener("click", () => window.print());

renderDocx().catch((error) => {
  status.textContent = "DOCX 无法在线渲染，可直接下载后使用 Word 打开。";
  viewer.innerHTML = `<p class="docx-error">${escapeHtml(error.message)}</p>`;
});

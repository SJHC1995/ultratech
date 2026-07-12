const allowedDocuments = new Set([
  "ULTRATECH_ROADMAP_2026-07-12.md",
  "ULTRATECH_ROADMAP_2026-07-08.md",
  "ULTRATECH_ROADMAP_2026-07-07.md",
  "ULTRATECH_ANCIENT_AND_SORGHUM_INDUSTRY_REPORT_2026-07-08.md",
  "ULTRATECH_PROJECT_INVENTORY.md"
]);

const content = document.getElementById("markdownContent");
const documentPath = document.getElementById("documentPath");
const requestedFile = new URLSearchParams(window.location.search).get("file");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function formatInline(value) {
  let result = escapeHtml(value);
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "<a href=\"$2\" target=\"_blank\" rel=\"noreferrer\">$1</a>");
  return result;
}

function tableCells(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableDivider(line) {
  return /^\s*\|?[\s:|-]+\|[\s:|-]+/.test(line);
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      html.push(`<pre${language ? ` data-language="${escapeHtml(language)}"` : ""}><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      index += 1;
      continue;
    }

    if (/^#{1,4}\s+/.test(line)) {
      const match = /^(#{1,4})\s+(.+)$/.exec(line);
      const level = match[1].length;
      html.push(`<h${level}>${formatInline(match[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (index + 1 < lines.length && line.includes("|") && isTableDivider(lines[index + 1])) {
      const headers = tableCells(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(tableCells(lines[index]));
        index += 1;
      }
      html.push("<table><thead><tr>");
      headers.forEach((header) => html.push(`<th>${formatInline(header)}</th>`));
      html.push("</tr></thead><tbody>");
      rows.forEach((row) => {
        html.push("<tr>");
        headers.forEach((_, column) => html.push(`<td>${formatInline(row[column] || "")}</td>`));
        html.push("</tr>");
      });
      html.push("</tbody></table>");
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote>${formatInline(quote.join(" "))}</blockquote>`);
      continue;
    }

    if (/^(-|\*|\+)\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^(-|\*|\+)\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^(-|\*|\+)\s+/, ""));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${formatInline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${formatInline(item)}</li>`).join("")}</ol>`);
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      html.push("<hr>");
      index += 1;
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,4}\s+|```|>\s?|(-|\*|\+)\s+|\d+\.\s+)/.test(lines[index])) {
      if (index + 1 < lines.length && lines[index].includes("|") && isTableDivider(lines[index + 1])) {
        break;
      }
      paragraph.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${formatInline(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

async function loadDocument() {
  if (!requestedFile || !allowedDocuments.has(requestedFile)) {
    document.title = "UltraTech 文档未找到";
    documentPath.textContent = "无效的文档地址";
    content.innerHTML = "<p class=\"document-error\">未找到请求的文档。请从首页文档列表进入。</p>";
    return;
  }

  documentPath.textContent = requestedFile;
  try {
    const response = await fetch(`./${requestedFile}`, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const markdown = await response.text();
    content.innerHTML = renderMarkdown(markdown);
    const heading = content.querySelector("h1");
    if (heading) {
      document.title = `${heading.textContent} | UltraTech`;
    }
  } catch (error) {
    document.title = "UltraTech 文档加载失败";
    content.innerHTML = `<p class="document-error">文档无法加载：${escapeHtml(error.message)}</p>`;
  }
}

loadDocument();

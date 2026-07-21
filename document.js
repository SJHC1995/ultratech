const content = document.getElementById("markdownContent");
const documentPath = document.getElementById("documentPath");
const documentTocPanel = document.getElementById("documentTocPanel");
const documentToc = document.getElementById("documentToc");
const documentTocCount = document.getElementById("documentTocCount");
const documentTocSearch = document.getElementById("documentTocSearch");
const documentTocEmpty = document.getElementById("documentTocEmpty");
const documentBackToTop = document.getElementById("documentBackToTop");
const requestedFile = new URLSearchParams(window.location.search).get("file");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function headingSlug(value, usedIds) {
  const base = value
    .replace(/[`*_]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";
  let id = base;
  let suffix = 2;
  while (usedIds.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  usedIds.add(id);
  return id;
}

function formatInline(value) {
  let result = escapeHtml(value);
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const target = href.replaceAll("&amp;", "&").trim();
    if (/^https?:\/\//.test(target)) {
      return `<a href="${target}" target="_blank" rel="noreferrer">${label}</a>`;
    }
    if (/^#[A-Za-z0-9\u4e00-\u9fff_-]+$/.test(target)) {
      return `<a href="${target}">${label}</a>`;
    }
    if (/^[A-Za-z0-9._-]+\.md$/.test(target.replace(/^\.\//, ""))) {
      return `<a href="./document.html?file=docs/${encodeURIComponent(target.replace(/^\.\//, ""))}">${label}</a>`;
    }
    return label;
  });
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
  const usedHeadingIds = new Set();
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
      const id = headingSlug(match[2], usedHeadingIds);
      html.push(`<h${level} id="${id}">${formatInline(match[2])}</h${level}>`);
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

function buildDocumentToc() {
  const headings = Array.from(content.querySelectorAll("h1, h2, h3, h4"));
  if (!headings.length) {
    documentTocPanel.hidden = true;
    return;
  }

  documentTocPanel.hidden = false;
  documentTocCount.textContent = `${headings.length} 个标题`;
  documentToc.innerHTML = headings.map((heading) => {
    const level = Number(heading.tagName.slice(1));
    return `<a class="document-toc-link toc-level-${level}" href="#${encodeURIComponent(heading.id)}" data-toc-target="${escapeHtml(heading.id)}">${escapeHtml(heading.textContent)}</a>`;
  }).join("");

  const links = Array.from(documentToc.querySelectorAll(".document-toc-link"));
  const setCurrent = (id) => {
    links.forEach((link) => link.classList.toggle("is-current", link.dataset.tocTarget === id));
  };

  links.forEach((link) => {
    link.addEventListener("click", () => setCurrent(link.dataset.tocTarget));
  });

  documentTocSearch.value = "";
  documentTocSearch.oninput = () => {
    const query = documentTocSearch.value.trim().toLocaleLowerCase();
    let matches = 0;
    links.forEach((link) => {
      const visible = !query || link.textContent.toLocaleLowerCase().includes(query);
      link.hidden = !visible;
      if (visible) matches += 1;
    });
    documentTocEmpty.hidden = matches !== 0;
  };

  const observer = new IntersectionObserver((entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
    if (active) setCurrent(active.target.id);
  }, { rootMargin: "-12% 0px -74% 0px", threshold: 0 });
  headings.forEach((heading) => observer.observe(heading));
}

async function loadDocument() {
  if (!requestedFile || !/^docs\/[A-Za-z0-9._-]+\.md$/.test(requestedFile)) {
    document.title = "UltraTech 文档未找到";
    documentPath.textContent = "无效的文档地址";
    content.innerHTML = "<p class=\"document-error\">未找到请求的文档。请从首页文档列表进入。</p>";
    documentTocPanel.hidden = true;
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
    buildDocumentToc();
    const heading = content.querySelector("h1");
    if (heading) {
      document.title = `${heading.textContent} | UltraTech`;
    }
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
    }
  } catch (error) {
    document.title = "UltraTech 文档加载失败";
    content.innerHTML = `<p class="document-error">文档无法加载：${escapeHtml(error.message)}</p>`;
    documentTocPanel.hidden = true;
  }
}

function setupBackToTop() {
  const refresh = () => {
    documentBackToTop.classList.toggle("is-visible", window.scrollY > 420);
  };
  documentBackToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", refresh, { passive: true });
  refresh();
}

setupBackToTop();
loadDocument();

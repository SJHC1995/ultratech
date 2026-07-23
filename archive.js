const archiveWordCount = document.getElementById("archiveWordCount");

function archiveDocumentFiles() {
  return [...new Set(
    Array.from(document.querySelectorAll('a[href*="document.html?file="]'))
      .map((link) => new URL(link.href, window.location.href).searchParams.get("file"))
      .filter((file) => /^docs\/[A-Za-z0-9._-]+\.md$/.test(file || ""))
  )];
}

function readableCharacterCount(markdown) {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/[`*_~>#|]/g, "")
    .replace(/\s+/g, "")
    .length;
}

function formatArchiveCount(characterCount) {
  if (characterCount >= 10_000) {
    return `合计约 ${(characterCount / 10_000).toFixed(1)} 万字`;
  }
  return `合计 ${characterCount.toLocaleString("zh-CN")} 字`;
}

async function updateArchiveWordCount() {
  if (!archiveWordCount) {
    return;
  }

  const files = archiveDocumentFiles();
  archiveWordCount.textContent = `正在统计 ${files.length} 篇归档文档的总字数。`;

  const results = await Promise.allSettled(
    files.map(async (file) => {
      const response = await fetch(`./${file}`, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`${file}: HTTP ${response.status}`);
      }
      return readableCharacterCount(await response.text());
    })
  );

  const completed = results.filter((result) => result.status === "fulfilled");
  const total = completed.reduce((sum, result) => sum + result.value, 0);
  const failed = results.length - completed.length;
  archiveWordCount.textContent = `${formatArchiveCount(total)} · 已统计 ${completed.length}/${files.length} 篇归档文档${failed ? `，${failed} 篇加载失败` : ""}。`;
}

updateArchiveWordCount().catch(() => {
  if (archiveWordCount) {
    archiveWordCount.textContent = "归档总字数暂时无法统计，请刷新后重试。";
  }
});

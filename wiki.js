class WikiPage {
  constructor(source) {
    Object.assign(this, {
      id: "",
      title: "",
      titleEn: "",
      category: "",
      subcategory: "",
      stage: null,
      categorySortOrder: 0,
      tags: [],
      summary: "",
      content: "",
      prevPageId: null,
      nextPageId: null,
      itemTexture: null,
      blockTexture: null,
      modelPath: null,
      itemModelPreview: false,
      blockModelPreview: false,
      recipes: [],
      dependencies: [],
      status: "registered",
      type: "entry",
      details: {},
      sourcePath: null,
      assetStatus: { item: false, block: false, model: false }
    }, source);
  }
}

const state = {
  data: null,
  pages: [],
  pageById: new Map(),
  activeCategory: null,
  query: "",
  favorites: new Set(JSON.parse(localStorage.getItem("ultratech-wiki-favorites") || "[]"))
};

const app = document.getElementById("wikiApp");
const categoryNav = document.getElementById("wikiCategoryNav");
const search = document.getElementById("wikiSearch");
const stats = document.getElementById("wikiStats");
const currentId = () => new URLSearchParams(location.search).get("id");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const pageHref = (id) => `./wiki.html?id=${encodeURIComponent(id)}`;
const pageLabel = (id) => state.pageById.get(id)?.title || id;
const statusLabel = (status) => ({
  implemented: "已实现",
  registered: "已注册",
  planned: "规划中",
  deprecated: "已废弃"
}[status] || status);

const isFavorite = (id) => state.favorites.has(id);
const saveFavorites = () => localStorage.setItem("ultratech-wiki-favorites", JSON.stringify([...state.favorites]));

function pageOrder(a, b) {
  return a.category.localeCompare(b.category, "zh-CN")
    || a.subcategory.localeCompare(b.subcategory, "zh-CN")
    || a.categorySortOrder - b.categorySortOrder
    || a.title.localeCompare(b.title, "zh-CN")
    || a.id.localeCompare(b.id);
}

function categoryPages(category) {
  return state.pages.filter((page) => page.category === category).sort(pageOrder);
}

function renderCategoryNav(activeCategory) {
  categoryNav.innerHTML = state.data.categories.map((category) => `
    <div class="wiki-category${category.name === activeCategory ? " is-active" : ""}">
      <button type="button" data-category="${escapeHtml(category.name)}">${escapeHtml(category.name)}<span class="wiki-category-count">${category.count}</span></button>
      <div class="wiki-category-menu">
        <a href="./wiki.html?category=${encodeURIComponent(category.name)}"><span>全部条目</span><span>${category.count}</span></a>
        ${category.subcategories.map((sub) => `<a href="./wiki.html?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(sub.name)}"><span>${escapeHtml(sub.name)}</span><span>${sub.count}</span></a>`).join("")}
      </div>
    </div>
  `).join("");
  categoryNav.querySelectorAll(".wiki-category > button").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".wiki-category");
      categoryNav.querySelectorAll(".wiki-category.is-open").forEach((node) => {
        if (node !== parent) node.classList.remove("is-open");
      });
      parent.classList.toggle("is-open");
    });
  });
}

function renderMarkdown(markdown) {
  const lines = escapeHtml(markdown).replace(/\r/g, "").split("\n");
  const output = [];
  let list = false;
  const closeList = () => {
    if (list) {
      output.push("</ul>");
      list = false;
    }
  };
  lines.forEach((line) => {
    if (line.startsWith("### ")) {
      closeList();
      output.push(`<h3>${line.slice(4)}</h3>`);
    } else if (line.startsWith("## ")) {
      closeList();
      output.push(`<h2>${line.slice(3)}</h2>`);
    } else if (line.startsWith("- ")) {
      if (!list) {
        output.push("<ul>");
        list = true;
      }
      output.push(`<li>${line.slice(2)}</li>`);
    } else if (!line.trim()) {
      closeList();
    } else {
      closeList();
      output.push(`<p>${line}</p>`);
    }
  });
  closeList();
  return output.join("")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\b(ultratech:([a-z0-9_]+))\b/g, (all, label, id) => state.pageById.has(id)
      ? `<a class="wiki-text-link" href="${pageHref(id)}">${label}</a>`
      : `<code>${label}</code>`);
}

function card(page) {
  return `<article class="wiki-result">
    <span class="wiki-badge wiki-status-${escapeHtml(page.status)}">${escapeHtml(statusLabel(page.status))}</span>
    ${page.stage !== null ? `<span class="wiki-badge">阶段 ${page.stage}</span>` : ""}
    <h2><a href="${pageHref(page.id)}">${escapeHtml(page.title)}</a></h2>
    <p><code>ultratech:${escapeHtml(page.id)}</code></p>
    <p>${escapeHtml(page.summary)}</p>
  </article>`;
}

function renderOverview() {
  const url = new URL(location.href);
  const category = url.searchParams.get("category");
  const subcategory = url.searchParams.get("subcategory");
  state.activeCategory = category;
  renderCategoryNav(category);
  const filtered = state.pages.filter((page) => {
    const haystack = `${page.id} ${page.title} ${page.titleEn} ${page.category} ${page.subcategory} ${page.tags.join(" ")}`.toLowerCase();
    return (!category || page.category === category)
      && (!subcategory || page.subcategory === subcategory)
      && (!state.query || haystack.includes(state.query));
  }).sort(pageOrder);
  const quality = state.data.quality || {};
  const favorites = state.pages.filter((page) => isFavorite(page.id));
  const overview = !state.query && !category ? `<section class="wiki-quality-strip">
    <div><span>已索引页面</span><strong>${state.data.stats.pages.toLocaleString()}</strong></div>
    <div><span>镜像资源</span><strong>${(quality.indexedAssets || 0).toLocaleString()}</strong></div>
    <div><span>配方关联</span><strong>${(quality.recipeLinkedPages || 0).toLocaleString()}</strong></div>
    <div><span>无预览条目</span><strong>${(quality.pagesWithoutPreview || 0).toLocaleString()}</strong></div>
  </section>
  ${favorites.length ? `<section class="wiki-favorites"><div class="wiki-list-heading"><h2>收藏条目</h2><span>${favorites.length}</span></div><div class="wiki-results">${favorites.slice(0, 12).map(card).join("")}</div></section>` : ""}
  <section class="wiki-overview-grid">
    ${state.data.categories.map((entry) => `<article class="wiki-overview-card">
      <h2>${escapeHtml(entry.name)}</h2>
      <p>${entry.count.toLocaleString()} 个自动索引条目</p>
      <a href="./wiki.html?category=${encodeURIComponent(entry.name)}">浏览分类</a>
    </article>`).join("")}
  </section>` : "";
  const title = category ? `${category}${subcategory ? ` / ${subcategory}` : ""}` : "全部条目";
  const visible = filtered.slice(0, 180);
  app.innerHTML = `${overview}<section class="wiki-list-heading"><h2>${escapeHtml(title)}</h2><span>${filtered.length.toLocaleString()} 个结果${filtered.length > visible.length ? "，显示前 180 项" : ""}</span></section>
    <section class="wiki-results">${visible.length ? visible.map(card).join("") : '<p class="wiki-empty">没有匹配的条目。</p>'}</section>`;
  stats.textContent = `共 ${state.pages.length.toLocaleString()} 个页面`;
}

function sidebar(page) {
  const grouped = Object.groupBy ? Object.groupBy(categoryPages(page.category), ({ subcategory }) => subcategory) : categoryPages(page.category).reduce((map, item) => {
    (map[item.subcategory] ||= []).push(item);
    return map;
  }, {});
  return `<aside class="wiki-aside" id="wikiAside">
    <div class="wiki-aside-head"><strong>${escapeHtml(page.category)}</strong><button class="wiki-collapse" type="button" title="折叠侧边目录" aria-label="折叠侧边目录">−</button></div>
    <input class="wiki-sidebar-search" type="search" placeholder="筛选当前分类">
    ${Object.entries(grouped).map(([subcategory, pages]) => `<details class="wiki-subcategory"${pages.some((item) => item.id === page.id) ? " open" : ""}>
      <summary>${escapeHtml(subcategory)} <span class="wiki-chip">${pages.length}</span></summary>
      <div class="wiki-sidebar-links">${pages.map((item) => `<a href="${pageHref(item.id)}"${item.id === page.id ? ' aria-current="page"' : ""}>${escapeHtml(item.title)}</a>`).join("")}</div>
    </details>`).join("")}
  </aside>`;
}

function previewImage(label, path, className) {
  if (!path) return `<section class="wiki-panel wiki-asset-card"><h2>${label}</h2><div class="wiki-preview-frame"><span class="wiki-placeholder">无贴图</span></div></section>`;
  return `<section class="wiki-panel wiki-asset-card"><h2>${label}</h2><div class="wiki-preview-frame ${className}"><img src="./${escapeHtml(path)}" alt="${escapeHtml(label)}" loading="lazy"></div></section>`;
}

function modelPreview(page) {
  if (!page.modelPath && !page.blockTexture && !page.itemTexture) {
    return `<section class="wiki-panel wiki-asset-card"><h2>3D 模型</h2><div class="wiki-preview-frame"><span class="wiki-placeholder">无模型资源</span></div></section>`;
  }
  const note = page.details?.modelKind === "geckolib"
    ? "GeckoLib 模型已索引；预览使用纹理代理几何体。"
    : page.modelPath ? "Minecraft 方块模型已索引；预览使用纹理代理几何体。" : "未找到模型 JSON，使用现有贴图代理。";
  return `<section class="wiki-panel wiki-asset-card"><h2>3D 模型</h2><div id="wikiModelHost" class="wiki-preview-frame wiki-model-host"></div><p class="wiki-model-note">${note}</p></section>`;
}

function field(label, value) {
  return `<div class="wiki-detail-field"><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`;
}

function related(title, ids) {
  if (!ids?.length) return "";
  const links = ids.filter((id) => state.pageById.has(id)).map((id) => `<a href="${pageHref(id)}">${escapeHtml(pageLabel(id))}</a>`);
  if (!links.length) return "";
  return `<section class="wiki-panel wiki-related"><h2>${title}</h2><div class="wiki-related-list">${links.join("")}</div></section>`;
}

function pageNavigation(page) {
  const link = (id, css, fallback) => id && state.pageById.has(id)
    ? `<a class="${css}" href="${pageHref(id)}">${escapeHtml(pageLabel(id))}</a>`
    : `<span class="${css} is-disabled">${fallback}</span>`;
  return `<nav class="wiki-page-nav" aria-label="页面导航">
    ${link(page.prevPageId, "wiki-prev", "已是本分类第一页")}
    <a href="./wiki.html?category=${encodeURIComponent(page.category)}">目录</a>
    ${link(page.nextPageId, "wiki-next", "已是本分类末页")}
  </nav>`;
}

function actionButtons(page) {
  const star = isFavorite(page.id) ? "★" : "☆";
  return `<div class="wiki-actions" aria-label="条目操作">
    <button type="button" data-wiki-action="copy-id" data-value="ultratech:${escapeHtml(page.id)}" title="复制注册名" aria-label="复制注册名">⧉</button>
    <button type="button" data-wiki-action="copy-link" data-value="${escapeHtml(location.origin + location.pathname + '?id=' + encodeURIComponent(page.id))}" title="复制页面链接" aria-label="复制页面链接">#</button>
    <button type="button" data-wiki-action="favorite" data-value="${escapeHtml(page.id)}" title="收藏条目" aria-label="收藏条目">${star}</button>
  </div>`;
}

function bindActions() {
  app.querySelectorAll("[data-wiki-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.wikiAction;
      const value = button.dataset.value;
      if (action === "favorite") {
        if (state.favorites.has(value)) state.favorites.delete(value);
        else state.favorites.add(value);
        saveFavorites();
        const page = state.pageById.get(value);
        if (page) renderDetail(page);
        return;
      }
      try {
        await navigator.clipboard.writeText(value);
        const original = button.textContent;
        button.textContent = "✓";
        setTimeout(() => { button.textContent = original; }, 1200);
      } catch {
        button.title = value;
      }
    });
  });
}

function bindSidebar() {
  const aside = document.getElementById("wikiAside");
  if (!aside) return;
  aside.querySelector(".wiki-collapse").addEventListener("click", () => {
    aside.classList.toggle("is-collapsed");
    aside.querySelectorAll(".wiki-subcategory, .wiki-sidebar-search").forEach((node) => {
      node.hidden = aside.classList.contains("is-collapsed");
    });
  });
  aside.querySelector(".wiki-sidebar-search").addEventListener("input", (event) => {
    const needle = event.target.value.trim().toLowerCase();
    aside.querySelectorAll(".wiki-sidebar-links a").forEach((link) => {
      link.hidden = Boolean(needle) && !link.textContent.toLowerCase().includes(needle);
    });
  });
}

function initModelPreview(page) {
  const host = document.getElementById("wikiModelHost");
  if (!host) return;
  if (!window.THREE) {
    host.innerHTML = '<span class="wiki-placeholder">Three.js 未加载，无法显示预览。</span>';
    return;
  }
  const width = Math.max(host.clientWidth, 170);
  const height = 166;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  host.append(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
  camera.position.set(2.6, 1.8, 3.6);
  camera.lookAt(0, 0, 0);
  const group = new THREE.Group();
  scene.add(group);
  scene.add(new THREE.HemisphereLight(0xbcecff, 0x17232d, 2.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.4);
  light.position.set(3, 5, 4);
  scene.add(light);
  const material = new THREE.MeshStandardMaterial({ color: 0x4d8397, metalness: .55, roughness: .42 });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.55, 1.55, 1.55), material);
  group.add(mesh);
  const loader = new THREE.TextureLoader();
  const texturePath = page.blockTexture || page.itemTexture;
  if (texturePath) {
    loader.load(`./${texturePath}`, (texture) => {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      material.map = texture;
      material.needsUpdate = true;
    });
  }
  let distance = 4.4;
  let yaw = .56;
  let pitch = -.22;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  const paint = () => {
    group.rotation.set(pitch, yaw, 0);
    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };
  const animate = (time) => {
    if (!dragging) yaw = .56 + time / 30000 * Math.PI * 2;
    paint();
    requestAnimationFrame(animate);
  };
  renderer.domElement.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    renderer.domElement.setPointerCapture(event.pointerId);
  });
  renderer.domElement.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    yaw += (event.clientX - lastX) * .012;
    pitch = Math.max(-1.1, Math.min(.8, pitch + (event.clientY - lastY) * .01));
    lastX = event.clientX;
    lastY = event.clientY;
  });
  renderer.domElement.addEventListener("pointerup", () => { dragging = false; });
  renderer.domElement.addEventListener("wheel", (event) => {
    event.preventDefault();
    distance = Math.max(2.5, Math.min(7, distance + event.deltaY * .006));
  }, { passive: false });
  requestAnimationFrame(animate);
}

function renderDetail(page) {
  state.activeCategory = page.category;
  renderCategoryNav(page.category);
  stats.textContent = `阶段 ${page.stage ?? "—"} · ${page.category}`;
  const details = Object.entries(page.details || {}).filter(([, value]) => typeof value !== "object");
  app.innerHTML = `<section class="wiki-detail-layout">
    ${sidebar(page)}
    <article class="wiki-article">
      <nav class="wiki-breadcrumbs"><a href="./wiki.html">首页</a><span>›</span><a href="./wiki.html?category=${encodeURIComponent(page.category)}">${escapeHtml(page.category)}</a><span>›</span><a href="./wiki.html?category=${encodeURIComponent(page.category)}&subcategory=${encodeURIComponent(page.subcategory)}">${escapeHtml(page.subcategory)}</a><span>›</span><span>${escapeHtml(page.title)}</span></nav>
      <header class="wiki-headline"><div><span class="wiki-badge wiki-status-${escapeHtml(page.status)}">${escapeHtml(statusLabel(page.status))}</span>${page.stage !== null ? `<span class="wiki-badge">阶段 ${page.stage}</span>` : ""}<h1>${escapeHtml(page.title)}</h1><p class="wiki-subtitle">${escapeHtml(page.titleEn || page.id)}</p></div>${actionButtons(page)}</header>
      <section class="wiki-asset-grid">${previewImage("物品贴图", page.itemTexture, "wiki-item-preview")}${previewImage("方块贴图", page.blockTexture, "wiki-block-preview")}${modelPreview(page)}</section>
      <section class="wiki-panel wiki-content">${renderMarkdown(page.content)}</section>
      ${details.length || page.sourcePath ? `<section class="wiki-panel wiki-details"><h2>条目参数</h2><div class="wiki-details-grid">${details.map(([label, value]) => field(label, value)).join("")}${page.sourcePath ? field("sourcePath", page.sourcePath) : ""}</div></section>` : ""}
      ${related("相关配方", page.recipes)}
      ${related("前置与关联条目", page.dependencies)}
      ${pageNavigation(page)}
    </article>
  </section>`;
  bindSidebar();
  bindActions();
  initModelPreview(page);
}

async function init() {
  const response = await fetch("./data/wiki-pages.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`Wiki data HTTP ${response.status}`);
  state.data = await response.json();
  state.pages = state.data.pages.map((page) => new WikiPage(page)).sort(pageOrder);
  state.pageById = new Map(state.pages.map((page) => [page.id, page]));
  search.addEventListener("input", () => {
    state.query = search.value.trim().toLowerCase();
    if (!currentId()) renderOverview();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== search && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Escape" && document.activeElement === search) {
      search.value = "";
      state.query = "";
      search.blur();
      if (!currentId()) renderOverview();
    }
  });
  const requested = currentId();
  if (requested && state.pageById.has(requested)) {
    renderDetail(state.pageById.get(requested));
  } else {
    renderOverview();
  }
}

init().catch((error) => {
  app.innerHTML = `<p class="wiki-empty">${escapeHtml(error.message)}。请先运行数据生成脚本。</p>`;
});

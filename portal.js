const UI = {
  zh: {
    home: "首页", updates: "更新日志", versions: "版本归档", wiki: "模组百科",
    tech: "科技树", worlds: "星球总览", recipes: "工序查看器", dashboard: "开发看板",
    feedback: "反馈与社区", search: "搜索名称或注册名", allTypes: "全部类型",
    allStatuses: "全部状态", stage: "阶段", type: "类型", status: "状态",
    related: "关联条目", detail: "查看条目", source: "源码快照", download: "下载",
    implemented: "已实现", registered: "已注册", planned: "规划中", deprecated: "已废弃", in_progress: "进行中", done: "已完成",
    machines: "机器", fluids: "流体", items: "物品", blocks: "方块", worldsCount: "天体",
    noResults: "没有符合筛选条件的条目。", openDoc: "阅读文档", current: "当前可下载",
    archived: "历史文档", copy: "复制", copied: "已复制", build: "构建", issues: "待办",
    submit: "在 GitHub 提交反馈", filter: "筛选"
  },
  en: {
    home: "Home", updates: "Updates", versions: "Versions", wiki: "Encyclopedia",
    tech: "Tech Tree", worlds: "Worlds", recipes: "Process Viewer", dashboard: "Dashboard",
    feedback: "Feedback", search: "Search name or registry id", allTypes: "All types",
    allStatuses: "All statuses", stage: "Stage", type: "Type", status: "Status",
    related: "Related entries", detail: "Open entry", source: "Source snapshot", download: "Download",
    implemented: "Implemented", registered: "Registered", planned: "Planned", deprecated: "Deprecated", in_progress: "In progress", done: "Done",
    machines: "Machines", fluids: "Fluids", items: "Items", blocks: "Blocks", worldsCount: "Worlds",
    noResults: "No entries match the current filters.", openDoc: "Read document", current: "Current download",
    archived: "Document archive", copy: "Copy", copied: "Copied", build: "Build", issues: "Tasks",
    submit: "Submit through GitHub", filter: "Filter"
  }
};

const DOCUMENTS = [
  ["2026-07-21", "ULTRA_TECH_PAPER.md", "从玩家到开发者：工业模组包社区的生态、冲突与演进——以 UltraTech 为例", "From player to developer: the ecosystem, conflicts and evolution of industrial modpack communities", "paper"],
  ["2026-07-21", "ULTRATECH_P0_P4_PRIORITY_SCORECARDS_257_PACKS_2026-07-21.md", "P0-P4 优先级评分模式卡：257 个整合包样本", "P0-P4 priority scorecards: 257 modpack samples", "design"],
  ["2026-07-21", "ULTRATECH_P0_P4_PRIORITY_SAMPLING_THESIS_2026-07-21.md", "P0-P4 评分重构的工业链论述", "P0-P4 industrial-chain scoring thesis", "design"],
  ["2026-07-21", "ULTRATECH_256_PACK_INDUSTRIAL_CHAIN_REPORT_2026-07-21.md", "256 包原创工业链研究报告", "256-pack original industrial-chain study", "design"],
  ["2026-07-19", "ULTRATECH_COMPUTE_REQUEST_IDENTITY_2026-07-19.md", "算力请求身份化与广播仲裁", "Compute request identity and broadcast arbitration", "systems"],
  ["2026-07-19", "ULTRATECH_COMPUTE_REQUEST_IDENTITY_PLAN_2026-07-19.md", "算力请求身份化实施与验收规划", "Compute request identity implementation and acceptance plan", "design"],
  ["2026-07-19", "ULTRATECH_INDUSTRIAL_RECONSTRUCTION_VI_2026-07-19.md", "工业重构 VI：双路线配方与统一能源账本", "Industrial reconstruction VI: dual routes and a unified energy ledger", "systems"],
  ["2026-07-18", "ULTRATECH_RESEARCH_DURATION_CALIBRATION_2026-07-18.md", "研究算力校准与处理器限速", "Research compute calibration and processor rate limits", "design"],
  ["2026-07-17", "ULTRATECH_LANGUAGE_COVERAGE_2026-07-17.md", "全语言键审计与本地化覆盖报告", "Full language-key audit and localization coverage", "localization"],
  ["2026-07-16", "ULTRATECH_RESEARCH_TERMINAL_REWORK_2026-07-16.md", "研究终端界面重构记录", "Research terminal interface rework", "design"],
  ["2026-07-15", "ULTRATECH_SCIFI_MEGASTRUCTURES_2026-07-15.md", "科幻工业链 2.0：五座终局巨构实装记录", "Sci-fi industrial chain 2.0: five terminal megastructures", "systems"],
  ["2026-07-15", "ULTRATECH_MIDGAME_INDUSTRY_2026-07-15.md", "阶段 10-22 中后期工业基础实装记录", "Stage 10-22 midgame industry implementation", "systems"],
  ["2026-07-15", "ULTRATECH_DEMO_2.0.0_2026-07-15.md", "Demo 2.0.0：电化学工业发布说明", "Demo 2.0.0: electrochemistry release notes", "release"],
  ["2026-07-14", "ULTRATECH_SPACE_RUINS_AND_SUPERCONDUCTING_FACTORY_2026-07-14.md", "太空遗迹与超导工厂实装记录", "Space ruins and superconducting factory implementation", "systems"],
  ["2026-07-13", "ULTRATECH_ROADMAP_2026-07-13.md", "星际航行视觉迭代与演示发布", "Spaceflight visual iteration and demo release", "roadmap"],
  ["2026-07-12", "ULTRATECH_ROADMAP_2026-07-12.md", "聚变阶段 Demo 发布与规划", "Fusion-stage demo release and plan", "release"],
  ["2026-07-12", "ULTRATECH_INVENTORY_2026-07-12.md", "项目资产清单", "Project asset inventory", "inventory"],
  ["2026-07-09", "ULTRATECH_ICON_REDRAW_BATCH_PLAN_2026-07-09.md", "图标重绘批次计划", "Icon redraw batch plan", "art"],
  ["2026-07-09", "ULTRATECH_TEXTURE_REWORK_PLAN_2026-07-09.md", "贴图重构计划", "Texture rework plan", "art"],
  ["2026-07-08", "ULTRATECH_ROADMAP_2026-07-08.md", "航行、音频与美术质量计划", "Flight, audio and art quality plan", "roadmap"],
  ["2026-07-08", "ULTRATECH_ANCIENT_AND_SORGHUM_INDUSTRY_REPORT_2026-07-08.md", "古法工业与高粱产业链报告", "Ancient industry and sorghum report", "design"],
  ["2026-07-07", "ULTRATECH_ROADMAP_2026-07-07.md", "阶段路线图", "Stage roadmap", "roadmap"],
  ["2026-07-06", "ULTRATECH_ROADMAP_2026-07-06.md", "阶段路线图", "Stage roadmap", "roadmap"],
  ["2026-07-05", "ULTRATECH_ROADMAP_2026-07-05.md", "阶段路线图", "Stage roadmap", "roadmap"],
  ["2026-07-04", "ULTRATECH_ROADMAP_2026-07-04.md", "阶段路线图", "Stage roadmap", "roadmap"],
  ["2026-07-03", "ULTRATECH_ROADMAP_2026-07-03.md", "阶段路线图", "Stage roadmap", "roadmap"],
  ["2026-07-02", "ULTRATECH_ROADMAP_2026-07-02.md", "整体路线图", "Overall roadmap", "roadmap"],
  ["2026-07-01", "ULTRATECH_OVERALL_PLAN_2026-07-01.md", "整体规划文档", "Overall plan", "plan"],
  ["2026-06-30", "ULTRATECH_PROJECT_INVENTORY.md", "项目清单快照", "Project inventory snapshot", "inventory"],
  ["2026-07-08", "ULTRATECH_ROADMAP_2026-07-08_LOCAL_SNAPSHOT.md", "本地旧稿快照：7 月 8 日", "Local snapshot: Jul 8", "snapshot"],
  ["2026-07-12", "ULTRATECH_ROADMAP_2026-07-12_LOCAL_SNAPSHOT.md", "本地旧稿快照：7 月 12 日", "Local snapshot: Jul 12", "snapshot"]
].map(([date, file, zh, en, tag]) => ({ date, file, zh, en, tag }));

const VERSION_RECORDS = [
  {
    version: "2.0.0 Demo",
    date: "2026-07-15",
    status: "current",
    zh: "Demo 2.0.0：电化学工业与阶段 10-22 中后期工业基础，包含核燃料、复材、制冷、工业气体、聚变燃料、氦-3 和超级合金。",
    en: "Demo 2.0.0 with electrochemistry and the stage 10-22 midgame industry foundation, including nuclear fuel, composites, refrigeration, industrial gases, fusion fuel, helium-3, and superalloys.",
    file: "./downloads/UltraTech-Demo-2.0.0-2026-07-15.zip",
    doc: "ULTRATECH_DEMO_2.0.0_2026-07-15.md"
  },
  {
    version: "1.0.0 Demo",
    date: "2026-07-12",
    status: "archived",
    zh: "历史公开 Demo 包，包含 UltraTech JAR 与匹配的 GeckoLib 4.8.4。",
    en: "Archived public demo package with UltraTech and matching GeckoLib 4.8.4.",
    file: "./downloads/UltraTech-Demo-2026-07-12.zip",
    doc: "ULTRATECH_ROADMAP_2026-07-12.md"
  }
];

const TASKS = [
  { status: "in_progress", priority: "P0", zh: "在生存存档逐座验收五座终局巨构的框架、端口、冷却和断供状态", en: "Validate frames, ports, cooling, and supply-loss states for all five terminal megastructures in a survival save.", doc: "ULTRATECH_SCIFI_MEGASTRUCTURES_2026-07-15.md" },
  { status: "in_progress", priority: "P0", zh: "在生存存档逐座验收超导工厂多方块结构、端口和断供状态", en: "Validate superconducting factory multiblocks, ports, and supply-loss states in a survival save.", doc: "ULTRATECH_SPACE_RUINS_AND_SUPERCONDUCTING_FACTORY_2026-07-14.md" },
  { status: "planned", priority: "P1", zh: "覆盖六类星球遗迹的扫描、标记、挖掘和研究终端解锁流程", en: "Cover scan, marker, excavation, and analysis-terminal unlock flows for all six planetary ruin types.", doc: "ULTRATECH_SPACE_RUINS_AND_SUPERCONDUCTING_FACTORY_2026-07-14.md" },
  { status: "in_progress", priority: "P0", zh: "阶段 19-24 聚变机器进行 runClient 输入、断料与 FE 网络验收", en: "Validate stage 19-24 fusion machines in runClient with input loss and FE-network cases.", doc: "ULTRATECH_ROADMAP_2026-07-12.md" },
  { status: "planned", priority: "P1", zh: "为阶段 19-24 编写 GameTest 或最小集成测试", en: "Add GameTest or minimum integration coverage for stages 19-24.", doc: "ULTRATECH_ROADMAP_2026-07-12.md" },
  { status: "in_progress", priority: "P1", zh: "继续清理创造栏占位贴图与错误本地化", en: "Continue creative-tab texture and localization cleanup.", doc: "ULTRATECH_ROADMAP_2026-07-12.md" },
  { status: "planned", priority: "P1", zh: "完成土星轨道观测、大气采集器与航行动画的游戏内视觉验收", en: "Finish in-game visual validation for Saturn orbit observation, atmospheric collection and flight animation.", doc: "ULTRATECH_ROADMAP_2026-07-12.md" },
  { status: "done", priority: "P2", zh: "从 Forge 源码与 DataGen 资源快照生成静态百科目录", en: "Generate the static catalog from Forge source and DataGen resource snapshots.", doc: "ULTRATECH_INVENTORY_2026-07-12.md" }
];

const PROCESS_MODULE_LABELS = {
  aluminum: { zh: "铝工业", en: "Aluminum Industry" },
  castor: { zh: "蓖麻工业", en: "Castor Industry" },
  chlorAlkali: { zh: "氯碱化工", en: "Chlor-Alkali Chemistry" },
  copper: { zh: "铜工业", en: "Copper Industry" },
  dispersed: { zh: "分散金属", en: "Dispersed Metals" },
  iron: { zh: "铁系工业", en: "Iron Industry" },
  jojoba: { zh: "霍霍巴工业", en: "Jojoba Industry" },
  nonferrous: { zh: "有色金属", en: "Nonferrous Metals" },
  nonmetallic: { zh: "非金属矿物", en: "Nonmetallic Minerals" },
  oilPalm: { zh: "油棕工业", en: "Oil Palm Industry" },
  petroleum: { zh: "石油工业", en: "Petroleum Industry" },
  precious: { zh: "贵金属", en: "Precious Metals" },
  precision: { zh: "精密制造", en: "Precision Manufacturing" },
  primitive: { zh: "古法工业", en: "Primitive Industry" },
  rareEarth: { zh: "稀土工业", en: "Rare Earth Industry" },
  refractory: { zh: "耐火材料", en: "Refractory Materials" },
  rubber: { zh: "橡胶工业", en: "Rubber Industry" },
  silicon: { zh: "硅工业", en: "Silicon Industry" },
  sisal: { zh: "剑麻工业", en: "Sisal Industry" },
  sorghum: { zh: "高粱工业", en: "Sorghum Industry" }
};

let language = localStorage.getItem("ultratech-language") || "zh";
let catalogPromise;

function text(key) {
  return UI[language][key] || key;
}

function display(entry) {
  return language === "en" ? entry.nameEn : entry.nameZh;
}

function processModuleLabel(module) {
  return PROCESS_MODULE_LABELS[module]?.[language] || module;
}

function statusLabel(status) {
  return text(status);
}

function escapeHtml(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}

function documentHref(file) {
  return `./document.html?file=${encodeURIComponent(`docs/${file}`)}`;
}

function statusBadge(status) {
  return `<span class="status-badge" data-status="${escapeHtml(status)}">${escapeHtml(statusLabel(status))}</span>`;
}

function setupChrome() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = text(node.dataset.i18nPlaceholder);
  });
  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    toggle.value = language;
    toggle.onchange = () => {
      language = toggle.value;
      localStorage.setItem("ultratech-language", language);
      setupChrome();
      document.dispatchEvent(new CustomEvent("ultratech-language"));
    };
  }
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
}

async function catalog() {
  if (!catalogPromise) {
    catalogPromise = fetch("./data/catalog.json", { cache: "no-cache" }).then((response) => {
      if (!response.ok) throw new Error(`catalog HTTP ${response.status}`);
      return response.json();
    });
  }
  return catalogPromise;
}

function metric(value, label) {
  return `<article class="metric"><strong>${value.toLocaleString()}</strong><span>${escapeHtml(label)}</span></article>`;
}

function typeLabel(type) {
  const labels = {
    stage_machine: language === "zh" ? "阶段机" : "Stage machine",
    process_machine: language === "zh" ? "工业过程机" : "Process machine",
    fluid: text("fluids"),
    item: text("items"),
    block: text("blocks")
  };
  return labels[type] || type;
}

function entryCard(entry) {
  const stage = Number.isInteger(entry.stage) ? `${text("stage")} ${entry.stage}` : "";
  return `<article class="entry-card">
    <div class="tag-row"><span class="tag">${escapeHtml(typeLabel(entry.type))}</span>${statusBadge(entry.status)}</div>
    <h2>${escapeHtml(display(entry))}</h2>
    <p><code>ultratech:${escapeHtml(entry.id)}</code></p>
    <div class="entry-meta">
      ${stage ? `<span class="tag">${escapeHtml(stage)}</span>` : ""}
      <span class="tag">${escapeHtml(entry.category)}</span>
    </div>
    <a class="link-button" href="./wiki.html?id=${encodeURIComponent(entry.id)}" data-i18n="detail">${text("detail")}</a>
  </article>`;
}

function renderStats(target, data) {
  target.innerHTML = [
    metric(data.stats.stageMachines + data.stats.processMachines, text("machines")),
    metric(data.stats.fluids, text("fluids")),
    metric(data.stats.items, text("items")),
    metric(data.stats.blocks, text("blocks")),
    metric(data.stats.worlds, text("worldsCount"))
  ].join("");
}

function initUpdates() {
  const results = document.getElementById("updateResults");
  const search = document.getElementById("updateSearch");
  const tag = document.getElementById("updateTag");
  const render = () => {
    const query = search.value.trim().toLowerCase();
    const tagValue = tag.value;
    const docs = DOCUMENTS.filter((doc) => {
      const visible = `${doc.zh} ${doc.en} ${doc.file}`.toLowerCase();
      return (!query || visible.includes(query)) && (!tagValue || doc.tag === tagValue);
    });
    results.innerHTML = docs.length ? docs.map((doc) => `<a class="feed-list" href="${documentHref(doc.file)}"><strong>${escapeHtml(language === "en" ? doc.en : doc.zh)}</strong><span>${doc.date} · ${doc.tag}</span></a>`).join("") : `<p class="empty-state">${text("noResults")}</p>`;
  };
  [search, tag].forEach((node) => node.addEventListener("input", render));
  document.addEventListener("ultratech-language", render);
  render();
}

function initVersions() {
  const target = document.getElementById("versionResults");
  const render = () => {
    target.innerHTML = VERSION_RECORDS.map((record) => `<article class="version-card">
      <div class="tag-row"><span class="tag">${record.date}</span><span class="status-badge" data-status="${record.status === "current" ? "implemented" : "deprecated"}">${record.status === "current" ? text("current") : text("archived")}</span></div>
      <h2>${record.version}</h2><p>${escapeHtml(language === "en" ? record.en : record.zh)}</p>
      <div class="card-actions"><a class="link-button primary" href="${record.file}" download>${text("download")}</a><a class="link-button" href="${documentHref(record.doc)}">${text("openDoc")}</a></div>
    </article>`).join("");
  };
  document.addEventListener("ultratech-language", render);
  render();
}

function initWiki() {
  const search = document.getElementById("wikiSearch");
  const type = document.getElementById("wikiType");
  const status = document.getElementById("wikiStatus");
  const results = document.getElementById("wikiResults");
  const detail = document.getElementById("wikiDetail");
  const metrics = document.getElementById("wikiMetrics");
  const requested = new URLSearchParams(window.location.search).get("id");

  catalog().then((data) => {
    renderStats(metrics, data);
    const showDetail = () => {
      const entry = data.entries.find((item) => item.id === requested);
      if (!entry) return;
      const related = data.entries.filter((item) => item.id !== entry.id && item.relationKey === entry.relationKey).slice(0, 8);
      detail.innerHTML = `<section class="detail-layout"><article class="panel detail-main">
        <div class="tag-row"><span class="tag">${escapeHtml(typeLabel(entry.type))}</span>${statusBadge(entry.status)}</div>
        <h2>${escapeHtml(display(entry))}</h2>
        <dl class="definition-list">
          <dt>Registry</dt><dd><code>ultratech:${escapeHtml(entry.id)}</code></dd>
          <dt>${text("type")}</dt><dd>${escapeHtml(typeLabel(entry.type))}</dd>
          <dt>${text("stage")}</dt><dd>${entry.stage ?? "-"}</dd>
          <dt>${text("status")}</dt><dd>${escapeHtml(statusLabel(entry.status))}</dd>
          <dt>Module</dt><dd>${escapeHtml(entry.category)}</dd>
          ${entry.processTicks ? `<dt>Process</dt><dd>${entry.processTicks} tick · ${entry.energyPerTick} FE/t</dd>` : ""}
        </dl>
      </article><aside class="panel detail-side"><h2>${text("related")}</h2>
        ${related.length ? related.map((item) => `<a class="feed-list" href="./wiki.html?id=${encodeURIComponent(item.id)}"><strong>${escapeHtml(display(item))}</strong><span>${escapeHtml(item.id)}</span></a>`).join("") : `<p>${text("noResults")}</p>`}
      </aside></section>`;
    };
    const render = () => {
      const needle = search.value.trim().toLowerCase();
      const filtered = data.entries.filter((entry) => {
        const haystack = `${entry.id} ${entry.nameZh} ${entry.nameEn} ${entry.category}`.toLowerCase();
        return (!needle || haystack.includes(needle)) && (!type.value || entry.type === type.value) && (!status.value || entry.status === status.value);
      }).slice(0, 180);
      results.innerHTML = filtered.length ? filtered.map(entryCard).join("") : `<p class="empty-state">${text("noResults")}</p>`;
      showDetail();
    };
    [search, type, status].forEach((node) => node.addEventListener("input", render));
    document.addEventListener("ultratech-language", render);
    render();
  }).catch((error) => {
    results.innerHTML = `<p class="empty-state">${escapeHtml(error.message)}</p>`;
  });
}

function initTechTree() {
  const target = document.getElementById("stageMap");
  catalog().then((data) => {
    const machines = data.entries.filter((entry) => entry.type === "stage_machine");
    const render = () => {
      target.innerHTML = Array.from({ length: 30 }, (_, offset) => {
        const stage = offset + 1;
        const entries = machines.filter((machine) => machine.stage === stage);
        return `<button class="stage-node" type="button" data-stage="${stage}"><strong>${text("stage")} ${stage}</strong><span>${entries.map(display).join(" / ") || "-"}</span></button>`;
      }).join("");
      target.querySelectorAll("[data-stage]").forEach((node) => node.addEventListener("click", () => {
        const machine = machines.find((item) => item.stage === Number(node.dataset.stage));
        if (machine) window.location.href = `./wiki.html?id=${encodeURIComponent(machine.id)}`;
      }));
    };
    document.addEventListener("ultratech-language", render);
    render();
  });
}

function initWorlds() {
  const target = document.getElementById("worldResults");
  catalog().then((data) => {
    const render = () => {
      target.innerHTML = data.worlds.map((world) => `<article class="world-card">
        <div class="tag-row"><span class="tag">${escapeHtml(world.type)}</span>${statusBadge(world.status)}</div>
        <h2>${escapeHtml(language === "en" ? world.nameEn : world.nameZh)}</h2>
        <p>${escapeHtml(world.note)}</p>
        <div class="entry-meta"><span class="tag">${text("stage")} ${world.stage}</span><span class="tag">Probe T${world.probeTier}</span><span class="tag">Relay T${world.relayTier}</span></div>
      </article>`).join("");
    };
    document.addEventListener("ultratech-language", render);
    render();
  });
}

function initRecipes() {
  const select = document.getElementById("processModule");
  const target = document.getElementById("processChain");
  catalog().then((data) => {
    const processes = data.entries.filter((entry) => entry.type === "process_machine");
    const modules = [...new Set(processes.map((entry) => entry.category))].sort();
    const renderOptions = () => {
      const selectedModule = select.value;
      select.innerHTML = modules.map((module) => `<option value="${escapeHtml(module)}">${escapeHtml(processModuleLabel(module))}</option>`).join("");
      select.value = modules.includes(selectedModule) ? selectedModule : modules[0];
    };
    const render = () => {
      const chain = processes.filter((entry) => entry.category === select.value);
      target.innerHTML = chain.map((entry, index) => `<article class="chain-step">
        <span class="tag">${index + 1}</span><h2>${escapeHtml(display(entry))}</h2>
        <p><code>ultratech:${escapeHtml(entry.id)}</code></p>
        <p>${entry.processTicks} tick · ${entry.energyPerTick} FE/t</p>
        <a class="link-button" href="./wiki.html?id=${encodeURIComponent(entry.id)}">${text("detail")}</a>
      </article>`).join("");
    };
    select.addEventListener("change", render);
    document.addEventListener("ultratech-language", () => {
      renderOptions();
      render();
    });
    renderOptions();
    render();
  });
}

function initDashboard() {
  const metrics = document.getElementById("dashboardMetrics");
  catalog().then((data) => renderStats(metrics, data));
  const copy = document.querySelector("[data-copy-command]");
  copy?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(copy.dataset.copyCommand);
    copy.textContent = text("copied");
    window.setTimeout(() => { copy.textContent = text("copy"); }, 1400);
  });
}

function initTracker() {
  const select = document.getElementById("trackerStatus");
  const target = document.getElementById("trackerResults");
  const render = () => {
    const tasks = TASKS.filter((task) => !select.value || task.status === select.value);
    target.innerHTML = tasks.length ? tasks.map((task) => `<article class="issue-card">
      <div class="tag-row"><span class="tag">${task.priority}</span><span class="status-badge" data-status="${task.status}">${statusLabel(task.status)}</span></div>
      <h2>${escapeHtml(language === "en" ? task.en : task.zh)}</h2>
      <a class="link-button" href="${documentHref(task.doc)}">${text("openDoc")}</a>
    </article>`).join("") : `<p class="empty-state">${text("noResults")}</p>`;
  };
  select.addEventListener("change", render);
  document.addEventListener("ultratech-language", render);
  render();
}

function initFeedback() {
  const form = document.getElementById("feedbackForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = form.elements.feedbackType.value;
    const title = form.elements.feedbackTitle.value.trim();
    const body = form.elements.feedbackBody.value.trim();
    const issueTitle = `[${type}] ${title || "UltraTech feedback"}`;
    const issueBody = `## Type\n${type}\n\n## Details\n${body || "Please describe the issue or suggestion."}\n\n## Environment\nMinecraft 1.20.1 / Forge 47.4.4`;
    window.open(`https://github.com/SJHC1995/ultratech/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`, "_blank", "noopener");
  });
}

function boot() {
  setupChrome();
  const page = document.body.dataset.page;
  const handlers = {
    updates: initUpdates,
    versions: initVersions,
    wiki: initWiki,
    tech: initTechTree,
    worlds: initWorlds,
    recipes: initRecipes,
    dashboard: initDashboard,
    tracker: initTracker,
    feedback: initFeedback
  };
  handlers[page]?.();
}

boot();

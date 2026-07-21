(() => {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const links = [
    { label: "首页", href: "index.html" },
    {
      label: "百科与规划",
      children: [
        { label: "模组百科", href: "wiki.html" },
        { label: "30 阶段科技树", href: "tech-tree.html" },
        { label: "加工配方查看器", href: "recipes.html" },
        { label: "星球与维度", href: "worlds.html" }
      ]
    },
    {
      label: "开发归档",
      children: [
        { label: "更新日志", href: "updates.html" },
        { label: "历史模组版本", href: "versions.html" },
        { label: "文档目录", href: "archive.html" },
        { label: "开发看板", href: "dashboard.html" },
        { label: "管理控制台", href: "admin.html" }
      ]
    },
    {
      label: "社区与反馈",
      children: [
        { label: "问题追踪", href: "tracker.html" },
        { label: "反馈表单", href: "feedback.html" }
      ]
    }
  ];

  const currentLink = (href) => current === href ? ' aria-current="page"' : "";
  const navItem = (entry) => {
    if (!entry.children) return `<li class="ut-nav-item"><a class="ut-nav-link" href="./${entry.href}"${currentLink(entry.href)}>${entry.label}</a></li>`;
    const childIsCurrent = entry.children.some((child) => current === child.href);
    return `<li class="ut-nav-item${childIsCurrent ? " is-current-section" : ""}">
      <button class="ut-nav-disclosure" type="button" aria-expanded="false">${entry.label}</button>
      <div class="ut-nav-menu">${entry.children.map((child) => `<a href="./${child.href}"${currentLink(child.href)}>${child.label}</a>`).join("")}</div>
    </li>`;
  };

  const header = document.createElement("header");
  header.className = "ut-site-header";
  header.innerHTML = `<nav class="ut-site-nav" aria-label="站点导航">
    <a class="ut-nav-brand" href="./index.html" aria-label="UltraTech 首页"><img src="./assets/ultratech_logo.png" alt="UltraTech"></a>
    <button class="ut-nav-toggle" type="button" aria-label="打开导航" aria-expanded="false"><span></span><span></span><span></span></button>
    <ul class="ut-nav-list">${links.map(navItem).join("")}<li class="ut-nav-item ut-nav-source"><a class="ut-nav-link" href="https://github.com/SJHC1995/ultratech" target="_blank" rel="noreferrer">GitHub</a></li></ul>
  </nav>`;

  const oldHeader = document.querySelector(".site-header");
  const indexNav = document.querySelector("body > header.hero > nav.nav");
  if (oldHeader) {
    oldHeader.replaceWith(header);
  } else if (indexNav) {
    indexNav.replaceWith(header);
    document.body.classList.add("ut-index");
  } else {
    document.body.prepend(header);
  }

  const nav = header.querySelector(".ut-site-nav");
  const toggle = header.querySelector(".ut-nav-toggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  header.querySelectorAll(".ut-nav-disclosure").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".ut-nav-item");
      const wasOpen = item.classList.contains("is-open");
      header.querySelectorAll(".ut-nav-item.is-open").forEach((node) => {
        node.classList.remove("is-open");
        node.querySelector(".ut-nav-disclosure")?.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      header.querySelectorAll(".ut-nav-item.is-open").forEach((node) => node.classList.remove("is-open"));
    }
  });
})();

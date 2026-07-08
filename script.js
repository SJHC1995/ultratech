const toTop = document.getElementById("toTop");

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".card, .timeline article, .doc-list a").forEach((node) => {
  node.addEventListener("mousemove", (event) => {
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
    node.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  node.addEventListener("mouseleave", () => {
    node.style.transform = "";
  });
});

const searchInput = document.querySelector("#guide-search");
const guideCards = [...document.querySelectorAll(".guide-card")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    guideCards.forEach((card) => {
      const text = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
      const visible = text.includes(query);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (resultCount) resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "guide" : "guides"}`;
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  });
}

document.querySelectorAll(".nav-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".nav-group");
    group.classList.toggle("open");
  });
});

/* SIDEBAR MENU */

document.querySelectorAll(".nav-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;

    button.classList.toggle("open");
    submenu.classList.toggle("open");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  if (filters.length && cards.length) {
    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const value = btn.dataset.filter;
        cards.forEach(card => {
          card.style.display = value === "all" || card.dataset.category === value ? "" : "none";
        });
      });
    });
  }

  const form = document.querySelector("#quote-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.querySelector("#form-status");
      status.textContent = "Thanks! This draft form is ready to connect to your email or form service.";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav.dropdown");

  if (!btn || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("nav-open");
    btn.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    nav.classList.add("nav-open");
    btn.setAttribute("aria-expanded", "true");
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.contains("nav-open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && e.target !== btn) closeMenu();
  });

  // Close after clicking a menu link
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Form fallback until wired to Formspree
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! This form is ready — connect Formspree so it emails you.");
      form.reset();
    });
  }
});

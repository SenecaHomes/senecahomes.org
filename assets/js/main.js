document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav.dropdown");

  if (!btn || !nav) return;

  const mq = window.matchMedia("(max-width: 640px)");

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
    a.addEventListener("click", () => {
      if (mq.matches) closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (!mq.matches) closeMenu();
  });

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Form fallback until wired to Formspree
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        form.innerHTML = "<p style='font-size:1.2rem;'>Message received! We'll get back to you soon.</p>";
      } else {
        alert("Something went wrong — please try emailing us directly.");
      }
    });
  }
});

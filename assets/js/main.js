document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Form fallback (until you wire Formspree):
  // shows a friendly message instead of doing nothing.
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! This form is ready — connect Formspree in the README so it emails you.");
      form.reset();
    });
  }
});

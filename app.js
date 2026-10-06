// WebEdit Studio - app.js

document.addEventListener("DOMContentLoaded", () => {
  // Page ready
  document.body.classList.add("app-ready");

  // Mobile menu
  const menuBtn = document.querySelector("[data-menu]");
  const nav = document.querySelector("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Close mobile menu after clicking a link
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("open");
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Current year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Simple reveal animation
  const revealItems = document.querySelectorAll(
    ".reveal, .card, .service-card"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Prevent empty links from jumping to the top
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });

  console.log("WebEdit Studio loaded successfully.");
});

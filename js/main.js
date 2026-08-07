(function () {
  "use strict";

  var THEME_KEY = "theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function initThemeToggle() {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (localStorage.getItem(THEME_KEY)) return;
        applyTheme(e.matches ? "dark" : "light");
      });
    }
  }

  function initMobileNav() {
    var hamburger = document.getElementById("hamburger");
    var navList = document.getElementById("navList");
    if (!hamburger || !navList) return;

    hamburger.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navList.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navList.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  function currentSection() {
    var path = window.location.pathname;
    if (path === "/" || path === "/index.html") return "home";
    if (path.indexOf("/projects") === 0) return "projects";
    if (path.indexOf("/research") === 0) return "research";
    if (path.indexOf("/blog") === 0) return "blog";
    if (path.indexOf("/about") === 0) return "about";
    if (path.indexOf("/contact") === 0) return "contact";
    return null;
  }

  function initActiveNavLink() {
    var links = document.querySelectorAll(".nav-list a");
    var section = currentSection();
    if (!section) return;

    links.forEach(function (link) {
      if (link.getAttribute("data-section") === section) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initFooterYear() {
    var year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initMobileNav();
    initActiveNavLink();
    initFooterYear();
  });
})();

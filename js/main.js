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

  function initScrollSpy() {
    var links = document.querySelectorAll(".nav-list a[data-section]");
    if (!links.length || !window.IntersectionObserver) return;

    var sections = [];
    links.forEach(function (link) {
      var section = document.getElementById(link.getAttribute("data-section"));
      if (section) sections.push(section);
    });
    if (!sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) { link.removeAttribute("aria-current"); });
          var active = document.querySelector('.nav-list a[data-section="' + entry.target.id + '"]');
          if (active) active.setAttribute("aria-current", "page");
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
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
    initScrollSpy();
    initFooterYear();
  });
})();

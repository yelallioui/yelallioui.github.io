/* ============================================================
   script.js — Global scripts
   Pr. Youssouf EL ALLIOUI — yelallioui.github.io
   ============================================================ */

/* ── Theme management ── */
(function () {
  /* Derive l'URL absolue de styles-light.css depuis le lien styles.css déjà dans le DOM */
  var stylesLink = document.querySelector('link[href*="styles.css"]');
  if (!stylesLink) return;

  var lightHref = stylesLink.href.replace('styles.css', 'styles-light.css');
  var saved     = localStorage.getItem('theme') || 'dark';

  function getLightLink() {
    return document.getElementById('link-theme-light');
  }

  function applyTheme(theme) {
    var existing = getLightLink();
    if (theme === 'light') {
      if (!existing) {
        var link  = document.createElement('link');
        link.id   = 'link-theme-light';
        link.rel  = 'stylesheet';
        link.href = lightHref;
        document.head.appendChild(link);
      }
    } else {
      if (existing) existing.remove();
    }
    localStorage.setItem('theme', theme);
    /* Met à jour l'icône du bouton si déjà injecté */
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'light' ? '☀️' : '🌙';
  }

  /* Applique immédiatement le thème sauvegardé (réduit le flash) */
  applyTheme(saved);

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Bouton toggle dans la nav ── */
    var navInner = document.querySelector('.nav-inner');
    if (navInner) {
      var btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.setAttribute('aria-label', 'Changer de thème');
      btn.title       = 'Thème clair / sombre';
      btn.textContent = (localStorage.getItem('theme') === 'light') ? '☀️' : '🌙';

      btn.addEventListener('click', function () {
        var current = localStorage.getItem('theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });

      /* Insère avant le hamburger s'il existe, sinon à la fin */
      var hamburger = navInner.querySelector('.nav-toggle');
      if (hamburger) {
        navInner.insertBefore(btn, hamburger);
      } else {
        navInner.appendChild(btn);
      }
    }

    /* ── Mobile nav toggle ── */
    var toggle    = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.nav-mobile');

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('open');
        mobileNav.classList.toggle('open');
      });
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          toggle.classList.remove('open');
          mobileNav.classList.remove('open');
        });
      });
    }

    /* ── Active nav link (based on current path) ── */
    var path = window.location.pathname;
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === '/' && (path === '/' || path === '/index.html')) {
        a.classList.add('active');
      } else if (href !== '/' && path.startsWith(href)) {
        a.classList.add('active');
      }
    });

    /* ── Fade-up on scroll (Intersection Observer) ── */
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe').forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      observer.observe(el);
    });

    /* ── Current year in footer ── */
    var yearEl = document.querySelector('.current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

  });

})();

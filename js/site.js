(function () {
  "use strict";

  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    if (!loader) return;
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  });

  var typingElement = document.getElementById("typing");
  var phrasesAr = [
    "أبني تطبيقات موبايل احترافية",
    "سريعة وقابلة للتوسع",
    "مع تجربة مستخدم ممتازة",
  ];
  var phrasesEn = [
    "I build professional mobile apps",
    "Fast, scalable products",
    "With polished user experience",
  ];

  var typingGen = 0;

  function runTyping(phrases) {
    if (!typingElement || !phrases.length) return;
    typingGen++;
    var gen = typingGen;
    var i = 0;
    var j = 0;
    var current = [];
    var deleting = false;

    function step() {
      if (gen !== typingGen) return;
      if (i >= phrases.length) i = 0;
      var full = phrases[i];
      if (deleting) current.pop();
      else current.push(full[j++]);
      typingElement.textContent = current.join("");
      if (!deleting && j === full.length) {
        deleting = true;
        setTimeout(step, 1000);
        return;
      }
      if (deleting && current.length === 0) {
        deleting = false;
        i++;
        j = 0;
      }
      setTimeout(step, deleting ? 50 : 120);
    }
    step();
  }

  var translations = {
    ar: {
      heroLead:
        "أساعدك في تحويل فكرتك إلى تطبيق حقيقي باستخدام Clean Architecture و Firebase / Supabase مع تجربة مستخدم احترافية — مناسب للشركات الناشئة والعمل الحر.",
      navWork: "الأعمال",
      navAbout: "لماذا أنا",
      navServices: "الخدمات",
      navStack: "التقنيات",
      navContact: "تواصل",
      contactHeading: "📩 تواصل معي",
      ctaStart: "ابدأ مشروع",
      ctaProject: "ابدأ مشروعك",
      cvView: "عرض الـ CV",
      badgeAvail: "متوفر لعروض جديدة",
    },
    en: {
      heroLead:
        "I turn your idea into a production-ready app with Clean Architecture and Firebase / Supabase — strong UX for startups and freelance collaborations.",
      navWork: "Work",
      navAbout: "Why me",
      navServices: "Services",
      navStack: "Stack",
      navContact: "Contact",
      contactHeading: "📩 Get in touch",
      ctaStart: "Start a project",
      ctaProject: "Start your project",
      cvView: "View CV",
      badgeAvail: "Open to new work",
    },
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    var arBtn = document.getElementById("lang-ar");
    var enBtn = document.getElementById("lang-en");
    if (arBtn) arBtn.setAttribute("aria-pressed", lang === "ar" ? "true" : "false");
    if (enBtn) enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}

    if (lang === "en") runTyping(phrasesEn);
    else runTyping(phrasesAr);
  }

  var saved = "ar";
  try {
    saved = localStorage.getItem("lang") || "ar";
  } catch (e) {}
  setLanguage(saved === "en" ? "en" : "ar");

  document.getElementById("lang-ar")?.addEventListener("click", function () {
    setLanguage("ar");
    closeMenu();
  });
  document.getElementById("lang-en")?.addEventListener("click", function () {
    setLanguage("en");
    closeMenu();
  });

  var reveal = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".hidden").forEach(function (el) {
    reveal.observe(el);
  });

  function animateCounter(el) {
    var target = +el.getAttribute("data-target");
    if (!target || el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    var count = 0;
    var steps = 60;
    var inc = Math.max(1, Math.ceil(target / steps));

    function tick() {
      count += inc;
      if (count >= target) {
        el.textContent = String(target);
        return;
      }
      el.textContent = String(count);
      requestAnimationFrame(tick);
    }
    tick();
  }

  var metrics = document.querySelector(".hero__metrics");
  if (metrics) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".counter").forEach(animateCounter);
        });
      },
      { threshold: 0.4 }
    ).observe(metrics);
  }

  var cursor = document.getElementById("cursor");
  if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("mousemove", function (e) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });
    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-hover");
      });
    });
  } else if (cursor) {
    cursor.style.display = "none";
  }

  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("menu-toggle");

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove("nav--open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!nav || !toggle) return;
    nav.classList.add("nav--open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  toggle?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!nav) return;
    if (nav.classList.contains("nav--open")) closeMenu();
    else openMenu();
  });

  nav?.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function () {
    if (document.body.classList.contains("menu-open")) closeMenu();
  });

  nav?.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  var headerOffset = 72;
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  document.addEventListener("mousemove", function (e) {
    document.querySelectorAll(".orb").forEach(function (orb, i) {
      var speed = (i + 1) * 0.015;
      var x = (window.innerWidth / 2 - e.clientX) * speed;
      var y = (window.innerHeight / 2 - e.clientY) * speed;
      orb.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  });
})();

(function () {
  "use strict";

  var translations = {
    ar: {
      metaDesc:
        "أحمد محروس — مطوّر Flutter. تطبيقات موبايل احترافية، Clean Architecture، Firebase وSupabase. متاح للشركات والعمل الحر.",
      docTitle: "أحمد محروس | مطوّر Flutter — Portfolio",
      loaderText: "جاري التحميل…",
      navAria: "التنقل الرئيسي",
      menuAria: "القائمة",
      langGroupAria: "اللغة",
      navWork: "الأعمال",
      navAbout: "لماذا أنا",
      navServices: "الخدمات",
      navStack: "التقنيات",
      navContact: "تواصل",
      contactHeading: "📩 تواصل معي",
      ctaStart: "ابدأ مشروع",
      ctaProject: "ابدأ مشروعك",
      cvView: "عرض الـ CV",
      cvDownload: "تحميل",
      badgeAvail: "متوفر لعروض جديدة",
      eyebrowRole: "مطوّر Flutter",
      heroLead:
        "أساعدك في تحويل فكرتك إلى تطبيق حقيقي باستخدام Clean Architecture و Firebase / Supabase مع تجربة مستخدم احترافية — مناسب للشركات الناشئة والعمل الحر.",
      metricApps: "تطبيقات منشورة",
      metricUsers: "مستخدم",
      metricYears: "سنة خبرة",
      aboutTitle: "🎯 لماذا تتعامل معي؟",
      aboutLead:
        "أعمل بشكل واضح على المخرجات والمواعيد: كود منظم، بنية قابلة للصيانة، وتواصل منتظم — مناسب إذا كنت شركة تبحث عن مطوّر يدمج مع الفريق، أو صاحب فكرة تحتاج تنفيذاً من الصفر.",
      aboutCard1Title: "🏢 للشركات والمنتجات",
      aboutCard1Text:
        "ميزات قابلة للتوسع، تكامل مع خلفيات سحابية، واهتمام بتجربة المستخدم لتقليل التكلفة لاحقاً على الصيانة.",
      aboutCard2Title: "🤝 للعمل الحر والمشاريع الفردية",
      aboutCard2Text:
        "أحوّل المتطلبات إلى خطة تنفيذ، أطر زمنية واقعية، وتسليم تدريجي يمكنك مراجعته خطوة بخطوة.",
      aboutCard3Title: "✅ جودة وشفافية",
      aboutCard3Text:
        "Clean Architecture، اهتمام بالأداء، وشرح قرارات التقنية بلغة تفهمها أنت كصاحب منتج — لا «صندوق أسود».",
      servicesTitle: "💼 الخدمات",
      svc1Title: "📱 تطوير تطبيقات Flutter",
      svc1Text:
        "تطبيقات Android و iOS من قاعدة كود واحدة، واجهات عصرية، وربط كامل مع متطلباتك التجارية.",
      svc2Title: "🔥 Firebase / Supabase",
      svc2Text:
        "مصادقة، قواعد بيانات، تخزين، وواجهات برمجة — بنية خلفية آمنة تدعم نمو المستخدمين.",
      svc3Title: "⚡ تحسين الأداء والصيانة",
      svc3Text:
        "مراجعة كود، تسريع الشاشات، وتقليل الاعتماديات الثقيلة ليبقى المنتج سريعاً مع الوقت.",
      workTitle: "🚀 المشاريع",
      workQimniDesc:
        "تطبيق يشبه فكرة Linktree مع متجر داخلي: ملفات شخصية، عرض روابط، وبيع منتجات من نفس الواجهة.",
      workMeknazDesc:
        "تطبيق لإدارة المصاريف والأهداف المالية بواجهة بسيطة تساعد على متابعة الإنفاق دون تعقيد.",
      workGithub: "GitHub",
      stackTitle: "🧠 التقنيات",
      nowTitle: "🔥 حالياً أعمل على",
      now1: "تطوير تطبيق Marketplace باستخدام Flutter",
      now2: "تعميق التكامل مع Supabase في مشاريع حقيقية",
      now3: "تحسين ممارسات Clean Code والاختبارات",
      testimonialTitle: "⭐ آراء العملاء",
      t1Quote: "«شغل احترافي وكود نظيف جدًا — سهل نمشي معه خطوة بخطوة.»",
      t1Meta: "عميل عمل حر · تطبيق موبايل",
      t2Quote: "«التطبيق كان سريعًا ومستقرًا؛ التواصل كان واضحًا من أول يوم.»",
      t2Meta: "صاحب منتج · إطلاق MVP",
      cvSectionTitle: "📄 السيرة الذاتية",
      cvSectionLead:
        "حمّل الـ CV أو شاركه مع فريق التوظيف — ويمكنك دائمًا كتابتي مباشرة عبر البريد أو واتساب لطلب عينة عمل أو مكالمة تعارف.",
      contactEmail: "📧 البريد الإلكتروني",
      contactWa: "📱 واتساب",
      contactGh: "💻 GitHub",
      contactLi: "🔗 LinkedIn",
      contactHint:
        "أفضّل رسالة قصيرة: نوع المشروع، الجدول الزمني، والميزانية التقريبية إن وجدت — أرد خلال يوم عمل.",
      footerCopy: "© 2026 أحمد محروس — مطوّر Flutter",
      photoAlt: "أحمد محروس — مطوّر Flutter",
      imgQimni: "لقطة شاشة من تطبيق Qimni",
      imgMeknaz: "لقطة شاشة من تطبيق Meknaz",
    },
    en: {
      metaDesc:
        "Ahmed Mahrous — Flutter developer. Professional mobile apps, Clean Architecture, Firebase & Supabase. Open to companies and freelance work.",
      docTitle: "Ahmed Mahrous | Flutter Developer — Portfolio",
      loaderText: "Loading…",
      navAria: "Main navigation",
      menuAria: "Menu",
      langGroupAria: "Language",
      navWork: "Work",
      navAbout: "Why me",
      navServices: "Services",
      navStack: "Stack",
      navContact: "Contact",
      contactHeading: "📩 Get in touch",
      ctaStart: "Start a project",
      ctaProject: "Start your project",
      cvView: "View CV",
      cvDownload: "Download",
      badgeAvail: "Open to new work",
      eyebrowRole: "Flutter Developer",
      heroLead:
        "I turn your idea into a production-ready app with Clean Architecture and Firebase / Supabase — polished UX for startups and freelance collaborations.",
      metricApps: "Apps shipped",
      metricUsers: "Users",
      metricYears: "Years experience",
      aboutTitle: "🎯 Why work with me?",
      aboutLead:
        "Clear outcomes and timelines: maintainable architecture, clean code, and steady communication — whether you need a developer who fits a team or a build from zero.",
      aboutCard1Title: "🏢 For companies & products",
      aboutCard1Text:
        "Scalable features, solid cloud backends, and UX that keeps long-term maintenance costs under control.",
      aboutCard2Title: "🤝 Freelance & solo founders",
      aboutCard2Text:
        "Requirements become a roadmap, realistic milestones, and incremental delivery you can review step by step.",
      aboutCard3Title: "✅ Quality & transparency",
      aboutCard3Text:
        "Clean Architecture, performance-aware work, and tech decisions explained in plain language — no black box.",
      servicesTitle: "💼 Services",
      svc1Title: "📱 Flutter app development",
      svc1Text:
        "Android & iOS from one codebase, modern UI, and alignment with your business goals.",
      svc2Title: "🔥 Firebase / Supabase",
      svc2Text:
        "Auth, databases, storage, and APIs — a secure backend that scales with your users.",
      svc3Title: "⚡ Performance & maintenance",
      svc3Text:
        "Code reviews, faster screens, and leaner dependencies so the product stays snappy over time.",
      workTitle: "🚀 Projects",
      workQimniDesc:
        "Link-in-bio style app with a built-in shop: profiles, links, and selling from one experience.",
      workMeknazDesc:
        "Expense and savings goals with a simple UI that makes spending easy to track.",
      workGithub: "GitHub",
      stackTitle: "🧠 Tech stack",
      nowTitle: "🔥 Currently focused on",
      now1: "Building a Flutter marketplace app",
      now2: "Deeper Supabase integrations on real projects",
      now3: "Leveling up Clean Code and automated tests",
      testimonialTitle: "⭐ Client feedback",
      t1Quote:
        "“Professional delivery and very clean code — easy to collaborate step by step.”",
      t1Meta: "Freelance client · mobile app",
      t2Quote:
        "“The app felt fast and stable; communication was clear from day one.”",
      t2Meta: "Product owner · MVP launch",
      cvSectionTitle: "📄 Résumé",
      cvSectionLead:
        "Download or share my CV with hiring teams — or email / WhatsApp me for samples or an intro call.",
      contactEmail: "📧 Email",
      contactWa: "📱 WhatsApp",
      contactGh: "💻 GitHub",
      contactLi: "🔗 LinkedIn",
      contactHint:
        "A short note works best: project type, timeline, and budget range if you have one — I usually reply within one business day.",
      footerCopy: "© 2026 Ahmed Mahrous — Flutter Developer",
      photoAlt: "Ahmed Mahrous — Flutter Developer",
      imgQimni: "Screenshot of the Qimni app",
      imgMeknaz: "Screenshot of the Meknaz app",
    },
  };

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

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var akey = el.getAttribute("data-i18n-alt");
      if (t[akey]) el.setAttribute("alt", t[akey]);
    });

    if (t.docTitle) document.title = t.docTitle;

    var metaDesc = document.getElementById("meta-description");
    if (metaDesc && t.metaDesc) metaDesc.setAttribute("content", t.metaDesc);

    var navEl = document.getElementById("site-nav");
    if (navEl && t.navAria) navEl.setAttribute("aria-label", t.navAria);

    var menuBtn = document.getElementById("menu-toggle");
    if (menuBtn && t.menuAria) menuBtn.setAttribute("aria-label", t.menuAria);

    var langGroup = document.querySelector(".lang");
    if (langGroup && t.langGroupAria) langGroup.setAttribute("aria-label", t.langGroupAria);

    var loaderEl = document.getElementById("loader");
    if (loaderEl && loaderEl.style.display !== "none" && t.loaderText) {
      loaderEl.textContent = t.loaderText;
    }

    var arBtn = document.getElementById("lang-ar");
    var enBtn = document.getElementById("lang-en");
    if (arBtn) {
      arBtn.setAttribute("aria-pressed", lang === "ar" ? "true" : "false");
      arBtn.setAttribute("aria-label", lang === "ar" ? "العربية — مفعّلة" : "التبديل إلى العربية");
    }
    if (enBtn) {
      enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
      enBtn.setAttribute("aria-label", lang === "en" ? "English — active" : "Switch to English");
    }

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

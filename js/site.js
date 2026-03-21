(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.documentElement.classList.add("reduce-motion");
  }

  var waPhone = "201114009880";
  var waTextAr = encodeURIComponent(
    "مرحباً، أرغب بحجز مكالمة تعارف قصيرة (١٥ دقيقة) مع أحمد محروس بخصوص مشروع."
  );
  var waTextEn = encodeURIComponent(
    "Hi, I'd like to book a 15-minute intro call with Ahmed Mahrous about a project."
  );

  var translations = {
    ar: {
      metaDesc:
        "أحمد محروس — مطوّر Flutter. تطبيقات موبايل احترافية، Clean Architecture، Firebase وSupabase. متاح للشركات والعمل الحر.",
      ogTitle: "أحمد محروس | مطوّر Flutter",
      ogDesc: "أبني منتجات موبايل جاهزة للإنتاج — للشركات الناشئة والعملاء الأفراد.",
      twitterTitle: "أحمد محروس | مطوّر Flutter",
      twitterDesc: "تطبيقات Flutter احترافية — تواصل لبدء مشروعك.",
      ogLocale: "ar_EG",
      docTitle: "أحمد محروس | مطوّر Flutter — Portfolio",
      skipLink: "تخطّي إلى المحتوى",
      loaderText: "جاري التحميل…",
      navAria: "التنقل الرئيسي",
      menuAria: "القائمة",
      langGroupAria: "اللغة",
      navWork: "المشاريع",
      navAbout: "لماذا أنا",
      navProcess: "طريقة العمل",
      navServices: "الخدمات",
      navStack: "التقنيات",
      navAvailability: "التوفر",
      navContact: "تواصل",
      contactHeading: "📩 تواصل معي",
      ctaStart: "ابدأ مشروع",
      ctaProject: "ابدأ مشروعك",
      ctaCall15: "احجز مكالمة ١٥ دقيقة (واتساب)",
      cvView: "عرض الـ CV",
      cvDownload: "تحميل",
      badgeAvail: "متوفر لعروض جديدة",
      eyebrowRole: "مطوّر Flutter",
      heroLead:
        "أساعدك في تحويل فكرتك إلى تطبيق حقيقي باستخدام Clean Architecture و Firebase / Supabase مع تجربة مستخدم احترافية — مناسب للشركات الناشئة والعمل الحر.",
      metricApps: "مشاريع منفّذة",
      metricUsersValue: "25+",
      metricUsersCum: "مستخدِم تراكمي",
      metricYears: "سنوات في التطوير",
      metricsFootnote:
        "يشمل العدد المشاريع المنجزة والمنشورة ضمن نطاق العمل؛ بقية الأرقام تقريبية ويمكن توضيحها عند التواصل.",
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
      processTitle: "⚙️ طريقة العمل",
      processLead:
        "مسار واضح من أول رسالة حتى التسليم — عادةً ٢–٦ أسابيع لميزة متوسطة حسب النطاق، مع تحديثات أسبوعية قصيرة.",
      process1Title: "اكتشاف ونطاق",
      process1Text:
        "نحدّد المشكلة، المستخدم، والمخرجات الأساسية (MVP أو ميزة محددة)، ونضع أولويات واقعية.",
      process2Title: "تصميم ونماذج",
      process2Text:
        "تدفقات الشاشات، هيكل البيانات، واختيار التقنية (Firebase / Supabase / REST) قبل كتابة كود الإنتاج.",
      process3Title: "تنفيذ وتسليم تدريجي",
      process3Text:
        "بناء بالـ Clean Architecture، builds قابلة للاختبار، ومشاركة تقدم منتظمة (Demo / فيديو قصير).",
      process4Title: "تسليم ودعم",
      process4Text: "نشر، توثيق مختصر، وجلسة تسليم؛ يمكن الاتفاق على صيانة خفيفة أو تطوير لاحق.",
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
      workTitle: "🚀 المشاريع ودراسات الحالة",
      workLead:
        "ثمانية عشر مشروعاً متنوّعاً — يُعرض أول ستة بتفصيل كامل، ويمكنك فتح الباقي بنقرة واحدة.",
      caseLabelProblem: "المشكلة",
      caseLabelBuilt: "ما الذي بُني",
      caseLabelStack: "التقنيات",
      caseLabelOutcome: "النتيجة",
      workGithubProfile: "مستودعات GitHub",
      playPublishedBadge: "منشور على Google Play",
      projectsShowMore: "عرض المزيد من المشاريع",
      projectsShowLess: "عرض عدد أقل",
      availTitle: "📅 التوفر وأشكال التعاون",
      availLead:
        "وضّح في رسالتك الشكل الذي يناسبك — أساعد في اختيار النموذج الأنسب بعد فهم النطاق.",
      avail1Title: "مشروع بعقد محدد",
      avail1Text:
        "نطاق زمني ومخرجات محددة (ميزة، MVP، أو إصدار ١.٠) مع عرض سعر أو مراحل دفع متفق عليها.",
      avail2Title: "دوام جزئي / احتياج متكرر",
      avail2Text: "عدد ساعات أسبوعي ثابت أو تطوير مستمر مع أولويات يتم مراجعتها كل أسبوعين.",
      avail3Title: "تعاون مع فرق",
      avail3Text:
        "الاندماج مع فريق منتج قائم: مهام واضحة، مراجعات Pull Request، وتوثيق قرارات التقنية.",
      stackTitle: "🧠 التقنيات",
      nowTitle: "🔥 حالياً أعمل على",
      now1: "تطوير تطبيق Marketplace باستخدام Flutter",
      now2: "تعميق التكامل مع Supabase في مشاريع حقيقية",
      now3: "تحسين ممارسات Clean Code والاختبارات",
      testimonialTitle: "⭐ آراء العملاء",
      t1Quote: "«شغل احترافي وكود نظيف جدًا — سهل نمشي معه خطوة بخطوة.»",
      t1Meta: "م. ن. · مدير منتج، قطاع تجزئة تقنية",
      t2Quote: "«التطبيق كان سريعًا ومستقرًا؛ التواصل كان واضحًا من أول يوم.»",
      t2Meta: "أ. ف. · مؤسس ناشئة، إطلاق MVP",
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
    },
    en: {
      metaDesc:
        "Ahmed Mahrous — Flutter developer. Professional mobile apps, Clean Architecture, Firebase & Supabase. Open to companies and freelance work.",
      ogTitle: "Ahmed Mahrous | Flutter Developer",
      ogDesc:
        "Production-ready mobile products — for startups and individual clients.",
      twitterTitle: "Ahmed Mahrous | Flutter Developer",
      twitterDesc: "Professional Flutter apps — get in touch to start your project.",
      ogLocale: "en_US",
      docTitle: "Ahmed Mahrous | Flutter Developer — Portfolio",
      skipLink: "Skip to content",
      loaderText: "Loading…",
      navAria: "Main navigation",
      menuAria: "Menu",
      langGroupAria: "Language",
      navWork: "Projects",
      navAbout: "Why me",
      navProcess: "How I work",
      navServices: "Services",
      navStack: "Stack",
      navAvailability: "Availability",
      navContact: "Contact",
      contactHeading: "📩 Get in touch",
      ctaStart: "Start a project",
      ctaProject: "Start your project",
      ctaCall15: "Book a 15-min intro (WhatsApp)",
      cvView: "View CV",
      cvDownload: "Download",
      badgeAvail: "Open to new work",
      eyebrowRole: "Flutter Developer",
      heroLead:
        "I turn your idea into a production-ready app with Clean Architecture and Firebase / Supabase — polished UX for startups and freelance collaborations.",
      metricApps: "Projects delivered",
      metricUsersValue: "1K+",
      metricUsersCum: "Cumulative users",
      metricYears: "Years shipping apps",
      metricsFootnote:
        "The project count includes shipped work in scope; other figures are estimates — happy to clarify on a call.",
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
      processTitle: "⚙️ How I work",
      processLead:
        "A clear path from first message to handoff — often 2–6 weeks for a medium scope, with short weekly updates.",
      process1Title: "Discovery & scope",
      process1Text:
        "We align on the problem, users, and core outcomes (MVP or a focused feature) with realistic priorities.",
      process2Title: "Design & specs",
      process2Text:
        "Screen flows, data shape, and stack choices (Firebase / Supabase / REST) before production code.",
      process3Title: "Build & incremental delivery",
      process3Text:
        "Clean Architecture, testable builds, and regular progress demos or short Loom-style updates.",
      process4Title: "Handoff & support",
      process4Text:
        "Release, concise documentation, and a walkthrough session; light maintenance or follow-on work optional.",
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
      workTitle: "🚀 Projects & case studies",
      workLead:
        "18 diverse products — the first six include full case studies; expand to browse the rest.",
      caseLabelProblem: "Problem",
      caseLabelBuilt: "What we built",
      caseLabelStack: "Tech stack",
      caseLabelOutcome: "Outcome",
      workGithubProfile: "GitHub repositories",
      playPublishedBadge: "Live on Google Play",
      projectsShowMore: "Show more projects",
      projectsShowLess: "Show fewer",
      availTitle: "📅 Availability & collaboration",
      availLead:
        "Mention the model that fits you in your first message — I’ll suggest the best fit after scoping.",
      avail1Title: "Fixed-scope project",
      avail1Text:
        "Time-boxed delivery with clear outputs (feature, MVP, or v1.0) and agreed pricing or milestones.",
      avail2Title: "Part-time / ongoing",
      avail2Text:
        "A steady weekly hour cap or continuous development with priorities reviewed every two weeks.",
      avail3Title: "Embedded with teams",
      avail3Text:
        "Joining an existing product team: clear tasks, PR reviews, and documented technical decisions.",
      stackTitle: "🧠 Tech stack",
      nowTitle: "🔥 Currently focused on",
      now1: "Building a Flutter marketplace app",
      now2: "Deeper Supabase integrations on real projects",
      now3: "Leveling up Clean Code and automated tests",
      testimonialTitle: "⭐ Client feedback",
      t1Quote:
        "“Professional delivery and very clean code — easy to collaborate step by step.”",
      t1Meta: "M.N. · Product lead, retail tech",
      t2Quote:
        "“The app felt fast and stable; communication was clear from day one.”",
      t2Meta: "A.F. · Startup founder, MVP launch",
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
    if (reduceMotion) {
      typingElement.textContent = phrases[0];
      return;
    }
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

  function applySocialMeta(t) {
    var ogTitle = document.getElementById("meta-og-title");
    if (ogTitle && t.ogTitle) ogTitle.setAttribute("content", t.ogTitle);
    var ogDesc = document.getElementById("meta-og-desc");
    if (ogDesc && t.ogDesc) ogDesc.setAttribute("content", t.ogDesc);
    var twTitle = document.getElementById("meta-tw-title");
    if (twTitle && t.twitterTitle) twTitle.setAttribute("content", t.twitterTitle);
    var twDesc = document.getElementById("meta-tw-desc");
    if (twDesc && t.twitterDesc) twDesc.setAttribute("content", t.twitterDesc);
    var ogLoc = document.getElementById("meta-og-locale");
    if (ogLoc && t.ogLocale) ogLoc.setAttribute("content", t.ogLocale);
  }

  var activeLang = "ar";
  var projectsExpanded = false;
  var githubProjectsUrl = "https://github.com/ahmedmahrous0023";

  var reveal = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.15 }
  );

  function renderPortfolioProjects(lang) {
    var root = document.getElementById("projects-root");
    if (!root) return;
    var projects = window.PORTFOLIO_PROJECTS;
    var initialN = window.PROJECTS_INITIAL_COUNT || 6;
    if (!projects || !projects.length) {
      root.innerHTML = "";
      var wrapEmpty = document.querySelector(".projects-more");
      if (wrapEmpty) wrapEmpty.style.display = "none";
      return;
    }

    var labels = translations[lang];
    root.innerHTML = "";

    if (projectsExpanded) root.classList.add("projects-expanded");
    else root.classList.remove("projects-expanded");

    projects.forEach(function (p, index) {
      var c = lang === "en" ? p.en : p.ar;
      var article = document.createElement("article");
      article.className = "card case-study project-card hidden";

      if (index >= initialN) article.classList.add("project-card--extra");

      var thumb = document.createElement("div");
      thumb.className = "work-thumb";
      var img = document.createElement("img");
      img.src = p.image || "assets/project-placeholder.svg";
      img.alt = (lang === "ar" ? "لقطة من تطبيق " : "Screenshot: ") + c.name;
      img.loading = "lazy";
      img.width = 800;
      img.height = 450;
      if (img.src.indexOf("placeholder.svg") === -1) {
        img.onerror = function () {
          this.onerror = null;
          this.src = "assets/project-placeholder.svg";
        };
      }
      thumb.appendChild(img);

      var titleWrap = document.createElement("div");
      titleWrap.className = "project-card__title";
      var h3 = document.createElement("h3");
      h3.textContent = c.name;
      titleWrap.appendChild(h3);
      if (p.badgePlay) {
        var badge = document.createElement("span");
        badge.className = "project-badge";
        badge.textContent = labels.playPublishedBadge;
        titleWrap.appendChild(badge);
      }

      var dl = document.createElement("dl");
      dl.className = "case-study__list";

      function addRow(dtText, ddText, ddClass) {
        var block = document.createElement("div");
        block.className = "case-study__block";
        var dt = document.createElement("dt");
        dt.textContent = dtText;
        var dd = document.createElement("dd");
        if (ddClass) dd.className = ddClass;
        dd.textContent = ddText;
        block.appendChild(dt);
        block.appendChild(dd);
        dl.appendChild(block);
      }

      addRow(labels.caseLabelProblem, c.problem, "prose");
      addRow(labels.caseLabelBuilt, c.built, "prose");
      addRow(labels.caseLabelStack, c.stack, null);
      addRow(labels.caseLabelOutcome, c.outcome, "prose");

      var actions = document.createElement("div");
      actions.className = "actions";
      var link = document.createElement("a");
      link.href = githubProjectsUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = labels.workGithubProfile;
      actions.appendChild(link);

      article.appendChild(thumb);
      article.appendChild(titleWrap);
      article.appendChild(dl);
      article.appendChild(actions);

      if (projectsExpanded && index >= initialN) {
        article.classList.add("show");
      }

      root.appendChild(article);
    });

    root.querySelectorAll(".project-card").forEach(function (card) {
      if (card.classList.contains("project-card--extra") && !projectsExpanded) return;
      reveal.observe(card);
    });

    var btn = document.getElementById("projects-toggle");
    var wrap = document.querySelector(".projects-more");
    if (btn && wrap) {
      var extraCount = Math.max(0, projects.length - initialN);
      if (extraCount === 0) {
        wrap.style.display = "none";
      } else {
        wrap.style.display = "flex";
        btn.setAttribute("aria-expanded", projectsExpanded ? "true" : "false");
        var tbtn = translations[lang];
        btn.textContent = projectsExpanded
          ? tbtn.projectsShowLess
          : tbtn.projectsShowMore + " (+" + extraCount + ")";
      }
    }
  }

  function setCtaCallHref(lang) {
    var ctaCall = document.getElementById("cta-call");
    if (!ctaCall) return;
    var q = lang === "ar" ? waTextAr : waTextEn;
    ctaCall.href = "https://wa.me/" + waPhone + "?text=" + q;
  }

  function setLanguage(lang) {
    activeLang = lang;
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

    applySocialMeta(t);

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

    setCtaCallHref(lang);

    renderPortfolioProjects(lang);

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

  document.getElementById("projects-toggle")?.addEventListener("click", function () {
    projectsExpanded = !projectsExpanded;
    renderPortfolioProjects(activeLang);
  });

  var skip = document.querySelector(".skip-link");
  var mainEl = document.getElementById("main-content");
  if (skip && mainEl) {
    skip.addEventListener("click", function () {
      window.requestAnimationFrame(function () {
        mainEl.focus({ preventScroll: true });
      });
    });
  }

  document.getElementById("lang-ar")?.addEventListener("click", function () {
    setLanguage("ar");
    closeMenu();
  });
  document.getElementById("lang-en")?.addEventListener("click", function () {
    setLanguage("en");
    closeMenu();
  });

  document.querySelectorAll(".hidden").forEach(function (el) {
    if (el.closest("#projects-root")) return;
    reveal.observe(el);
  });

  function animateCounter(el) {
    var target = +el.getAttribute("data-target");
    if (!target || el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
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
  if (
    !reduceMotion &&
    cursor &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
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
      window.scrollTo({
        top: y,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  });

  if (!reduceMotion) {
    document.addEventListener("mousemove", function (e) {
      document.querySelectorAll(".orb").forEach(function (orb, i) {
        var speed = (i + 1) * 0.015;
        var x = (window.innerWidth / 2 - e.clientX) * speed;
        var y = (window.innerHeight / 2 - e.clientY) * speed;
        orb.style.transform = "translate(" + x + "px, " + y + "px)";
      });
    });
  }
})();

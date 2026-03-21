(function () {
  const STRINGS = {
    ar: {
      nav: { projects: "المشاريع", skills: "المهارات", cv: "السيرة الذاتية", contact: "تواصل" },
      badge: "مطوّر تطبيقات موبايل",
      heroTitle: "أبني تطبيقات حديثة بفلاتر — سريعة، واضحة، وجاهزة للنشر",
      heroLead:
        "أعمل مع الأفراد والفرق على منتجات حقيقية: من الفكرة إلى المتجر. اهتم بالأداء، تجربة المستخدم، والتكامل مع الخلفيات والخدمات السحابية.",
      ctaWork: "شاهد أعمالي",
      ctaHire: "توظيف / تعاون",
      photoAlt: "صورة أحمد محروس",
      photoCaption: "أحمد محروس — مطوّر Flutter",
      secProjects: "مشاريع مختارة",
      secProjectsDesc:
        "أمثلة على تطبيقات نُشرت أو قيد التطوير. يمكن إضافة صور شاشة وروابط المتاجر لاحقاً.",
      projQimni: "تطبيق يجمع بين صفحة روابط، متجر بسيط، وتحليلات لزيارات الروابط.",
      projMeknaz: "تتبع مالي وأهداف مالية مع واجهة واضحة لتنظيم الإنفاق والادخار.",
      linkGithub: "المستودع على GitHub ←",
      secSkills: "المهارات والتقنيات",
      secSkillsDesc: "أستخدم أدوات حديثة لبناء تطبيقات قابلة للصيانة والتوسع.",
      secCv: "السيرة الذاتية",
      secCvDesc: "اطّلع على الخلفية والخبرة بتنسيق PDF.",
      cvText: "افتح أو حمّل السيرة من assets/cv.pdf بعد رفعها للمستودع.",
      cvView: "عرض PDF",
      cvDownload: "تحميل PDF",
      secContact: "تواصل معي",
      secContactDesc: "للاستفسارات التجارية، العروض، أو المشاريع الطويلة المدى.",
      labelEmail: "البريد",
      labelWhatsapp: "واتساب",
      labelGithub: "GitHub",
      labelLinkedin: "LinkedIn",
      footer: "© أحمد محروس. جميع الحقوق محفوظة."
    },
    en: {
      nav: { projects: "Projects", skills: "Skills", cv: "Résumé", contact: "Contact" },
      badge: "Mobile app developer",
      heroTitle: "I build modern Flutter apps — polished, fast, and ready to ship",
      heroLead:
        "I work with individuals and teams on real products: from idea to store listing. I care about performance, UX, and integration with backends and cloud services.",
      ctaWork: "View my work",
      ctaHire: "Hire / collaborate",
      photoAlt: "Ahmed Mahrous photo",
      photoCaption: "Ahmed Mahrous — Flutter Developer",
      secProjects: "Selected projects",
      secProjectsDesc: "Shipped or in-progress apps. Add screenshots and store links when available.",
      projQimni: "Link-in-bio style app with a simple shop and link analytics.",
      projMeknaz: "Money tracking and savings goals with a clear, focused UI.",
      linkGithub: "GitHub repository →",
      secSkills: "Skills & stack",
      secSkillsDesc: "Modern tooling for maintainable, scalable mobile apps.",
      secCv: "Résumé",
      secCvDesc: "Experience and background in PDF format.",
      cvText: "Open or download the PDF from assets/cv.pdf after uploading it to the repo.",
      cvView: "Open PDF",
      cvDownload: "Download PDF",
      secContact: "Get in touch",
      secContactDesc: "For commercial inquiries, proposals, or long-term projects.",
      labelEmail: "Email",
      labelWhatsapp: "WhatsApp",
      labelGithub: "GitHub",
      labelLinkedin: "LinkedIn",
      footer: "© Ahmed Mahrous. All rights reserved."
    }
  };

  function applyLang(lang) {
    const isAr = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    const btnAr = document.querySelector("#lang-ar");
    const btnEn = document.querySelector("#lang-en");
    if (btnAr) btnAr.setAttribute("aria-pressed", isAr);
    if (btnEn) btnEn.setAttribute("aria-pressed", !isAr);

    const t = STRINGS[lang];
    document.querySelectorAll("[data-i18n-nav]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-nav");
      el.textContent = (t.nav && t.nav[key]) || "";
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key && t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (key && t[key] !== undefined) el.setAttribute("alt", t[key]);
    });

    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch (e) {}
  }

  function init() {
    const btnAr = document.getElementById("lang-ar");
    const btnEn = document.getElementById("lang-en");
    if (btnAr) btnAr.addEventListener("click", function () { applyLang("ar"); });
    if (btnEn) btnEn.addEventListener("click", function () { applyLang("en"); });

    var saved = null;
    try {
      saved = localStorage.getItem("portfolio-lang");
    } catch (e) {}
    applyLang(saved === "en" || saved === "ar" ? saved : "ar");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

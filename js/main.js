// ==========================
// 🔥 Loading Screen
// ==========================
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  }
});

// ==========================
// ✨ Scroll Animations (Reveal)
// ==========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".card, .section__title, .hero__copy").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ==========================
// ✍️ Typing Effect
// ==========================
const typingElement = document.querySelector(".hero__title");

const texts = [
  "أبني تطبيقات Flutter احترافية",
  "I build high-performance Flutter apps",
  "Clean Code • Scalable Apps • Modern UI"
];

let index = 0;
let charIndex = 0;

function typeEffect() {
  if (!typingElement) return;

  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      index = (index + 1) % texts.length;
      typeEffect();
    }, 2000);
  }
}

typeEffect();

// ==========================
// 🌍 Language Switch (AR / EN)
// ==========================
const translations = {
  ar: {
    heroLead: "أساعدك في تحويل فكرتك إلى تطبيق حقيقي",
    contact: "تواصل معي",
  },
  en: {
    heroLead: "I help you turn your idea into a real app",
    contact: "Contact Me",
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

// Buttons (لو ضفتهم)
const langAr = document.getElementById("lang-ar");
const langEn = document.getElementById("lang-en");

if (langAr && langEn) {
  langAr.onclick = () => setLanguage("ar");
  langEn.onclick = () => setLanguage("en");
}

// Load saved language
const savedLang = localStorage.getItem("lang") || "ar";
setLanguage(savedLang);

// ==========================
// 🖱 Custom Cursor
// ==========================
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Hover effect
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});

// ==========================
// ⚡ Smooth Scroll Enhancement
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ==========================
// 💫 Parallax Effect
// ==========================
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".orb").forEach((orb, i) => {
    const speed = (i + 1) * 0.02;
    const x = (window.innerWidth / 2 - e.pageX) * speed;
    const y = (window.innerHeight / 2 - e.pageY) * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

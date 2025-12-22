// script.js

// Project counter
const count = document.getElementById("projectCount");
if(count){
  count.textContent = `Total Projects: ${document.querySelectorAll(".project").length}`;
}

// Language toggle
let lang = "en";
const toggle = document.getElementById("langToggle");

toggle.addEventListener("click",()=>{
  lang = lang === "en" ? "ar" : "en";
  document.querySelectorAll(".lang").forEach(el=>{
    el.innerHTML = el.dataset[lang];
  });
  document.body.className = lang === "ar" ? "rtl" : "ltr";
  toggle.textContent = lang === "ar" ? "English" : "عربي";
});

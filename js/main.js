

/* ================= JS ================= */

AOS.init();

let isArabic = false;
const toggle = document.getElementById('langToggle');

toggle.onclick = () => {
  isArabic = !isArabic;

  if(isArabic){
    document.getElementById('title').innerText = 'مرحبا، أنا أحمد محروس';
    document.getElementById('subtitle').innerText = 'مطور تطبيقات Flutter';
    document.getElementById('cta').innerText = 'شاهد أعمالي';
    toggle.innerText = 'EN';
    document.body.dir = 'rtl';
  } else {
    document.getElementById('title').innerText = "Hi, I'm Ahmed Mahrous";
    document.getElementById('subtitle').innerText = 'Flutter Developer building modern mobile apps';
    document.getElementById('cta').innerText = 'View My Work';
    toggle.innerText = 'AR';
    document.body.dir = 'ltr';
  }
};

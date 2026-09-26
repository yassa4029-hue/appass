// =========================================================
// Yassa Aziz — Portfolio
// =========================================================

const translations = {
  en: {
    brand: "Yassa",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_kicker: "Currently building & learning",
    hero_hi: "Hi, I'm",
    hero_role: "Student & Software Builder",
    hero_desc: "I design and build things for the web — learning by doing, breaking things on purpose, and putting them back together better.",
    hero_cta_projects: "See my work",
    hero_cta_contact: "Get in touch",

    about_title: "About me",
    about_p1: "I'm Yassa — a student who got hooked on technology the moment I realized I could build things instead of just using them. What started as curiosity about how websites work turned into a habit of taking things apart, breaking them, and figuring out how to make them work again — better than before.",
    about_p2: "I don't learn well from watching alone. I learn by opening the console, writing the wrong code first, reading the error, and trying again. That loop — build, break, fix, understand — is how I actually pick things up.",
    trait1_h: "Curious by default",
    trait1_p: "Always asking how something works under the hood.",
    trait2_h: "Learns by building",
    trait2_p: "Tutorials are a start — real learning happens in the code.",
    trait3_h: "Comfortable with bugs",
    trait3_p: "An error message is a clue, not a wall.",

    skills_title: "Skills",
    skill_html: "Structuring content clearly and semantically.",
    skill_css: "Designing layouts and interfaces that feel intentional.",
    skill_js: "Adding logic, interaction and behavior to the page.",
    skill_git_h: "Version Control",
    skill_git: "Tracking changes and shipping with Git & GitHub.",

    projects_title: "Projects",
    project1_h: "Personal Portfolio",
    project1_p: "This website — designed and built from scratch to present who I am, what I know, and what I'm working on.",
    project2_h: "More on the way",
    project2_p: "This space grows every time I finish something worth showing.",

    contact_title: "Let's talk",
    contact_lead: "Have a project, an idea, or just want to say hi? I'd love to hear from you.",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_whatsapp_cta: "Message me directly",

    footer_text: "Designed & built by",

    search_title: "Search",
    search_placeholder: "Search — try a name, section, or phone number",
    search_hint: "Try things like \"contact\", \"phone\", \"skills\" or \"projects\".",
    search_no_results: "No matches found.",

    private_label: "RESTRICTED AREA",
    private_title: "Private Files",
    private_sub: "This area is not linked anywhere on the site.",
  },

  ar: {
    brand: "يسى",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "التواصل",

    hero_kicker: "بتعلّم وبنّي حاجات جديدة دلوقتي",
    hero_hi: "أنا",
    hero_role: "طالب وباني برمجيات",
    hero_desc: "بصمم وببني حاجات على الويب — بتعلّم عن طريق التجربة، بكسر الأشياء عمدًا، وبرجّعها تشتغل بشكل أحسن.",
    hero_cta_projects: "شوف أعمالي",
    hero_cta_contact: "تواصل معايا",

    about_title: "نبذة عني",
    about_p1: "أنا يسى، طالب اتعلق بالتكنولوجيا لحظة ما اكتشفت إني أقدر أبني حاجات مش بس أستخدمها. اللي بدأ كفضول عن إزاي المواقع بتشتغل، بقى عادة إني أفكك الحاجات، أكسرها، وأفهم إزاي أرجعها تشتغل من جديد بشكل أحسن.",
    about_p2: "مبتعلمش كويس بمجرد المشاهدة بس. بتعلم عن طريق إني أفتح الـ console، أكتب كود غلط الأول، أقرا الخطأ، وأجرب تاني. الدائرة دي — ابني، اكسر، اصلّح، افهم — هي إزاي فعليًا بتعلم.",
    trait1_h: "فضولي دايمًا",
    trait1_p: "بسأل دايمًا إزاي الحاجة دي شغالة من جوه.",
    trait2_h: "بتعلم عن طريق البناء",
    trait2_p: "الشروحات بداية بس، التعلم الحقيقي بيحصل جوه الكود.",
    trait3_h: "مرتاح مع الأخطاء",
    trait3_p: "رسالة الخطأ دليل، مش عائق.",

    skills_title: "المهارات",
    skill_html: "بناء صفحات الويب وتنظيم محتواها بشكل واضح.",
    skill_css: "تصميم واجهات وتجارب بصرية مقصودة.",
    skill_js: "إضافة التفاعل والحركة للصفحة.",
    skill_git_h: "التحكم بالإصدارات",
    skill_git: "تتبع التعديلات ونشر المشاريع باستخدام Git وGitHub.",

    projects_title: "المشاريع",
    project1_h: "الموقع الشخصي",
    project1_p: "الموقع ده — صممته وبنيته من الصفر عشان أعرض مين أنا، وإيه اللي بعرفه، وعلى إيه بشتغل دلوقتي.",
    project2_h: "مشاريع جديدة قريبًا",
    project2_p: "المساحة دي هتكبر كل ما أخلّص حاجة تستاهل إني أعرضها.",

    contact_title: "خلينا نتكلم",
    contact_lead: "عندك مشروع أو فكرة أو حتى عايز تسلّم بس؟ يشرفني أسمع منك.",
    contact_email: "البريد الإلكتروني",
    contact_phone: "الهاتف",
    contact_whatsapp_cta: "تواصل معايا مباشرة",

    footer_text: "تصميم وتنفيذ",

    search_title: "بحث",
    search_placeholder: "دور على اسم أو قسم أو رقم تليفون",
    search_hint: "جرب تكتب \"تواصل\" أو \"تليفون\" أو \"مهارات\" أو \"مشاريع\".",
    search_no_results: "مفيش نتائج مطابقة.",

    private_label: "منطقة خاصة",
    private_title: "الملفات الخاصة",
    private_sub: "المنطقة دي مش متربطة بأي مكان تاني في الموقع.",
  },
};

const STORAGE_KEY = "yassy-lang";
let currentLang = "en";

// ---------------------------------------------------------
// Language
// ---------------------------------------------------------
function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const currentEl = document.querySelector(".lang-current");
  const otherEl = document.querySelector(".lang-other");
  if (currentEl && otherEl) {
    currentEl.textContent = lang === "ar" ? "AR" : "EN";
    otherEl.textContent = lang === "ar" ? "EN" : "AR";
  }

  document.title =
    lang === "ar" ? "يسى عزيز — الموقع الشخصي" : "Yassy Aziz — Portfolio";

  localStorage.setItem(STORAGE_KEY, lang);
  renderSearchResults(document.getElementById("search-input").value);
}

function initLanguage() {
  // English is the default for every new visitor.
  // A returning visitor's own explicit choice is remembered.
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialLang = saved === "ar" ? "ar" : "en";
  applyLanguage(initialLang);

  document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLanguage(currentLang === "ar" ? "en" : "ar");
  });
}

// ---------------------------------------------------------
// Mobile nav
// ---------------------------------------------------------
function initMobileNav() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------------------
// Scroll spy
// ---------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll("main .section, .hero");
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---------------------------------------------------------
// Search
// ---------------------------------------------------------
function getSearchIndex() {
  return [
    {
      id: "about",
      en: { title: "About Yassa", desc: "Student & software builder — the story behind the site." },
      ar: { title: "نبذة عني", desc: "طالب وباني برمجيات — القصة اللي وراء الموقع." },
      keywords: ["about", "yassy", "student", "نبذة", "طالب", "يسى", "عني"],
    },
    {
      id: "skills",
      en: { title: "Skills", desc: "HTML, CSS, JavaScript, Git & GitHub." },
      ar: { title: "المهارات", desc: "HTML وCSS وJavaScript وGit وGitHub." },
      keywords: ["skills", "html", "css", "javascript", "git", "github", "مهارات"],
    },
    {
      id: "projects",
      en: { title: "Projects", desc: "Personal portfolio and work in progress." },
      ar: { title: "المشاريع", desc: "الموقع الشخصي ومشاريع تحت التنفيذ." },
      keywords: ["projects", "portfolio", "مشاريع", "موقع"],
    },
    {
      id: "contact",
      en: { title: "Contact — Email", desc: "yassa4029@gmail.com" },
      ar: { title: "التواصل — البريد الإلكتروني", desc: "yassa4029@gmail.com" },
      keywords: ["email", "mail", "contact", "ايميل", "بريد", "تواصل"],
    },
    {
      id: "contact",
      en: { title: "Contact — Phone", desc: "+20 122 378 5355" },
      ar: { title: "التواصل — رقم الهاتف", desc: "+20 122 378 5355" },
      keywords: ["phone", "call", "number", "تليفون", "رقم", "هاتف", "01223785355", "1223785355", "223785355"],
    },
    {
      id: "contact",
      en: { title: "Contact — WhatsApp", desc: "Message directly on WhatsApp." },
      ar: { title: "التواصل — واتساب", desc: "تواصل مباشر عن طريق واتساب." },
      keywords: ["whatsapp", "واتساب", "wa"],
    },
  ];
}

function renderSearchResults(query) {
  const resultsEl = document.getElementById("search-results");
  const dict = translations[currentLang];
  const q = query.trim().toLowerCase();
  resultsEl.innerHTML = "";

  if (!q) return;

  const matches = getSearchIndex().filter((item) => {
    const haystack = [
      item.en.title, item.en.desc, item.ar.title, item.ar.desc,
      ...item.keywords,
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });

  if (matches.length === 0) {
    resultsEl.innerHTML = `<p class="search-empty">${dict.search_no_results}</p>`;
    return;
  }

  matches.forEach((item) => {
    const content = item[currentLang];
    const a = document.createElement("a");
    a.href = `#${item.id}`;
    a.className = "search-result";
    a.innerHTML = `<strong>${content.title}</strong><span>${content.desc}</span>`;
    a.addEventListener("click", closeSearch);
    resultsEl.appendChild(a);
  });
}

function openSearch() {
  document.getElementById("search-overlay").classList.add("open");
  document.getElementById("search-overlay").setAttribute("aria-hidden", "false");
  setTimeout(() => document.getElementById("search-input").focus(), 50);
}

function closeSearch() {
  document.getElementById("search-overlay").classList.remove("open");
  document.getElementById("search-overlay").setAttribute("aria-hidden", "true");
}

function initSearch() {
  document.getElementById("search-open").addEventListener("click", openSearch);
  document.getElementById("search-close").addEventListener("click", closeSearch);

  document.getElementById("search-overlay").addEventListener("click", (e) => {
    if (e.target.id === "search-overlay") closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });
}

// ---------------------------------------------------------
// Private area — revealed only by a secret key sequence.
// Not linked from any visible part of the site.
// ---------------------------------------------------------
function initPrivateArea() {
  const section = document.getElementById("private-files");
  const closeBtn = document.getElementById("private-close");
  const SECRET_CODES = ["#2009#", "2009"];
  let buffer = "";

  document.addEventListener("keydown", (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;
    if (e.key.length > 1) return; // ignore Shift, Enter, arrows, etc.

    buffer = (buffer + e.key).slice(-12);

    if (SECRET_CODES.some((code) => buffer.endsWith(code))) {
      revealPrivateArea();
      buffer = "";
    }
  });

  function revealPrivateArea() {
    section.hidden = false;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  closeBtn.addEventListener("click", () => {
    section.hidden = true;
  });
}

// ---------------------------------------------------------
// Footer year
// ---------------------------------------------------------
function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileNav();
  initScrollSpy();
  initSearch();
  initPrivateArea();
  initFooterYear();
});
    

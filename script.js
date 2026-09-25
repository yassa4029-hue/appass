
const languageBtn = document.getElementById("languageBtn");


function setLanguage(lang) {

  // تغيير لغة واتجاه الصفحة
  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";


  // تغيير كل النصوص
  document
    .querySelectorAll("[data-ar][data-en]")
    .forEach((element) => {

      element.textContent =
        element.dataset[lang];

    });


  // تغيير نص زر اللغة
  languageBtn.textContent =
    lang === "ar"
      ? "English 🇬🇧"
      : "العربية 🇪🇬";


  // تغيير عنوان الصفحة
  document.title =
    lang === "ar"
      ? "ياسا عزيز | Portfolio"
      : "Yassa Aziz | Portfolio";


  // حفظ اللغة المختارة
  localStorage.setItem(
    "portfolioLanguage",
    lang
  );
}


// عند الضغط على زر اللغة
languageBtn.addEventListener("click", () => {

  const currentLanguage =
    document.documentElement.lang;

  const newLanguage =
    currentLanguage === "ar"
      ? "en"
      : "ar";

  setLanguage(newLanguage);

});


// استرجاع اللغة السابقة
const savedLanguage =
  localStorage.getItem("portfolioLanguage") || "ar";

setLanguage(savedLanguage);

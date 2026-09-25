document.addEventListener("DOMContentLoaded", () => {
    // =========================
    // Language
    // =========================

    let currentLanguage = "en";

    const languageButton = document.getElementById("languageToggle");

    function updateLanguage() {
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";

        if (languageButton) {
            languageButton.textContent =
                currentLanguage === "en" ? "AR" : "EN";
        }

        document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
            const text =
                currentLanguage === "en"
                    ? element.getAttribute("data-en")
                    : element.getAttribute("data-ar");

            if (text !== null) {
                element.textContent = text;
            }
        });
    }

    if (languageButton) {
        languageButton.addEventListener("click", () => {
            currentLanguage = currentLanguage === "en" ? "ar" : "en";
            updateLanguage();
        });
    }

    // English is the default language
    updateLanguage();


    // =========================
    // Mobile Menu
    // =========================

    const menuButton = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });
    }


    // =========================
    // Active Navigation
    // =========================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    // =========================
    // Scroll Reveal
    // =========================

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project-card, .about-card, .contact-box"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }


    // =========================
    // Back To Top
    // =========================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // =========================
    // Smooth Scrolling
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // =========================
    // Hero Terminal Effect
    // =========================

    const terminal = document.querySelector(".terminal-card");

    if (terminal) {
        terminal.addEventListener("mousemove", (event) => {
            const rect = terminal.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            terminal.style.transform = `
                perspective(1000px)
                rotateY(${x * 5}deg)
                rotateX(${y * -5}deg)
                translateY(-4px)
            `;
        });

        terminal.addEventListener("mouseleave", () => {
            terminal.style.transform = "";
        });
    }


    // =========================
    // Current Year
    // =========================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =========================
    // Prevent Broken # Links
    // =========================

    document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
        });
    });
});

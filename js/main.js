/* =========================================================
   BAPBI
   MAIN JAVASCRIPT
   Bethesda Apostolic Pentecostal Bible Institute
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuButton") ||
        document.querySelector(".mobile-menu-button");

    const mobileNavigation =
        document.getElementById("mobileNavigation") ||
        document.querySelector(".mobile-navigation");

    const mobileMenuClose =
        document.getElementById("mobileMenuClose") ||
        document.querySelector(".mobile-nav-close");

    /* Ensure the mobile trigger is visible on narrow screens. */
    if (mobileMenuButton && window.innerWidth <= 900) {
        mobileMenuButton.style.display = "inline-flex";
        mobileMenuButton.style.marginLeft = "auto";
    }

    function openMobileMenu() {

        if (!mobileNavigation) {
            return;
        }

        mobileNavigation.classList.add("open");
        mobileNavigation.style.display = "flex";
        mobileNavigation.style.position = "fixed";
        mobileNavigation.style.inset = "0";
        mobileNavigation.style.zIndex = "2000";
        mobileNavigation.style.overflowY = "auto";
        mobileNavigation.style.flexDirection = "column";
        mobileNavigation.style.width = "100%";
        mobileNavigation.style.height = "100dvh";
        mobileNavigation.style.background = "#120906";
        mobileNavigation.style.padding = "24px 24px 40px";

        document.body.classList.add("mobile-navigation-open");
        document.body.style.overflow = "hidden";

        if (mobileMenuButton) {
            mobileMenuButton.setAttribute("aria-expanded", "true");
            mobileMenuButton.setAttribute("aria-label", "Close navigation");
        }
    }

    function closeMobileMenu() {

        if (!mobileNavigation) {
            return;
        }

        mobileNavigation.classList.remove("open");
        mobileNavigation.style.display = "none";
        mobileNavigation.style.position = "";
        mobileNavigation.style.inset = "";
        mobileNavigation.style.zIndex = "";
        mobileNavigation.style.overflowY = "";
        mobileNavigation.style.flexDirection = "";
        mobileNavigation.style.width = "";
        mobileNavigation.style.height = "";
        mobileNavigation.style.background = "";
        mobileNavigation.style.padding = "";

        document.body.classList.remove("mobile-navigation-open");
        document.body.style.overflow = "";

        if (mobileMenuButton) {
            mobileMenuButton.setAttribute("aria-expanded", "false");
            mobileMenuButton.setAttribute("aria-label", "Open navigation");
        }
    }

    if (mobileMenuButton && mobileNavigation) {
        mobileMenuButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (mobileNavigation.classList.contains("open")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileMenuClose && mobileNavigation) {
        mobileMenuClose.addEventListener("click", function (event) {
            event.preventDefault();
            closeMobileMenu();
        });
    }

    if (mobileNavigation) {
        mobileNavigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                closeMobileMenu();
            });
        });
    }

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            mobileNavigation &&
            mobileNavigation.classList.contains("open")
        ) {
            closeMobileMenu();
        }
    });

    /* =====================================================
       DESKTOP DROPDOWN NAVIGATION
    ===================================================== */

    document.querySelectorAll(".dropdown-button").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const dropdown = button.closest(".nav-dropdown");

            if (!dropdown) {
                return;
            }

            document.querySelectorAll(".nav-dropdown.open").forEach(function (openDropdown) {
                if (openDropdown !== dropdown) {
                    openDropdown.classList.remove("open");
                }
            });

            dropdown.classList.toggle("open");
        });
    });

    document.addEventListener("click", function () {
        document.querySelectorAll(".nav-dropdown.open").forEach(function (dropdown) {
            dropdown.classList.remove("open");
        });
    });

});
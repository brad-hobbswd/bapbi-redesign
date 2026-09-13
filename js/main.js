/* =========================================================
   BAPBI
   MAIN JAVASCRIPT
   Bethesda Apostolic Pentecostal Bible Institute
========================================================= */

(function () {
    "use strict";

    function initializeNavigation() {
        const mobileMenuButton = document.getElementById("mobileMenuButton") || document.querySelector(".mobile-menu-button");
        const mobileNavigation = document.getElementById("mobileNavigation") || document.querySelector(".mobile-navigation");
        const mobileMenuClose = document.getElementById("mobileMenuClose") || document.querySelector(".mobile-nav-close");

        if (!mobileNavigation) return;

        function openMobileMenu(event) {
            if (event) event.preventDefault();
            mobileNavigation.classList.add("open");
            mobileNavigation.setAttribute("aria-hidden", "false");
            mobileNavigation.style.display = "flex";
            mobileNavigation.style.position = "fixed";
            mobileNavigation.style.inset = "0";
            mobileNavigation.style.zIndex = "9999";
            mobileNavigation.style.width = "100%";
            mobileNavigation.style.height = "100dvh";
            mobileNavigation.style.overflowY = "auto";
            mobileNavigation.style.flexDirection = "column";
            mobileNavigation.style.background = "#120906";
            mobileNavigation.style.padding = "24px 24px 40px";
            document.body.classList.add("mobile-navigation-open");
            document.body.style.overflow = "hidden";
            if (mobileMenuButton) {
                mobileMenuButton.setAttribute("aria-expanded", "true");
                mobileMenuButton.setAttribute("aria-label", "Close navigation");
            }
        }

        function closeMobileMenu(event) {
            if (event) event.preventDefault();
            mobileNavigation.classList.remove("open");
            mobileNavigation.setAttribute("aria-hidden", "true");
            mobileNavigation.style.display = "none";
            mobileNavigation.style.position = "";
            mobileNavigation.style.inset = "";
            mobileNavigation.style.zIndex = "";
            mobileNavigation.style.width = "";
            mobileNavigation.style.height = "";
            mobileNavigation.style.overflowY = "";
            mobileNavigation.style.flexDirection = "";
            mobileNavigation.style.background = "";
            mobileNavigation.style.padding = "";
            document.body.classList.remove("mobile-navigation-open");
            document.body.style.overflow = "";
            if (mobileMenuButton) {
                mobileMenuButton.setAttribute("aria-expanded", "false");
                mobileMenuButton.setAttribute("aria-label", "Open navigation");
            }
        }

        if (mobileMenuButton) {
            mobileMenuButton.style.display = "inline-flex";
            mobileMenuButton.setAttribute("aria-expanded", "false");
            mobileMenuButton.addEventListener("click", function (event) {
                event.stopPropagation();
                if (mobileNavigation.classList.contains("open")) {
                    closeMobileMenu(event);
                } else {
                    openMobileMenu(event);
                }
            });
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener("click", closeMobileMenu);
        }

        mobileNavigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                closeMobileMenu();
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && mobileNavigation.classList.contains("open")) {
                closeMobileMenu();
            }
        });

        document.querySelectorAll(".dropdown-button").forEach(function (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                const dropdown = button.closest(".nav-dropdown");
                if (!dropdown) return;
                document.querySelectorAll(".nav-dropdown.open").forEach(function (openDropdown) {
                    if (openDropdown !== dropdown) openDropdown.classList.remove("open");
                });
                dropdown.classList.toggle("open");
            });
        });

        document.addEventListener("click", function () {
            document.querySelectorAll(".nav-dropdown.open").forEach(function (dropdown) {
                dropdown.classList.remove("open");
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeNavigation, { once: true });
    } else {
        initializeNavigation();
    }
})();
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


    /* -----------------------------------------------------
       OPEN MOBILE NAVIGATION
    ----------------------------------------------------- */

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

        document.body.classList.add(
            "mobile-navigation-open"
        );

        document.body.style.overflow = "hidden";

        if (mobileMenuButton) {

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            mobileMenuButton.setAttribute(
                "aria-label",
                "Close navigation"
            );

        }

    }


    /* -----------------------------------------------------
       CLOSE MOBILE NAVIGATION
    ----------------------------------------------------- */

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

        document.body.classList.remove(
            "mobile-navigation-open"
        );

        document.body.style.overflow = "";

        if (mobileMenuButton) {

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuButton.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    }


    /* -----------------------------------------------------
       HAMBURGER BUTTON
    ----------------------------------------------------- */

    if (
        mobileMenuButton &&
        mobileNavigation
    ) {

        mobileMenuButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (
                    mobileNavigation.classList.contains("open")
                ) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );

    }


    /* -----------------------------------------------------
       CLOSE BUTTON
    ----------------------------------------------------- */

    if (
        mobileMenuClose &&
        mobileNavigation
    ) {

        mobileMenuClose.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closeMobileMenu();

            }
        );

    }


    /* -----------------------------------------------------
       CLOSE AFTER CLICKING A MOBILE NAVIGATION LINK
    ----------------------------------------------------- */

    if (mobileNavigation) {

        const mobileLinks =
            mobileNavigation.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        });

    }


    /* -----------------------------------------------------
       CLOSE WITH ESCAPE KEY
    ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mobileNavigation &&
                mobileNavigation.classList.contains("open")
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       DESKTOP DROPDOWN NAVIGATION
    ===================================================== */

    const dropdownButtons =
        document.querySelectorAll(
            ".dropdown-button"
        );


    dropdownButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const dropdown =
                    button.closest(".nav-dropdown");


                if (!dropdown) {
                    return;
                }


                document
                    .querySelectorAll(
                        ".nav-dropdown.open"
                    )
                    .forEach(function (openDropdown) {

                        if (
                            openDropdown !== dropdown
                        ) {

                            openDropdown.classList.remove(
                                "open"
                            );

                        }

                    });


                dropdown.classList.toggle(
                    "open"
                );

            }
        );

    });


    /* -----------------------------------------------------
       CLOSE DESKTOP DROPDOWNS WHEN CLICKING ELSEWHERE
    ----------------------------------------------------- */

    document.addEventListener(
        "click",
        function () {

            document
                .querySelectorAll(
                    ".nav-dropdown.open"
                )
                .forEach(function (dropdown) {

                    dropdown.classList.remove(
                        "open"
                    );

                });

        }
    );


});
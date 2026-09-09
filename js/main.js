const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");

const mobileMenuClose =
    document.getElementById("mobileMenuClose");


if (
    mobileMenuButton &&
    mobileNavigation
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileNavigation.classList.add(
                "open"
            );

        }
    );

}


if (
    mobileMenuClose &&
    mobileNavigation
) {

    mobileMenuClose.addEventListener(
        "click",
        () => {

            mobileNavigation.classList.remove(
                "open"
            );

        }
    );

}
document.addEventListener("DOMContentLoaded", function() {
    const themeSelector = document.getElementById("theme-selector");
    const body = document.body;
    const logo = document.getElementById("logo");

    themeSelector.addEventListener("change", changeTheme);

    function changeTheme() {
        if (themeSelector.value === "dark") {
            body.classList.add("dark");
            logo.src = "byui-logo-white.png"; // Update logo for dark theme
        } else {
            body.classList.remove("dark");
            logo.src = "byui-logo.png"; // Default logo for light theme
        }
    }
});

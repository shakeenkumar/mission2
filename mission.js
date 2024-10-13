const themeSelector = document.getElementById('theme-selector');
const body = document.body;
const logo = document.getElementById('logo');

themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo-white.png'; // Change to white logo
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo.png'; // Change back to original logo
    }
});

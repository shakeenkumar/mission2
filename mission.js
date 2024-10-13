const themeSelector = document.getElementById('themeSelector');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const currentTheme = themeSelector.value;

    if (currentTheme === "dark") {
        document.body.classList.add('dark'); // Add dark class
        document.getElementById('logo').src = 'byui-logo-white.png'; // Change logo to white
    } else {
        document.body.classList.remove('dark'); // Remove dark class
        document.getElementById('logo').src = 'byui-logo-blue.png'; // Change logo back to blue
    }
}

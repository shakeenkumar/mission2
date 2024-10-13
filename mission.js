// Select the theme selector element
const themeSelector = document.getElementById('theme-selector');

function changeTheme() {
    // Check the selected value
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark'); // Add dark class
        document.getElementById('logo').src = 'byui-logo-white.png'; // Change to white logo
    } else {
        document.body.classList.remove('dark'); // Remove dark class
        document.getElementById('logo').src = 'byui-logo-blue.png'; // Change back to blue logo
    }
}

// Add event listener to theme selector
themeSelector.addEventListener('change', changeTheme);

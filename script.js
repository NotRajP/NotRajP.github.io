function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    } else {
        document.body.className = 'light-theme';
    }
}

document.getElementById('light_button').addEventListener('click', () => {
    setTheme('light-theme');
});

document.getElementById('dark_button').addEventListener('click', () => {
    setTheme('dark-theme');
});

window.addEventListener('load', loadTheme);
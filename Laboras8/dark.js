
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;


themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); 

    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Light';
    } else {
        themeToggleButton.textContent = 'Dark';
    }
});

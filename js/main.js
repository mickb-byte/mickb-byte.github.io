/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`${link.textContent} link clicked`);
        });
    });
});
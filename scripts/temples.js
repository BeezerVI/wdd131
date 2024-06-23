document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        navUL.classList.toggle('show');
        // Change the symbol to 'X' when the menu is open
        if (navUL.classList.contains('show')) {
            hamburger.innerHTML = '&times;';
        } else {
            hamburger.innerHTML = '&#9776;';
        }
    });
});
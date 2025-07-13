// JS para menú móvil
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

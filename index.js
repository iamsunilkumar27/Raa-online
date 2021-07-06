'use strict'

document.getElementById('year').innerText = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('mobile-nav');
    const mobileNav = document.getElementById('mobile-navbar');
    ['menu-open-btn', 'menu-close-btn'].forEach((id) => {
        document.getElementById(id).addEventListener('click', () => {
            openMobileNavbar()
        });
    })

    function openMobileNavbar() {
        mainContainer.style.display = mainContainer.style.display === 'none' ? 'block' : 'none';
        mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
    }
});
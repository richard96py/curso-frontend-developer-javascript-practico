const menuEmail = document.querySelector('.navbar-email');
const destktopMenu = document.querySelector('.desktop-menu');
const iconHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
iconHamMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu(){
    destktopMenu.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');
const destktopMenu = document.querySelector('.desktop-menu');
const iconHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarritoMenu = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
iconHamMenu.addEventListener('click', toggleMobileMenu);
iconCarritoMenu.addEventListener('click', toggleCarritoMenu);

function toggleCarritoMenu(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = destktopMenu.classList.contains('inactive');

    if(!isMobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        destktopMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if(!isCarritoMenuClosed){
        carritoMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');


}

function toggleDesktopMenu(){
    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if(!isCarritoMenuClosed){
        carritoMenu.classList.add('inactive');
    }

    destktopMenu.classList.toggle('inactive');
}
window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const menuLinks = document.querySelector('.mobile-nav-a');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');             // cross hamburger
        mobile_menu.classList.toggle('is-active');          // open mobile nav
    });

    menuLinks.addEventListener('click', function () {
        menu_btn.classList.remove('is-active');             // bar hamburger
        mobile_menu.classList.remove('is-active');          // close mobile nav
    });

}
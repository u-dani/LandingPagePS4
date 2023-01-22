
let menu = document.querySelector('.js-menu');
const menuIcon = document.querySelector('.js-menu-icon');

menuIcon.addEventListener('click', showHideMenu);


function showHideMenu() {

    if (menu.style.display == 'block') {
        menu.style.display = 'none';

    } else {
        menu.style.display = 'block';
    }
}


window.onresize = ( size ) => {

    if ( window.innerWidth >= 650) {
        menu.style.display = 'block';
    }
}

'use strict';

window.onload = function() {
    let menuTrigger = document.querySelector('.header__menu'),
        closeMenuButton = document.querySelector('.side-nav__close-menu'),
        blackoutCurtain = document.querySelector('.page__blackout'),
        pageBody = document.querySelector('body');

    menuTrigger.addEventListener('click', function() {
        pageBody.classList.toggle('open-nav');
    })
    closeMenuButton.addEventListener('click', function() {
        pageBody.classList.toggle('open-nav');
    })
    blackoutCurtain.addEventListener('click', function() {
        pageBody.classList.toggle('open-nav');
    })
}

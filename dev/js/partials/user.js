'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet slider__dot',
            bulletActiveClass: 'swiper-pagination-bullet-active slider__dot_active',
            //dynamicBullets: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
})

window.onload = function() {
    let menuTrigger = document.querySelector('.header__menu'),
        closeMenuButton = document.querySelector('.side-nav__close-menu'),
        blackoutCurtain = document.querySelector('.page__blackout'),
        pageBody = document.querySelector('body'),
        headerNavItems = document.querySelectorAll('.header__item'),
        headerNav = document.querySelector('.header__nav');

    menuTrigger.addEventListener('click', function() {
        pageBody.classList.toggle('open-nav');
    })
    closeMenuButton.addEventListener('click', function() {
        pageBody.classList.toggle('open-nav');
    })
    blackoutCurtain.addEventListener('click', function() {
        pageBody.classList.toggle('open-nav');
    })
    headerNav.addEventListener('click', function() {
        if(headerNavItems.className == 'header__item' && headerNavItem.className != 'header__item_active') {
            headerNavItems.classList.add('header__item_active');
           //- headerNavItem.classList.add('.header__item_active');
        }
        //-headerNavActive.classList.add('header__item_active');
        //headerNavTrigger.classList.remove('header__item_active');
        //headerNavTrigger.classList.toggle('header__item_active');
    })
}

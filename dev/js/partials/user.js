'use strict';

window.onload = function() {
    // side-nav
    let menuTriggers = document.querySelectorAll('.header__menu, .side-nav__cross, .page__blackout'),
        pageBody = document.querySelector('body');
    for(let i = 0; i < menuTriggers.length; i++) {
        menuTriggers[i].addEventListener('click', function() {
            pageBody.classList.toggle('open-nav');
        });
    }

    // slider
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet slider__dot',
            bulletActiveClass: 'swiper-pagination-bullet-active slider__dot_active',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /*let headerNavItems = document.querySelectorAll('.header__item');
    for (let j = 0; j < headerNavItems.length; j++) {
        headerNavItems[j].addEventListener('click', function() {
            this.classList.add('header__item_active');
            siblings = getSiblings(document.querySelector('.header__item_active'));
            for (let k = 0; k < siblings.length; k++) {
                siblings.classList.remove('header__item_active');
            }
        })
    }*/
}

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { BACKROUND_LINKS, MEDIA } from './util.js';

const paginationListNames = ['Home', 'Destination', 'Crew', 'Technology'];

// init Swiper:
export const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  speed: 500,
  effect: 'fade',
  slidesPerView: 'auto',
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'site-list__item',
    bulletElement: 'button',
    bulletActiveClass: 'site-list__active-item',
    renderBullet: function (index, className) {
      let text = '';
      for (let i = 0; i <= paginationListNames.length - 1; i++) {
        if (index == 0) {
          text = `<div class="${className} site-list__active-item">
            <button class="site-list__link"><span>0${index}</span> ${paginationListNames[index]}</button>
          </div>`;
        } else {
          text = `<div class="${className}">
            <button class="site-list__link"><span>0${index}</span> ${paginationListNames[index]}</button>
          </div>`;
        }
      }
      return text;
    },
  },

  slidesPerView: 1,
  spaceBetween: 0,
});

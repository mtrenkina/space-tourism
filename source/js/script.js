import { changeCrewMember } from './crew.js';
import { changePlanet } from './destination.js';
import { changeTechnology } from './technology.js';
import { swiper } from './swiper.js';
import { addClosedClass, addOpenedClass, closeMainNav } from './main-nav.js';
import {
  changeBackground,
  changeTechnologyPhoto,
  getActivePage,
} from './util.js';
import {
  startTechnologyPageAnimations,
  startDestinationPageAnimations,
  startMainPageAnimations,
  startCrewPageAnimations,
  startChangeDestinationAnimations,
  startChangeCrewAnimations,
  startChangeTechnologyAnimations,
} from './animations.js';

//Navigation menu
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toogle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    addOpenedClass(navMain);
  } else {
    addClosedClass(navMain);
  }
});

const crew = document.querySelector('.crew');
const crewList = crew.querySelector('.crew__team-list');

const destination = document.querySelector('.destination');
const planetList = destination.querySelector('.destination__planet-list');

const technology = document.querySelector('.technology');
const technologyList = technology.querySelector('.technology__list');

crewList.addEventListener('click', (event) => {
  let target = event.target;

  if (target.tagName !== 'BUTTON') {
    return;
  } else {
    changeCrewMember(target, crew, crewList);
    startChangeCrewAnimations();
  }
});

planetList.addEventListener('click', (event) => {
  let target = event.target;
  let parent = null;

  if (target.tagName === 'SPAN') {
    parent = target.parentNode;
  } else if (target.tagName === 'BUTTON') {
    parent = target;
  }

  if (target.tagName !== 'BUTTON' && target.tagName !== 'SPAN') {
    return;
  } else {
    changePlanet(parent, destination, planetList);
    startChangeDestinationAnimations();
  }
});

technologyList.addEventListener('click', (event) => {
  let target = event.target;
  let parent = null;

  if (target.tagName === 'SPAN') {
    parent = target.parentNode;
  } else if (target.tagName === 'BUTTON') {
    parent = target;
  }

  if (target.tagName !== 'BUTTON' && target.tagName !== 'SPAN') {
    return;
  } else {
    changeTechnology(parent, technology, technologyList);
    startChangeTechnologyAnimations();
  }
});

const mainButton = document.querySelector('.promo__button');
mainButton.addEventListener('click', () => {
  swiper.slideTo(1, 500, false);
  startDestinationPageAnimations(true);
});

swiper.on('activeIndexChange', () => {
  changeBackground(swiper.activeIndex);
  closeMainNav(navMain);
  if (swiper.activeIndex === 3) changeTechnologyPhoto();

  switch (getActivePage()) {
    case 1:
      startDestinationPageAnimations(false);
      break;
    case 2:
      startCrewPageAnimations();
      break;
    case 3:
      startTechnologyPageAnimations();
      break;
    default:
      break;
  }
});

window.addEventListener(
  'resize',
  () => {
    changeBackground(swiper.activeIndex);
    if (swiper.activeIndex === 3) changeTechnologyPhoto();
  },
  true
);

startMainPageAnimations();

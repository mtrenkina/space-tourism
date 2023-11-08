import { gsap, EasePack } from 'gsap/all.js';
gsap.registerPlugin(EasePack);
import { changeCrewMember } from './crew.js';
import { changePlanet } from './destination.js';
import { changeTechnology } from './technology.js';
import { swiper } from './swiper.js';
import { addClosedClass, addOpenedClass, closeMainNav } from './main-nav.js';
import { changeBackground, changeTechnologyPhoto } from './util.js';

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
  }
});

const mainButton = document.querySelector('.promo__button');
mainButton.addEventListener('click', () => swiper.slideNext(900));

swiper.on('activeIndexChange', () => {
  changeBackground(swiper.activeIndex);
  closeMainNav(navMain);
  if (swiper.activeIndex === 3) changeTechnologyPhoto();
});

window.addEventListener(
  'resize',
  () => {
    changeBackground(swiper.activeIndex);
    if (swiper.activeIndex === 3) changeTechnologyPhoto();
  },
  true
);

//Animations
const tl = gsap.timeline();
const spaceTitle = document.querySelector(".shine");
const spaceLetters = spaceTitle.innerHTML.split('');
let newText = '';
 for (let i = 0; i < spaceLetters.length; i++) {
  newText += `<span>${spaceLetters[i]}</span>`
};
spaceTitle.innerHTML = newText;
const TextShadowString = `0 0 10px #fff,
0 0 20px #fff, 
0 0 30px #fff`;

const TextShadowString2 = `0 0 8px #fff,
0 0 15px #fff, 
0 0 22px #fff`;

const TextShadowString3 = `0 0 5px #fff,
0 0 10px #fff, 
0 0 14px #fff`;

const TextShadowString4 = `0 0 2px #fff,
0 0 5px #fff, 
0 0 6px #fff`;

const TextShadowString5 = `0 0 00px #fff,
0 0 00px #fff, 
0 0 00px #fff`;

tl.fromTo('.container-background', { opacity: 0 }, { opacity: 1, duration: 3 });
tl.fromTo(
  '.shine span',
  { opacity: 0 },
  {
    opacity: 1,
    textShadow: TextShadowString,
    ease: "slow(0.7,0.7,false)",
    stagger: 0.2,
    duration: 2,
  },
  1
);
tl.fromTo(
  '.shine span',
  { textShadow: TextShadowString },
  { textShadow: TextShadowString2, duration: 0.3 },
  3
);
tl.fromTo(
  '.shine span',
  { textShadow: TextShadowString2 },
  { textShadow: TextShadowString3, duration: 0.3 },
  3.3
);
tl.fromTo(
  '.shine span',
  { textShadow: TextShadowString3 },
  { textShadow: TextShadowString4, duration: 0.3 },
  3.6
);
tl.fromTo(
  '.shine span',
  { textShadow: TextShadowString4 },
  { textShadow: TextShadowString5, ease: 'slow', duration: 0.3 },
  3.9
);
tl.fromTo(
  '.promo__title',
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0, duration: 2 },
  4
);
tl.fromTo(
  '.promo__description',
  { opacity: 0, x: 100 },
  { opacity: 1, x: 0, duration: 2 },
  4
);
tl.fromTo(
  '.main-nav__logo',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1 },
  5
);
tl.fromTo(
  '.main-nav__toogle',
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 1 },
  5
);
tl.fromTo(
  '.main-nav__wrapper',
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 1 },
  5
);
tl.fromTo(
  '.main-nav__wrapper .site-list__item',
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
  5
);
tl.fromTo(
  '.main-nav__line',
  { opacity: 0, x: 100 },
  { opacity: 1, x: 0, duration: 1 },
  5
);
tl.fromTo('.promo__button', { opacity: 0 }, { opacity: 1, duration: 1 }, 6.4);

import { gsap, EasePack } from 'gsap/all.js';
gsap.registerPlugin(EasePack);

const splitWordtoSpans = (el) => {
  const letters = el.innerHTML.split('');
  let newText = '';
  for (let i = 0; i < letters.length; i++) {
    newText += `<span>${letters[i]}</span>`;
  }
  el.innerHTML = newText;
};

export const startMainPageAnimations = () => {
  const tl = gsap.timeline();
  const title = document.querySelector('.shine');
  const previousTitle = title.innerHTML;
  splitWordtoSpans(title);

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

  tl.fromTo(
    '.container-background',
    { opacity: 0 },
    { opacity: 1, duration: 3 }
  );
  tl.fromTo(
    '.shine span',
    { opacity: 0 },
    {
      opacity: 1,
      textShadow: TextShadowString,
      ease: 'slow(0.7,0.7,false)',
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

  tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
};

export const startDestinationPageAnimations = (fromButton) => {
  const tl = gsap.timeline();
  const title = document.querySelector('.destination__planet-title');
  const previousTitle = title.innerHTML;

  if (!fromButton) {
    splitWordtoSpans(title);
  }

  tl.fromTo(
    '.destination__title span',
    { opacity: 0, y: 25 },
    { opacity: 0.25, y: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.destination__title div',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.destination__image',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    1.6
  );
  if (!fromButton) {
    tl.fromTo(
      '.destination__planet-title span',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.4 },
      1
    );
  } else {
    tl.fromTo(
      '.destination__planet-title',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.4 },
      1
    );
  }
  tl.fromTo(
    '.destination__description',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    1.6
  );
  tl.fromTo(
    '.destination__planet',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
    2.7
  );
  tl.fromTo(
    '.destination__description-list dt',
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, stagger: 0.3, duration: 0.6 },
    2
  );
  tl.fromTo(
    '.destination__description-list dd',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, stagger: 0.3, duration: 0.6 },
    2
  );

  if (!fromButton) {
    tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
  }
};

export const startChangeDestinationAnimations = () => {
  const tl = gsap.timeline();
  const title = document.querySelector('.destination__planet-title');
  const previousTitle = title.innerHTML;
  const letterCount = previousTitle.length;
  splitWordtoSpans(title);

  tl.fromTo('.destination__image', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.destination__image',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.5 },
    0
  );
  tl.fromTo('.destination__planet-title', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo('.destination__planet-title', { opacity: 0 }, { opacity: 1 }, 0);
  tl.fromTo(
    '.destination__planet-title span',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, stagger: 0.1, duration: `0.${letterCount}` },
    0.1
  );
  tl.fromTo('.destination__description', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.destination__description',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.destination__description-list dd',
    { opacity: 1 },
    { opacity: 0 },
    0
  );
  tl.fromTo(
    '.destination__description-list dd',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.5 },
    0
  );

  tl.eventCallback('onUpdate', () => (title.innerHTML = previousTitle));
  tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
};

export const startCrewPageAnimations = () => {
  const tl = gsap.timeline();
  const title = document.querySelector('.crew__person-name');
  const previousTitle = title.innerHTML;
  splitWordtoSpans(title);

  tl.fromTo(
    '.crew__title span',
    { opacity: 0, y: 25 },
    { opacity: 0.25, y: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.crew__title div',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.crew__image',
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 },
    2.5
  );
  tl.fromTo(
    '.crew__person-name span',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 1.4 },
    1
  );
  tl.fromTo(
    '.crew__person-title',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1 },
    2.5
  );
  tl.fromTo(
    '.crew__person-description',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    2.5
  );
  tl.fromTo(
    '.crew__person',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 },
    3.5
  );

  tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
};

export const startChangeCrewAnimations = () => {
  const tl = gsap.timeline();
  const title = document.querySelector('.crew__person-name');
  const previousTitle = title.innerHTML;
  let letterCount = '0.4';
  const letters = [...previousTitle].length;

  if (letters < 9) {
    letterCount = `0.${letterCount}`;
  } else {
    letterCount = `${letters[0]}.${letters[1]}`;
  }

  splitWordtoSpans(title);

  tl.fromTo('.crew__image', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.crew__image',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.5 },
    0
  );
  tl.fromTo('.crew__person-name', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo('.crew__person-name', { opacity: 0 }, { opacity: 1 }, 0);
  tl.fromTo(
    '.crew__person-name span',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, stagger: 0.1, duration: `${letterCount}` },
    0.1
  );
  tl.fromTo('.crew__person-description', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.crew__person-description',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );
  tl.fromTo('.crew__person-title', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.crew__person-title',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );

  tl.eventCallback('onUpdate', () => (title.innerHTML = previousTitle));
  tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
};

export const startTechnologyPageAnimations = () => {
  const tl = gsap.timeline();
  const title = document.querySelector('.technology__item-name');
  const previousTitle = title.innerHTML;
  splitWordtoSpans(title);

  tl.fromTo(
    '.technology__title span',
    { opacity: 0, y: 25 },
    { opacity: 0.25, y: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.technology__title div',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );
  tl.fromTo(
    '.technology__image',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    3.5
  );
  tl.fromTo(
    '.technology__item-name span',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 1.4 },
    1
  );
  tl.fromTo(
    '.technology__item-title',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1 },
    2.5
  );
  tl.fromTo(
    '.technology__item-description',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 },
    2.5
  );
  tl.fromTo(
    '.technology__item',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 },
    3.5
  );

  tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
};

export const startChangeTechnologyAnimations = () => {
  const tl = gsap.timeline();
  const title = document.querySelector('.technology__item-name');
  const previousTitle = title.innerHTML;
  let letterCount = '0.4';
  const letters = [...previousTitle].length;

  if (letters < 9) {
    letterCount = `0.${letterCount}`;
  } else {
    letterCount = `${letters[0]}.${letters[1]}`;
  }

  splitWordtoSpans(title);

  tl.fromTo('.technology__image', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.technology__image',
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1 },
    0
  );
  tl.fromTo('.technology__item-name', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo('.technology__item-name', { opacity: 0 }, { opacity: 1 }, 0);
  tl.fromTo(
    '.technology__item-name span',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, stagger: 0.1, duration: `${letterCount}` },
    0.1
  );
  tl.fromTo('.technology__item-description', { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(
    '.technology__item-description',
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.5 },
    0
  );

  tl.eventCallback('onUpdate', () => (title.innerHTML = previousTitle));
  tl.eventCallback('onComplete', () => (title.innerHTML = previousTitle));
};

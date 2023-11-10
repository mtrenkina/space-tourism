import gsap from 'gsap';

export const BACKROUND_LINKS = {
  0: {
    mobile:
      'https://mtrenkina.github.io/space-tourism/img/home/background-home-mobile.jpg',
    tablet:
      'https://mtrenkina.github.io/space-tourism/img/home/background-home-tablet.jpg',
    desktop:
      'https://mtrenkina.github.io/space-tourism/img/home/background-home-desktop.jpg',
  },
  1: {
    mobile:
      'https://mtrenkina.github.io/space-tourism/img/destination/background-destination-mobile.jpg',
    tablet:
      'https://mtrenkina.github.io/space-tourism/img/destination/background-destination-tablet.jpg',
    desktop:
      'https://mtrenkina.github.io/space-tourism/img/destination/background-destination-desktop.jpg',
  },
  2: {
    mobile:
      'https://mtrenkina.github.io/space-tourism/img/crew/background-crew-mobile.jpg',
    tablet:
      'https://mtrenkina.github.io/space-tourism/img/crew/background-crew-tablet.jpg',
    desktop:
      'https://mtrenkina.github.io/space-tourism/img/crew/background-crew-desktop.jpg',
  },
  3: {
    mobile:
      'https://mtrenkina.github.io/space-tourism/img/technology/background-technology-mobile.jpg',
    tablet:
      'https://mtrenkina.github.io/space-tourism/img/technology/background-technology-tablet.jpg',
    desktop:
      'https://mtrenkina.github.io/space-tourism/img/technology/background-technology-desktop.jpg',
  },
};

export const MEDIA = {
  mobile: window.matchMedia('(max-width: 767px)'),
  tablet: window.matchMedia('(max-width: 1439px)'),
  desktop: window.matchMedia('(min-width: 1440px)'),
};

export const TECHNOLOGY_PHOTOS = {
  0: {
    portrait:
      'https://mtrenkina.github.io/space-tourism/img/technology/image-launch-vehicle-portrait.jpg',
    landscape:
      'https://mtrenkina.github.io/space-tourism/img/technology/image-launch-vehicle-landscape.jpg',
  },
  1: {
    portrait:
      'https://mtrenkina.github.io/space-tourism/img/technology/image-spaceport-portrait.jpg',
    landscape:
      'https://mtrenkina.github.io/space-tourism/img/technology/image-spaceport-landscape.jpg',
  },
  2: {
    portrait:
      'https://mtrenkina.github.io/space-tourism/img/technology/image-space-capsule-portrait.jpg',
    landscape:
      'https://mtrenkina.github.io/space-tourism/img/technology/image-space-capsule-landscape.jpg',
  },
};

export const changeTechnologyPhoto = () => {
  const technologyList = document.querySelector('.technology__list');
  const dots = technologyList.querySelectorAll('li');
  const activeTechnology = technologyList.querySelector(
    'li.technology__item--active'
  );
  const slideNumber = [...dots].indexOf(activeTechnology);
  const imageTechnology = document.querySelector('.technology__image img');

  if (MEDIA.mobile.matches) {
    imageTechnology.setAttribute(
      'src',
      TECHNOLOGY_PHOTOS[slideNumber].landscape
    );
  } else if (MEDIA.tablet.matches) {
    imageTechnology.setAttribute(
      'src',
      TECHNOLOGY_PHOTOS[slideNumber].landscape
    );
  } else {
    imageTechnology.setAttribute(
      'src',
      TECHNOLOGY_PHOTOS[slideNumber].portrait
    );
  }
};

const backgroundRemove = () => {
  gsap.fromTo(
    '.container-background',
    { opacity: 1 },
    { opacity: 0 }
  );
};

const backgroundAddition = () => {
  gsap.fromTo(
    '.container-background',
    { opacity: 0 },
    { opacity: 1, duration: 2}
  );
};

export const changeBackground = (index) => {
  const backgroundContainer = document.querySelector('.container-background');

  if (MEDIA.mobile.matches) {
    backgroundRemove();
    backgroundContainer.style.backgroundImage = `url(${BACKROUND_LINKS[index].mobile})`;
    backgroundAddition();
  } else if (MEDIA.tablet.matches) {
    backgroundRemove();
    backgroundContainer.style.backgroundImage = `url(${BACKROUND_LINKS[index].tablet})`;
    backgroundAddition();
  } else {
    backgroundRemove();
    backgroundContainer.style.backgroundImage = `url(${BACKROUND_LINKS[index].desktop})`;
    backgroundAddition();
  }
};

export const getActivePage = () => {
  const pages = document.querySelector('.swiper-wrapper');
  const visiblePage = pages.querySelector('section.swiper-slide-visible');
  const arr = [...pages.childNodes].filter((el) => el.nodeName !== '#text');

  return arr.indexOf(visiblePage);
};

export const before = (n, func) => {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function () {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
};

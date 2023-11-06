export const BACKROUND_LINKS = {
  0: {
    mobile: '../../img/home/background-home-mobile.jpg',
    tablet: '../../img/home/background-home-tablet.jpg',
    desktop: '../../img/home/background-home-desktop.jpg',
  },
  1: {
    mobile: '../../img/destination/background-destination-mobile.jpg',
    tablet: '../../img/destination/background-destination-tablet.jpg',
    desktop: '../../img/destination/background-destination-desktop.jpg',
  },
  2: {
    mobile: '../../img/crew/background-crew-mobile.jpg',
    tablet: '../../img/crew/background-crew-tablet.jpg',
    desktop: '../../img/crew/background-crew-desktop.jpg',
  },
  3: {
    mobile: '../../img/technology/background-technology-mobile.jpg',
    tablet: '../../img/technology/background-technology-tablet.jpg',
    desktop: '../../img/technology/background-technology-desktop.jpg',
  },
};

export const MEDIA = {
  mobile: window.matchMedia('(max-width: 767px)'),
  tablet: window.matchMedia('(max-width: 1439px)'),
  desktop: window.matchMedia('(min-width: 1440px)'),
};

export const TECHNOLOGY_PHOTOS = {
  0: {
    portrait: '../../img/technology/image-launch-vehicle-portrait.jpg',
    landscape: '../../img/technology/image-launch-vehicle-landscape.jpg',
  },
  1: {
    portrait: '../../img/technology/image-spaceport-portrait.jpg',
    landscape: '../../img/technology/image-spaceport-landscape.jpg',
  },
  2: {
    portrait: '../../img/technology/image-space-capsule-portrait.jpg',
    landscape: '../../img/technology/image-space-capsule-landscape.jpg',
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

export const changeBackground = (index) => {
  const backgroundContainer = document.querySelector('.container-background');

  if (MEDIA.mobile.matches) {
    backgroundContainer.style.backgroundImage = `url(${BACKROUND_LINKS[index].mobile})`;
    backgroundContainer.style.transition = `background-image 0.8s ease`;
  } else if (MEDIA.tablet.matches) {
    backgroundContainer.style.backgroundImage = `url(${BACKROUND_LINKS[index].tablet})`;
    backgroundContainer.style.transition = `background-image 0.8s ease`;
  } else {
    backgroundContainer.style.backgroundImage = `url(${BACKROUND_LINKS[index].desktop})`;
    backgroundContainer.style.transition = `background-image 0.8s ease`;
  }
};

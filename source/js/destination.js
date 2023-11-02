import { data } from './data.js';

export const changePlanet = (el, destination, planetList) => {
  const image = destination.querySelector('.destination__image img');
  const planetTitle = destination.querySelector('.destination__planet-title');
  const planetDescription = destination.querySelector(
    '.destination__description'
  );
  const distance = destination.querySelector('#destination__distance');
  const travelTime = destination.querySelector('#destination__travel-time');
  const active = planetList.querySelector('li.destination__planet--active');

  // Active list element changing
  active.classList.remove('destination__planet--active');
  el.parentNode.classList.add('destination__planet--active');

  const dots = planetList.querySelectorAll('li');
  const slideNumber = [...dots].indexOf(el.parentNode);

  // Crew member view changing
  const destinationsInfo = data.destinations;
  const planetInfo = destinationsInfo[slideNumber];
  image.setAttribute('src', planetInfo.images.webp);
  image.setAttribute('alt', planetInfo.name);
  planetTitle.innerHTML = planetInfo.name;
  planetDescription.innerHTML = planetInfo.description;
  distance.innerHTML = planetInfo.distance;
  travelTime.innerHTML = planetInfo.travel;
};

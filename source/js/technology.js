import { data } from './data.js';

export const changeTechnology = (el, technology, technologyList) => {
  const image = technology.querySelector('.technology__image img');
  const technologyTitle = technology.querySelector('.technology__item-title');
  const technologyDescription = technology.querySelector(
    '.technology__item-description'
  );
  const active = technologyList.querySelector('li.technology__item--active');

  // Active list element changing
  active.classList.remove('technology__item--active');
  el.parentNode.classList.add('technology__item--active');

  const dots = technologyList.querySelectorAll('li');
  const slideNumber = [...dots].indexOf(el.parentNode);

  // Crew member view changing
  const technologyData = data.technology;
  const technologyInfo = technologyData[slideNumber];
  image.setAttribute('src', technologyInfo.images.portrait);
  image.setAttribute('alt', technologyInfo.name);
  technologyTitle.innerHTML = technologyInfo.name;
  technologyDescription.innerHTML = technologyInfo.description;
};

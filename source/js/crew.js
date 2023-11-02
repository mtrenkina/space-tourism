import { data } from './data.js';

export const changeCrewMember = (el, crew, crewList) => {
  const image = crew.querySelector('.crew__image img');
  const personTitle = crew.querySelector('.crew__person-title');
  const personName = crew.querySelector('.crew__person-name');
  const personDescription = crew.querySelector('.crew__person-description');
  const active = crewList.querySelector('li.crew__person--active');

  // Active list element changing
  active.classList.remove('crew__person--active');
  el.parentNode.classList.add('crew__person--active');

  const dots = crewList.querySelectorAll('li');
  const slideNumber = [...dots].indexOf(el.parentNode);

  // Crew member view changing
  const crewInfo = data.crew;
  const personInfo = crewInfo[slideNumber];
  image.setAttribute('src', personInfo.images.webp);
  image.setAttribute('alt', personInfo.name);
  personTitle.innerHTML = personInfo.role;
  personName.innerHTML = personInfo.name;
  personDescription.innerHTML = personInfo.bio;
};

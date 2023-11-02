import { changeCrewMember } from './crew.js';
import { changePlanet } from './destination.js';
import { changeTechnology } from './technology.js';

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

import { MEDIA } from "./util.js";

export const addClosedClass = (list) => {
  list.classList.add('main-nav--closed');
  list.classList.remove('main-nav--opened');
};

export const addOpenedClass = (list) => {
  list.classList.remove('main-nav--closed');
  list.classList.add('main-nav--opened');
};

export const closeMainNav = (list) => {
  if (MEDIA.mobile.matches) {
    addClosedClass(list);
  };
};

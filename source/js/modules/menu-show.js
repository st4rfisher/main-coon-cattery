const menu = document.querySelector('.menu');
const closeButton = menu.querySelector('.menu__close-button');
const openButton = document.querySelector('.header__burger-menu');

document.addEventListener('DOMContentLoaded', () => {
  menu.classList.remove('menu--no-js')
  openButton.classList.add('header__burger-menu--show')
  closeButton.classList.add('menu__close-button--show')
  menu.classList.remove('menu--show')
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--show')
});

openButton.addEventListener('click', () => {
  menu.classList.add('menu--show')
});

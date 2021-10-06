import {showElement} from './utils.js';
const gallery = document.querySelector('.team-gallery');
const galleryElements = gallery.querySelectorAll('.team-gallery__member');
const leftSlider = gallery.querySelector('.team-gallery__slider--left');
const rightSlider = gallery.querySelector('.team-gallery__slider--right');
let currentIndex = 0;

rightSlider.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= galleryElements.length) {
    currentIndex = 0;
  }

  showElement(currentIndex, galleryElements, 'team-gallery__member--show');
});

leftSlider.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = galleryElements.length;
  }

  currentIndex--;
  showElement(currentIndex, galleryElements, 'team-gallery__member--show');
});

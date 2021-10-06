import {showElement} from './utils.js';
const gallery = document.querySelector('.reviews-gallery');
const galleryElements = gallery.querySelectorAll('.reviews-gallery__reviewer');
const leftSlider = gallery.querySelector('.reviews-gallery__slider--left');
const rightSlider = gallery.querySelector('.reviews-gallery__slider--right');
let currentIndex = 0;

rightSlider.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= galleryElements.length) {
    currentIndex = 0;
  }

  showElement(currentIndex, galleryElements, 'reviews-gallery__reviewer--show');
});

leftSlider.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = galleryElements.length;
  }

  currentIndex--;
  showElement(currentIndex, galleryElements, 'reviews-gallery__reviewer--show');
});

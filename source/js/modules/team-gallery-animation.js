import {showElement} from './utils.js';
const gallery = document.querySelector('.team-gallery');
const galleryBlocks = gallery.querySelectorAll('.team-gallery__member');
const leftSlider = gallery.querySelector('.team-gallery__slider--left');
const rightSlider = gallery.querySelector('.team-gallery__slider--right');
let currentIndex = 0;

rightSlider.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= galleryBlocks.length) {
    currentIndex = 0;
  }

  showElement(currentIndex, galleryBlocks, 'team-gallery__member--show');
});

leftSlider.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = galleryBlocks.length;
  }

  currentIndex--;
  showElement(currentIndex, galleryBlocks, 'team-gallery__member--show');
});

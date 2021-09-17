const gallery = document.querySelector('.pets-gallery');
const galleryButtons = gallery.querySelectorAll('.pets-gallery__button');
const galleryBlocks = gallery.querySelectorAll('.pets-gallery__block');
const galleryButtonsArray = Array.prototype.slice.call(galleryButtons);
const leftSlider = gallery.querySelector('.pets-gallery__slider--left');
const rightSlider = gallery.querySelector('.pets-gallery__slider--right');

const actionGallery = (button, block) => {
  button.classList.add('pets-gallery__button--active');
  galleryBlocks.forEach((block) => block.classList.remove('pets-gallery__block--show'));
  block.classList.add('pets-gallery__block--show');
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    galleryButtons.forEach((button) => button.classList.remove('pets-gallery__button--active'));
    const index = galleryButtonsArray.indexOf(button);
    actionGallery(button, galleryBlocks[index])
  })
});

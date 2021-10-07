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

const list = document.querySelector('.questions-answers__list');
const buttons = list.querySelectorAll('.questions-answers__button');
const answerBlocks = list.querySelectorAll('.questions-answers__answer');
const icons = list.querySelectorAll('.questions-answers__icon');
const unfurlIcon = '<use xlink:href="img/icons/sprite.svg#unfurl-icon"></use>';
const curtailIcon = '<use xlink:href="img/icons/sprite.svg#curtail-icon"></use>';

const buttonsArray = Array.prototype.slice.call(buttons); //преобразуем псевдо-массив Node-узлов в массив элементов

const action = (icon, answer, button) => {
  if (button.classList.contains('questions-answers__button--active')) {
    icon.innerHTML='';
    icon.insertAdjacentHTML('afterBegin', unfurlIcon);
    icon.classList.toggle('questions-answers__icon--curtail')
    button.classList.toggle('questions-answers__button--active');
    answer.classList.toggle('questions-answers__answer--show');
  } else {
    icon.innerHTML='';
    icon.insertAdjacentHTML('afterBegin', curtailIcon);
    icon.classList.toggle('questions-answers__icon--curtail')
    button.classList.toggle('questions-answers__button--active');
    answer.classList.toggle('questions-answers__answer--show');
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
   const index = buttonsArray.indexOf(button);
   action(icons[index], answerBlocks[index], button)
  })
});

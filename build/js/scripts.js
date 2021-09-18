const gallery = document.querySelector('.pets-gallery');
const galleryButtons = gallery.querySelectorAll('.pets-gallery__button');
const galleryBlocks = gallery.querySelectorAll('.pets-gallery__block');
const galleryButtonsArray = Array.prototype.slice.call(galleryButtons);
const leftSlider = gallery.querySelector('.pets-gallery__slider--left');
const rightSlider = gallery.querySelector('.pets-gallery__slider--right');
const heCatsItems = gallery.querySelector('.pets-gallery__block.pets-gallery__block--he-cats').querySelectorAll('.pets-gallery__photo');
const sheCatsItems = gallery.querySelector('.pets-gallery__block.pets-gallery__block--she-cats').querySelectorAll('.pets-gallery__photo');
const kittensItems = gallery.querySelector('.pets-gallery__block.pets-gallery__block--kittens').querySelectorAll('.pets-gallery__photo');
let currentTab = 'he-cats';
let currentIndex = 0;

//переключение вкладок
const switchingTabs = (button, block) => {
  button.classList.add('pets-gallery__button--active');
  galleryBlocks.forEach((block) => block.classList.remove('pets-gallery__block--show'));
  block.classList.add('pets-gallery__block--show');
  currentTab = button.dataset.tab;
}

//добавление события нажатия нажатия на кнопку мыши каждой вкладке
galleryButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    galleryButtons.forEach((button) => button.classList.remove('pets-gallery__button--active'));
    const index = galleryButtonsArray.indexOf(button);
    switchingTabs(button, galleryBlocks[index])
  })
});

//показ фотографии
const movePhoto = (currentIndex, photos) => {
  photos.forEach((photo) => photo.classList.remove('pets-gallery__photo--show'))
  photos[currentIndex].classList.add('pets-gallery__photo--show');
}

//определение текущей вкладки с фотографиями
const checkCurrentTab = () => {
  let photos;

  if (currentTab === 'he-cats') {
    photos = heCatsItems;
  } else if (currentTab === 'she-cats') {
    photos = sheCatsItems;
  } else if (currentTab === 'kittens') {
    photos = kittensItems;
  }

  return photos;
}

//переключение фотографий вправо
rightSlider.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= checkCurrentTab().length) {
    currentIndex = 0;
  }

  movePhoto(currentIndex, checkCurrentTab())
});

//переключение фотографий влево
leftSlider.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = checkCurrentTab().length;
  }

  currentIndex--;
  movePhoto(currentIndex, checkCurrentTab())
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

'use strict';

var MAX_SIMBOLS = 25;
var MIN_SIMBOLS = 2;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');

var coutColorTrigger = document.querySelector('.setup-wizard .wizard-coat');
var eyesColorTrigger = document.querySelector('.setup-wizard .wizard-eyes');
var fireballTrigger = document.querySelector('.setup-fireball-wrap');

document.querySelector('.setup-similar').classList.remove('hidden');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = setup.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

// функция возращает рандомный элемент из массива
var randomGenerate = function (mass) {
  var max = mass.length;
  var min = 0;

  return mass[Math.floor(Math.random() * (max - min)) + min];
};

// создание элемента
var createPersElem = function (mass) {
  var elementPers = template.cloneNode(true);

  elementPers.querySelector('.setup-similar-label').textContent = mass.name;
  elementPers.querySelector('.wizard-coat').style.fill = mass.coatColor;
  elementPers.querySelector('.wizard-eyes').style.fill = mass.eyesColor;

  return elementPers;
};

// функция добавления элементов на страницу
var addElement = function (mass) {
  for (var i = 0; i < mass.length; i++) {
    fragment.appendChild(createPersElem(mass[i]));
  }
  similarListElement.appendChild(fragment);
};

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


var massPers = [{
  name: randomGenerate(names) + ' ' + randomGenerate(surnames),
  coatColor: randomGenerate(coatColors),
  eyesColor: randomGenerate(eyesColors),
},
{
  name: randomGenerate(names) + ' ' + randomGenerate(surnames),
  coatColor: randomGenerate(coatColors),
  eyesColor: randomGenerate(eyesColors),
},
{
  name: randomGenerate(names) + ' ' + randomGenerate(surnames),
  coatColor: randomGenerate(coatColors),
  eyesColor: randomGenerate(eyesColors),
},
{
  name: randomGenerate(names) + ' ' + randomGenerate(surnames),
  coatColor: randomGenerate(coatColors),
  eyesColor: randomGenerate(eyesColors),
}
];

// функция закрытия попапа по нажатии клавиши escape
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

// функция открытия попаба
var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

// функция закрытия попаба
var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// удаляет действие разрешающее закрыть попаб на esc , если input для ввода имени в фокусе
userName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

// добавляет действие разрешающие закрыть попаб на esc , если с input был снят фокус
userName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

// дейсвтие смены цвета мантии
coutColorTrigger.addEventListener('click', function () {
  coutColorTrigger.style.fill = randomGenerate(coatColors);
  document.querySelector('input[name="coat-color"]').value = randomGenerate(coatColors);// изменяем значения input для отправки на сервер
});

// дейсвтие смены цвета глаз
eyesColorTrigger.addEventListener('click', function () {
  eyesColorTrigger.style.fill = randomGenerate(eyesColors);
  document.querySelector('input[name="eyes-color"]').value = randomGenerate(eyesColors);// изменяем значения input для отправки на сервер
});

// дейсвтие смены цвета фаербола
fireballTrigger.addEventListener('click', function () {
  fireballTrigger.style.backgroundColor = randomGenerate(fireballColors);
  document.querySelector('input[name="fireball-color"]').value = randomGenerate(fireballColors);// изменяем значения input для отправки на сервер
});

// валидация
userName.addEventListener('input', function () {
  var valueLenght = userName.value.length;
  if (valueLenght < MIN_SIMBOLS) {
    userName.setCustomValidity('Еще ' + (MIN_SIMBOLS - valueLenght) + ' символов');
  } else if (valueLenght > MAX_SIMBOLS) {
    userName.setCustomValidity('Удалите лишние ' + (valueLenght - MAX_SIMBOLS) + ' символов');
  } else {
    userName.setCustomValidity('');
  }
});

addElement(massPers);

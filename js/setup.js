'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
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

var massName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var massSurname = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var massCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var massEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];


var massPers = [{
  name: randomGenerate(massName) + ' ' + randomGenerate(massSurname),
  coatColor: randomGenerate(massCoatColor),
  eyesColor: randomGenerate(massEyesColor),
},
{
  name: randomGenerate(massName) + ' ' + randomGenerate(massSurname),
  coatColor: randomGenerate(massCoatColor),
  eyesColor: randomGenerate(massEyesColor),
},
{
  name: randomGenerate(massName) + ' ' + randomGenerate(massSurname),
  coatColor: randomGenerate(massCoatColor),
  eyesColor: randomGenerate(massEyesColor),
},
{
  name: randomGenerate(massName) + ' ' + randomGenerate(massSurname),
  coatColor: randomGenerate(massCoatColor),
  eyesColor: randomGenerate(massEyesColor),
}
];

addElement(massPers);

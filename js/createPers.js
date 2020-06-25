'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

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

  var massPers = [{
    name: window.randomGenerate(window.data.names) + ' ' + window.randomGenerate(window.data.surnames),
    coatColor: window.randomGenerate(window.data.coatColors),
    eyesColor: window.randomGenerate(window.data.eyesColors),
  },
  {
    name: window.randomGenerate(window.data.names) + ' ' + window.randomGenerate(window.data.surnames),
    coatColor: window.randomGenerate(window.data.coatColors),
    eyesColor: window.randomGenerate(window.data.eyesColors),
  },
  {
    name: window.randomGenerate(window.data.names) + ' ' + window.randomGenerate(window.data.surnames),
    coatColor: window.randomGenerate(window.data.coatColors),
    eyesColor: window.randomGenerate(window.data.eyesColors),
  },
  {
    name: window.randomGenerate(window.data.names) + ' ' + window.randomGenerate(window.data.surnames),
    coatColor: window.randomGenerate(window.data.coatColors),
    eyesColor: window.randomGenerate(window.data.eyesColors),
  }
  ];

  addElement(massPers);
})();

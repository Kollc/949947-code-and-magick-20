'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  // создание элемента
  var renderWizard = function (wizard) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // загружаем магов
  window.load(function (wizards) {
    var wizardsCurrent = window.randomGenerateSomeElement(wizards);

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizardsCurrent[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  }, window.getError);
})();

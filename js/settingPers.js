'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');
  var fireballTrigger = document.querySelector('.setup-fireball-wrap');
  var coutColorTrigger = document.querySelector('.setup-wizard .wizard-coat');
  var eyesColorTrigger = document.querySelector('.setup-wizard .wizard-eyes');
  var setup = document.querySelector('.setup');

  setup.querySelector('.setup-similar').classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');

  // дефолтные характеристики персонажа
  var myWizard = {
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  };

  var wizards = [];

  // дейсвтие смены цвета мантии
  coutColorTrigger.addEventListener('click', function () {
    var color = window.randomGenerate(window.data.coatColors);
    coutColorTrigger.style.fill = color;
    document.querySelector('input[name="coat-color"]').value = color; // изменяем значения input для отправки на сервер

    myWizard.coatColor = color;
    window.debounce(function () {
      updateWizards();
    });
  });

  // дейсвтие смены цвета глаз
  eyesColorTrigger.addEventListener('click', function () {
    var color = window.randomGenerate(window.data.eyesColors);
    eyesColorTrigger.style.fill = color;
    document.querySelector('input[name="eyes-color"]').value = color; // изменяем значения input для отправки на сервер

    myWizard.eyesColor = color;
    window.debounce(function () {
      updateWizards();
    });
  });

  // дейсвтие смены цвета фаербола
  fireballTrigger.addEventListener('click', function () {
    fireballTrigger.style.backgroundColor = window.randomGenerate(window.data.fireballColors);
    document.querySelector('input[name="fireball-color"]').value = window.randomGenerate(window.data.fireballColors); // изменяем значения input для отправки на сервер
  });

  // callback для отправки формы
  var submitHandler = function (evt) {
    evt.preventDefault();

    window.save(new FormData(form), function () {
      setup.classList.add('hidden'); // закрываем popup
    }, window.getError);
  };

  // функция расчета баллов
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === myWizard.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === myWizard.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  // сортируем и обновляем магов на похожих
  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }

      return rankDiff;
    }));
  };

  // обновляем магов на похожишь, сразу после прихода данных с сервера
  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.load(successHandler, window.getError);

  form.addEventListener('submit', submitHandler);

})();

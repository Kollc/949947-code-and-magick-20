'use strict';

(function () {
  var coutColorTrigger = document.querySelector('.setup-wizard .wizard-coat');
  var eyesColorTrigger = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballTrigger = document.querySelector('.setup-fireball-wrap');

  document.querySelector('.setup-similar').classList.remove('hidden');

  // дейсвтие смены цвета мантии
  coutColorTrigger.addEventListener('click', function () {
    coutColorTrigger.style.fill = window.randomGenerate(window.data.coatColors);
    document.querySelector('input[name="coat-color"]').value = window.randomGenerate(window.data.coatColors); // изменяем значения input для отправки на сервер
  });

  // дейсвтие смены цвета глаз
  eyesColorTrigger.addEventListener('click', function () {
    eyesColorTrigger.style.fill = window.randomGenerate(window.data.eyesColors);
    document.querySelector('input[name="eyes-color"]').value = window.randomGenerate(window.data.eyesColors); // изменяем значения input для отправки на сервер
  });

  // дейсвтие смены цвета фаербола
  fireballTrigger.addEventListener('click', function () {
    fireballTrigger.style.backgroundColor = window.randomGenerate(window.data.fireballColors);
    document.querySelector('input[name="fireball-color"]').value = window.randomGenerate(window.data.fireballColors); // изменяем значения input для отправки на сервер
  });

})();

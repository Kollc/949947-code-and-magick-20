'use strict';

(function () {
  // функция возращает рандомный элемент из массива
  window.randomGenerate = function (mass) {
    var max = mass.length;
    var min = 0;

    return mass[Math.floor(Math.random() * (max - min)) + min];
  };

  // функция возращает рандомное число в определенном интервале
  window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  // Функция возвращает массив  с радомными элементами
  window.randomGenerateSomeElement = function (mass) {
    var countElements = 4;
    var result = [];

    for (var i = 0; i < countElements; i++) {
      var elem = window.getRandomInt(0, mass.length - 1);
      result.push(mass[elem]);
      mass.splice(elem, 1);
    }

    return result;
  };

  // функция выводит оишибки в DOM
  window.getError = function (error) {
    var form = document.querySelector('.setup-wizard-form');

    var div = document.createElement('div');
    div.style.backgroundColor = '#fff';
    var span = document.createElement('span');
    span.style.color = 'red';
    span.style.width = '100%';
    span.style.display = 'block';
    span.style.textAlign = 'center';
    span.textContent = error;
    div.appendChild(span);
    form.appendChild(div);
  };

})();

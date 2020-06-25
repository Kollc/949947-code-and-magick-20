'use strict';

(function () {
  // функция возращает рандомный элемент из массива
  window.randomGenerate = function (mass) {
    var max = mass.length;
    var min = 0;

    return mass[Math.floor(Math.random() * (max - min)) + min];
  };
})();

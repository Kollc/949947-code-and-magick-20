'use strict';

(function () {
  var MAX_SIMBOLS = 25;
  var MIN_SIMBOLS = 2;

  var userName = document.querySelector('.setup-user-name');

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
})();

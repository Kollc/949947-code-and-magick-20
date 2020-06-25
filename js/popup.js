'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var triggerMove = document.querySelector('.upload');

  // функция закрытия попапа по нажатии клавиши escape
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
      setup.style = ''; //  при закрытии положение диалога должно сбрасываться на изначальное
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
    setup.style = ''; //  при закрытии положение диалога должно сбрасываться на изначальное

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

  // сделал диалог редактирования персонажа перемещаемым
  triggerMove.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          triggerMove.removeEventListener('click', onClickPreventDefault);
        };
        triggerMove.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();

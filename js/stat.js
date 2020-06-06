'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var GAP = 10;
var TEXT_STYLE = '16px PT Mono';
var MARGIN = 50;
var CHART_WIDTH = 40;
var MARGIN_BOTTOM = 30;
var chartHeight = 150;

// Функция для создания облака
var createCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция для создания текста
var createText = function (ctx, x, y, text, style) {
  ctx.font = style;
  ctx.strokeText(text, x, y);
};

// Функция для поиска максимального элемента массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Функция для создания гистограммы
var createChart = function (ctx, players, times, max, height) {
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = 15 * i + '%';
      ctx.fillStyle = 'hsl(240, ' + saturation + ', 50%)';
    }

    // попись имен
    createText(ctx, CLOUD_X + MARGIN + (MARGIN + CHART_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - MARGIN_BOTTOM + GAP * 2, players[i], '#000000');
    // количество времени
    createText(ctx, CLOUD_X + MARGIN + (MARGIN + CHART_WIDTH) * i, (CLOUD_Y + CLOUD_HEIGHT - MARGIN_BOTTOM) - ((Math.round(times[i]) * height) / max) - GAP, Math.round(times[i]), '#000000');
    // создание столбца
    ctx.fillRect(CLOUD_X + MARGIN + (MARGIN + CHART_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - MARGIN_BOTTOM, CHART_WIDTH, -(Math.round(times[i]) * height) / max);
  }
};

// Функция рендеринга статистики
window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  createCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  createCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  createText(ctx, 120, 40, 'Ура вы победили!', TEXT_STYLE);
  createText(ctx, 120, 60, 'Список результатов:', TEXT_STYLE);
  createChart(ctx, players, times, maxTime, chartHeight);
};

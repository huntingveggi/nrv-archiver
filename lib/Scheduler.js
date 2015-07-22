(function () {
  'use strict';

  var later = require('later');

  var sched = later.parse.text('every 5 min');

  var timer = later.setTimeout(logTime, sched);

}());

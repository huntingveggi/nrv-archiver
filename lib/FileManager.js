(function () {
  'use strict';

  var fs = require('fs');
  var find = require('findit');

  var rootDir = "./files/";
  var data={};
  var filter = "nrv";

  var finder = find(rootDir);

  finder.on('directory', function (dir) {
    console.log('Directory: ' + dir + '/');
  });

  finder.on('file', function (file) {
    //Filter here!
    if (!file.indexOf(filter) === 0) stop();
    var readStream = fs.createReadStream(file);
    console.log('Try to read file: ' + file);

    readStream.on('open', function () {
      console.log('Opening file: ' + file);
      if (checkFile(file))

      readStream.pipe(process.stdout);
    });
    readStream.on('error', function(err) {
      console.log("Error on reading file: "+file);
      console.log(err);
    });
  });

  function checkFile(file) {

  }

  }());

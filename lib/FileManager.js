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
      readStream.pipe(process.stdout);
    });
    readStream.on('error', function(err) {
      console.log("Error on reading file: "+file);
      console.log(err);
    });
  });

  /*fs.readdir(rootDir,function(err,files){
      if (err) throw err;
      var c=0;
      files.forEach(function(file){
        var readStream = fs.createReadStream(rootDir+file);

        readStream.on('open', function () {
          readStream.pipe(process.stdout);
        });
        readStream.on('error', function(err) {
          console.console.log("Error on reading file: "+file);
        });

        //fs.readFile(dir+file,'utf-8',function(err,html){
        //    if (err) throw err;
        //    data[file]=html;
        //    if (0===--c) {
        //        console.log(data);  //socket.emit('init', {data: data});
        //    }
        //    var readStream = fs.createReadStream(rootDir+'myfile.txt');
        //    readStream.pipe(process.stdout);
        //});
      });
  });
*/



  }());

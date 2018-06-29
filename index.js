'use strict';

const app = require('./src/app');
const fs = require('fs');

let root = __dirname;

function getArgs(originalFile, newFile, transformationString) {
  if (originalFile.split('.')[originalFile.split('.').length - 1] !== 'bmp' || newFile.split('.')[newFile.split('.').length - 1] !== 'bmp') {
    console.log(originalFile.split('.')[originalFile.split('.').length - 1]);
    console.log('please use a file that ends in .bmp');
    return 'error';
  } else {

    fs.access(`${root}/assets/${originalFile}`, fs.constants.R_OK, (err) => {
      if (err) {
        console.log('please use an existing bmp file (duck.bmp, town.bmp, or bitmap.bmp)');
        return 'error';
      } else {
        app(originalFile, newFile, transformationString);
      }
    });
  }
}

getArgs(process.argv[2], process.argv[3], process.argv[4]);



module.exports = getArgs;
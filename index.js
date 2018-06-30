'use strict';

const app = require('./src/app.js');
const fs = require('fs');

let root = __dirname;

function getArgs(originalFile, newFile, transformationString) {
  if (originalFile.split('.')[originalFile.split('.').length - 1] !== 'txt' || newFile.split('.')[newFile.split('.').length - 1] !== 'txt') {
    console.log(originalFile.split('.')[originalFile.split('.').length - 1]);
    console.log('please use a file that ends in .txt');
    return 'error';
  } else {

    fs.access(`${root}/${originalFile}`, fs.constants.R_OK, (err) => {
      if (err) {
        console.log('please use an existing file ');
        return 'error';
      } else {
        app(originalFile, newFile, transformationString);
      }
    });
  }
}

getArgs(process.argv[2], process.argv[3], process.argv[4]);



module.exports = getArgs;
'use strict';

const fs = require('fs');

module.exports = exports = (outputFilePath, invertedImage) => {


  fs.writeFile(outputFilePath, invertedImage, err => {
    if (err) return console.log(err);
    console.log(`The file has been saved at ${outputFilePath}`);
  });
};

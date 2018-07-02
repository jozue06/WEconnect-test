'use strict';

const fs = require('fs');

module.exports = exports = (outputFilePath, parsedFile) => {

  fs.writeFile(outputFilePath, parsedFile, err => {
    if (err) throw err;
    console.log(`The file has been saved at ${outputFilePath}`);
  });
};

'use strict';


// process.stdout.write('Hello world');

const fs = require('fs');

module.exports = exports = (outputFilePath, parsedFile) => {


  fs.writeFile(outputFilePath, parsedFile, err => {
    if (err) return console.log(err);
    console.log(`The file has been saved at ${outputFilePath}`);
  });
};

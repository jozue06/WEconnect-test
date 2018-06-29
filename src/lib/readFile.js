'use strict';

const fs = require('fs');

module.exports = exports = (file, callback) => {

  fs.readFile(file, (err, buffer) => {
    console.log('readd it');
    if (err) {
      console.log('errrsssss  ', err);
      return callback(err);
    }
    callback(null, buffer);
  });


};
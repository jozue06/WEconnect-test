'use strict';

const fs = require('fs');

module.exports = exports = (file, callback) => {

  fs.readFile(file, (err, buffer) => {
    console.log(file);
    if (err) {
      console.log('error !!! ', err);
      return callback(err);
    }
    callback(null, buffer);
  });


};
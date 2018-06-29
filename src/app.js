'use strict';


const reader = require('./lib/reader');
const CleanBuffer = require('./lib/bitmap');
const changeColors = require('./lib/colorFun');
const write = require('./lib/write');
//const sizeChange = require('./lib/size');

const root = __dirname;



function app(oldPath, newPath, transformationString) {
  let transformation;

  switch (transformationString) {
  case 'invert':
    transformation = changeColors.invert;
    break;

  case 'darken':
    transformation = changeColors.darken;
    break;

  case 'lighten':
    transformation = changeColors.lighten;
    break;

  case 'random':
    transformation = changeColors.random;
    break;

  default:
    console.log('please choose from invert, darken, lighten, or random-color');

  }
  reader(`${root}/../assets/${oldPath}`, (err, data) => {
    if (err) {
      console.log('!!ERROR!!');
    } else {

      let cleaned = new CleanBuffer(data);

      var newBuffer = transformation(cleaned);

      write(`${root}/../assets/${newPath}`, newBuffer.buffer, (err) => {
        if (err) console.log('!!ERROR!!');
        else {
          console.log(transformationString +  ' finished to ' + newPath);
        }
      });

    }
  });

}

module.exports = app;


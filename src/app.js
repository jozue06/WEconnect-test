'use strict';


const reader = require('./lib/readFile');
// const CleanBuffer = require('./lib/bitmap');
// const changeColors = require('./lib/colorFun');
const write = require('./lib/writeFile');
//const sizeChange = require('./lib/size');

const root = __dirname;

console.log('hi');

function app(oldPath, newPath, command) {
  let transformation;

  switch (command) {
  case 'test':
    console.log('tested');
    break;

  case 'test2':
    console.log('tested 2');
    break;

  default:
    console.log('please choose from invert, darken, lighten, or random-color');

  }
  reader(`./${oldPath}`, (err, data) => {
    if (err) {
      console.log('!!ERROR!! 2222 ', err);
    } else {
      console.log('buff man', data);
      // let cleaned = new CleanBuffer(data);

      // var newBuffer = transformation();

      write(`${root}/${newPath}`, data, (err) => {
        if (err) console.log('!!ERROR!!3333');
        else {
          console.log(command +  ' finished to ' + newPath);
        }
      });

    }
  });

}

module.exports = app;


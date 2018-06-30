'use strict';


const reader = require('./lib/readFile');
// const CleanBuffer = require('./lib/bitmap');
// const changeColors = require('./lib/colorFun');
const write = require('./lib/writeFile');
//const sizeChange = require('./lib/size');

const root = __dirname;

console.log('hi');

function app(oldPath, newPath, command) {
  // let transformation;

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
      let scores = [];
      let re = '\n';
      let cleanedScore = data.toString().trim().split(re);
      
      cleanedScore.forEach( (e) => {
        // let num = ;
        scores.push(e.match(/\d/g));
        return scores;
      });

      scores.forEach((calc) =>{
        if( calc[0] > calc[1]){ 
          return console.log('team 1 won');}
        if( calc[0] <calc[1]){ 
          return console.log('team 2 won');}
        if( calc[0] === calc[1]){ 
          return console.log('teams tied');}

      });
      // console.log('scores array -->' , scores);
      // .match(/\d/g);
      // let num = cleanedScore.match(/\d/g);
      // num = num.join(' , ');
  
      // var newBuffer = transformation();

      write(`${root}/${newPath}`, scores, (err) => {
        if (err) console.log('!!ERROR!!3333');
        else {
          console.log(command +  ' finished to ' + newPath);
        }
      });
    }
  });
}




module.exports = app;


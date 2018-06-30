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
    console.log('please choose an argument to run. Choose from `test` or `test2`');

  }
  reader(`./${oldPath}`, (err, data) => {
    if (err) {
      console.log('!!ERROR!! 2222 ', err);
    } else {
      let team = [];
      let scores = [];
      let te =  /\D\S\,/gi;
      let re = '\n';
      let points = 0;
      let cleanedTeam = data.toString().trim().split(/\D\S+\,+/gi);
      let cleanedScore = data.toString().trim().split(re);
      // console.log(data.toString());
      
      cleanedScore.forEach( (e) => {
        // let num = ;
        scores.push(e.match(/\d/g));
        return scores;
      });


      console.log('cleaned team -->' , cleanedTeam[1]);
      // console.log('cleaned score -->' , cleanedScore);
      
      cleanedTeam.forEach( (e) =>{
        // team.points = 0;
        team.push(e.match(/\D/g));
      
      });

      // scores.forEach((calc) =>{
      //   if( calc[0] > calc[1]){ 
      //     // team[0].points+=3;
      //     // console.log('pontssssssss ', team);
      //     console.log('team 1 won');}
      //   if( calc[0] < calc[1]){ 
      //     console.log('team 2 won');}
      //   if( calc[0] === calc[1]){ 
      //     console.log('teams tied');}

      // });
      // console.log('team array --> ' , team[1].join(''));
      // console.log('scores array --> ' , scores);
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


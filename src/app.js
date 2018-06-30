'use strict';


const reader = require('./lib/readFile.js');
const write = require('./lib/writeFile.js');
const Team = require('./lib/teams.js');

// const root = __dirname;

// console.log(Team);

function app(oldPath, newPath, command) {

  switch (command) {
  case 'test':
    // console.log('tested');
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
      let tex = /[\n\W\d]/gi;
      let re = '\n';
      let cleanedTeam = data.toString().trim().split(tex);
      let cleanedScore = data.toString().trim().split(re);

      
      cleanedScore.forEach( (e) => {
        scores.push(e.match(/\d/g));
        return scores;
      });

      
      cleanedTeam.forEach( (e) =>{
        if(e.match(/[a-z]/gi) !== null){
         
          team.push(e);
        }
        
      });

   

      // let names = team
      //   .map(e => e.name)
      //   .filter((e, i, a) => a.indexOf(e) === i);

      // console.log(names);
   

      let teamRez = [];
      team.forEach( (e) => {
       
        teamRez.push({
          name: e,
          points:0,
        });
      });

      
      let rez = teamRez.map(e => e.name)
        .filter((e, i, a) => a.indexOf(e) === i);
 
      console.log(rez);
      
      // console.log('TEAM REZZZZZZ  -- >  ', teamRez[1].points);

      scores.forEach((calc,i) => {
        if( calc[0] > calc[1]){ 
          teamRez[i].points+=3;
          // console.log('team 1 won by a score of ', calc[0] ,' to ' , calc[1]);
        }
        if( calc[0] < calc[1]){ 
          teamRez[i].points+=3;
          // console.log('team 2 won by a score of ', calc[0] ,' to ' , calc[1]);
        }
        else if( calc[0] === calc[1]){
          teamRez[i].points+=1;
          teamRez[i].points+=1;
          // console.log('teams tied with a score of ', calc[0] ,' to ' , calc[1]);
        }

      });

      // console.log(`pontssssssss TEAM ${teamRez[1].name} has ${teamRez[1].points}`);

      // console.log('TEAM leeeegn -- >  ', teamRez);

      let writeRez = [];
      teamRez.forEach((e) => {
        // console.log(`TEAM NAME --> ${e.name} HAS  ${e.points} PTS.`);
        writeRez.push(`TEAM ${e.name} HAS  ${e.points} PTS.`);
      });

      // var names = writeRez.reduce(function (a, b) {
      //   if (a.indexOf(b.name) == -1) {
      //     a.push(b.name);
      //   }
      //   return a;
      // },[]);
      
      // console.log(names);
      

      write(`./${newPath}`, writeRez, (err) => {
        if (err) console.log('!!ERROR!!3333');
        else {
          console.log(command +  ' finished to ' + newPath);
        }
      });
    }
  });
}


module.exports = app;


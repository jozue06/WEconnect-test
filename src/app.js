'use strict';

const reader = require('./lib/readFile.js');
const write = require('./lib/writeFile.js');

function app(oldPath, newPath, command) {

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

      let matchup = [];
      let games = [];
      let scores = [];
      let gamesCounter = 0;
      let re = '\n';
      let winner = 0;
      let cleanedGame = data.toString().trim().split(re);

      cleanedGame.forEach( (e)=>{
        games.push(e);
        // gamesCounter++;

      });

      // console.log('GAMES -->', games);
      // console.log('GAMES COUNTER -->', gamesCounter);
      

      cleanedGame.forEach( (e) => {
        scores.push(e.match(/\d/g));
        // return scores;
      });
      // console.log('SCORES ONLY -->', scores);

      cleanedGame.forEach( (e) =>{
        // if(e.match(/w/gi) !== null){
        e = e.replace(/\d+/g, '');
        e = e.replace(',', 'vs');
        matchup.push(e);
        // }
      });

      // console.log('TEAMS NAMES matchup --> ', matchup);

      let showsGames = () => {
        for (let i=0; i < scores.length; i++  ){
          gamesCounter++;
          // console.log(`CONCAT?? -->: Game ${gamesCounter} was: ${matchup[i]}, the score was ${scores[i]} ` );
        }
        gamesCounter=0;
      };
      showsGames();

      // console.log(`CONCAT?? -->:  ${scores[1]} + ${teams[1]}` );

      let teamRez = [];

      matchup.forEach( (e) => {
        // let newmatch = matchPair.split('vs');
        if(!teamRez.includes(e)){
          // e = e.split('vs');
          teamRez.push(e);
          
        }
        // console.log(newmatch);
      });

      // teamRez = teamRez.map((e) =>{
      //   return {
      //     name :e,
      //     points : 0,
      //   };
      // });

      // let teamObj = teamRez.map( (e) =>{
      //   
      //   return {
      //     name :e,
      //     points : 0,
      //   };
      // });

      // console.log(teamObj);


      let teamNames = [];
      matchup.forEach((e) =>{
        
        teamNames.push(e = e.split('vs'));
      });

      console.log('NAMEEESSSS', teamNames);
      console.log(teamRez);
      // console.log(`team ${teamRez[gamesCounter].name[winner]} won`);
      scores.forEach((calc) => {
        gamesCounter++;
        if( calc[0] > calc[1]){
          winner=0;
          // teamRez[gamesCounter].name[winner].points++;
        }
        if( calc[0] < calc[1]){ 
          winner=1;
        }
        if( calc[0] === calc[1]){
          teamRez[0].points+=1;
          teamRez[1].points+=1;
          
          // console.log(`TEAM ${teamRez[1].name} tied ${teamRez[2].name}`);
        }
        
      });
     
      let writeRez = [];
      teamRez.forEach((e) => {
        // console.log(`TEAM NAME --> ${e.name} HAS  ${e.points} PTS.`);
        writeRez.push(`TEAM ${e.name} HAS ${e.points} PTS.`);
      });


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


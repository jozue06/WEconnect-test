'use strict';
const reader = require('./lib/readFile.js');
const write = require('./lib/writeFile.js');

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
      let matchup = [];
      let team = [];
      let games = [];
      let gameScores = [];
      // let gamesCounter = 0;
      // let winner = 0;
      // let tied =0;
      let pointsEarned = [];
      let tex = /[\n\W\d]/gi;
      let re = '\n';
      let cleanedTeam = data.toString().trim().split(tex);
      let cleanedScore = data.toString().trim().split(re);
      let cleanedGame = data.toString().trim().split(re);

      cleanedScore.forEach( (e) => {
        gameScores.push(e.match(/\d/g));
        return gameScores;
      });

      let gameScores2=[];
      gameScores.forEach((e) => {
        e = e.map(el => {
          gameScores2.push(el);
        });
      });
            
      cleanedTeam.forEach( (e) =>{
        if(e.match(/[a-z]/gi) !== null){
         
          team.push(e);
        }
        
      });

      cleanedGame.forEach( (e)=>{
        games.push(e);

      });
   

      cleanedGame.forEach( (e) =>{
        e = e.replace(/\d+/g, '');
        e = e.replace(',', 'vs');
        matchup.push(e);
      });
      

      let teamNames = [];
      matchup.forEach((e) =>{
        teamNames.push(e = e.split('vs'));
      });

      console.log('NAMEEESSSS', teamNames);

      let newNames = [];
      teamNames.forEach( (e) => {
        e = e.map(el => {
          newNames.push(el);
        });
      });

      console.log('NAMEEESSSS', newNames);

      let computePoints =  () => {
        gameScores = gameScores2;
        teamNames = newNames;
        console.log('ARE YOU RRRRREEE TAMSSSSS -->', teamNames);
        for (var i = 0; i < teamNames.length; i += 2) {
          if (gameScores[i] > gameScores[i + 1]) { 

            pointsEarned.push([teamNames[i], 3]);
            pointsEarned.push([teamNames[i + 1], 0]);
          } 
          else if (gameScores[i] < gameScores[i + 1]) { 

            pointsEarned.push([teamNames[i + 1], 3]);
            pointsEarned.push([teamNames[i], 0]);
          } 
          else if (gameScores[i] === gameScores[i + 1]) { 

            pointsEarned.push([teamNames[i], 1]);
            pointsEarned.push([teamNames[i + 1], 1]);
          } 
          else {
            console.log('Error in computing points');
          }
        }
        console.log('pointsastst -->', pointsEarned);
        return pointsEarned;
      };
   
      let calculateTable = () => {
        var tableData = {};
        var pointsEarned = computePoints();
        for (var i = 0; i < pointsEarned.length; i++) {
          var currentTeam = pointsEarned[i][0];
          var currentScore = pointsEarned[i][1];
          var existingScore = 0;
          if (tableData[currentTeam] >= 0) {
            existingScore = tableData[currentTeam];
          }
          tableData[currentTeam] = existingScore + currentScore;
        }
        console.log('TABLE DATASASASA -->', tableData);
        return tableData;
      };

      let sortTable = () => {
        var table = [];
        var tableData = calculateTable();
        for (var key in tableData) {
          table.push([key, tableData[key]]);
        }
      
        table.sort((a, b) => {
          if (a[1] < b[1]) {
            return 1; // sort by score
          }
          if (a[1] > b[1]) {
            return -1;
          }
          if (a[0] > b[0]) {
            return 1; // sort by team name
          }
          if (a[0] < b[0]) {
            return -1;
          }
          return 0;
        });
        console.log('DEIER TABLELELELELEL -->', table);
        return table;
      };


      let writeRez = sortTable();
      // teamRez.forEach((e) => {
      //   writeRez.push(`TEAM ${e.name} HAS  ${e.points} PTS.`);
      // });
      

      write(`./${newPath}`, writeRez, (err) => {
        if (err) console.log('!!ERROR!!3333');
        else {
          console.log(command +  ' finished to ' + newPath);
        }
      });
    }
  }
  );}



module.exports = app;

'use strict';
const reader = require('./lib/readFile.js');
const write = require('./lib/writeFile.js');

/* 1. This block of code is the CLI command reader. 
It will check to see which file you want to input, which file you want to output, 
and which command you have chosen to execute in the command line.
It takes in three varialbes, the 'old path' or path at which you would like to read your input from,
the 'new path' or the path at which to output, and finally the command you would like to run.*/
function app(oldPath, newPath, command) {

  switch (command) {
  case 'run':
    break;
  default:
    console.log('please choose an argument to run.');
  }
  /* 2. This is the "reader" function and section of code. 
  This function is imported from the function module that lives in the /src/lib/ section.
  It takes in */
  reader(`./${oldPath}`, (err, data) => {
    if (err) {
      console.log('!!ERROR!! ', err);
    } else {
    /* This section sets up quite a few initial variables that are used inside the bulk of the "reader" function.
    The beginning section of the reader block also 'cleans' the file 
    and parses it down into parts to be used in the main calculation algorithm */
      let matchup = [];
      let team = [];
      let gameScores = [];
      let teamPoints = [];
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
          team.push(e.trim());
        }
      });

      cleanedGame.forEach( (e) =>{
        e = e.replace(/\d+/g, '');
        e = e.replace(',', 'vs');
        matchup.push(e.trim());
      });
      
      let teamNames = [];
      matchup.forEach((e) =>{
        teamNames.push(e = e.split('vs'));
      });

      let newNames = [];
      teamNames.forEach( (e) => {
        e = e.map(el => {
          newNames.push(el.trim());
        });
      });

      let calculateRate =  () => {
        gameScores = gameScores2;
        teamNames = newNames;
        for (let i = 0; i < teamNames.length; i += 2) {
          if (gameScores[i] > gameScores[i + 1]) { 

            teamPoints.push([teamNames[i], 3]);
            teamPoints.push([teamNames[i + 1], 0]);
          } 
          else if (gameScores[i] < gameScores[i + 1]) { 

            teamPoints.push([teamNames[i + 1], 3]);
            teamPoints.push([teamNames[i], 0]);
          } 
          else if (gameScores[i] === gameScores[i + 1]) { 

            teamPoints.push([teamNames[i], 1]);
            teamPoints.push([teamNames[i + 1], 1]);
          } 
          else {
            console.log('There has been an error calculating points');
          }
        }
        return teamPoints;
      };
   
      let calculateTable = () => {
        let tableData = {};
        let teamPoints = calculateRate();
        for (let i = 0; i < teamPoints.length; i++) {
          let currentTeam = teamPoints[i][0];
          let currentScore = teamPoints[i][1];
          let existingScore = 0;
          if (tableData[currentTeam] >= 0) {
            existingScore = tableData[currentTeam];
          }
          tableData[currentTeam] = existingScore + currentScore;
        }
        return tableData;
      };

      let sortTable = () => {
        let table = [];
        let tableData = calculateTable();
        for (let key in tableData) {
          table.push([key, tableData[key]]);
        }
        table.sort((a, b) => {
          if (a[1] < b[1]) {
            return 1;
          }
          if (a[1] > b[1]) {
            return -1;
          }
          if (a[0] > b[0]) {
            return 1; 
          }
          if (a[0] < b[0]) {
            return -1;
          }
          return 0;
        });
        
        return table;
      };

      let displayTable = () => {
        let results = '';
        let table = sortTable();
        let tieOffset = 0;
        for (let i = 0; i < table.length; i++) {
          let rankTeam = table[i][0];
          let teamPts = table[i][1];
          if (i >= 1 && teamPts === table[i - 1 + tieOffset][1]) {
            tieOffset--;
          } else {
            tieOffset = 0;
          }
          let ranking = i + 1 + tieOffset;
          let pts = ' pts';
          if (teamPts === 1) {
            pts = ' pt';
          }
          results = results + ranking + '. ' + rankTeam + ', ' + teamPts + pts + '\n';
        }
        return results;
      };

      let output = displayTable();
      console.log('your results are:\n',output);
      write(`./${newPath}`, output, (err) => {
        if (err) console.log('!!ERROR!!3333');
        else {
          console.log(command +  ' finished to ' + newPath);
        }
      });
    }
  }
  );}
module.exports = app;

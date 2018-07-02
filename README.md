# WEconnect-test
CLI app for WEconnect
[![Build Status](https://travis-ci.com/)](https://travis-ci.com/

## Download/install instructions:

* To use this app, please open your terminal and in the command line, navigate to the directory you would like this app to live.

* When there, in the command line, type: `git` `clone ` `https://github.com/jozue06/WEconnect-test.git`

* Navigate to the Weconnect-test folder in the command line.

* Also on the command line, type: `npm` `i` to install required dependancies.


## CLI instructions
* After downloading, please type `node` `index.js` `yourStarterFilePath.FileName.txt` `yourIntendedOutputFilePath.FileName.txt` `run` in the command line.
* * (for example `node index.js src/assets/sample-input.txt src/assets/sample-output.txt run`).

## Exported Modules
* The modules exported are the readFile module, the writeFile Module, and the main app Module.

### Function read
- [x] The function looks at a given file and reads its contents.

### Function app, section 1
- [x] Takes in the read file contents and parses the information for games, team names and results/scores of those games.

### Function app section 2
- [x] Takes in the names of the teams and results of the games and gives points for a win(3pts), tie(1pt) and no points for a loss.

###  Function app section 3
- [x] Takes in the team names, and points per team and ranks them,  and also sorts them by rank. 
- [x] It also concatinates the team names, points per team, and number of rank.

###  Function write
- [x] Takes in the results of ranks and concatination and writes them to an output file at the filepath given.

## TDD & Unit testing:

* I've written a few tests to test the main functionality of the app. It can read an input file, throw errors for bad commands/files/filepaths, and write correct files as well. The tests were tested with jest by typing `jest` or `npm` `run` `test` in the command line.
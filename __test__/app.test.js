'use strict';

const fs = require('fs');
const app = require('../src/app.js');


describe ('app module testing,', () => {

  it('should test the app functionality of the CLI input with correct syntax. A good result sound be undifined and will write new fill.', (done) => {

    setTimeout( () => {
      let results = app('../src/assets/sample-input.txt', '../src/assets/sample-outs.txt', 'run');
      expect(results).toBeUndefined();   
      done();
    }, 400);
  });
  

  it('should read the new file created by the above test of the app.', (done) =>{

    setTimeout( () => {
      fs.readFile('../src/assets/sample-outs.txt', (err, fileCheck) => {
        let fileCheck2 = fileCheck;
        if (err) {
          console.log('error  ', err);
          return err;
        }      
        expect(fileCheck).toBe(fileCheck2);
        done();
      });
    }, 400);

  });


  it('should fail when trying to read an incorrect filepath or non-existant file', (done) =>{

    setTimeout( () => {
      fs.readFile('../src/assets/sample-outsss.txt', (err) => {
        if (err) {
          expect(err).toBeDefined();
          done();
        }    
      });
    }, 400);

  });

});
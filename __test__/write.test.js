const reader = require('../src/lib/readFile.js');
const fs = require('fs');
const write = require('../src/lib/writeFile.js');
// const root = __dirname + '/src/';

describe('Write module', () => {

  it('should make a new file', (done) => {

    reader('../src/assets/sample-input.txt', (err, data) => {
      
      expect(err).toBeNull;
      write(`../src/assets/sample-input.txt`, data, (err) =>  {
        expect(err).toBeUndefined;
        done();
      });

      fs.access(`../src/assets/sample-input.txt`, fs.constants.R_OK, (err) => {
        expect(err).toBeNull;
      });
    });
  });

  it('should throw an error if it cannot write a file to a given path', (done) => {

    reader(`../src/assets/sample-input.txt`, (err, data) => {
      
      expect(err).toBeNull;
      write(`../src/assets/fakedir/failTest.txt`, data , (err) =>  {
        expect(err).not.toBeUndefined();
        done();
      });

    });
  });

});
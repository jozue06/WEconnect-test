'use strict';

const reader = require('../src/lib/readFile.js');


describe('file module', () => {

  it('should take return an error if file path does not exist', (done) => {

    reader('missing.bmp', (err) => {
      expect(err).not.toBeUndefined();
      done();

    });
  });
}); 
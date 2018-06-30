'use strict';

const reader = require('../src/lib/readFile.js');
const root = __dirname + '/../..';

describe('file module', () => {

  it('should take return an error if file path does not exist', (done) => {

    reader('missing.bmp', (err) => {
      expect(err).not.toBeUndefined();
      done();

    });
  });
}); 
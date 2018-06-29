'use strict';

const reader = require('../lib/readFile.js');

describe('Reader Module', () => {
  it('if there is a bad file name throw error', () => {

    let file = `${__dirname}/../assets/fail.bmp`;

    reader(file, (err) => {

      expect(err).toBeDefined();

    });
  });

  it('if there is a good file name throw console.log', () => {

    let file = `/Users/joshuamcclung/codefellows/401/04-data-modeling-and-binary/assets/bitmap.bmp`;

    reader(file, (err) => {

      expect(err).toBeNull();

    });
  });

  it('if there is a good file name throw console.log', () => {

    let file = `/Users/joshuamcclung/codefellows/401/04-data-modeling-and-binary/assets/bitmap.bmp`;

    reader(file, (err, buffer) => {

      expect(buffer).toBeInstanceOf(Buffer);

    });
  });
    
});

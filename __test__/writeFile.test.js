'use strict';

const parser = require('../lib/parsedBitmap.js');
const readFile = require('../lib/readFile.js');
const inverter = require('../lib/invert.js');
const writeFile = require('../lib/writeImage');
describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`/Users/joshuamcclung/codefellows/401/04-data-modeling-and-binary/assets/duck.bmp`, (err, buffer) => {
      const bp = parser(buffer);
      const invertedImage = inverter(bp);
      expect(invertedImage).toBeDefined();

      writeFile(`${__dirname}/../assets/new/newDucklines.bmp`, invertedImage);
      
      expect(typeof bp.dibHeader.width.readInt32LE(18,22) === 'number').toBe(true);
      
      done();

    });
  });
});
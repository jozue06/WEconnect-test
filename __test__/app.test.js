'use strict';

const app = require('../src/app.js');
const root = __dirname + '../../';

describe ('app module,', () => {

  it('should test for all switch cases', () => {
    app(`${root}/assets/bitmap.bmp`, `${root}/assets/appTest.bmp`, 'invert');

    app(`${root}/assets/bitmap.bmp`, `${root}/assets/appTest.bmp`, 'darken');

    app(`${root}/assets/bitmap.bmp`, `${root}/assets/appTest.bmp`, 'lighten');

    app(`${root}/assets/bitmap.bmp`, `${root}/assets/appTest.bmp`, 'limitDoesNotExist');
  
  });

  

});
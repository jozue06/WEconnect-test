'use strict';

const app = require('../src/app.js');
// const root = __dirname + '../../';

describe ('app module testing,', () => {

  it('should test the app functionality of input whith a correct command', () => {

    expect(app('src/assets/sample-input.txt src/assets/sample-out.txt run')).toBe('error');
  });

  

});
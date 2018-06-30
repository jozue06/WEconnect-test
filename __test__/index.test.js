'use strict';

const getArgs = require('../index.js');


describe('index module', () => {

  it('should throw an error if given files are not bmp', (done) => {

    expect(getArgs('assets/fake.jpg', 'assets/newFile.bmp', 'invert')).toBe('error');

    done();

  });

  it('should throw an error if given files are not bmp', (done) => {

    expect(getArgs(`${root}/bitmap.bmp`, `${root}/newfile.jpg`, 'invert')).toBe('error');

    done();

  });

  it('should return undefined when successful', (done) => {
    expect(getArgs(`../src/assets/sample-input.txt`, `../src/assets/sample-out.txt`, 'test')).toBeUndefined();

    done();

  });

  it('should return undefined if file is readable', (done) => {

    let actual = getArgs(`../src/assets/sample-input.txt`, `../src/assets/sample-out.txt`, 'test');

    setTimeout(function () {
      expect(actual).toBeUndefined();
      done();
    }, 200);
  });


});
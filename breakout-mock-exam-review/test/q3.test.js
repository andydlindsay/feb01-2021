const { assert } = require('chai');
const { mode } = require('../q3');

describe('q3 tests', () => {

  describe('tests for mode function', () => {

    it('returns the mode of a given array', () => {
      let input = [6,2,3,4,9,6,1,0,5];
      let result = mode(input);
      assert.equal(result, 6);

      input = [5, 5, 5, 4, 4, 4, 4];
      result = mode(input);
      assert.equal(result, 4);
    });

  });

});
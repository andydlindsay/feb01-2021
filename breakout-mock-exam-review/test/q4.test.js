const { assert } = require('chai');
const { stdev } = require('../q4');

describe('q4 tests', () => {

  describe('tests for stdev function', () => {

    it('returns the standard deviation of a given array', () => {
      const input = [6,2,3,4,9,6,1,0,5];
      const result = stdev(input);
      assert.equal(result, 2.67);
    });

  });

});

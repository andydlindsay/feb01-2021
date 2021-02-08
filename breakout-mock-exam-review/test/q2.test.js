const { assert } = require('chai');
const { median } = require('../q2');

describe('q2 tests', () => {

  describe('tests for median function', () => {

    it('can calculate the median value of an odd-length array', () => {
      const input = [6,2,3,4,9,6,1,0,5];
      const result = median(input);
      assert.equal(result, 4);
    });

    it('can calculate the median value of an even-length array', () => {
      const input = [6,2,3,4,9,6,1,0,5,7];
      const result = median(input);
      assert.equal(result, 4.5);
    });

  });

});
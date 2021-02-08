const { assert } = require('chai');
const { min, max, range } = require('../q1');

describe('q1 tests', () => {

  describe('tests for min function', () => {

    it('returns the lowest value in an array', () => {
      let input = [6,2,3,4,9,6,1,0,5];
      let result = min(input);
      assert.equal(result, 0);

      input = [10, 12, 14, 8];
      result = min(input);
      assert.equal(result, 8);

      input = [10, -5, 2];
      result = min(input);
      assert.equal(result, -5);
    });

  });

  describe('tests for max function', () => {

    it('returns the highest value in an array', () => {
      let input = [6,2,3,4,9,6,1,0,5];
      let result = max(input);
      assert.equal(result, 9);

      input = [10, 12, 14, 8];
      result = max(input);
      assert.equal(result, 14);

      input = [10, -5, 2];
      result = max(input);
      assert.equal(result, 10);
    });

  });

  describe('tests for range function', () => {

    it('returns the difference between the highest and lowest value in an array', () => {
      let input = [6,2,3,4,9,6,1,0,5];
      let result = range(input);
      assert.equal(result, 9);

      input = [10, 12, 14, 8];
      result = range(input);
      assert.equal(result, 6);

      input = [10, -5, 2];
      result = range(input);
      assert.equal(result, 15);
    });

  });

});
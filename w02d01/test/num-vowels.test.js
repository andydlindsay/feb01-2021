const assert = require('chai').assert;
const numVowels = require('../num-vowels');

describe('tests for numVowels function', () => {

  it('given the string "orange" returns 3', () => {
    const actual = numVowels('orange');
    const expected = 3;

    // test if return val is a number
    assert.isNumber(actual);
    assert.strictEqual(actual, expected);
  });

  it('given the string "lighthouse labs" returns 5', () => {
    const actual = numVowels('lighthouse labs');
    const expected = 5;

    // test if return val is a number
    assert.isNumber(actual);
    assert.strictEqual(actual, expected);
  });

  it('given the string "aeiou" returns 5', () => {
    const actual = numVowels('aeiou');
    const expected = 5;

    // test if return val is a number
    assert.isNumber(actual);
    assert.strictEqual(actual, expected);
  });

  it('given no input, returns null', () => {
    const actual = numVowels();
    const expected = null;

    assert.strictEqual(actual, expected);
  });

});

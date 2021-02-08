// const assert = require('assert');

// const chai = require('chai');
// const assert = chai.assert;

const assert = require('chai').assert;

const myImports = require('../say-hello');
const sayHello = myImports.sayHello;

describe('tests for sayHello function', () => {

  it('should return "hello Alice" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello Alice';

    assert.strictEqual(actual, expected);
  });

});

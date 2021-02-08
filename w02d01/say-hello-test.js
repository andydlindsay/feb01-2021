const assert = require('assert').strict;
const myImports = require('./say-hello');
// console.log(myImports.sayHello);
// const sayHello = myImports.sayHello;
myImports.ANSWER_TO_EVERYTHING;

const resultOne = myImports.sayHello('Alice');

assert.equal(resultOne, 'hello Alice');

// const resultTwo = sayHello('Bob');

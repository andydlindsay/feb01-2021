const sayHello = (name) => {
  return `hello ${name}`;
};

console.log('hello from inside of say-hello.js');

const ANSWER_TO_EVERYTHING = 42;

// module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.ANSWER_TO_EVERYTHING = ANSWER_TO_EVERYTHING;

module.exports = {
  sayHello: sayHello,
  ANSWER_TO_EVERYTHING: ANSWER_TO_EVERYTHING
};

// module.exports = {
//   sayHello,
//   ANSWER_TO_EVERYTHING,
//   somethingElse: 'hello there',
// };





// 

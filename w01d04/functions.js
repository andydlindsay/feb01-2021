// function sayHello (name) {
//   console.log(`hello ${name}`);
// }

function sayHello (name) {
  console.log(`hello ${name}`);
};

const myOtherFunc = sayHello;

// sayHello = function (num) {
//   return 2 + num;
// };

myOtherFunc('Alice');

// sayHello.anotherKey = 'does this work?';
// console.log(sayHello.anotherKey);

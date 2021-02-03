// const sayHello = function(name) {
//   name = 'Murray';
//   console.log(`hello ${name}`); // hello Murray
// };

// const myName = 'Andy';

// console.log('myName:', myName); // Andy
// sayHello(myName);
// console.log('myName:', myName); // Andy


// const nameOne = 'Alice';
// const nameTwo = nameOne;
// nameTwo = 'Bob';
// console.log(nameOne); // Alice

const sayHello = function(whatever) {
  whatever.name = 'Murray';
  console.log(whatever.name);
};

const myObj = {
  name: 'Andy'
};

console.log('before:', myObj);
sayHello(myObj);
console.log('after:', myObj);

const userOne = {
  name: 'Carol',
  stomach: ['peanut butter sandwich'],
  age: 24
};

// const userTwo = {...userOne};
// userTwo.name = 'Bob';

const userTwo = {
  ...userOne,
  name: 'Bob',
  stomach: [
    ...userOne.stomach,
    'tomatoes'
  ]
};

// userTwo.stomach.push('tomatoes');

console.log(userOne);
console.log(userTwo);
// console.log(userOne === userTwo);

const arr = [1,2,3,4];

arr.filter(function(elem) {
  return elem > 2;
}); // [3, 4]

arr.filter(elem => elem > 2);

// arr.forEach(function(elem) {
//   console.log(elem);
// });

// arr.forEach((elem) => {
//   console.log(elem);
// });

// arr.forEach(elem => {
//   console.log(elem);
// });

// const myFunc = elem => {
//   return elem;
// };

// const myFunc = num => {
//   return 2 + num;
// };

const myFunc = (num = 4) => 2 + num;

const result = myFunc(5);
const resultTwo = myFunc();

console.log('result', result);
console.log('resultTwo', resultTwo);

// implicit return

// const myFunc = function(elem) {
//   console.log(elem);
// };

// arr.forEach(myFunc);

const map = (arr, callback) => {
  const returnArr = [];

  // iterates through an array
  for (const elem of arr) {
    // calls the callback on each element
    // stores the return value from the callback in a new array
    const returnVal = callback(elem);
    returnArr.push(returnVal);
  }

  return returnArr;
};

const myArr = [1, 4, 9, 16];
let result = map(myArr, x => x * 2);
// result = map(myArr, undefined);
console.log('result', result);
// map(myArr, function(x) {
//   return x * 2;
// });

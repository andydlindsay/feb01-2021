const filter = (arr, callback) => {
  const returnArr = [];

  // iterate through the array
  for (const elem of arr) {
    // call the callback for each element
    const result = callback(elem);
    // if the callback returns truthy, push the element into a new array
    if (result) {
      returnArr.push(elem);
    }
  }

  return returnArr;
};



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words, word => word.length < 6);
console.log('result', result);
// filter(words, word => {
//   // if (word.length > 6) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return word.length > 6;
// });

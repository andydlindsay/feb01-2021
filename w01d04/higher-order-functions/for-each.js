const forEach = (arr, callback) => {
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // call the callback for each element
    const element = arr[i];
    callback(element, i);
    // callback(arr[i], i);
  }
};



const myArr = ['a', 'b', 'c'];

forEach(myArr, element => console.log(element));
console.log();
forEach(myArr, (element, index) => {
  console.log(`the ${element}'s index is ${index}`)
});

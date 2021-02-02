// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

// console.log('before:', process.argv);
const args = process.argv;

// args.shift();
// args.shift();

// args.splice(0, 2);

const sliced = args.slice(2);

// console.log();
// console.log(sliced);
// console.log();
// console.log('after:', process.argv);

// const nums = [ '5', '10', '15', '4.5', '3.14', '-50' ];

let total = 0;
// looping through the sliced array using for..of
// for..of gives us the value/element every time
for (const num of sliced) {
  // console.log('current element:', num);
  const converted = Number(num); // '4.5' becomes 4.5

  // if (Number.isInteger(converted) === true) {
  if (Number.isInteger(converted) && converted > 0) {
    total += converted;
    // total = total + num;
  }
}

console.log('total:', total);

// const result = process
//   .argv
//   .slice(2)
//   .map(Number)
//   .filter(Number.isInteger)
//   .filter(e => e > 0)
//   .reduce((a, c) => a + c, 0);
  
// console.log('result:', result);

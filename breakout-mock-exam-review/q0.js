/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // setup a variable to hold our return value
  let total = 0;

  // iterate through array
  // for..in
  // for..of
  // c-style
  // .forEach
  for (const num of arr) {
    // add each element to the running total
    // console.log(num);
    // total += num;
    total = total + num;
  }

  // return the return value
  return total;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100; // 3.1415 === 314.15 === 314 === 3.14
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */

 // avg = total / numberOfElements
const mean = function(arr) {
  // check if array is empty
  if (arr.length === 0) {
    return null;
  }

  // count the elements in the array
  const numElements = count(arr);

  // sum the elements in the array
  const total = sum(arr);

  // calculate the average
  const average = total / numElements;

  // round the average and return it
  const rounded = round(average);
  return rounded;
};

// Don't change below:
module.exports = { count, sum, mean };

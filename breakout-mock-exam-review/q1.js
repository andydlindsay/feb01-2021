/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // pick an arbitrarily high value
  let lowest = Infinity;
  // let lowest = arr[0];
  // Math.min(...arr);

  // loop through the arr
  for (const num of arr) {
    // compare each value against the current lowest value
    if (num < lowest) {
      // if the current value is lower, replace lowest
      lowest = num;
    }
  }

  // return lowest value
  return lowest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // pick an arbitrarily low value
  let highest = -Infinity;

  // loop through the arr
  for (const num of arr) {
    // compare each value against the current highest value
    if (num > highest) {
      // if the current value is higher, replace highest
      highest = num;
    }
  }

  // return highest value
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);
  const rangeCalc = highest - lowest;
  return rangeCalc;

  // return max(arr) - min(arr);
};

// Don't change below:

module.exports = { min, max, range };

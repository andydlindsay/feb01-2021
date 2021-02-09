/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

//  [6,2,3,4,9,6]
//   0 1 2 3 4 5

const median = function(arr) {
  // sort our arr
  arr.sort();

  // calculate middle index
  const middleIndex = Math.floor(arr.length / 2);

  // determine if array length is odd
  if (arr.length % 2 !== 0) {
    // if odd, return middle element
    return arr[middleIndex];
  } else {
    // if even, add the two middle elements and divide by 2
    const numOne = arr[middleIndex];
    const numTwo = arr[middleIndex - 1];
    const average = (numOne + numTwo) / 2; // BEDMAS
    return round(average);
  }
};

// Don't change below:
module.exports = { median };

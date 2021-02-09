/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // 'lighthouse in the house'

  // an object to hold our piles
  const piles = {};

  // loop through the array
  for (const num of arr) {
    // have we seen this element before?
    if (piles[num]) {
      // if yes, increment the number of times seen
      piles[num] += 1;
    } else {
      // if no, add a key/value pair to piles obj
      piles[num] = 1;
    }
  }

  // compare the piles
  let answer;
  let highest = 0;

  // use for..of with everything except objects because of and object both start with 'o'

  // iterate through the piles object
  for (const num in piles) {
    // console.log('num', num);
    const value = piles[num];
    // console.log(num, value);

    // compare each value against highest
    if (value > highest) {
      // if the value is greater, replace highest and answer
      highest = value;
      answer = num;
    }

  }

  return answer;
};

// Don't change below:
module.exports = { mode };

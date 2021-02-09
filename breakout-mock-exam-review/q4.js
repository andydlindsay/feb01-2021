/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const sum = function(arr) {
  let total = 0;

  for (const num of arr) {
    total = total + num;
  }

  return total;
};

const stdev = function(arr) {
  // stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)

  const numberOfValues = arr.length;

  const populationMean = sum(arr) / numberOfValues;

  const deviations = arr.map((num) => {
    const deviation = num - populationMean;
    const squared = Math.pow(deviation, 2);
    return squared;
  });

  const totalDeviations = sum(deviations);
  const averageDeviation = totalDeviations / numberOfValues;

  return round(Math.sqrt(averageDeviation));
};

// Don't change below:
module.exports = { stdev };

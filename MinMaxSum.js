// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

//Solution
const miniMaxSum = (arr) => {
  let min = 0;
  let max = 0;
  const sortedArray = arr.sort();
  for (let i = 1; i < sortedArray.length; i++) {
    max += sortedArray[i];
  }
  for (let i = 0; i < sortedArray.length - 1; i++) {
    min += sortedArray[i];
  }
  console.log(min, max);
};

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

//Solution

const subtractProductAndSum = (n) => {
  let multi = 1;
  let sum = 0;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    multi *= Number(n[i]);
    sum += Number(n[i]);
  }
  return multi - sum;
};

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

// Solution

const areOccurrencesEqual = (s) => {
  let strObject = {};
  let charLength = [];
  for (const char of s) {
    strObject[char] = strObject[char] + 1 || 1;
  }
  for (key in strObject) {
    charLength.push(strObject[key]).length;
  }
  return (setLength = [...new Set(charLength)].length) === 1 ? true : false;
};

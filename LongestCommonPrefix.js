// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//Solution

const longestCommonPrefix = (str) => {
  let prefix = "";
  if (str.length === 0) return prefix;
  for (let i = 0; i < str[0].length; i++) {
    const char = str[0][i];
    for (let j = 0; j < str.length; j++) {
      if (str[j][i] !== char) return prefix;
    }
    prefix += char;
  }
  return prefix;
};

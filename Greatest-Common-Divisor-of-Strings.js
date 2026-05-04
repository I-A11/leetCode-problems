// Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"

// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"

// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"

// Output: ""

// Example 4:

// Input: str1 = "AAAAAB", str2 = "AAA"

// Output: ""​​​​​​​

// Solution

const gcdOfStrings = (str1, str2) => {
  for (let i = str1.length; i >= 1; i--) {
    const candidate = str1.substring(0, i);

    if (
      str1.split(candidate).join("") === "" &&
      str2.split(candidate).join("") === ""
    ) {
      return candidate;
    }
  }
  return "";
};

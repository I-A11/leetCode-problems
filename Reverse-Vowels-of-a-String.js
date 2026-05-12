// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Solution

const reverseVowels = (s) => {
  const vowels = "aeiouAEIOU";
  s = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(s[left])) {
      left++;
    }

    while (left < right && !vowels.includes(s[right])) {
      right--;
    }
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
  return s.join("");
};

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Solution

const fizzBuzz = (n) => {
  const result = new Array(n);
  let buzz = 0;
  let fizz = 0;

  for (let i = 1; i <= n; i++) {
    buzz++;
    fizz++;
    if (fizz === 3 && buzz === 5) {
      result[i - 1] = "FizzBuzz";
      fizz = 0;
      buzz = 0;
    } else if (fizz === 3) {
      result[i - 1] = "Fizz";
      fizz = 0;
    } else if (buzz === 5) {
      result[i - 1] = "Buzz";
      buzz = 0;
    } else {
      result[i - 1] = String(i);
    }
  }
  return result;
};

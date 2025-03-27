const factorial = (n) => {
  let number = 1;
  for (let index = n; index >= 1; index--) {
    number *= index;
  }
  return number;
};
console.log(factorial(5));

// Big-O: O(n) - Linear Time Complexity

// factorial of zero is 1
const recursiveFactorial = (n) => {
  // n! = n * (n - 1)!
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
};
// Big-O: O(n) - Linear Time Complexity
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));

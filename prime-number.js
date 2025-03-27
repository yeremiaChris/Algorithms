const isPrime = (n) => {
  if (n <= 1) return false;
  return !(n % 2 === 0);
};
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
// Big-O: O(1) - Constant Time Complexity
// The isPrime algorithm has a constant time complexity of O(1) because the algorithm always performs the same number of operations regardless of the input size. The algorithm checks if the input number is less than or equal to 1 and if the input number is divisible by 2. The algorithm returns false if the input number is less than or equal to 1 and true if the input number is not divisible by 2. The algorithm does not depend on the input size, so it has a constant time complexity of O(1).

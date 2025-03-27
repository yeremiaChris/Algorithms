const fibonacci = (n) => {
  let array = [0, 1];
  for (let index = 2; index < n; index++) {
    array[index] = array[index - 1] + array[index - 2];
  }
  return array;
};

console.log(fibonacci(7));
// Big-O: O(n) - Linear Time Complexity

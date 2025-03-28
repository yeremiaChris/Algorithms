const linearSearch = (arr, t) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === t) {
      return index;
    }
  }
  return -1;
};
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([1, 2, 3, 4, 5], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
// Big-O: O(n) - Linear Time Complexity

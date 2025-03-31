const quickSort = (arr) => {
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index < pivot]) {
      left.push(arr[index]);
    }

    if (arr[index > pivot]) {
      right.push(arr[index]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([-6, 20, 8, -2, 4]));
// Worst case - Big-O = O(n^2)
// Avf case - O(nlogn)

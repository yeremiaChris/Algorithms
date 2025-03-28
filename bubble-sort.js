// Problem: Given an array of integers, sort the array.
// ascending (lowest to highest) or descending (highest to lowest)
// -6, 20, 8, -2, 4
const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

console.log(bubbleSort([-6, 20, 8, -2, 4]));

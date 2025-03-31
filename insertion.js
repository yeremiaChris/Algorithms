const insertionSort = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let sortedElementIndex = index - 1;

    while (
      sortedElementIndex >= 0 &&
      arr[sortedElementIndex] > numberToInsert
    ) {
      arr[sortedElementIndex + 1] = arr[sortedElementIndex];
      sortedElementIndex--;
    }

    arr[sortedElementIndex + 1] = numberToInsert;
  }
  return arr;
};
console.log(insertionSort([-6, 20, 8, -2, 4]));
// Big-O = O(n^2)

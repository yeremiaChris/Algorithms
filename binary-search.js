// Binary Search Algorithm
// Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if 't' is not found.

// Binary search pseudocode
// If the array is empty, return -1 as the element cannot be found
// If the array has elements, find the middle element in the array. if the target is equal to the middle element, return the middle element index
// If the target is less than the middle element, binary search left half of the array
// If the target is greater than the middle element, binary search right half of the array

const binnarySearch = (arr, t) => {
  if (arr.length === 0) return -1;

  const middleIndex =
    arr.length % 2 === 0 ? arr.length / 2 : (arr.length - 1) / 2;

  if (t === arr[middleIndex]) return middleIndex;
  if (t < arr[middleIndex]) return binnarySearch(arr.slice(0, middleIndex), t);
  if (t > arr[middleIndex])
    return binnarySearch(arr.slice(middleIndex + 1), t) + middleIndex + 1;
};

const binnarySearchLog = (arr, t) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};
// Big-O = O(logn)

console.log(binnarySearchLog([1, 2, 3, 4, 5, 6, 8], 8));

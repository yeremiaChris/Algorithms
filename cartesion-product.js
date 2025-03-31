const cartesionProduct = (arrA, arrB) => {
  const newArr = [];
  for (let index = 0; index < arrA.length; index++) {
    for (let idx = 0; idx < arrB.length; idx++) {
      newArr.push([arrA[index], arrB[idx]]);
    }
  }
  return newArr;
};
console.log(cartesionProduct([1, 2], [3, 4, 5]));
// time complexity = Big-O = O(mn) -- depend on the length arrA and arrB

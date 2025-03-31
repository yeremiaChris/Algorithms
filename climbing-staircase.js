const climbingStaircase = (n) => {
  const noOffWays = [1, 2];
  for (let index = 2; index < n; index++) {
    noOffWays[index] = noOffWays[index - 1] + noOffWays[index - 2];
  }
  return noOffWays[n - 1];
};
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
// Big-O = O(n)

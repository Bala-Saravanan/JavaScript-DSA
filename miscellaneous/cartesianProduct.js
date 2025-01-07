const cartesian_product = (set1, set2) => {
  let result = [];
  for (let item1 of set1) {
    for (let item2 of set2) {
      result.push([item1, item2]);
    }
  }
  return result;
};

// const cartesian_product = (set1, set2) =>
//   [...set1].flatMap((e1) => [...set2].map((e2) => [e1, e2]));

console.log(cartesian_product(new Set([1, 2]), new Set([3, 4, 5])));
// [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Time Complexity = O(m*n)
// m = length of set1
// n = length of set2

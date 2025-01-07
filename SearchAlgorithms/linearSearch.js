const linearSearch = (arr, n) => {
  let result = -1;
  arr.forEach((el) => {
    if (el === n) {
      result = arr.indexOf(el);
    }
  });
  return result;
};

console.log(linearSearch([1, 2, 3, 4, 5], 2)); // 1
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1

// Time Complexity = O(n)

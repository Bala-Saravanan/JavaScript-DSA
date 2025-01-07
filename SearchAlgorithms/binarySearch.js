const binarySearch = (arr, target) => {
  let left_index = 0;
  let right_index = arr.length - 1;

  while (left_index <= right_index) {
    let middle_element = Math.floor((left_index + right_index) / 2);

    if (target === arr[middle_element]) {
      return middle_element;
    } else if (target < arr[middle_element]) {
      right_index = middle_element - 1;
    } else {
      left_index = middle_element + 1;
    }
  }
  return -1;
};

console.log(binarySearch([-5, 10, 43, 52, 73], 73)); // 4
console.log(binarySearch([-5, 10, 43, 52, 73], 10)); // 1
console.log(binarySearch([-5, 10, 43, 52, 73], 11)); // -1

// Time Complexity = O(logn)

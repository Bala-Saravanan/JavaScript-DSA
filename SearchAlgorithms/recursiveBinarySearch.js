const recursiveBinarySearch = (arr, target) => {
  const search = (left_index, right_index) => {
    if (left_index > right_index) {
      return -1;
    }

    let middle_index = Math.floor((left_index + right_index) / 2);

    if (arr[middle_index] === target) {
      return middle_index;
    } else if (target < arr[middle_index]) {
      return search(left_index, middle_index - 1);
    } else {
      return search(middle_index + 1, right_index);
    }
  };

  return search(0, arr.length - 1);
};

// Example usage:

console.log(recursiveBinarySearch([-5, 10, 43, 52, 73], 73)); // 4
console.log(recursiveBinarySearch([-5, 10, 43, 52, 73], 10)); // 1
console.log(recursiveBinarySearch([-5, 10, 43, 52, 73], 11)); // -1

// Time Complexity = O(logn)

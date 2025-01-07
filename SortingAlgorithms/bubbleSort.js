const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

console.log(bubbleSort([1, 4, 3, 2, 6, 5, 7, 8, 4, 5, 9])); // [1, 4, 4, 4, 6, 6, 7, 8, 8, 8, 9]

// Time Complexity = O(n^2)

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(6)); // 8

// Time Complexity = O(n^2)

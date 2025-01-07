const recursiveFactorial = (n) => {
  if (n < 2) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(5)); // 120

// Time Complexity = O(n)

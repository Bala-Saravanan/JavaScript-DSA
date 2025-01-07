const fibonacci = (n) => {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(12)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Time Complexity - O(n)

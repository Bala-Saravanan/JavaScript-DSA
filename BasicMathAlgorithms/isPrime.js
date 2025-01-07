const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(9)); // false

// Time Complexity = O(sqrt(n))

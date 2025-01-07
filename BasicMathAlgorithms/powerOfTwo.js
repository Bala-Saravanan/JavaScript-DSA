const powerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
};

console.log(powerOfTwo(2)); // true
console.log(powerOfTwo(16)); // true
console.log(powerOfTwo(84)); // false

// Time Complexity = O(logn)

const bitwisePowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(bitwisePowerOfTwo(2)); // true
console.log(bitwisePowerOfTwo(16)); // true
console.log(bitwisePowerOfTwo(84)); // false

// Time Complexity = O(1)

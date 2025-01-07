// Given number of steps 'n' find out how many ways to climb the stairs, you can climb 1 or 2 steps at a time

// n = 1; no. of ways = 1 (1)
// n = 2; no. of ways = 2 (1, 1), (2)
// n = 3; no. of ways = 3 (1, 1, 1), (2, 1), (1, 2)
// n = 4; no. of ways = 5 (1, 1, 1, 1) (2, 1, 1) (1, 1, 2) (1, 2, 1) (2, 2)

const climbStairs = (n) => {
  if (n < 3) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(10)); // 89

// Time Complexity = O(n^2)

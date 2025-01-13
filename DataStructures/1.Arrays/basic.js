// JavaScript Arrays;

// store collection of values
// store multiple data-type
// It is resizable
// Zero indexed, ordered
// they are iterable

// create an array

let arr = [1, 2, 3, "Alex", 9.7, true];

for (let val of arr) {
  console.log(val);
}

// basic methods

// push() -> adds an element to the last            -> O(1)
// pop()  -> removes an element from the last       -> O(1)
// unshift() -> adds an element to the begining     -> O(n)
// shift() -> removes an element from the begining  -> O(n)

let array = [1, 2, 3, 4, 5];
console.log(array);

array.push(6);
console.log(array);

array.pop();
console.log(array);

array.unshift(0);
console.log(array);

array.shift();
console.log(array);

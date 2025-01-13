// Java Script advanced method

// all methods time complexity -> O(n)

let arr = [1, 2, 3, 4, 5];

// forEach()

arr.forEach((num) => console.log(num));

// map()

let mapped_arr = arr.map((num) => num * num);
console.log(mapped_arr);

// filter()

let filtered_arr = arr.filter((num) => num % 2 == 0);
console.log(filtered_arr);

// reduce()

let reduced_arr = arr.reduce((acc, num) => acc + num, 0);
console.log(reduced_arr);

// concat()

let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 12, 13, 14, 15];
let concatted_arr = arr.concat(arr2, arr3);
console.log(concatted_arr);

// slice()

let sliced_arr1 = arr.slice(1, 4);
let sliced_arr2 = arr.slice(3);
let sliced_arr3 = arr.slice(-3, -1);
console.log(sliced_arr1, sliced_arr2, sliced_arr3);

// splice()

// removing in splice
let spliced_arr1 = arr.splice(1, 3);
console.log(arr);
console.log(spliced_arr1);

// replacing in splice
let spliced_arr2 = arr.splice(1, 2, "a", "b");
console.log(arr);
console.log(spliced_arr2);

// adding/inserting in splice
let spliced_arr3 = arr.splice(1, 0, "a", "b");
console.log(arr);
console.log(spliced_arr3);

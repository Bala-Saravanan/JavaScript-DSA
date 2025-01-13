// Java Script Objects

// store key value pairs
// key must be string or Symbol
// values are of any data type even functions
// unordered
// not iterable
// accessed by dot or bracket notation of keys

// create an object

let obj = {
  name: "Bala",
  age: 17,
  sayMyName() {
    console.log(this.name);
  },
};

console.log(obj);
obj.sayMyName();

// dot notation
console.log(obj.name);

// bracket notation
console.log(obj["age"]);

// insert another key

obj.hobby = ["coding", "Chess", "learning"];
console.log(obj);

// delete a key-value
delete obj.hobby;
console.log(obj);

// not iterable -> for-of loop not applicable,
//                 for-in loop is applicable.

for (let key in obj) {
  console.log(obj[key]);
}

// Time Complexities:

// insert -> O(1)
// remove -> O(1)
// access -> O(1)
// search -> O(n)

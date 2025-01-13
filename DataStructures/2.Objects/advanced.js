// Java Script Objects advanced

let obj = {
  name: "Bala",
  age: 17,
  hobbies: ["coding", "learning", "chess"],
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

let info = {
  DOB: "6/4/2007",
  email: "jbalasaravanan007@gmail.com",
  phoneNo: 9361491434,
};

console.log(obj);
obj.greet();

// keys()
console.log(Object.keys(obj));

// values()
console.log(Object.values(obj));

// entries()
console.log(Object.entries(obj));

// assign()
console.log(Object.assign(obj, info));

// all these methods have a time complexity of O(n)

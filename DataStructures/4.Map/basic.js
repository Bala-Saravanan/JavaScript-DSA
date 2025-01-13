// Java Script Map

// key value pairs
// ordered
// iterable
// key and values are of any data type
// store only data (can't add functions)

// create a Map

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map);

// basic methods

// set()
map.set("c", 3);
console.log(map);

// has()
console.log(map.has("c"));

// delete()
map.delete("c");
console.log(map);

// size
console.log(map.size);

// iterable
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// clear()
map.clear();
console.log(map);

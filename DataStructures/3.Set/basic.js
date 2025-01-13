// Java Script Set

// elements are unique
// unordered
// iterables
// dynamic size
// store multiple data types

// create a Set
const set = new Set([1, 2, 3]);
console.log(set);

// add()
set.add(4);
console.log(set);

// has()
console.log(set.has(4));

// delete()
set.delete(4);
console.log(set);

// size
console.log(`size: ${set.size}`);

// iterable
for (const item of set) {
  console.log(item);
}

// clear()
set.clear();
console.log(set);

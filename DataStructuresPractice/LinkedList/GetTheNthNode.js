const LinkedList = require("./implementation");

class GetNthNode {
  constructor() {
    this.list = new LinkedList();
  }
  getSize() {
    return this.list.getSize();
  }
  append(value) {
    return this.list.append(value);
  }
  getNthNode(n) {
    if (n <= 0 || n > this.list.size) {
      return null;
    }
    let count = 1;
    let prev = this.list.head;
    while (prev) {
      if (count === n) {
        return prev.value;
      }
      prev = prev.next;
      count++;
    }
  }
}

const list = new GetNthNode();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log(list.getSize());

console.log(list.getNthNode(1));
console.log(list.getNthNode(2));
console.log(list.getNthNode(3));
console.log(list.getNthNode(4));

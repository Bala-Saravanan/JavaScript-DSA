const LinkedList = require("./implementation");

class LengthOfLinkedList {
  constructor() {
    this.list = new LinkedList();
  }
  append(value) {
    return this.list.append(value);
  }
  length() {
    // Logic approach:
    let count = 0;
    let curr = this.list.head;
    while (curr) {
      curr = curr.next;
      count++;
    }
    console.log(count);

    // easy apporach:
    return this.list.size;
  }
  print() {
    return this.list.print();
  }
}

const list = new LengthOfLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log(`Length: ${list.length()}`);

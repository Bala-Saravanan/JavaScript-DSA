const LinkedList = require("./implementation");

class ReverseLinkedList {
  constructor() {
    this.list = new LinkedList();
  }
  append(value) {
    return this.list.append(value);
  }
  reverse() {
    if (this.list.isEmpty()) {
      return null;
    }
    let prev = null;
    let curr = this.list.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.list.head = prev;
  }
  print() {
    return this.list.print();
  }
}

const list = new ReverseLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Original Linked List: ");
list.print();

list.reverse();

console.log("Reversed Linked List: ");
list.print();

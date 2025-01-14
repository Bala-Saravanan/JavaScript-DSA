// Reversing a Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      node.next = null;
      this.size++;
      return;
    }
    let prev = this.head;
    while (prev) {
      if (prev.next === null) {
        prev.next = node;
        node.next = null;
        this.size++;
        return;
      }
      prev = prev.next;
    }
  }
  print() {
    if (this.size === 0) {
      console.log("list is empty!");
      return;
    }
    let i;
    let str = "";
    let curr = this.head;
    for (i = 0; i < this.size; i++) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }
  reverse() {
    if (this.size === 0) {
      return -1;
    }
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this.print();
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
list.reverse();

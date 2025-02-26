class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const head = this.head;
    this.head = head.next;
    this.size--;
    return head.value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
      this.size--;
      return value;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    }
    let str = "";
    let curr = this.head;
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

module.exports = LinkedList;

// const list = new LinkedList();

// list.append(20);
// list.append(30);
// list.append(40);
// list.prepend(10);
// list.removeFromFront();
// list.removeFromFront();
// list.removeFromFront();
// list.removeFromFront();
// list.removeFromEnd();
// list.removeFromEnd();
// list.removeFromEnd();
// list.print();

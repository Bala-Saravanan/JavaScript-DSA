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
  }
  insert(index, value) {
    if (index > this.size || index < 0) {
      return -1;
    }
    const node = new Node(value);
    if (index === 0) {
      return this.prepend(value);
    } else {
      let prev = this.head;
      let i;
      for (i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }
  removeFromStart() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  removeVal(value) {
    if (value === this.head.value) {
      return this.removeFromStart();
    } else if (value === this.tail.value) {
      return this.removeFromEnd();
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        if (curr.next.value === value) {
          break;
        }
        curr = curr.next;
      }
      curr.next = curr.next.next;
      this.size--;
    }

    return value;
  }
  removeFromIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      return this.removeFromStart();
    }
    if (index === this.size - 1) {
      return this.removeFromEnd();
    }
    let prev = this.head;
    let count = 0;
    while (prev) {
      if (count === index - 1) {
        break;
      }
      prev = prev.next;
      count++;
    }
    const value = prev.next.value;
    prev.next = prev.next.next;
    prev = prev.next;
    this.size--;
    return value;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    }
    let listValues = "";
    let prev = this.head;
    while (prev) {
      listValues += prev.value + " -> ";
      prev = prev.next;
    }
    console.log(listValues);
  }
}

module.exports = LinkedList;

// const list = new LinkedList();

// list.append(10);
// list.print();
// list.append(20);
// list.print();
// list.append(30);
// list.print();
// list.prepend(5);
// list.print();
// list.prepend(0);
// list.print();
// list.insert(3, 15);
// list.print();
// list.removeFromEnd();
// list.print();
// list.removeFromStart();
// list.print();
// list.removeVal(15);
// list.print();
// list.removeFromIndex(2);
// list.print();
// console.log(list.size);

// list.clear();
// list.print();

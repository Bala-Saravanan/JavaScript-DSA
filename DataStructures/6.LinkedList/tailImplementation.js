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

const list = new LinkedList();
list.append(20);
list.append(30);
list.append(40);
list.prepend(10);
list.print();

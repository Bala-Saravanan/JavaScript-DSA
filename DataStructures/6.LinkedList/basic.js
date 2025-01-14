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
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      for (let i = 0; i <= this.getSize(); i++) {
        if (prev.next === null) {
          prev.next = node;
          break;
        }
        prev = prev.next;
      }
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log(`is list empty? ${list.isEmpty()}`);
console.log(`List size: ${list.getSize()}`);

list.prepend(40);
list.prepend(30);
list.prepend(20);
list.prepend(10);

list.append(50);
list.append(60);
list.prepend(0);
list.print();

console.log(`is list empty? ${list.isEmpty()}`);
console.log(`List size: ${list.getSize()}`);

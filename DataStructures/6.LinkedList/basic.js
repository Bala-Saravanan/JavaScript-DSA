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
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    } else if (index === 0) {
      const head = this.head;
      this.head = head.next;
      head.next = null;
      this.size--;
      return head.value;
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    const item = prev.next;
    prev.next = item.next;
    this.size--;
    return item.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (value === this.head.value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let prev = this.head;
    while (value !== prev.next.value) {
      prev = prev.next;
      if (prev.next === null) {
        return null;
      }
    }
    let curr = prev.next;
    prev.next = curr.next;
    curr.next = null;
    this.size--;
    return value;
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    let index = 0;
    while (curr.value !== value) {
      curr = curr.next;
      if (curr === null) {
        return -1;
      }
      index++;
    }
    return index;
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
list.insert(55, 6);
list.insert(45, 5);
list.insert(35, 4);
console.log(list.remove(0));
console.log(list.removeValue(5));
list.print();
console.log(list.head.value);
console.log(`index of 45: ${list.search(45)}`);
console.log(`is list empty? ${list.isEmpty()}`);
console.log(`List size: ${list.getSize()}`);

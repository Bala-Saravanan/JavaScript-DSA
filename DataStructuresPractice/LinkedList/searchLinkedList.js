const LinkedList = require("./implementation");

class SearchLinkedList {
  constructor() {
    this.list = new LinkedList();
  }
  append(value) {
    return this.list.append(value);
  }
  search(value) {
    if (this.list.isEmpty()) {
      return "List is Empty!";
    }
    let curr = this.list.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return "Value Not Found!";
  }
}

const list = new SearchLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log(list.search(50));

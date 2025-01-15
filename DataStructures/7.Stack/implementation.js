const LinkedList = require("./../6.LinkedList/tailImplementation");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    return this.list.append(value);
  }
  pop() {
    return this.list.removeFromEnd();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.print();
stack.push(20);
stack.print();
stack.push(30);
stack.print();
stack.push(40);
stack.print();
stack.push(50);
stack.print();

stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();

console.log(stack.peek());

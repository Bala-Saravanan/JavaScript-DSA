const LinkedList = require("./../6.LinkedList/tailImplementation");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    return this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.head.value;
  }
  print() {
    return this.list.print();
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.print();
queue.enqueue(20);
queue.print();
queue.enqueue(30);
queue.print();
queue.enqueue(40);
queue.print();
queue.dequeue();
queue.print();

console.log(queue.peek());

queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

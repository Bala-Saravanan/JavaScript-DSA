class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    if (!item) return;
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return !this.isEmpty() ? this.items[this.front] : null;
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.peek());
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.size());

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.capacity === this.currentLength;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(value) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = value;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.currentLength -= 1;
    this.front = (this.front + 1) % this.capacity;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  size() {
    return this.currentLength;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
      return;
    }
    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.peek());
console.log(queue.dequeue());

console.log(queue.peek());
console.log(queue.size());
queue.print();

queue.enqueue(60);
queue.print();

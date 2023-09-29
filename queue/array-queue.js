class Queue {
  #items = [];
  enqueue(element) {
    this.#items.push(element);
  }
  dequeue() {
    this.#items.shift();
  }
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  clear() {
    this.#items = [];
  }
  peek() {
    return this.#items[0];
  }
  toString() {
    return this.#items.toString();
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
queue.enqueue('Camila');
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());


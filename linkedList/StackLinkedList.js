import { DoublyLinkedList } from './linkedList.js';

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }
  push(element) {
    console.log(this.items.size());
    this.items.insert(element, this.items.size());
  }
  pop() {
    if (this.items.isEmpty()) {
      return undefined;
    }
    return this.items.removeAt(this.items.size() - 1);
  }
  peek() {
    if (this.items.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.items.size() - 1).element;
  }
  isEmpty() {
    return this.items.isEmpty();
  }
}

const stack = new StackLinkedList();
stack.push('Guilherme');
stack.push('Luiz');
stack.push('Fernando');
stack.pop();
stack.pop();
console.log(stack.items);

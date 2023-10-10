import { Node } from './linked-list-models.js';

export default class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    // check values outside the interval
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // remove first item
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head= node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    } 
    return false;
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.size() && current != null; i++) {
      if (element === current.element) {
        return i;
      }
      current = current.next
    }
    return -1;
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let current = this.head;
    let string = '' + current.element;
    while (current.next != null) {
      current = current.next;
      string += ',' + current.element;
    }
    return string;
  }
  getHead() {
    if (this.head == null) {
      return undefined;
    }
    return this.head.element;
  }
}

const linkedList = new LinkedList();
linkedList.push(15);
linkedList.push(10);


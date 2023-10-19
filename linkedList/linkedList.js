import { DoublyNode, Node } from './linked-list-models.js';

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
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
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
    return this.head;
  }
}

const linkedList = new LinkedList();
linkedList.push(15);
linkedList.push(10);

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = self.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(1, 0);
doublyLinkedList.insert(2, 1);
doublyLinkedList.insert(3, 2);
doublyLinkedList.removeAt(1);

class CircularLinkedList extends LinkedList {
  constructor() {
    super()
  }
  insert(element, index) {
    const node = new Node(element);
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = this.head;
          this.head = node;
          current = this.getElementAt(this.size());
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size()-1); // take last element 
          this.head = this.head.next; // jump head and forget
          current.next = this.head; // the last.next is the new head
          current = removed; // current now is delete item for be return
        }
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
}

const circularLinkedList = new CircularLinkedList();
// circularLinkedList.insert(12, 0)
// circularLinkedList.insert(13, 1)
// circularLinkedList.insert(14, 2)
// circularLinkedList.removeAt(2);

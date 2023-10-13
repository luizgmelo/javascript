import LinkedList from "./linkedList.js";

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; 
}

class SortedLinkedList extends LinkedList {
  constructor(compareFn = defaultCompare) {
    super();
    this.compareFn = compareFn;
  } 
  insert(element) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const position = this.getIndexNextSortedElement(element);
    return super.insert(element, position);
  } 
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const compare = this.compareFn(element, current.element);
      if (compare === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

const sortedLinkedList = new SortedLinkedList();
sortedLinkedList.insert(1);
sortedLinkedList.insert(3);
sortedLinkedList.insert(2);
console.log(sortedLinkedList.toString());

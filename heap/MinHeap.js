import { Compare, defaultCompare, swap } from '../tree/util.js';
export class MinHeap {
  constructor(compareFn = defaultCompare, swapFn = swap) {
    this.compareFn = compareFn;
    this.heap = [];
    this.swapFn = swapFn;
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
    index > 0 &&
    this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
}

const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);



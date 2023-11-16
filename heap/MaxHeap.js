import { MinHeap } from "./MinHeap.js";
import { defaultCompare } from '../tree/util.js';

// the only diff
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}

export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn)
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log('=== MAX HEAP ===')
console.log('Heap size: ', maxHeap.size());
console.log('Heap min value: ', maxHeap.findMinimum());

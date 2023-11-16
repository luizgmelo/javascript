import { Compare, defaultCompare, swap } from '../tree/util.js';

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

function getIndexLeft(index) {
  return 2 * index + 1
}

function getIndexRight(index) {
  return 2 * index + 2
}

// the same that siftDown
function heapify(array, index, heapSize, compareFn) {
  let element = index;
  const left = getIndexLeft(index);
  const right = getIndexRight(index);
  const size = heapSize
  if (
    left < size &&
    compareFn(array[element], array[left]) === Compare.LESS_THAN
  ) {
    element = left
  }
  if (
    right < size &&
    compareFn(array[element], array[right]) === Compare.LESS_THAN
  ) {
    element = right
  }
  if (index !== element) {
    swap(array, index, element)
    heapify(array, element, heapSize, compareFn);
  }
}

const array = [2, 1, 4, 5, 3, 6, 7];
console.log('Before sorting: ', array);
console.log('After sorting: ', heapSort(array));

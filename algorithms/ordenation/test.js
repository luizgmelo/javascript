import { bubbleSort } from './bubble-sort.js';
import { selectionSort } from './selection-sort.js';
import { insertionSort } from './insertion-sort.js';
import { mergeSort } from './merge-sort.js';

function createNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = mergeSort(array);
console.log(array.join());


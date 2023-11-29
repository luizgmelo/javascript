import { defaultCompare, Compare, swap } from "./util.js";

export function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    } 
  }
  return array;
}

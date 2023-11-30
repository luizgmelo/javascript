import { defaultCompare, Compare } from "./util.js";

export function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 1; i < length; i++) {
    let j = i;
    let temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
  array[j] = temp ;
  }
  return array;
};

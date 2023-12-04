import { quickSort } from "../ordenation/quick-sort.js"
import { Compare, defaultCompare } from "../ordenation/util.js"

const DOES_NOT_EXIST = -1;

function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  let left = 0;
  let right = sortedArray.length - 1; 
  while (lowerOrEquals(left, right, compareFn)) {
    const mid = Math.floor((left + right) / 2);
    const element = sortedArray[mid];
    if (compareFn(element, value) === Compare.LOWER_THAN) {
      left = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

function lowerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LOWER_THAN || comp === Compare.EQUALS;
}


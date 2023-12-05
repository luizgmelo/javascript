import { Compare, lowerOrEquals,
  biggerOrEquals,
  defaultCompare,
  defaultEquals,
  defaultDiff } from "../ordenation/util.js";


const DOES_NOT_EXIST = -1;
function interpolationSearch(array, value, 
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff) {
  const { length } = array;
  let left = 0;
  let right = length - 1;
  let position = -1;
  let delta = -1;
  while (
    left <= right &&
    biggerOrEquals(value, array[left], compareFn) &&
    lowerOrEquals(value, array[right], compareFn)
  ) {
    delta = diffFn(value, array[left]) / diffFn(array[right], array[left]);
    position = left + Math.floor((right - left) * delta);
    if (equalsFn(array[position], value)) {
      return position;
    }
    if (compareFn(array[position], value) === Compare.LOWER_THAN) {
      left = position + 1;
    } else {
      right = position - 1;
    }
  }
  return DOES_NOT_EXIST;
}

let array = [];
for (let i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array)
console.log("result:", interpolationSearch(array, 4));
console.log("result:", interpolationSearch(array, 2));
console.log("result:", interpolationSearch(array, 8));
console.log("result:", interpolationSearch(array, 7));
console.log("result:", interpolationSearch(array, 99));



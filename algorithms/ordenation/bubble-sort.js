const Compare = {
  BIGGER_THAN: 1,
  LOWER_THAN:-1
}

function defaultCompare(a, b) {
  if (a < b) return -1;
  else return 1;
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

export function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}


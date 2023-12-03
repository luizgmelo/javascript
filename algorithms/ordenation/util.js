const Compare = {
  BIGGER_THAN: 1,
  LOWER_THAN:-1,
  EQUALS:0
}

function defaultCompare(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;
  else return 1;
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function findMinValue(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min;
}

function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max;
}

export { Compare, swap, defaultCompare, findMinValue, findMaxValue }


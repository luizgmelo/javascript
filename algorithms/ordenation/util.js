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

export { Compare, swap, defaultCompare }


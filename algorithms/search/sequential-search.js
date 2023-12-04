import { defaultEquals } from "../util.js"

const DOES_NOT_EXIST = -1;
function sequentialSeach(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return DOES_NOT_EXIST;
}


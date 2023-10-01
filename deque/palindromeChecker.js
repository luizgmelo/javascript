import Deque from "./deque.js";

function palindromeChecker(aString) {
  if (aString === undefined || aString === null ||
     (aString !== null && aString.length === 0)) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLowerCase().split('').join('');
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log("racecar", palindromeChecker("racecar"));
console.log("Was it a car or a cat I Saw", palindromeChecker("Was it a car or a cat I Saw"));
console.log("level", palindromeChecker("level"));
console.log("kayak", palindromeChecker("kayak"));
console.log("dad", palindromeChecker("dad"));


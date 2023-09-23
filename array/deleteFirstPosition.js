// copy all elements from myArray different of undefined
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] != undefined) {
      // console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}
// remove the first position and execute reIndex
Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers = numbers.removeFirstPosition();
console.log(numbers)

// Using method shift 
numbers.shift();
console.log(numbers);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}

numbers.insertFirstPosition(0);
console.log(numbers);

// The same logic that 
numbers.unshift(-1);
console.log(numbers);

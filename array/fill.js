let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
// Fill with a value an array
console.log(numbersCopy.fill(0));        // [0, 0, 0, 0, 0, 0]
console.log(numbersCopy.fill(2, 1));     // [0, 2, 2, 2, 2, 2]
console.log(numbersCopy.fill(1, 3, 5));  // [0, 2, 2, 1, 1, 2]

let ones = Array(6).fill(1);
console.log(ones);

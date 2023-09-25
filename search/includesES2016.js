let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers.includes(15)); // true
console.log(numbers.includes(20)); // false

let numbers2 = [7, 6, 5, 4, 3, 2, 1];
// 4 element after index 5 don't exist
console.log(numbers2.includes(4, 5)); // false

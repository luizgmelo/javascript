let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// create a array from another array and have optional condition.
let numbers2 = Array.from(numbers, x => (x % 2 === 0));
console.log(numbers2);


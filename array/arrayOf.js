// create a array with arguments
let numbers = Array.of(1);
console.log(numbers);
let numbers2 = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers2);
// get a copy of array with spread operator
let numbers3 = Array.of(...numbers2);
console.log(numbers3);

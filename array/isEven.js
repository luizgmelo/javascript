const isEven = (x) => x % 2 === 0 ? true : false; 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.every(isEven));
console.log(numbers.some(isEven));
// numbers.forEach(x => console.log(x % 2 === 0));
const myMap = numbers.map(isEven);
console.log(myMap);
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
const sumNumbers = numbers.reduce((previous, current) => previous + current);
console.log(sumNumbers);

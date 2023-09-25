let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.reverse(); // [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(numbers.sort()) // [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5,  6, 7, 8, 9]
console.log(numbers.sort((a, b) => a - b)); // [1,  2,  3,  4,  5, 6,  7, 8, 9, 10, 11, 12, 13, 14, 15]

// This code above can be represented this way:

numbers.reverse(); // [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function compareFunction(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a should be equal to b
  return 0;
}

console.log(numbers.sort(compareFunction));

// sort array with objects
const friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25},
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }

  return 0;
}

console.log(friends.sort(comparePerson));

// sort array with strings
let names = ['Ana', 'ana', 'john', 'John'];
// console.log(names.sort()); // ['Ana', 'John', 'ana', 'john']

// lower first
console.log(names.sort((a, b) => a.localeCompare(b)));
// upper first
console.log(names.sort((a, b) => b.localeCompare(a)));

let names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));

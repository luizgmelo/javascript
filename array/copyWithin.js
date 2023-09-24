let copyArray = [1, 2, 3, 4, 5, 6];
// copyWithin target, startCopy, pauseCopy (default is array.length)
// console.log(copyArray.copyWithin(0, 3)); //[ 4, 5, 6, 4, 5, 6 ]
console.log(copyArray.copyWithin(1, 3, 5)); // [ 1, 4, 5, 4, 5, 6 ]


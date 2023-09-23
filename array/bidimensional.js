function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

let averageTemp = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 73]];
printMatrix(averageTemp);

// Another and better way
console.table(averageTemp);

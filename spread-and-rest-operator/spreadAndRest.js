let params = [3, 4, 5];
console.log(...params); // spread operator (...))

function restParameterFunction(x, y, ...a) { // rest parameter
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7)); // 9
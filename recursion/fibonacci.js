/* FIBONACCI: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
   POSITION:  0, 1, 2, 3, 4, 5, 6, 7 , 8 , 9
    Definition
    1. If position 0 number is 0
    2. If position is 1 or 2 number is 1
    3. If position > 2 number is f(pos - 1) + f(pos - 2) 
        

*/ 

// with for loop

function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

// with recursion
function fibonacci(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(9));
let myVariable = 'global';
let myOtherVariable = 'global';
function myFunction() {
    let myVariable = 'local';
    return myVariable;
}
function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}
console.log(myVariable)
console.log(myFunction())
console.log(myOtherVariable)
console.log(myOtherFunction())
console.log(myOtherVariable)
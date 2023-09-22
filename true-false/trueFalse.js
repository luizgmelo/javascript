function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}
testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));
testTruthy('');
testTruthy('Packt');
testTruthy(new String(''));
testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));
testTruthy({});
let obj = {name: 'John'};
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age); // false
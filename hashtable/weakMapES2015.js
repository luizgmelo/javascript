// more peformace than map, but don't have iterators

const map = new WeakMap();
const ob1 = { name: 'Gandalf' };
const ob2 = { name: 'John' };
const ob3 = { name: 'Tyrion' };
map.set(ob1, 'gadalf@email.com');
map.set(ob2, 'johnsnow@email.com');
map.set(ob3, 'tyrion@email.com');
console.log(map.has(ob1));
console.log(map.get(ob3));
map.delete(ob1);
console.log(map.has(ob1))

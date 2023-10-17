import { defaultToString } from './util.js'

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() { 
    return `[#${this.key}: ${this.value}]`;
  }
}

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  keyValues() {
    return Object.values(this.table);
    
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }
  forEach(callbackFn) {
    const valuePair = this.keyValues();
    for (let i = 0; i < valuePair.length; i++) {
      const result = callbackFn(valuePair[i].key, valuePair[i].value);
      if (result === false) {
        break;
      }
    }
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.table = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePair = this.keyValues();
    let objString = `${valuePair[0].toString()}`
    for (let i = 1; i < valuePair.length; i++) {
      objString = `${objString}, ${valuePair[i].toString()}`;
    }
    return objString;
  }
}

const dictionary = new Dictionary();
console.log(dictionary.isEmpty());
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.isEmpty());
console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.remove('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`);
});

// better than loseloseHashCode
// low collision, more performance 

import { defaultToString } from '../dictionary/util.js';

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }
  hashCode(key) {
    return this.djb2HashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }
}

const hash = new HashTable();
hash.put('Nathan', 'nathan@email.com');
hash.put('Sargeras', 'sargeras@email.com');
hash.put('Abreu', 'abreu@email.com');
//  collision hash
console.log(hash.hashCode('Nathan'), '- Nathan'); // 223
console.log(hash.hashCode('Sargeras'), '- Sargeras'); // 711


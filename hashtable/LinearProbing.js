import { HashTable, ValuePair } from './HashTable.js'

class LinearProbing extends HashTable {
  constructor() {
    super();
    this.table = {};
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null){
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = position + 1;
        while (this.table[index] != null && this.table[index].key != key) {
          index++;
        };
        if (this.table[index] != null && this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }
    return undefined;
  }
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index]
        removedPosition = index;
      }
      index++;
    }
  }
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }
}

const hash = new LinearProbing();
hash.put('Nathan', 'nathan@email.com');
hash.put('Sargeras', 'sargeras@email.com');
hash.put('Sargeras', 'outroSargeras@email.com');
hash.put('Guilherme', 'guilherme@email.com');
console.log(hash.get('Nathan'));
console.log(hash.get('Sargeras'));
console.log(hash.get('Guilherme'));
hash.remove('Guilherme');
hash.remove('Sargeras');
console.log(hash.get('Guilherme'));
console.log(hash.get('Sargeras'));
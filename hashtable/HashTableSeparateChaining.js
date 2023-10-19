import { defaultToString } from '../dictionary/util.js';
import LinkedList from '../linkedList/linkedList.js';
import { HashTable, ValuePair } from './HashTable.js';

class HashTableSeparateChaining extends HashTable {
  constructor(toStrFn = defaultToString) {
    super();
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
    this.table[position].push(new ValuePair(key, value));
    return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next
      }
    }
    return false;
  }
}

const hash = new HashTableSeparateChaining();
// not collision
hash.put('Nathan', 'Guilherme'); // 10 hashcode
hash.put('Sargeras', 'Jose'); // 10 hashcode
console.log(hash.get('Nathan'));

// but not update with put
hash.put('Sargeras', 'Jose');
console.log(hash.get('Sargeras'))

hash.remove('Nathan')
console.log(hash.get('Nathan'));

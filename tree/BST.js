// Binary Search Tree
import { defaultCompare } from './util.js';
import { Node } from './Node.js';

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
}





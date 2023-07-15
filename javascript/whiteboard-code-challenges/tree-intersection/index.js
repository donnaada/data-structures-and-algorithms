'use strict';

const { HashTable } = require('../hashtable');

const traverse = (cur) => {
  if (cur.left) {
    cur = cur.left;
  }

  if (cur.right) {
    cur = cur.right;
  }
};

const tree_intersection = (treeA, treeB) => {
  let commonValues = [];
  let hash = new HashTable(1024);

  let currentA = treeA.head;
  let currentB = treeB.head;

  let i;
  while(currentA){
    hash.set(currentA, i);
    traverse(currentA);
    i++;
  }

  while(currentB){
    if(hash.get(currentB)){
      commonValues.push(currentB.value);
      traverse(currentB);
    }

    traverse(currentB);

  }

  return commonValues;
};

module.exports = { tree_intersection };

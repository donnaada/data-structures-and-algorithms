'use strict';

const { BinaryTree, Node } = require('./index.js');

describe('Testing Binary Trees', () => {
  test('Should create new Tree', ()=>{
    // Code Here
    let tree = new BinaryTree();
    tree.root = new Node(20);

    expect(tree.root.value).toBe(20);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();

  });
});

'use strict';

const { BinaryTree, Node, BinarySearchTree } = require('./index.js');

describe('Testing Binary Trees', () => {
  test('Can instantiate an empty tree', ()=>{
    // Code Here
    let tree = new BinaryTree();

    expect(tree.root).toBeNull();

  });
  test('Can successfully instantiate a tree with a single root node', ()=>{
    // Code Here
    let tree = new BinaryTree();
    tree.root = new Node(20);

    expect(tree.root.value).toBe(20);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();

  });

  test('can successfully add a left child and right child properly to a node', ()=>{
    // Code Here
    let tree = new BinarySearchTree();
    tree.add(20);
    tree.add(5);
    tree.add(30);

    expect(tree.root.value).toBe(20);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(30);

  });

  test('Should be able to return nodes in preOrder', ()=>{
    // Code Here
    let tree = new BinarySearchTree();
    tree.add(20);
    tree.add(5);
    tree.add(30);

    expect(tree.preOrder()).toEqual([20, 5, 30]);
  });
  test('Should be able to return nodes inOrder', ()=>{
    // Code Here
    let tree = new BinarySearchTree();
    tree.add(20);
    tree.add(5);
    tree.add(30);

    expect(tree.inOrder()).toEqual([5, 20, 30]);

  });
  test('Should be able to return nodes in postOrder', ()=>{
    // Code Here
    let tree = new BinarySearchTree();
    tree.add(20);
    tree.add(5);
    tree.add(30);

    expect(tree.postOrder()).toEqual([5, 30, 20]);
  });

  test('Testing max value', ()=>{
    // Code Here
    let tree = new BinarySearchTree();
    tree.add(20);
    tree.add(5);
    tree.add(9);
    tree.add(3);
    tree.add(30);
    tree.add(25);
    tree.add(35);

    expect(tree.findMax()).toEqual(35);
  });
});

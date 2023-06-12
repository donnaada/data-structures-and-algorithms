'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder(){
    const results = [];

    const traverse = (node) => {

      results.push(node.value);

      if(node.left) {
        traverse(node.left);
      }

      if(node.right){
        traverse(node.right);
      }
    };

    traverse(this.root);

    return results;
  }

  inOrder(){
    const results = [];

    const traverse = (node) => {

      if(node.left) {
        traverse(node.left);
      }

      results.push(node.value);

      if(node.right){
        traverse(node.right);
      }
    };

    traverse(this.root);

    return results;
  }

  postOrder(){
    const results = [];

    const traverse = (node) => {
      if(node.left) {
        traverse(node.left);
      }
      if(node.right) {
        traverse(node.right);
      }

      results.push(node.value);
    };

    traverse(this.root);

    return results;
  }

  //code challenge 16 - finding the maximum value in a binary tree
  findMax(){
    let max;

    const traverse = (node) => {

      max = node.value;

      if(node.left) {
        traverse(node.left);
        if (node.left.value > max) max = node.left.value;
      }

      if(node.right){
        traverse(node.right);
        if (node.right.value > max) max = node.right.value;
      }
    };

    traverse(this.root);

    return max;
  }

  fizzBuzzTree(node){

    let newTree = new Node();

    if(node % 15){
      newTree.value = 'FizzBuzz';
    } else if(node % 5){
      newTree.value = 'Buzz';
    } else if(node % 3){
      newTree.value = 'Fizz';
    } else {
      newTree.value = node.value;
    }

    newTree.left = this.fizzBuzzTree(node.left);
    newTree.right = this.fizzBuzzTree(node.right);

    return newTree;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(){
    super();
  }

  add(value){
    const node = new Node(value);

    const insert = (node, root) => {
      if(!root){
        root = node;
      } else if(node.value < root.value){
        root.left = insert(node, root.left);
      } else {
        root.right = insert(node, root.right);
      }
      return root;
    };

    this.root = insert(node, this.root);
  }
}

const breadthFirst = (tree) => {
  const results = [];
  const treeValue = [tree];

  while (treeValue.length > 0) {
    const node = treeValue.shift();
    results.push(node.value);

    if (node.left) {
      treeValue.push(node.left);
    }
    if (node.right) {
      treeValue.push(node.right);
    }
  }

  return results;
};







module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
  breadthFirst
};

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

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};

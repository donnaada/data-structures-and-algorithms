'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }

  push(value) {
    let newNode = new Node(value);

    let tempNode = this.top;
    this.top = newNode;
    this.top.next = tempNode;
  }

  pop() {
    if (!this.top) return null;

    let removedItem = this.top.value;
    this.top = this.top.next;
    return removedItem;
  }

  isEmpty() {
    return this.top === null;
  }

}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  peek(){
    if (!this.front) return null;
    return this.front.value;
  }

  enqueue(value){
    let newNode = new Node(value);
    if (this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    let dequeuedItem = null;
    if (this.front){
      dequeuedItem = this.front.value;
      if (this.front === this.back) this.back = null;
      this.front = this.front.next;
    }
    return dequeuedItem;
  }

  isEmpty(){
    return this.front === null;
  }
}

class PseudoQueue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if (this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    let dequeuedItem = null;
    if (this.front){
      dequeuedItem = this.front.value;
      if (this.front === this.back) this.back = null;
      this.front = this.front.next;
    }
    return dequeuedItem;
  }
}

module.exports = {
  Stack,
  Queue,
  PseudoQueue
};


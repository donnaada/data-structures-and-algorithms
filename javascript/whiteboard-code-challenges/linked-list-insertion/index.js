'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let isInNode = false;
    let current = this.head;
    while (current !== null){
      if (current.value === value){
        isInNode = true;
      }
      current = current.next;
    }
    return isInNode;
  }


  append(value){
    let node = new Node(value);
    if (!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue){
    if (!this.head) throw new Error('No head found, linked list is empty');
    if (!this.head.value === value) this.insert(value);
    if (!this.includes(value)) throw new Error('Value could not be found');

    let current = this.head;

    while (current){
      if (current.next && current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
      } else{
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) throw new Error('No head found, linked list is empty');
    if (!this.head.value === value) this.insert(value);
    if (!this.includes(value)) throw new Error('Value could not be found');

    let current = this.head;

    while (current) {
      if (current.value === newValue) {
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }



  traversal(){
    let current = this.head;

    while (current){
      console.log('current>>',current.value);
      current = current.next;
      console.log('next>>',current.next);
    }
  }
}

module.exports = LinkedList;

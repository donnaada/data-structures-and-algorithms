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

  toString() {
    let linkedListString = '';
    let current = this.head;

    while (current) {
      linkedListString += `{${current.value}} -> `;
      current = current.next;
    }

    linkedListString += 'NULL';

    return linkedListString;
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

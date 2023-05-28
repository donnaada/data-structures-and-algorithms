'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {


  test('Add node to the end of linked list', ()=>{
    let list = new LinkedList();

    list.append('b');
    list.append('dinosaur');
    list.append('c');

    expect(list.head.next.next.value).toEqual('c');
    expect(list.head.next.next.next).toBeNull();
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next).toBeNull();
  });

  test('Can successfully insert a node before a node of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(3);
    list.insertBefore(1,2);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  test('Can successfully insert a node after a node of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(3);
    list.insertAfter(1,2);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(1);
  });
});

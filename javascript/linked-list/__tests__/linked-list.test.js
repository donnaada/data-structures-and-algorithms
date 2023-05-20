'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {

  test('Can successuflly instantiate empty linked list', () => {
    let list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can inster into linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  test('The head property will properly point to the first node', () => {
    let list = new LinkedList();
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();

    list.append('last');
    expect(list.head.next.next.value).toEqual('last');
  });

  test('Can properly return a collection of all the values that exist in the linked list', ()=>{
    let list = new LinkedList();
    list.insert('c');
    list.insert('b');
    list.insert('a');
    list.toString();

    expect(list.toString()).toEqual('{a} -> {b} -> {c} -> NULL');
  });

  test('Will return false when searching for a value in the linked list that does not exist', ()=>{
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('dinosaur');

    expect(list.includes('apple')).toEqual(false);
  });

  test('Will return true when finding a value within the linked list that exists', ()=>{
    let list = new LinkedList();
    list.append('dinosaur');
    list.append('b');
    list.append('c');

    expect(list.includes('dinosaur')).toEqual(true);
  });
});

'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {

  test('Can successuflly instantiate empty linked list', () => {
    let list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can insert into linked list', () => {
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

describe('Testing Linked List - kthFromEnd() Method', () => {
  test('Where k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.kthFromEnd(4)).toBeNull();
  });

  test('Where K and the Length of the List are the Same', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.kthFromEnd(3)).toBeNull;
  });

  test('Where k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.kthFromEnd(2)).toBe(1);
  });

  test('Where k is not a positive integer', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.kthFromEnd(-1)).toBeNull();
  });

  test('Where the linked list is of size 1', () => {
    const list = new LinkedList();
    list.append(1);

    expect(list.kthFromEnd(0)).toBe(1);
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);

    expect(list.kthFromEnd(2)).toBe(3);
  });

});

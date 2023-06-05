'use strict';

const { Stack, Queue, PseudoQueue, AnimalShelter, isBalanced } = require('./index');


describe('Stack Tests', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack;
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  test('Can successfully push multiple values onto a stack', ()=>{
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  test('Can successfully pop off the stack', ()=>{
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.top.value).toEqual(2);
  });

  test('Can successfully empty a stack after multiple pops', ()=>{
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

  test('Can successfully peek the next item on the stack', ()=>{
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

  test('Can successfully instantiate an empty stack', ()=>{
    let stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();
  });

  test('Calling pop or peek on empty stack raises exception', ()=>{
    let stack = new Stack();

    expect(stack.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
  });

});


describe('Queue Tests', () => {
  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(1);
  });

  test('Can successfully enqueue multiple values into a queue', ()=>{
    // Code Here
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.back.value).toEqual(3);
  });

  test('Can successfully dequeue out of a queue the expected value', ()=>{
    // Code Here
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();

    expect(queue.front.value).toEqual(2);

    queue.dequeue();
    expect(queue.front.value).toEqual(3);
  });

  test('Can successfully peek into a queue, seeing the expected value', ()=>{
    // Code Here
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', ()=>{
    // Code Here
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty).toBeTruthy();
  });

  test('Can successfully instantiate an empty queue', ()=>{
    // Code Here
    let queue = new Queue;
    let check = queue.isEmpty();

    expect(queue.isEmpty).toBeTruthy();
    expect(check).toBeTruthy();
  });

  test('Calling dequeue or peek on empty queue raises exception', ()=>{
    // Code Here
    let queue = new Queue;

    expect(queue.peek()).toBeNull();
    expect(queue.dequeue()).toBeNull();
  });

});

describe('PseudoQueue Tests', () => {
  test('Can successfully enqueue into a queue', () => {
    let queue = new PseudoQueue;
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(1);
  });

  test('Can successfully enqueue multiple values into a queue', ()=>{
    // Code Here
    let queue = new PseudoQueue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.back.value).toEqual(3);
  });

  test('Can successfully dequeue out of a queue the expected value', ()=>{
    // Code Here
    let queue = new PseudoQueue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();

    expect(queue.front.value).toEqual(2);

    queue.dequeue();
    expect(queue.front.value).toEqual(3);
  });

  test('Can successfully empty a queue after multiple dequeues', ()=>{
    // Code Here
    let queue = new PseudoQueue;
    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
  });

  test('Can successfully instantiate an empty queue', ()=>{
    // Code Here
    let queue = new PseudoQueue;

    expect(queue.front).toBeNull();
  });

  test('Calling dequeue empty queue raises exception', ()=>{
    // Code Here
    let queue = new PseudoQueue;

    expect(queue.dequeue()).toBeNull();
  });

});


describe('Animal Shelter Tests', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  test('Can successfully enqueue dog into the dog queue', () => {
    animalShelter.enqueue('dog', 'spot');
    expect(animalShelter.dogQueue.front.value).toEqual('spot');
  });

  test('Can successfully enqueue cat into the cat queue', () => {
    animalShelter.enqueue('cat', 'mittens');
    expect(animalShelter.catQueue.front.value).toEqual('mittens');
  });

  test('Calling enqueue on any other species raises exception', ()=>{
    // Code Here
    let queue = animalShelter.enqueue('fish', 'bubbles');

    expect(queue).toBeNull();
  });

  test('Can successfully dequeue dog into the dog queue', () => {
    animalShelter.enqueue('dog', 'spike');
    animalShelter.enqueue('dog', 'spot');
    animalShelter.enqueue('dog', 'striker');
    animalShelter.dequeue('dog');
    expect(animalShelter.dogQueue.front.value).toEqual('spot');
  });

  test('Can successfully dequeue cat into the cat queue', () => {
    animalShelter.enqueue('cat', 'mittens');
    animalShelter.enqueue('cat', 'muffins');
    animalShelter.enqueue('cat', 'mischief');
    animalShelter.enqueue('cat', 'missy');
    animalShelter.dequeue('cat');

    expect(animalShelter.catQueue.front.value).toEqual('muffins');
  });

  test('Calling dequeue on any other preference raises exception', ()=>{
    // Code Here
    let queue = animalShelter.dequeue('fish', 'bubbles');

    expect(queue).toBeNull();
  });



});

describe('Test Balanced String', () => {
  test('Tests to see if sting is balanced', ()=>{
    let string = '(){}[[]]';
    expect(isBalanced(string)).toBe(true);
    string = '{}';
    expect(isBalanced(string)).toBe(true);
  });

  test('Tests to see if sting is unbalanced', ()=>{
    let string = '[({}]';
    expect(isBalanced(string)).toBe(false);

    string = '}}{Code}[Fellows](())';
    expect(isBalanced(string)).toBe(false);
  });


});


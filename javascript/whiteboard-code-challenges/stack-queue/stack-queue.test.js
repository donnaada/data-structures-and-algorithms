'use strict';

const { Stack, Queue } = require('./index');


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


# Challenge Title: Linked List Implementation

## Approach & Efficiency

Linked List implementation build based on class class lecture.

## Tests

- Can successuflly instantiate empty linked list
- Can insert into linked list
- The head property will properly point to the first node
- Can properly return a collection of all the values that exist in the linked list
- Will return false when searching for a value in the linked list that does not exist
- Will return true when finding a value within the linked list that exists

## Solution

``` js

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

```

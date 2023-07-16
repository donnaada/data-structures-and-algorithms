const reverseList = (list) => {
  let current = list.head;
  let next = null;
  let prev = null;

  while (current){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;

  return list;
}

module.exports = { reverseList };

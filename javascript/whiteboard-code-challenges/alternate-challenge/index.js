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
};

const segregate = (arr) => {
  let results = [];
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++){
    if(arr[i]%2){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  results = [...even, ...odd];
  return results;

}

module.exports = { reverseList, segregate };

const insert = (arr, val) => {
  let i = 0;

  while (val > arr[i]){
    i++;
  }

  while (i < arr.length){
    let temp = arr[i];
    arr[i] = val;
    val = temp;
    i++;
  }
  arr.push(val);
};

const insertionSort = (arr) => {
  let newArr = [];
  newArr[0] = arr[0];
  for (let i = 1; i < arr.length; i++){
    insert(newArr, arr[i]);
  }
  return newArr;
};


let arrayToSort = [ 8, 4, 23, 42, 16, 15];
let reverseSorted = [20,18,12,8,5,-2];
let fewUniques = [5,12,7,5,5,7];
let nearlySorted = [2,3,5,7,13,11];

console.log('base sort >>>',insertionSort(arrayToSort));
console.log('reverse sorted >>>',insertionSort(reverseSorted));
console.log('few unique sorted >>> ',insertionSort(fewUniques));
console.log('nearly sorted >>> ',insertionSort(nearlySorted));


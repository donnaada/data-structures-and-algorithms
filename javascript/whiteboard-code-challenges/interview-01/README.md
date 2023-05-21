# Challenge Title: Interview 1 : Sum arrays in Matrix

## Whiteboard Process

![Sum Array](./whiteboard-interview-1-matrix.png)

## Approach & Efficiency

This challenge was solved using a nested for-loop in a while loop. The while loop was not necessary but was added as an extra check to ensure that the length of the array containing the sum of each array in the matrix was equal to the length of the matrix.

## Solution

``` js
let sumMatrix = (array) =>{
  newArray = [];

  while (newArray.length !== array.length){
    for (let i = 0; i < array.length; i++){
      let sum = 0;
      for (let j = 0; j < array[i].length; j++){
        sum += array[i][j];
      }
      newArray[i]= sum;
    }
  }

  return newArray;
}

//Testing
let arr = [[1,2,3], [4,5,6], [7,8,9]];

console.log(sumMatrix(arr)); // should log [6,15,24] to console
```

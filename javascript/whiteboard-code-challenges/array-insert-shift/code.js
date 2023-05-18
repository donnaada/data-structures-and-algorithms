let array = [1, 3, 5, 7,11,13,17,19,23, 29,31,37,41,43,47,54,59];
let search = 23;

function BinarySearch(arr, key){

  let low = 0;
  let high = arr.length;

  while (low <= high) {

    let middleIndex = Math.floor((low+high)/2);

    if (arr[middleIndex] > key){
      high = middleIndex - 1;
    } else if (arr[middleIndex]<key){
      low = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }

  if (low > high){
    return -1;
  }

}



console.log(BinarySearch(array,search));

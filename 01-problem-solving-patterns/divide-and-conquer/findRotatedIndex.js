/*
Write a function findRotatedIndex(arr, num) that returns the index of a target value num inside a sorted array that has been rotated around an unknown pivot.
If the value isn’t found, return -1.
*/

function findRotatedIndex (arr, num){
  let minIndex = 0;
  let maxIndex = arr.length -1;

  while(minIndex <= maxIndex){
    let middle = Math.floor((minIndex + maxIndex)/2);

    if(arr[middle] === num){
      return middle;
    }else if( arr[minIndex] <= arr[middle]){
      if(num >= arr[minIndex] && num<=arr[middle]){
        maxIndex = middle - 1;
      }else{
        minIndex = middle + 1;
      }
    }else{
      if(num >= arr[middle] && num<=arr[maxIndex]){
        minIndex = middle + 1;
      }else{
        maxIndex = middle - 1;
      }
    }

  }
  return -1;
}

console.log(findRotatedIndex([4, 5, 6, 7, 1, 2, 3], 2))

/*
Instead of searching linearly, it detects which half of the array is
properly sorted and narrows down the search range accordingly.
*/
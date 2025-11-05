
function swap (arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

function partition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivot = arr[startIdx];
    let pivotIdx = 0;

    for(let i = 1; i<arr.length; i++){
        if(pivot> arr[i]){
            pivotIdx ++;
            swap(arr, pivotIdx, i)
        }
    }
    
    swap(arr, startIdx, pivotIdx);

    //console.log(arr)
    return pivotIdx;
};

//console.log(partition([4,8,2,1,5,7,6,3]));

function quickSort (arr, left = 0, right = arr.length-1){
  if(left<right){
    let pivotIndex = partition(arr, left, right);
//left
    quickSort(arr, left, pivotIndex-1);
//right
    quickSort(arr, pivotIndex+1, right);
  }
  return arr
};

console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))

/*
A divide-and-conquer sorting algorithm that selects a pivot element,
partitions the array into elements less than and greater than the pivot,
and recursively sorts the two sides.

partition(): Rearranges elements around a pivot and returns its final index.
quickSort(): Recursively sorts left and right halves around the pivot.
 */
function swap (arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp

};

function selectionSort (arr){
    for(let i = 0; i<arr.length; i++){
        let smallerIdx = i;
        for(let j = i; j<arr.length; j++ ){
            if(arr[j] < arr[smallerIdx]){
                smallerIdx = j;
            }
        }
        if(smallerIdx !== i){
            swap(arr, i, smallerIdx);
        }
        console.log(arr)
    }
    return arr
}

console.log(selectionSort([5,2,1,3,9,4]));

/*
Iteratively selects the smallest element from the unsorted portion
and swaps it with the current position.

Algorithm:
- Start from index 0.
- Find the smallest value from the rest of the array.
- Swap it into the current index.
- Continue until all elements are sorted.
*/
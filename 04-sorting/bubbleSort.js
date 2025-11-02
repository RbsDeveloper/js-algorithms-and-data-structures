function swap (arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

function bubble(arr){

    for(let i = arr.length - 1; i>=0; i--){
        console.log(arr)
        let noSwap
        for(let j = 0; j<= i-1; j++){
            noSwap = true;
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1);
                noSwap = false;
            }
        }
        if(noSwap){
                console.log('No swaps, we finished')
                break
            }
    }

    return arr;
}

console.log(bubble([1,4,2,6,3,7,9,5]))

/*
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they’re in the wrong order.

After each pass, the largest unsorted element “bubbles” up to the end of the array.

The next pass ignores the last sorted element and so on.

Optimization: if no swaps occur during a pass, the array is already sorted, and we can stop early.
*/
function linearS(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===val) return i;
    }

    return -1;
}

const nums = [1,2,34,5,23,4,56,243,12,5,23];

console.log(linearS(nums, 4));

/*
Linear Search checks each element in order until it finds the target value.

Works for unsorted arrays — no sorting is required.

It’s the simplest but least efficient search algorithm for large datasets.

It stops immediately when a match is found (so in the best case, it’s very fast).

It returns the index of the found element, or -1 if not found.
*/
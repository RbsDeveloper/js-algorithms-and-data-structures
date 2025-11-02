function swap (arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp

};

function insertionSort (arr) {
    for(let i = 1; i<arr.length; i++){
        if(arr[i]> arr[i-1]){
            console.log('Nothing to change');
            
        }else if(arr[i]<arr[i-1] && arr[i]> arr[i-2]){
            swap(arr, i-1, i);
        }else{
           
            for(let j = i-2; j>=0; j--){
                console.log('inner loop ')
                if(arr[i]<arr[j]&&arr[i]>arr[j-1]){
                    console.log(`We checked ${arr[i]},${arr[j]}and ${arr[j-1]}`)
                    let tempRemoved = arr.slice(i, i+1);
                    arr.splice(i,1)
                    arr.splice(j,0,tempRemoved[0])
                    break
                }
        }
        }
    }
    return arr;
};

//console.log(insertionSort([3,44,38,5,47,15]));

//Optimized insertin

function secondInsertion (arr){
    for(let i=1 ;  i< arr.length; i++){
        let currentVal = arr[i];
        let j=i-1
        while(arr[j]>currentVal){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=currentVal;
    }

    return arr
}

console.log(secondInsertion([3,44,38,5,47,15]));

/*
- Start from index 1 and insert each element into its correct position in the sorted left side.
- Continue until the array is sorted.
- Best for small or nearly sorted datasets.
*/
                                
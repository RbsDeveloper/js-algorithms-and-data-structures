
function mergeTwoArr (arr1, arr2){
    let i=0;
    let j =0;
    const sortedArr = [];
    while(i<arr1.length && j<arr2.length){
        
        if(arr1[i]<arr2[j]){
            sortedArr.push(arr1[i]);
            i++
        }else{
            sortedArr.push(arr2[j]);
            j++
        }
    }

    while(i<arr1.length){
        sortedArr.push(arr1[i]);
        i++
    }

    while(j<arr2.length){
        sortedArr.push(arr2[j]);
        j++
    }

    return sortedArr;
}

const firstunsortedArr = [1, 10, 50];
const secondUnsortedArr = [2, 14, 99, 100];

//console.log(mergeTwoArr(firstunsortedArr, secondUnsortedArr));

function mergeSort (arr){
     
    
    if(arr.length <= 1) return arr;
   
    let middleP = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middleP));
    let right = mergeSort(arr.slice(middleP));

    return mergeTwoArr(left, right);
    
}

console.log(mergeSort([7,4,23,6,24,7,2,1]))

/*
A divide-and-conquer sorting algorithm that splits an array into halves,
recursively sorts each half, and then merges them into a single sorted array.

mergeTwoArr() merges two sorted arrays into one sorted array.
mergeSort() repeatedly splits the array until single elements remain,
then merges them back in sorted order.
*/
/*
Write a function countUniqueValues(arr) that counts the number of unique values in a sorted array.
*/

const nums = [1,2,3,4,4,4,7,7,12,12,13];

function countUniquevalues (arr) {

    let uniqueVal = 1;
    let firstP = 0
    let secondP = 1

    if(arr.length ===  0) return 0

    while(secondP < arr.length){
        if(arr[firstP] !== arr[secondP]){
            uniqueVal = uniqueVal + 1
            firstP = secondP
        }
        secondP++
    }

    return uniqueVal

}

console.log(countUniquevalues(nums))

function countUnique (arr) {
    if(arr.length === 0) return 0;

    let i=0;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i]=arr[j];
        }
    }

    return i + 1; 

}
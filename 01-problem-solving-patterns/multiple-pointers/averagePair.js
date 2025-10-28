/*
Write a function that takes in a sorted array of integers and a target average, and determines if there is a pair of values 
in the array where the average of the pair equals the target average.
There may be more than one pair that matches — you just need to return true if any valid pair exists.
*/

function averagePair (arr, average){
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    

    while(leftPointer < rightPointer){
        const avg = (arr[leftPointer] + arr[rightPointer]) / 2
        console.log(arr[leftPointer] + arr[leftPointer] / 2)
        if(avg === average){
            console.log('Found the average')
            return true
        }else if(avg > average){
            rightPointer -=1
            console.log(`Decrementing right pointer ${rightPointer}`)
        }else{
            leftPointer += 1;
            console.log(`Incrementing left pointer ${leftPointer}`)
        }
    }
    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
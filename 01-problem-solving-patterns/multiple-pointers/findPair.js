/*
Write a function findPair(arr, diff) that checks if there exists 
a pair of numbers in the array whose difference equals the target value diff.
*/

function findPair (arr, diff){
    arr.sort((a,b)=> a-b);
    let firstPointer = 0;
    let secondPointer = 1;

    

    while(secondPointer < arr.length){
        console.log(firstPointer, secondPointer)
        let diffResult = arr[secondPointer] - arr[firstPointer];
        
        if(diffResult===diff && firstPointer !== secondPointer){
            return true
        }

        if(diffResult > diff){
            firstPointer++
        }
        
        if (diffResult < diff){
            secondPointer++
        }
    }

    return false
}

console.log(findPair([90, 70, 20, 80, 50], 45))
/*
Write a function maxSubarraySum(arr, n) that finds the maximum sum of n consecutive elements in the array.
*/

function maxSubarraySum(arr, n){
    if(arr.length < n) return null;

    let leftPointer = 0;
    let rightPointer = leftPointer + n - 1;

    let tempSum = 0;
    let maxSum = 0;

    for(let i = 0 ; i <= rightPointer; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    

    while(rightPointer < arr.length - 1){
        rightPointer++;
        console.log(`right p from inside while: ${rightPointer}`)
        
        tempSum += arr[rightPointer];
        tempSum -= arr[leftPointer];

        leftPointer++;
        console.log(`left p from inside while: ${leftPointer}`)

        if(tempSum > maxSum){
            maxSum = tempSum
        }

        console.log(`max sum is: ${maxSum}`);
    }

    return maxSum
}


const prob = [1, 2, 3, 4, 5];

console.log(maxSubarraySum(prob, 2));
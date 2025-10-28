function minSubArrayLen (arr, target) {
    let leftPointer = 0;
    let rightPointer = 0;

    let sum = 0;
    let lengthOfSum = Infinity;

    if(arr[0]>=target){
        return 1;
    }
    
    while(leftPointer < arr.length){
        if(sum < target && rightPointer < arr.length){
            sum += arr[rightPointer];
            rightPointer++
            
        }

        else if(sum>=target){
            lengthOfSum = Math.min(lengthOfSum, rightPointer - leftPointer);
            sum -= arr[leftPointer]
            leftPointer++
        }

        else{
            break
        }
    }

    return lengthOfSum === Infinity ? 0 : lengthOfSum

}
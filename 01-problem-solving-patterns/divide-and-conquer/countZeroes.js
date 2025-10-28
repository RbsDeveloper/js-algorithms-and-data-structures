/*
Write a function countZeroes(arr) that accepts a sorted array consisting of only 1s followed by 0s.
Return the total number of 0s in the array.
*/

function countZeroes (arr){
    let minIndex = 0;
    let maxIndex = arr.length-1;

    while(minIndex <= maxIndex){
        let middle = Math.floor((maxIndex+minIndex)/2);
        

        if(arr[middle]===1){
            minIndex = middle+1;
        }else { // arr[middle] === 0
      // check if it’s the first zero
      if (middle === 0 || arr[middle - 1] === 1) {
        return arr.length - middle; // count of zeroes
      } else {
        maxIndex = middle - 1; // first zero is to the left
      }
    }
    }

    return 0;
}

/*
Instead of scanning the array linearly, it uses a **binary search** 
approach to locate the first zero and then calculates how many 
zeroes follow it. 
 */
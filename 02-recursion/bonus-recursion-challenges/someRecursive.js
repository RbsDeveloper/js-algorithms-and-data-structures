/*Write a recursive function called someRecursive(arr, callback) that returns true 
if any element in the array makes the callback return true.
Otherwise, return false.*/

const isOdd = val => val%2 !==0;

function someRecursive (arr, callback){
    if(arr.length===0){
        return false
    }else if(callback(arr[0])){
        return true
    }else{
        return someRecursive(arr.slice(1), callback)
    }
};

//console.log(someRecursive([4,6,8], isOdd));

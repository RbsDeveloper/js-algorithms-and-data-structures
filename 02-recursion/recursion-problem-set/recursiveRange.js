/*
Write a function recursiveRange(num) that takes a number and returns the 
sum of all numbers from 0 up to that number (inclusive).
*/

function recursiveRange ( num ){
    if(num === 0) return 0;

    return num + recursiveRange(num-1);
};

//console.log(recursiveRange(4))
/*
Write a recursive function isPal(str) that returns 
true if the string is a palindrome, and false otherwise.
*/

function isPal (str){
    
    if(str.length === 0 || str.length === 1){
        return true
    }

    if(str[0] === str[str.length-1]){
        return isPal(str.slice(1,-1));
    }
    
    return false;
};

//console.log(isPal('tacocata'));
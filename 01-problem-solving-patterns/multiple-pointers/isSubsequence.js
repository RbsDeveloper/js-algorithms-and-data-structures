/*
Write a function that checks if the characters in one string appear in order inside another string, without needing to be consecutive.

Return true if all characters of the first string appear in the second string in the same order.

Return false otherwise.
*/

function isSubsequence (str1, str2){
    let firstPointer = 0;
    let secondPointer = 0;

    if(str1===''){
        return true
    }

    while( secondPointer < str2.length){
        

        if(str1[firstPointer]===str2[secondPointer]){
            firstPointer++;
        }
        secondPointer++
        if(firstPointer === str1.length) return true
    }

    return false
}

//console.log(isSubsequence('abc', 'acb'))
/*
Write a function validAnagram(str1, str2) that checks whether two strings are anagrams 
of each other (contain the same characters in the same quantity, but possibly in different order).
*/

function validAnagram (strOne, strTwo) {
    if(strOne.length !== strTwo.length){
        return false
    }

    const firstWord = {};
    const secondWord = {};

   for(let char of strOne.split('')){
        if(firstWord[char]){
            firstWord[char] = firstWord[char] + 1
        }else{
            firstWord[char] = 1
        }
   }

   for(let char of strTwo.split('')){
    if(secondWord[char]){
        secondWord[char] = secondWord[char] + 1
    }else {
        secondWord[char] = 1
    }
   }

   console.log(firstWord);
   console.log(secondWord)
   for(let key in firstWord){
    if(!(key in secondWord)){
        return false;
    }
    if(firstWord[key] !== secondWord[key])
        return false
   }

   return true
}

console.log(validAnagram('hello', 'cehlo'));
/*Write a recursive function called capitalizeWords that takes an array 
of words and returns a new array containing each word capitalized (the entire word, not just the first letter). */

function capitalizeWords(arr) {

    let capitalizedArr = [];
    let capitalizedWord = '';

    if(arr.length === 0){
        return [];
    }

    for(let char of arr[0]){
        capitalizedWord+=char.toUpperCase();
    }
    
    capitalizedArr.push(capitalizedWord)

    capitalizedArr = capitalizedArr.concat(capitalizeWords(arr.slice(1)));

    return capitalizedArr;

}

//console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))
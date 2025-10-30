/*
    Write a recursive function called capitalizeFirst that takes an array of strings and returns a new array 
    with the first letter of each string capitalized.
*/

function capitalizeFirst(arr){
    let capitalized = [];

    if(arr.length === 0) return [];

    capitalized.push(arr[0][0].toUpperCase()+arr[0].slice(1));

    capitalized = capitalized.concat(capitalizeFirst(arr.slice(1)));

    return capitalized;
}

//console.log(capitalizeFirst(['car','taco','banana']));
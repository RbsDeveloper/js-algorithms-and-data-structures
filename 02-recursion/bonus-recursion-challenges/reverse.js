/*
Write a recursive function reverse(str) that returns the reverse of a given string.
*/

function reverse(str){

    if(str.length === 1) return str;

    return str[str.length-1] + reverse(str.slice(0, -1));
}

//console.log(reverse('calculator'));

const strr = 'calculator';

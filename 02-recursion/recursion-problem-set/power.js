/* Write a function called power(base, exponent) that returns the result of raising the base to the exponent power.
The function should be recursive — you cannot use the built-in ** operator or Math.pow().*/

function  power(base, exp) {
    if(exp === 0 )return 1;

    return base * (power(base, exp-1));
}

//console.log(power(3,3));
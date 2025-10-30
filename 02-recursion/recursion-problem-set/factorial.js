/*
Write a function factorial(num) that returns the factorial of a number.
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
Implement both an iterative and a recursive version.
*/

//iterative factorial function 

function factorial(num){
    let total = 1;

    for(let i = num; i > 0; i--){
        total *= i;
    }

    return total;
}

//console.log(factorial(3));

function recursiveFactorial (num){
    
    if(num === 1) return 1;
    return num *= recursiveFactorial(num -1);
}

//console.log(recursiveFactorial(3));
/*Write a recursive function fib(n) that returns the nᵗʰ number in the Fibonacci sequence.
The sequence starts with 0, 1, and each next number is the sum of the two previous ones.
*/

function fib (idxFib) {

    if(idxFib === 0) return 0;

    if(idxFib === 1) return 1;

    return fib(idxFib -1) + fib(idxFib - 2);
}

//console.log(fib(10))
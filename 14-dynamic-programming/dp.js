/*
Dynamic Programming (DP)
-----------------------
DP solves a large, complex problem by breaking it into smaller subproblems,
solving each subproblem once, and storing their results so they can be reused.


When can we use dynamic programming?
------------------------------------
We use DP when a problem has BOTH:


1. **Overlapping Subproblems**
- The same subproblems appear repeatedly.
- Example: Fibonacci numbers.
fib(6) repeatedly calls fib(5), fib(4), fib(3), etc.


Counter-example: Merge Sort
- It has subproblems, but they do NOT overlap: each split is unique.
- Even with duplicates like mergeSort([10,24,10,24]), the *subarrays* differ by index.
- So merge sort is NOT a DP problem.


2. **Optimal Substructure**
- An optimal solution is built from the optimal solutions of its subproblems.
- Example: Fibonacci, shortest path algorithms, coin change, etc.


------------------------------------------------------------
1. Basic Recursion (Exponential Time)
------------------------------------------------------------
*/

function calcFiboNum (num) {
    if(num === 1) return 1;
    if(num === 2) return 1;

    return calcFiboNum(num-1)+calcFiboNum(num-2);
}

/*
This naive approach has a time complexity of O(2^n)
because it recomputes the same values many times.


------------------------------------------------------------
2. Memoization (Top‑Down DP)
------------------------------------------------------------
Memoization stores results of expensive function calls
so they don't need to be recomputed.
This improves Fibonacci from O(2^n) to O(n).
*/
const memo = {};

function fibo (num) {
    if(num <= 2) return 1
    if(memo[num]) return memo[num];

    let result = fibo(num-1) + fibo(num-2);
    memo[num] = result
    
    return result
    
}

// console.log(fibo(5));
// console.log(fibo(3));
// console.log(fibo(7));

/*
------------------------------------------------------------
3. Tabulation (Bottom‑Up DP)
------------------------------------------------------------
Tabulation builds the solution iteratively from the bottom up.
Often uses less space than recursion.
*/

function fibTab(num){
    if(num<=2) return 1;
    const fibNums = {0:0,1:1,2:1}
    for(let i = 3; i<=num; i++){
        fibNums[i] = fibNums[i-1]+fibNums[i-2];
    }
    return fibNums[num]
}

console.log(fibTab(7));
/*
Write a function productOfArray(arr) that takes an array of numbers and returns the product of all elements.
Solve it first using a helper function and then using pure recursion.
*/
function productOfArray (arr){
    
    let product = 1;
    
    function helper(arr) {
        if(arr.length === 0)return 1;

        product *= arr[0];
        
        return helper(arr.slice(1))
    }

    helper(arr)

    return product;
}

function productOfArrayV2 (arr){
    

    if(arr.length === 0) return 1;
    
    
    return arr[0] *= productOfArrayV2(arr.slice(1))
}

//console.log(productOfArrayV2([1,2,3,10]))
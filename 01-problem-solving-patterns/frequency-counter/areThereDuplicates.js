/*
Write a function areThereDuplicates() that accepts a variable number 
of arguments and checks whether there are any duplicates among them.
*/

function areThereDuplicates (arr) {

    const store = {};

    for(let num of arr){
        if(!store[num]){
            store[num] = 1;
        }else{
            store[num]= store[num] + 1;
        }
        console.log(store[num])
    }

    for(let key in store){
        if(store[key]>1)return true
    }

    return false;
}

//console.log(areThereDuplicates([1,2,4,3,26,7,3,6,3]))

/*
This function checks whether any duplicates exist among the given arguments.
It uses the **Frequency Counter pattern** to track how many times each value
appears in O(n) time.
*/
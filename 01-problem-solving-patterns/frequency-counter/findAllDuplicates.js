/*
Write a function findAllDuplicates(arr) that returns an array of all duplicate numbers found in the given array.
If there are no duplicates, return an empty array.
*/

function findAllDuplicates (arr) {
    const numbersStore = {};
    const duplicates=[];    
    
    for(let num of arr){
        numbersStore[num] = (numbersStore[num] || 0) +1;
    };

    console.log(numbersStore)

    for(let key in numbersStore){
        if(numbersStore[key] > 1){
            duplicates.push(Number(key))
        }
    }
    
    if(duplicates.length === 0){
        return 'No duplicates here'
    }else{
        return duplicates
    }
};

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));

/*
This function finds and returns all duplicate numbers from an array
using the Frequency Counter pattern.

It counts how many times each number appears and collects those
that occur more than once.
*/
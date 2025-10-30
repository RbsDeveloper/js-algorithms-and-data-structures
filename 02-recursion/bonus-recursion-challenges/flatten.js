/* Write a recursive function called flatten that accepts an array of 
arrays and returns a new array with all values flattened into a single array.
*/

function flatten(arr){
    let result = [];

    //base case
    if(arr.length === 0){
        //console.log('Arr here is empty, should be done')
        return [];
    }

    if(!Array.isArray(arr[0])){
        console.log(`here the current value is not an arr obj ${arr[0]}`)
        result.push(arr[0])
        //console.log(result)
        result = result.concat(flatten(arr.slice(1)))
        //console.log(`result after the concat if the if block ${result}`)
    }else {
        console.log(arr[0])
        //result = result.concat(flatten(arr[0]))
        //console.log(`This is what is happening: ${result}`)
        if(Array.isArray(arr[0])){
            result = result.concat(flatten(arr[0]))
        }

        result = result.concat(flatten(arr.slice(1)))
    }
    
    console.log('done')
    return result
}

//console.log(flatten([1, [2, [4, 4], [5]]]))
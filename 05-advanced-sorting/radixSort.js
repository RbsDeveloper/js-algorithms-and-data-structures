/*
function getDigit (num, place) {
    let converted = num.toString();

    if(converted[(converted.length-1)-place] === undefined){
        return 0
    }else{
        return Number(converted[(converted.length-1)-place]);
    }
};

console.log(getDigit(3465,3));
*/

//math implementation of getDigit

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigitCount (arr){
    let maxCount = 0;

    for(let i = 0; i < arr.length; i++){
        maxCount = Math.max(maxCount, digitCount(arr[i]));
    }
    return maxCount;
}

function radix (arr) {
    const maxDigit = mostDigitCount(arr);

    for(let i = 0; i<maxDigit; i++ ){
        let bucket = Array.from({length: 10}, ()=>[]);
        for(let j = 0; j<arr.length; j++){
            //bucket[getDigit(arr[j], i)].push(arr[j])
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);
        }
        
        //arr = [];
        //bucket.forEach(item=> item.forEach(num=>arr.push(num)))
        arr = [].concat(...bucket)// 
       
    };

    return arr;
    
}

console.log(radix([23,345,5467,12,2345,9852]));

/*
A non-comparative integer sorting algorithm that sorts numbers
by processing individual digits from least significant to most significant.

Steps:
1. Determine the maximum number of digits (mostDigitCount).
2. Loop through each digit place (ones, tens, hundreds...).
3. Place numbers into 10 buckets (0–9) based on the current digit.
4. Concatenate buckets back into the main array.
*/
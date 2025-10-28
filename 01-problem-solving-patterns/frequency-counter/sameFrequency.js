/*
Write a function sameFrequency(num1, num2) that determines if two positive integers have the same frequency of digits.
*/
function sameFrequency (fNum,sNum) {

    const storingValues = {}

    const first = `${fNum}`.split('');
    const second = `${sNum}`.split('')
    
    if(first.length !== second.length) return false;

    for(let digit of first){
        if(!storingValues[digit]){
            storingValues[digit] = 1;
        }else{
            storingValues[digit] = storingValues[digit] + 1
        }
        console.log(storingValues)
    };

    for(let digit of second){
        console.log( `from the last loop: ${digit}`)
        if(!storingValues[digit]){
            return false
        }else{
           storingValues[digit] -= 1
        }
        console.log(storingValues)
    }
   
    return true
};

//console.log(frequencyCounter(2344,3244))

/*
This function checks whether two numbers have the same frequency of digits.
It uses the Frequency Counter pattern to compare the count of each digit
in both numbers.
*/
function binaryS (arr, val){
    let leftPoint = 0;
    let rightPoint = arr.length -1;

    while(leftPoint<=rightPoint){
        let middlePoint = Math.floor((leftPoint + rightPoint)/2);
        console.log(leftPoint);
        console.log(middlePoint);
        console.log(rightPoint);

        if(arr[middlePoint]===val){ 
            console.log(`Value found at index: ${middlePoint}`)
            return middlePoint;
        }
        
        else if(val < arr[middlePoint]){
            console.log(`The val is lower than the middle P`)
            rightPoint = middlePoint -1;
        }
        else{
            console.log(`The val is higher than the middle p`)
            leftPoint = middlePoint+1
        }
    }
    console.log(`No value found`);
    return -1
};

const sortedArr = [1,4,5,7,8,9,20,30,31,32,54];

//console.log(binaryS(sortedArr, 5));
/*
Binary search works only on sorted arrays.

It repeatedly divides the search interval in half until it finds the target value or the range is empty.

You start with two pointers (leftPoint and rightPoint) and a middlePoint.

If the middle value is the target → return it.

If the target is smaller → search the left half (move rightPoint left).

If it’s larger → search the right half (move leftPoint right).

This method is much faster than linear search for large sorted datasets because it cuts the search space by half each time.
*/
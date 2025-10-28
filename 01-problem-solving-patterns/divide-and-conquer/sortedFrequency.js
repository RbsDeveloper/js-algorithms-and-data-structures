/*
Write a function sortedFrequency(arr, num) that takes a sorted array and a number, 
and returns how many times that number appears in the array.
*/

function  findFirstIndex(arr, target){
  minIndex = 0;
  maxIndex = arr.length-1;

  while(minIndex <=maxIndex){

    let middle = Math.floor((minIndex + maxIndex)/2);

    //console.log(`the current idx of the middle point is ${middle} and his value is ${arr[middle]} `)

    if(arr[middle]===target){
      //console.log('We are inside the first if')
      if(middle === 0 || arr[middle-1] !== target){
        return middle;
      }else{
        //console.log('We have to decrement maxIndex');
        maxIndex = middle -1 
        console.log(maxIndex)
    }
    }else if(arr[middle]>target){
      //console.log('else if block')
      maxIndex = middle -1
      //console.log(`we had to decrement maxIndex ${maxIndex}`)
    }else{
      //console.log('We are in the else block');
      minIndex = middle + 1
      //console.log(`We had to increment the minIndex ${minIndex}`)
    }
  }
  //console.log('Done')
  return -1
}


function findLastIndex (arr, target){
  minIndex = 0;
  maxIndex = arr.length -1;

  while(minIndex <= maxIndex){
    let middle = Math.floor((minIndex + maxIndex)/2);
    //console.log(`the current idx of the middle point is ${middle} and his value is ${arr[middle]} `)
    if(arr[middle]===target){
      //console.log('We are inside the first if');
      if(middle === arr.length-1 || arr[middle +1] !== target){
        return middle;
      }else{
        //console.log('We have to increment minIndex');
        minIndex = middle + 1 
        console.log(maxIndex)
      }
    }else if(arr[middle]>target){
      //console.log('else if block')
      maxIndex = middle -1
      //console.log(`we had to decrement maxIndex ${maxIndex}`)
    }else{
      //console.log('We are in the else block');
      minIndex = middle + 1
      //console.log(`We had to increment the minIndex ${minIndex}`)
    }
  }
  //console.log('Done')
  return -1
}


function sortedFrequency (arr, target){
  const firstIdx = findFirstIndex(arr, target);
  const lastIdx = findLastIndex(arr, target);

  if(firstIdx !== -1 && lastIdx !== -1){
    return lastIdx-firstIdx + 1;
  }

  return 0
};

//console.log(sortedFrequency([1,1,2,2,2,2,2,3], 2));

/*
This function counts how many times a specific number appears 
in a sorted array using a modified binary search approach.

It performs two binary searches:
-One to find the first occurrence of the target number.
-Another to find the last occurrence.
*/
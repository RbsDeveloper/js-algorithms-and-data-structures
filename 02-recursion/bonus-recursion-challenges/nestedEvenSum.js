/*Write a recursive function called nestedEvenSum(obj) that returns the sum of all even 
numbers in an object which may contain nested objects. */

function nestedEvenSum (obj) {

    let result = 0;
    
    for(key in obj){
        //console.log(obj[key])
        if(typeof(obj[key]) !== 'object'){
            if(typeof(obj[key]) === 'number' && obj[key] % 2 ===0) result += obj[key];
        }else{
          result += nestedEvenSum(obj[key]);
        }
    }

    return result;

};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

//console.log(nestedEvenSum(obj2))
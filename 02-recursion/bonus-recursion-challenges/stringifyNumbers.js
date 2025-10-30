/*Write a recursive function called stringifyNumbers(obj) that takes an object and returns a new object
where all of the number values are converted to strings. */

function stringifyNumbers (obj){
    let strObj = {};

    for(key in obj){
        console.log(key);
        console.log(typeof(obj[key]))
        if(typeof(obj[key]) !=='object' ){
            if(typeof(obj[key])=== 'number'){
                strObj[key]=`${obj[key]}`
            }else{
                strObj[key] = obj[key];
            }
        }else{
            if(Array.isArray(obj[key])){
                strObj[key] = obj[key];
            }else{
                strObj[key] = stringifyNumbers(obj[key])
            }
        }
    }

    return strObj;
};

/*console.log(stringifyNumbers({
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}));*/

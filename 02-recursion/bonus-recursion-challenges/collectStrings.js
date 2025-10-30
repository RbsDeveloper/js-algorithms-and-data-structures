/*Write a recursive function called collectStrings(obj) that takes an object and return
s an array of all the string values in that object (including nested objects). */

function collectStrings (obj){
    let strCollection = [];

    for(key in obj){
        if(typeof(obj[key])==='object'){
            strCollection = strCollection.concat(collectStrings(obj[key]))
        }else{
            if(typeof(obj[key])==='string') strCollection.push(obj[key]) 
        }
    }

    return strCollection;
};

console.log(collectStrings({
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}))
/*
What is a Hash Table?

A hash table stores key–value pairs. It is similar to an array, but the keys
are not ordered numerically. Hash tables are extremely fast for:
    - finding values
    - adding values
    - removing values

Example:
We want to store colors. We could use:
    1) An array
    2) A hash table, which lets us use human-readable keys such as:
       "pink" → "#ff69b4"

To use human-readable keys, we must convert keys into valid array indices.
This is done using a **hash function**.

A good hash function:
    - is fast
    - distributes keys uniformly
    - is deterministic
*/

function hash(key, arrLen){
     let total = 0;
     for(let char of key) {
        let value = char.charCodeAt(0) - 96; 
        total = (total + value) % arrLen;
     }
     return total
}

/*
Problems with this simple hash function:
    - Only works on strings
    - Not constant time (depends on key length)
    - Distribution could be more uniform
*/

//Improved hash function

function hashRev(key, arrLen){
    let total = 0;
    let weird_prime = 31; 
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0)-96;
        total = (total * weird_prime + value) % arrLen;
    }
    return total;
}
/*
The prime number helps distribute keys more uniformly.  
It's also helpful if the underlying array size is a prime.

Handling Collisions:

1. Separate Chaining  
   Each index stores a nested data structure (usually an array) containing
   multiple key–value pairs.

2. Linear Probing  
   Only one item is stored at each position. On collision, we search forward
   for the next empty slot.

Separate chaining can store more items than the number of slots.
Linear probing keeps everything in a single array but is more complex.
*/

//HASH TABLE CLASS

class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
    let total = 0;
    let weird_prime = 31; 
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0)-96;
        total = (total * weird_prime + value) % this.keyMap.length;
    }
    return total;
    }

    //Stores a key–value pair in the table using separate chaining
    set(key, value){
        let index = this._hash(key);

        if(this.keyMap[index] === undefined){
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }
    //Retrieves a value stored under a given key

    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]){
        let searchZone = this.keyMap[index];

        for(let i = 0; i<searchZone.length; i++){
            if(searchZone[i][0]===key) return searchZone[i][1]
        }
      }
      return undefined;
    }

    //Returns an array of unique keys
    keys(){
        let keys = [];
        
        for(let i=0 ; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j< this.keyMap[i].length; j++){
                    if(!keys.includes(this.keyMap[i][j][0])) keys.push(this.keyMap[i][j][0])
            }
            }
        }

        return keys;
    }
    //Returns an array of unique values
    values(){
        let vals = [];
        
        for(let i=0 ; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j< this.keyMap[i].length; j++){
                    if(!vals.includes(this.keyMap[i][j][1])) vals.push(this.keyMap[i][j][1])
            }
            }
        }

        return vals;
    }
}

let h = new HashTable();
h.set("red", "#FF0000");
h.set("green", "#00FF00");
h.set("blue", "#0000FF");
h.set("yellow", "#FFFF00");
h.set("purple", "#800080");
h.set("cyan", "#00FFFF");
h.get("blue")
h.keys()
h.values()
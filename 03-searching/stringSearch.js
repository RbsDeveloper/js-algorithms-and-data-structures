function searchString (str, pattern) {
    let count = 0 ;

    for(let i=0; i < str.length; i++){
        for(let j =0; j<pattern.length; j++){
            if(pattern[j] !== str[i+j]){
                break;
            }
            if(j===pattern.length-1){
                count++
            }
        }
    }
    return count;
};

console.log(searchString('lorie loled', 'lol'))

/*
This algorithm searches for a pattern (substring) inside a larger string.

It loops over every character in the main string.

For each position, it compares all characters of the pattern one by one.

If all characters match, we increment the count.

If there’s a mismatch, we break early and move to the next position.

It’s called “naive” because it doesn’t use any preprocessing or skipping — it checks everything directly.
*/
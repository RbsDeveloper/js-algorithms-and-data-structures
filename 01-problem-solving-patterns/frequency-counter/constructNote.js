/*
Write a function constructNote(note, letters) that determines if the given note can be constructed using the characters in letters.
Each letter can only be used once.
*/

function constructNote (note, letters) {
    const lettersStore = {};

    for(let char of letters){
        if(!lettersStore[char]){
            lettersStore[char]=1
        }else{
            lettersStore[char] = lettersStore[char]+1;
        }
    }
    
    for(let char of note){
        if(!lettersStore[char]){
            return false
        }else{
            lettersStore[char] -= 1
        }
    }

    return true
}

//console.log(constructNote('abc', 'bbccaa'));

/*
It uses the Frequency Counter pattern to count how many times
each character appears in `letters`, then verifies that the note
doesn’t require more occurrences than available.
*/
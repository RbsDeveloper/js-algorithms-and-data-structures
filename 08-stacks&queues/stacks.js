/*
It's a LIFO (Last In, First Out) data structure.
The last element added to the stack will be the first element removed from it.

Example:
Think of a stack of plates — the last plate placed on top is the first one removed.

A very common and important example of a stack is the **JavaScript call stack**:
every time we call a function, JS adds it to the call stack.
When the function finishes, it’s popped off.

Stacks are also used in:
- Undo / Redo features (to track user actions)
- Browser history navigation
- Expression parsing

There is more than one way to implement a stack:

Using an array:
   - Add elements with .push() and remove with .pop().
   - You could also use .shift() and .unshift(), but those reindex all elements,
     making them less efficient.
   - Therefore, .push() and .pop() are preferred (O(1) operations).

Using a linked list:
   - This requires a bit more code, but it’s more efficient for large amounts of data.
   - We don’t need indexed values, so a linked list fits perfectly.
   - The only catch is that, with a singly linked list, to push or pop efficiently,
     we need to treat the list’s head as the top of the stack.
   - That means:
       - .push() behaves like unshift() (add to the beginning)
       - .pop() behaves like shift() (remove from the beginning)
   - This way, both operations are constant time (O(1)).
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //unshift -> push
    push(val){
        let newNode = new Node(val);

        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.temp;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    //shift -> pop
    pop(){
        
        if(!this.first) return null;

        let temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        
        this.first = this.first.next; 
        this.size--
        return temp.value
    }
}
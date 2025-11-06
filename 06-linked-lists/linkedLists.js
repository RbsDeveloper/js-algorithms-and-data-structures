/*
    What is a linked list?
    A linked list is a data structure that stores any type of data (strings, numbers, objects, etc.)
    in an ordered sequence. It's similar to an array, but there is a key difference:
    arrays use indexed positions, while linked lists consist of nodes connected by pointers.

    A linked list has a head, a tail, and a length property. Each node stores a value and
    a reference (pointer) to the next node in the list. The last node (the tail) points to null.

    In a *singly linked list*, each node only points forward (to the next node).

    Random access (like array indexing) is not possible — traversal is sequential.
*/

//--STARTER CODE AND PUSH INTRO.

// piece of data - val
// reference to the next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //1) implementation of the push method
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    //2 implementation of the pop method
    pop(){
        
        if(this.length === 0) return undefined;
        
        if(this.length === 1){
            let removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;

        }
            
        let preVal = this.head;
        let nextVal = this.head.next;
        while(nextVal.next){
            preVal = nextVal
            nextVal = preVal.next;
        };
                
        preVal.next = null;
        this.tail = preVal;
        this.length--;
        return nextVal
    }
    
    //3) implementation of the shift method

    shift(){
        if(this.length === 0) return undefined;

        let shiftedVal = this.head;
        if(this.length === 1){
            this.tail = null;
        }
        this.head = shiftedVal.next;
        this.length--
        return shiftedVal;
    }

    //4) implementation of the unshift method

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this.head;
    }

    //5)implementation of get, which has an index input and it returns the value at that position

    get(idx){
        let counter = 0;
        if(idx<0 || idx >= this.length){
            return null;
        }else{
            let node = this.head
            while(counter < idx){
                node = node.next;
                counter++
            }
            return node;
        }
    }

    // 6) implementation of set to be able to update the value of a node.
    set(idx, newVal){
        let foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = newVal; 
            return true
        }else{
            return false
        }
    }

    //7) implementation of the insert method.
    insert(idx, newVal){
        if(idx < 0 || idx>this.length){
            return false;
        }else if(idx === this.length){
            return !!this.push(newVal)
        }else if(idx === 0){
            return !!this.unshift(newVal);
        }else{
            let newNode = new Node(newVal);
            let preNode = this.get(idx-1);
            let afterNode = preNode.next;   
            newNode.next = afterNode;
            preNode.next = newNode;
            this.length++
        }
    }

    //8) implementation of the remove
    remove(idx){
        if(idx<0 || idx>=this.length){
            return undefined;
        }else if(idx === this.length-1){
            this.pop();
        }else if(idx === 0){
            this.shift()
        }else{
            let prevNode = this.get(idx-1);
            let removedNode = prevNode.next;
            prevNode.next = removedNode.next;
            this.length--;
            return removedNode
        }
    }

    //9) implementation of the reverse method
        
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prevNode = null;
        let nextNode
        
        for(let i=0; i < this.length; i++){
            nextNode = node.next
            node.next = prevNode;
            prevNode = node;
            node=nextNode;
        }
        return this
    }
}

// let firstNode = new Node('HI');
// firstNode.next = new Node('there');
// firstNode.next.next = new Node('how');
// firstNode.next.next.next = new Node('are');
// firstNode.next.next.next.next = new Node('you');

let firstL = new SinglyLinkedList();
firstL.push(10);
firstL.push(12);
firstL.push(13);

// console.log(firstL.pop())
// console.log('new tail is:',firstL.tail);
// console.log('This is how linked list looks like lastly:', firstL)
// console.log(firstL.pop());
// console.log('new tail is:',firstL.tail);
// console.log('This is how linked list looks like lastly:', firstL)
// console.log(firstL.pop());
// console.log('new tail is:',firstL.tail);
// console.log('This is how linked list looks like lastly:', firstL)
// console.log(firstL.shift());
// console.log('new head is:' ,firstL.head)
// console.log(firstL);
// console.log(firstL.unshift(3));
// console.log(firstL)
//console.log(firstL);
//console.log(firstL.get(2));
//console.log('first set: ', firstL.set(4, 7));
//console.log(firstL)
//console.log(firstL.get(3))
firstL.insert(2, 9);
//console.log(firstL, firstL.length);
//console.log(firstL.get(2), firstL.get(3));
//console.log(firstL.remove(1));
console.log(firstL.reverse());

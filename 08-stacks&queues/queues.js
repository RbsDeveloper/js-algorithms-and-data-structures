/*
A queue is very similar to a stack in the sense that it’s also a data structure 
where you add and remove data — these are the only operations you typically perform.

However, the order of operations is different:
Instead of LIFO (Last In, First Out), a queue follows FIFO (First In, First Out).

In other words, the first element added to the queue is the first one removed — 
just like a line of people waiting for service.

Common uses of queues in programming:
- Managing background tasks
- Uploading or processing resources
- Task scheduling or printing queues
- Handling asynchronous operations

Queues can be implemented in two main ways:
    Using arrays
    Using linked lists
*/

//Easy way with array

let q = [];

//we add to the end, this doesn't require reindexing
q.push("first");
q.push("second");
q.push("third");

//we remove from the beginning, this does require reindexing, which for an array of 1000 < el, it's not optimal
q.shift();
q.shift();
q.shift();

//We could also combine unshift() and pop()

q.unshift("first");
q.unshift("second");
q.unshift("third");

q.pop();
q.pop();
q.pop();

/*
Here, unlike in stacks, if we're implementing this data structure with an array we will be always be
forced to reindex our items because of the LIFO. but in stacks, the FIFO allow us to use arrays without the need of reindexing something.
*/


//=========================

//Longer way with linked list

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null

        let temp = this.first
        if(this.first === this.last) this.last = null;

        this.first = this.first.next;
        this.size -- 
        return temp.value

    }
};

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

let firstQ = new Queue();
firstQ.enqueue('first');
console.log(firstQ)
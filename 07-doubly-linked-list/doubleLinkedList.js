/*
A data structure similar to a singly linked list,
but where each node has both:
- `next` → pointer to the next node
- `prev` → pointer to the previous node

Can traverse both directions (forward & backward)
Easier insertion/removal at both ends or in the middle

The tradeoff is that it will occupy more memory

*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
     // Add a node to the end
    push(value){
        let node = new Node(value);

        if(this.length === 0){
            console.log('This list is empty')
            this.head = node;
            this.tail = node; 
        }else{
            console.log('This list was not empty')
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++
        return this
    }
     // Remove a node from the end
    pop(){
        let removed = this.tail;

        if(this.length === 0)return undefined;
        if(this.length===1){
            this.head = null;
            this.tail = null;
            return removed;
        }else{
            this.tail = removed.prev;
            removed.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return removed
    };
    // Remove a node from the beginning
    shift(){
        let shifted = this.head;

        if(this.length === 0) return undefined;
        
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let newHead = shifted.next;
            this.head = newHead;
            newHead.prev = null;
            shifted.next = null;
        }
        this.length--
        return shifted;
    }
    // Add a node to the beginning
    unshift(val){
        let newHead = new Node(val)
        let oldHead = this.head;
        if(this.length===0){
            this.head = newHead;
            this.tail = newHead;
        }else{
            oldHead.prev = newHead;
            newHead.next = oldHead;
            this.head = newHead;
        }
        this.length++;
        return newHead
    }
    //Retrieve a node by index
    get(idx){

        if(idx < 0 || idx>=this.length){
            return null
        }else{

            const middleP = Math.floor((this.length-1) / 2);
            let counter;
            let temp
            if(idx>middleP){
                //we loop from the tail backwards
                temp = this.tail;
                counter = this.length-1;
                while(counter>idx){
                    temp = temp.prev;
                    counter--
                }
            }else{
                //we loop from the head
                counter = 0
                temp = this.head;
                while(counter < idx){
                    temp=temp.next;
                    counter++
                };
            }
            return temp
        }
    }
    // Update a node's value by index
    set(idx, value){
        let nodeToBeUpdated = this.get(idx);
        if(nodeToBeUpdated != null){
            nodeToBeUpdated.val = value;
            return true;
        }
        return false;
    }
    // Insert a node at a specific position
    insert(idx, value){

        if(idx < 0 || idx>this.length) return false;
        if(idx === 0) return !!this.unshift(value)
        if(idx === this.length) return !!this.push(value)
    
        let newNode = new Node(value);
        let preNode = this.get(idx-1);
        let afterNode = preNode.next;

        preNode.next = newNode;
        newNode.prev = preNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++
        return true
    }
     // Remove a node at a specific position
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined
        if(idx === 0)return !!this.shift();
        if(idx === this.length -1) return !!this.pop();

        let removedNode = this.get(idx);
        let preNode = removedNode.prev;
        let nextNode = removedNode.next;

        preNode.next = nextNode;
        nextNode.prev = preNode;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode
    }
};

 
const firstDLL = new DoublyLinkedList();
// console.log(firstDLL);
firstDLL.push(10);
firstDLL.push(15);
firstDLL.push(20);
// console.log(firstDLL.pop())
// console.log('list after push:', firstDLL);
// firstDLL.ushift();
// console.log('list after shift:', firstDLL);
// firstDLL.unshift(5);
// console.log(firstDLL)
//console.log(firstDLL.get(2))
console.log(firstDLL.set(3,50));
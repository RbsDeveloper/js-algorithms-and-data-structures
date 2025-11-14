/*
Priority Queue implemented using a Min Binary Heap.
Lower priority values represent *higher* priority.

Each element is stored as a Node with:
    - value: the actual data
    - priority: smaller number = higher priority

This structure allows enqueue and dequeue in O(log n) time.
*/

class Node {
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        //Create the new node
        let newNode = new Node(val, priority);
        //add to the end of the arr
        this.values.push(newNode);

        
        let newIdx = this.values.length-1;
        let parentIdx = Math.floor((newIdx - 1) / 2);

            // Bubble up (Min-Heap logic)
        while(newIdx>0 && newNode.priority < this.values[parentIdx].priority){
                

            let temp = this.values[newIdx];
            this.values[newIdx] = this.values[parentIdx];
            this.values[parentIdx] = temp;

            newIdx = parentIdx;
            parentIdx = Math.floor((newIdx - 1) / 2);
        }
    }

    dequeue(){

        function swap(arr, idx1, idx2){
            let temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        
        let lastEl = this.values.length -1;
        
        // Move root to end
        swap(this.values, 0, lastEl);
        let removedVal = this.values.pop();
        
        let idxToSwap = 0;
        let length = this.values.length;

        // Sink down
        while(true){

            let leftChild = (idxToSwap * 2) + 1;
            let rightChild = (idxToSwap * 2) + 2;
            let hPriority = idxToSwap; 

            if(leftChild < length && this.values[leftChild].priority < this.values[hPriority].priority){
                hPriority = leftChild              
            }

            if(rightChild < length && this.values[rightChild].priority < this.values[hPriority].priority){
                hPriority = rightChild;
            }

            if(hPriority === idxToSwap) break;

            swap(this.values, idxToSwap, hPriority)
            idxToSwap = hPriority;
        }

        return removedVal;
    }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)

console.log('current er', ER);

ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
//console.log('er after dequeue', ER);

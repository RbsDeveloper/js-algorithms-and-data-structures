/* 
Heaps are a category of tree-based data structures. 
They follow the basic properties of trees but with additional rules.

We focus here on Binary Heaps, specifically the Max Binary Heap.

In a MaxBinaryHeap:
    - Parent nodes are always larger than their children.
In a MinBinaryHeap:
    - Parent nodes are always smaller than their children.

A heap is:
    A complete binary tree (as compact as possible)
    Filled from left to right at every level
    Not ordered like a BST — left/right do NOT follow < or >

Binary Heaps are commonly used to:
    • Implement Priority Queues
    • Support graph algorithms (Dijkstra, Prim, etc.)

Index relationships in an array-based heap:

    Parent index:       Math.floor((childIndex - 1) / 2)
    Left child index:   parentIndex * 2 + 1
    Right child index:  parentIndex * 2 + 2

Heap Operations:
    insert → place at end, then "bubble up"
    extractMax → remove root, replace with last element, then "sink down"
*/


class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(val){
        //add to the end of the arr
        this.values.push(val);

        
        let newIdx = this.values.length-1;
        let parentIdx = Math.floor((newIdx - 1) / 2);
        //Bubble up
        while(newIdx>0 && val>this.values[parentIdx]){
            

            let temp = this.values[newIdx];
            this.values[newIdx] = this.values[parentIdx];
            this.values[parentIdx] = temp;

            newIdx = parentIdx;
            parentIdx = Math.floor((newIdx - 1) / 2);
        }

    }

    extractMax(){

        function swap(arr, idx1, idx2){
            let temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        
        let lastEl = this.values.length -1;
        //Move Max to the end
        swap(this.values, 0, lastEl);
        let removedVal = this.values.pop();
        
        //Sink down
        let idxToSwap = 0;
        let length = this.values.length;

        while(true){

            let leftChild = (idxToSwap * 2) + 1;
            let rightChild = (idxToSwap * 2) + 2;
            let largest = idxToSwap; 

            if(leftChild < length && this.values[leftChild] > this.values[largest]){
                largest = leftChild              
            }

            if(rightChild < length && this.values[rightChild] > this.values[largest]){
                largest = rightChild;
            }

            if(largest === idxToSwap) break;

            swap(this.values, idxToSwap, largest)
            idxToSwap = largest;
        }

        return console.log(`The value removed is ${removedVal}`);
    }
}


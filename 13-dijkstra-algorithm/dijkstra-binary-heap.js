/*
    Dijkstra's Algorithm using a Binary Heap (Min-Heap) Priority Queue.

    This version uses a binary heap rather than sorting the entire queue 
    on every insertion. This improves performance from O(n log n) overall 
    to O((V + E) log V), which is the optimal complexity for Dijkstra.
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    dijkstra(start, finish){
        const distances = {};
        const nodes = new PriorityQueue();
        const previous = {}
        let path = [] //to Return at the end
        //Initial State
        for(let element in this.adjacencyList){
            if(element === start) {
                distances[element] = 0
                nodes.enqueue(element, 0)
            }else{
                distances[element] = Infinity;
                nodes.enqueue(element, Infinity);
            }
            previous[element] = null;
        };

        console.log('previous obj:', previous);
        console.log('distances obj:', distances);
        
        
        let dequeuedV

        while(nodes.values.length){
            console.log('====== queue before dequeue:', nodes)
            dequeuedV = nodes.dequeue().value;
            console.log("Dequeued val is:",dequeuedV) //
            console.log('***** queue after dequeue:', nodes)

            if(dequeuedV===finish){
                
                while(previous[dequeuedV]){
                    path.push(dequeuedV);
                    dequeuedV = previous[dequeuedV]
                }
                
                break;
                
            };

            if(distances[dequeuedV] !== Infinity){
                console.log('===inside second if in the while===')
                
                let distance

                console.log('enter loop:')

                for(let i = 0; i<this.adjacencyList[dequeuedV].length; i++){
                    let nextNode = this.adjacencyList[dequeuedV][i]

                    console.log('nextNode is:', nextNode)

                    distance = distances[dequeuedV] + nextNode.weight;

                    console.log('distance is:', distance)

                    if(distance < distances[nextNode.node]){
                        console.log(distance, 'is lower than:', distances[nextNode.node])

                        distances[nextNode.node] = distance;

                        console.log("updating distances:", distances)

                        previous[nextNode.node] = dequeuedV;

                        console.log("updating previous:",  previous)

                        nodes.enqueue(nextNode.node, distance)

                        console.log("updating priority queue:", nodes)
                    }
                }
            }
        }
        return path.concat(dequeuedV).reverse()
    }
}

let g = new WeightedGraph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "D", 2)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)
g.addEdge("C", "F", 4)

console.log(g.adjacencyList);
console.log(g.dijkstra("A", "E"));
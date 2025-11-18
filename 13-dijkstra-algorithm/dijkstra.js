/*
     Why is Dijkstra's Algorithm useful?

    - GPS / finding the fastest route
    - Network routing / finding the shortest open path for data
    - Biology / modeling the spread of viruses
    - Airline pricing / finding the cheapest path between airports
    - Many other applications 
*/

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b)=>a.priority - b.priority);
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

    
/*
Dijkstra's Algorithm (Conceptual Steps):

        1) Every time we look to visit a new node, we pick the node with the 
           smallest known distance first.

        2) Once we move to that node, we examine each of its neighbors.

        3) For each neighbor, we calculate the total distance from the starting 
           node to that neighbor.

        4) If this new distance is less than the currently stored distance,  
           we update the distance and update the path (previous) data structure.

        Function Requirements:
        - Accept a starting and ending vertex.
        - Create a distances object initialized to Infinity except for the start.
        - Insert all vertices into the priority queue with starting vertex having priority 0.
        - Create a previous object to reconstruct the final shortest path.
        - While the priority queue still has values:
            - Dequeue the smallest-priority vertex.
            - If it's the finish vertex, stop.
            - Otherwise, explore neighbors and update distances.
        - Reconstruct the path from the previous object.

*/

    dijkstra(start, finish){
        const distances = {};
        const nodes = new PriorityQueue();
        const previous = {}
        let path = [] //Final path to return
        
        //Initialize state
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
        // Main loop
        while(nodes.values.length){
            console.log('====== queue before dequeue:', nodes)
            dequeuedV = nodes.dequeue().val;
            console.log("Dequeued val is:",dequeuedV) //
            console.log('***** queue after dequeue:', nodes)
            
            // If we've reached the finish vertex, build the path
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







/*
Breadth-First Traversal (BFS)

This traversal strategy visits all neighbors of a vertex before
moving deeper into the graph. BFS explores level by level and is
especially useful for:

- Finding the shortest path in an unweighted graph
- Social network recommendations
- Web crawlers
- Network broadcasting
*/

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vName) {
        this.adjacencyList[vName] ? console.log('vertex already inserted') : this.adjacencyList[vName] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vName) {
        while(this.adjacencyList[vName].length){
            //We remove all the neighbors of the vName
            const adjacencyVertex = this.adjacencyList[vName].pop(); 
            this.removeEdge(vName, adjacencyVertex);
        }
        //at last when we don't have any more neighbours we can delete the vertex
        delete this.adjacencyList[vName]
    }

      /*
    Breadth-First Search (BFS)

    Pseudocode:
    - Accept a starting vertex.
    - Create a queue and enqueue the starting vertex.
    - Create a result array to record visited vertices.
    - Create a visited map and mark the starting vertex as visited.
    - While the queue is not empty:
        * Dequeue the next vertex.
        * Add it to the result list.
        * For each neighbor:
            - If it has not been visited:
                + Mark it visited.
                + Enqueue it.
    - Return the result array.
    */
    bfsTraversal(start){
        const q = [start];
        const result = [];
        const visited = {};
        let dequeuedVert
        visited[start] = true;
        while(q.length){
            dequeuedVert = q.shift()
            result.push(dequeuedVert);
            this.adjacencyList[dequeuedVert].forEach(element => {
                if(!visited[element]){
                    visited[element] = true;
                    q.push(element);
                }    
            });
        }
        return result;
    }
}

let g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.addEdge('D','F')
g.addEdge('E','F')
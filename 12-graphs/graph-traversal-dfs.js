/*
Graph Traversal

When we talk about "traversing" a graph, we mean visiting, checking,
or updating each vertex in the structure. Unlike trees, graphs do not
have a single root, so traversal requires a starting vertex.

Common uses:
- Peer-to-peer networking
- Web crawlers
- Recommendations / closest matches
- Shortest path problems:
    * GPS navigation
    * Maze solving
    * AI pathfinding

We start with Depth-First Traversal:
The idea is to explore one branch as deeply as possible
before visiting sibling vertices.
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
    Depth-First Traversal (Recursive)

    Pseudocode:
    - Accept a starting vertex.
    - Create a result array to store the order of visited vertices.
    - Create a visited map to track which vertices have been seen.
    - Define a helper function that:
        * Returns early if the vertex does not exist.
        * Marks the vertex as visited.
        * Pushes it to the result.
        * Recursively visits each unvisited neighbor.
    - Invoke the helper with the starting vertex.
    - Return the result array.
    */
    
    recursiveDfs(startingV){
        const result = [];
        const visited = {};

        const helper = (vertex)=>{
            if(!this.adjacencyList[vertex]) return
            visited[vertex] = true;
            result.push(vertex);
            for(let i = 0; i< this.adjacencyList[vertex].length; i++){
                if(!visited[this.adjacencyList[vertex][i]]) helper(this.adjacencyList[vertex][i])
            }
        }
        
        helper(startingV);
        return result
    }

    /*
    Depth-First Traversal (Iterative)

    Pseudocode:
    - Accept a starting vertex.
    - Create a stack and push the starting vertex.
    - Create a result array.
    - Create a visited map.
    - While stack is not empty:
        * Pop the top vertex.
        * Add it to the result.
        * Push all unvisited neighbors to the stack.
    - Return the result array.
    */

    dfs(start){
        const result = [];
        const visited = {};
        const stack = [start];
        let poppedVert;
        visited[start] = true;

        while(stack.length){
            poppedVert = stack.pop();
            result.push(poppedVert);
            
                // stack.push(this.adjacencyList[poppedVert]);
            this.adjacencyList[poppedVert].forEach(element => {
                if(!visited[element]){
                    visited[element] = true;
                    stack.push(element)
                }
            });
            
        }
        return  result
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
console.log(g.recursiveDfs('A'));
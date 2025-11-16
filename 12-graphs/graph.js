/*
Graphs are collections of nodes (vertices) and the connections (edges) between them.

Common uses for graphs:
- Social networks
- Location / mapping
- Routing algorithms
- Visual hierarchy
- File system organization

Key terms:
- Vertex: a single node
- Edge: a connection between two vertices
- Weighted / Unweighted: whether edges have associated numeric values
- Directed / Undirected: whether edges have direction (arrows)

Undirected Graph:
- Edges have no direction (two-way connection)

Directed Graph:
- Edges have direction (represented with arrows)

Weighted Graph:
- Each edge has a numeric weight (distance, cost, etc.)

Unweighted Graph:
- Edges have no associated value

Ways to represent graphs:
1. Adjacency Matrix: 2D structure (array of arrays)
2. Adjacency List: store edges for each vertex in arrays or hash tables
   - Works well for both numeric and string vertex names
*/

// We will use an adjacency list to build an undirected graph.
// The only property we need in the constructor is `adjacencyList`,
// which holds each vertex and its neighbors.
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
}

const g = new Graph();
g.addVertex('Tokyo')
g.addVertex('Los Angeles');
g.addVertex('Dallas');
g.addEdge('Los Angeles', 'Dallas');
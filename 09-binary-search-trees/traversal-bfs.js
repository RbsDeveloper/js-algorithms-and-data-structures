/*
Breadth-First Search (BFS) is a tree traversal technique.

It visits nodes **level by level**, left-to-right.
This means:

- Visit all nodes at depth 0 (just the root)
- Then all nodes at depth 1 (root’s children)
- Then all nodes at depth 2
- etc.

In other words, BFS works **horizontally**, not vertically.

STEPS (Iterative BFS):

1. Create a queue and an array to store visited node values.
2. Place the root node into the queue.
3. While the queue is not empty:
     - Dequeue a node
     - Add its value to the visited array
     - If it has a left child → enqueue it
     - If it has a right child → enqueue it
4. Return the visited array.
 */

//Classes for the BST
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    //Recursive version
    insert(val, current = this.root){
        let newNode = new Node(val);

        if(this.root === null) {
            this.root = newNode;
            return this}

        if(newNode.value === current.value)return undefined;
     //Go right
        if(newNode.value > current.value){
            if(!current.right){
                current.right = newNode;
                return this
            }else{
                return this.insert(val, current.right)
            }
        }
    //Go left
        if(newNode.value < current.value){
            if(!current.left){
                current.left = newNode;
                return this
            }else{
                return this.insert(val, current.left)
            }
        }     
    }
    //Recursive version
    find(val, current = this.root){
        if(current === null) return null;
        
        if(val === current.value){
            return current
        }

        //left
        if(val < current.value){
                return this.find(val, current.left);
        }

        //Right
        if(val>current.value){
                return this.find(val, current.right)
        }
    }
    //simple way with array like queue
    bfs(){
        let  node = this.root;
        let data = [];
        let queue = [];
            
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data
    }
    //Normal example with linked list type queue
    bfsV2(){
        let q = new Queue();
        let visited = [];
        
        if(!this.root)return visited;

        q.enqueue(this.root);

        
        while(q.size > 0){
            let temp = q.dequeue();
            visited.push(temp.value)

            if(temp.left){
                q.enqueue(temp.left)
            }
            if(temp.right){
                q.enqueue(temp.right)
            }
        }
        return visited
    }
}
//====================================================
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Qnode(val);
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
        return temp

    }
};

class Qnode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
//======================================================
//creating the tree:

let tree =  new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)




console.log(tree.bfsV2())
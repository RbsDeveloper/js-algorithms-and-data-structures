/*
Depth-First Search – PostOrder Traversal

PostOrder visits nodes in the following order:
    Left → Right → Node

This means we explore an entire subtree before visiting the node itself.

Algorithm Steps (Recursive):

1. Create an array to store the visited node values.
2. Store the root node in a variable called "current".
3. Write a helper function that accepts a node:
     - If the node has a left child, recursively traverse the left subtree.
     - If the node has a right child, recursively traverse the right subtree.
     - Push the node’s value into the visited array.
4. Invoke the helper function starting from the root.
5. Return the visited array.

Use Cases:
- Deleting or freeing nodes in a tree (bottom-up operations)
- Evaluating mathematical expression trees
- Any scenario where children must be processed before the parent
*/

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
                return
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
   
    dfsPost(){
        const visited = [];
        const current = this.root;
        
        if(!this.root) return visited;

        function traverse(node){
            if(node.left) traverse(node.left);

            if(node.right) traverse(node.right);

            visited.push(node.value);
        }

        traverse(current);

        return visited
    }
}
//====================================================

let tree =  new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree.dfsPost())
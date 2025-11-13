/*
Trees are data structures consisting of nodes in a parent/child relationship.
From a single starting node (the root), branches can extend to multiple levels.

Key differences between lists and trees:
- Lists are linear (each node points to exactly one next node).
- Trees are nonlinear and can branch into multiple paths.

A node may only point to its children — never directly to its siblings.
A valid tree must have exactly one root.

TERMS:
- ROOT → The topmost node in the tree.
- CHILD → A node directly connected to another when moving away from the root.
- PARENT → The node directly above a given child.
- SIBLINGS → Nodes that share the same parent.
- LEAF → A node with no children.
- EDGE → A link between a parent and a child.

COMMON USE CASES:
- HTML DOM structure
- Network routing
- Abstract Syntax Trees (parsing code)
- AI decision trees (e.g., tic-tac-toe)
- File systems (folders inside folders)
- JSON structures (parsed as tree-like objects)

TYPES OF TREES:
- General Trees → Any number of children
- Binary Trees → At most two children per node
- Binary Search Trees (BST)
   * A special binary tree where:
     - Left subtree contains values < parent
     - Right subtree contains values > parent
     - All values must be comparable (numbers, strings, etc.)
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

    //Insertion method:
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
            return this
        }else{
            let current = this.root
            while(true){
                if(val === current.value) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left
                    }
                } else if(val > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                } 
            }
        }
    }
    //Recursive version
    insertV2(val, current = this.root){
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
                return this.insertV2(val, current.right)
            }
        }
    //Go left
        if(newNode.value < current.value){
            if(!current.left){
                current.left = newNode;
                return
            }else{
                return this.insertV2(val, current.left)
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

    //Iterative version

    findV2(val){
        if(!this.root)return false
        
            let current = this.root;
            let found = false;
            while(current && !found){
                if(val === current.value) return current;
                
                if(val<current.value){
                  
                        current = current.left
                    
                }else if(val>current.value){
                  
                        current = current.right
                    
                }else{
                    found = true
                }
            }
        
            return current;
    }
    //helper method to find the smallest node.
    findMin(node){
        while (node.left !== null) {
        node = node.left;
        }
        return node;
    }

    remove(val, current = this.root){
        if(!current) return null;

        if(val < current.value){
            current.left = this.remove(val, current.left);
        }else if(val > current.value){
            current.right = this.remove(val, current.right);
        }else{
            if(!current.left && !current.right) return null;
            if(!current.left) return current.right;
            if(!current.right) return current.left;

            let successor = this.findMin(current.right);
            current.value = successor.value;
            current.right = this.remove(successor.value, current.right);
        }
        return current;
    }

    //Iterative Version
    findSecondLargest(){
        /*
        RULES:
        -if the largest node has a .left, the second largest is the node at .left
        -if the largest has no .left, the second largest is its parent
        */    
        if(!this.root) return null;
        if(this.root.right === null && this.root.left === null) return null
        
        let prev
        let current = this.root;
       // Step 1: walk to the largest node
         
        while(current.right){
            prev = current
            current = current.right
        }
        
        // Step 2: if the largest node has a left subtree,
        // find the rightmost node in that subtree
        if(current.left){
            let toTheLeft = current.left
            
            while(toTheLeft.right){
                toTheLeft = toTheLeft.right
            }
            return toTheLeft.value
        }
        
        return prev.value
    }
    
    //Recursive Version
    findSecondLargestv2(start = this.root, parent = null){
        if(!this.root) return null;
        if(this.root.right === null && this.root.left === null) return null

        if(start.right === null){
            if(start.left){
                let temp = start.left;

                while(temp.right){
                    temp = temp.right;
                }
                
                return temp.value;
            }
        };

        
        if(start.right){
           return this.findSecondLargestv2(start.right, parent = start)
        }

        return parent.value
    }
  
}

let tree = new BinarySearchTree();
tree.root = new Node(50);
tree.insertV2(30);
tree.insertV2(20);
tree.insertV2(40);
tree.insertV2(35);
tree.insertV2(70);
tree.insertV2(60);
tree.insertV2(80);
tree.insertV2(75);
tree.insertV2(90);
//console.log(tree);


function summmm(arr){
    if(arr.length === 0) return 0;

    let result = arr[arr.length - 1];
    return result + summmm(arr.slice(0, arr.length - 1));
}



function sumNested(arr){
    //base case
    if(arr.length === 0) return 0;

    let sum = 0

    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            sum += arr[i]
        }else{
             sum = sum + sumNested(arr[i]);
        }
        
    }

    return sum 
}
      
//console.log(sumNested([]))

function flatten(arr){
    let newArr = [];

    if(arr.length === 0) return [];

    for(let i=0; i< arr.length; i++){
        
        if(Array.isArray(arr[i])){
            newArr=newArr.concat(flatten(arr[i]))
        }else{
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//console.log(flatten([]))

function includesDeep(arr, val){

    for(let i =0 ; i< arr.length; i++){
        if(arr[i] === val) return true;
        
        if(Array.isArray(arr[i])){
           if(includesDeep(arr[i], val)) return true
        }
    }
    return false
}

console.log(includesDeep([[1], [2, [3, 4]], 5], 4))
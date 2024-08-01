// Activity 1: Linked List
// task 1

class Node {
   constructor(value) {
      this.value = value;
      this.Node = null;
   }

}
// const node1 = new Node(10);
// const node2 = new Node(30);

// node1.next = node2;

// console.log(node1.value);
// console.log(node2.value);

// task 2
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
   }

   add(value) {
      const newNode = new Node(value);

      if (!this.head) {
         this.head = this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
   }

   remove() {
      if (!this.head) {
         throw new Error("List is empty :");
         return;
      }

      if (this.head === this.tail) {
         this.head = this.tail = null;
      } else {
         let current = this.head;
         while (current.next !== this.tail) {
            current = current.next;
         }
         current.next = null;
         this.tail = current;
      }
   }

   display() {
      let current = this.head;
      const values = [];

      while (current) {
         values.push(current.value);
         current = current.next;
      }

      console.log(values.join(' -> '));
   }
}

// Example usage
// const list = new LinkedList();
// list.add("Node1");
// list.add("Node2");
// list.add("Node3");
// list.add("Node4");
// console.log("Initial List is:");
// list.display();
// console.log("Remove element from end: now list is ");
// list.remove();
// list.display();
// console.log("Adding element to end : now list is ");
// list.add("Node5");
// list.display()


// Activity 2: Stack*
// task 3
class Stack {
   constructor() {
      this.items = [];
   }

   push(value) {
      this.items.push(value);
   }
   pop() {
      if (this.isEmpty()) {
         throw new Error("Stack is empty")
      }
      this.items.pop();
   }
   peek() {
      if (this.isEmpty()) {
         throw new Error("Stack Is Empty");
      }
      return this.items[this.items.length - 1];
   }
   isEmpty() {
      return this.items.length === 0;
   }
   size() {
      return this.items.length;
   }
   print() {
      console.log(this.items);
   }
}

let Mystack = new Stack();

// Mystack.push("element 1")
// Mystack.push("element 2")
// Mystack.push("element 3")
// Mystack.push("element 4")
// console.log("Stack is now : ");
// Mystack.print();
// console.log("After deleting one element");
// Mystack.pop();
// Mystack.print();
// console.log("Top of the stack element is : ", Mystack.peek());
// console.log("Now size of the stack is ",Mystack.size());

// task 4
let string = "Buddhadeb"
const stringReverse = new Stack();

string.split('').forEach((char) => {
   stringReverse.push(char);
});

let reverseString = '';
while (!stringReverse.isEmpty()) {
   reverseString += stringReverse.peek();
   stringReverse.pop();
}

// console.log(`String Before Reverse ${string}\nReverse String is : ${reverseString}`);

// Activity 3: Queuez
// task 5

class Queue {
   constructor() {
      this.items = [];
   }

   enqueue(element) {
      this.items.push(element);
   }

   dequeue() {
      if (this.isEmpty()) {
         return "Queue is empty";
      }
      return this.items.shift();
   }

   front() {
      if (this.isEmpty()) {
         return "Queue is empty";
      }
      return this.items[0];
   }

   isEmpty() {
      return this.items.length === 0;
   }

   size() {
      return this.items.length;
   }

   print() {
      console.log(this.items.toString());
   }
}

// const queue = new Queue();
// queue.enqueue(18);
// queue.enqueue(22);
// queue.enqueue(39);

// console.log("Initial Queue is : ");
// queue.print();
// console.log("After deleting one element from front : ", queue.dequeue());
// queue.print();
// console.log("Front of the queue is : ", queue.front());
// console.log("Size of the queue is : ", queue.size());


// task 6
class PrinterQueue extends Queue {
   constructor() {
      super();
   }

   addJob(job) {
      this.enqueue(job);
      console.log(`Job Added: "${job}". The queue now has ${this.size()} job(s).`);
   }

   processJob() {
      if (this.isEmpty()) {
         console.log("No jobs to process. The queue is empty.");
         return;
      }

      const job = this.dequeue();
      console.log(`Processing Job: "${job}". The queue now has ${this.size()} job(s) left.`);
   }

   viewNextJob() {
      if (this.isEmpty()) {
         console.log("No jobs in the queue to view. The queue is empty.");
         return;
      }

      console.log(`Next Job: "${this.front()}".`);
   }
}

// const printerQueue = new PrinterQueue();

// console.log("Adding jobs to the printer queue:");
// printerQueue.addJob("Print Document 1");
// printerQueue.addJob("Print Document 2");
// printerQueue.addJob("Print Document 3");

// console.log("\nViewing the next job in the queue:");
// printerQueue.viewNextJob();

// console.log("\nProcessing jobs:");
// printerQueue.processJob();
// printerQueue.processJob();

// console.log("\nViewing the next job in the queue:");
// printerQueue.viewNextJob();

// console.log("\nProcessing remaining jobs:");
// printerQueue.processJob();
// printerQueue.processJob();

// Activity 4: Binary Tree
// task 7
class TreeNode {
   constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
   }
}

// Helper function to print the tree structure (( Optional ))
function printTree(node, prefix = '', isLeft = true) {
   if (node !== null) {
      console.log(prefix + (isLeft ? '├── ' : '└── ') + node.value);
      printTree(node.left, prefix + (isLeft ? '│   ' : '    '), true);
      printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
   }
}

// Create the tree nodes
const node5 = new TreeNode(5);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2);
const node7 = new TreeNode(7);
const node6 = new TreeNode(6);
const node8 = new TreeNode(8);

const node1 = new TreeNode(1, node2, node3);
const node2Left = new TreeNode(2, node4, node5);
const node2Right = new TreeNode(3, node6, node7);
const root = new TreeNode(0, node2Left, node2Right);

node5.right = node8;

// Print the tree
// printTree(root);

// task 8
class BinaryTree {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
         this.root = newNode;
      } else {
         this._insertRecursively(this.root, newNode);
      }
   }

   _insertRecursively(currentNode, newNode) {
      if (newNode.value < currentNode.value) {
         // Insert into the left subtree
         if (currentNode.left === null) {
            currentNode.left = newNode;
         } else {
            this._insertRecursively(currentNode.left, newNode);
         }
      } else {
         if (currentNode.right === null) {
            currentNode.right = newNode;
         } else {
            this._insertRecursively(currentNode.right, newNode);
         }
      }
   }

   inOrderTraversal() {
      const result = [];
      this._inOrderTraversalRecursively(this.root, result);
      return result;
   }

   _inOrderTraversalRecursively(node, result) {
      if (node !== null) {
         this._inOrderTraversalRecursively(node.left, result);
         result.push(node.value);
         this._inOrderTraversalRecursively(node.right, result);
      }
   }
}

// Example usage:

// const tree = new BinaryTree();
// tree.insert(50);
// tree.insert(30);
// tree.insert(70);
// tree.insert(20);
// tree.insert(40);
// tree.insert(60);
// tree.insert(80);

// console.log('In-order traversal:', tree.inOrderTraversal());

// Activity 5: Graph
// (( i will do it letter ))
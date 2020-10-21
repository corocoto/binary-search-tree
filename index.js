class Node {
    constructor(data) {
        this.data = data; //node value
        this.left = null; //left side child
        this.right = null; //right side child
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // bst root
    }

    insert(data) {
        const node = new Node(data);
        if (this.root) {
            this.insertNode(this.root, node);
        } else {
            this.root = node;
        }
    }

    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            node.left ? this.insertNode(node.left, newNode) : node.left = newNode;
        } else {
            node.right ? this.insertNode(node.right, newNode) : node.right = newNode;
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(11);
BST.insert(5);
BST.insert(4);
BST.insert(5);
BST.insert(12);
BST.insert(6);

console.log(BST);
/**
 * Узел, используемый внутри BST.
 * @example
 * ```js
 * const node = new Node(data);
 * ```
 */
class Node {
    /**
     * @constructor
     * @param {Number} data значение узла
     */
    constructor(data) {
        this.data = data; //node value
        this.left = null; //left side child
        this.right = null; //right side child
    }
}

/**
 * Класс для создания экземпляра BST.
 * @example
 * ```js
 * const BST = new BinarySearchTree();
 * BST.insert(11);
 * BST.insert(5);
 * BST.insert(4);
 * BST.insert(5);
 * BST.insert(12);
 * BST.insert(6);
 * ```
 */
class BinarySearchTree {
    /**
     * @constructor
     */
    constructor() {
        this.root = null; // bst root
    }

    /**
     * Создает экземпляр класса `Node`. И располагает его внутри BST
     * @param {Number} data значение добавляемого узла
     * @return {void}
     */
    insert(data) {
        const node = new Node(data);
        if (this.root) {
            this.insertNode(this.root, node);
        } else {
            this.root = node;
        }
    }

    /**
     * Размещает узел в нужной позиции BST
     * @param {Node} node родительский узел
     * @param {Node} newNode добавляемый узел
     * @return {void}
     */
    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            node.left ? this.insertNode(node.left, newNode) : node.left = newNode;
        } else {
            node.right ? this.insertNode(node.right, newNode) : node.right = newNode;
        }
    }
}
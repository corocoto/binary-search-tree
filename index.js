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

    /**
     * Прямой обход BST.
     * >При прямом обходе будут посещаться все узлы в порядке возрастания, начиная с указанного узла (хотя это и необязательно),
     * и выполнять заданную callback функцию (также необязательно).
     * @param {Node} node узел, с которого начинается обход дерева
     * @param {Function} callback callback функция
     * @return {void}
     */
    inOrderTraverse(node, callback) {
        if (node) {
            this.inOrderTraverse(node.left, callback);
            callback(node.data);
            this.inOrderTraverse(node.right, callback);
        }
    }

    /**
     * Симметричный обход
     * >При симметричном обходе посещаются каждый узел до его потомков.
     * @param {Node} node узел, с которого начинается обход дерева
     * @param {Function} callback callback функция, которая будет выполнена при каждой итерации
     * @return {void}
     */
    preOrderTraverse(node, callback) {
        if (node) {
            callback(node.data);
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
        }
    }

    /**
     * Обход в обратном порядке
     * >При обходе в обратном порядке посещаются узлы после посещения его потомков.
     * @param {Node} node узел, с которого начинается обход дерева
     * @param {Function} callback callback функция, которая будет выполнена при каждой итерации
     * @return {void}
     */
    postOrderTraverse(node, callback) {
        if (node) {
            this.postOrderTraverse(node.left, callback);
            this.postOrderTraverse(node.right, callback);
            callback(node.data);
        }
    }

    /**
     * Поиск
     * @param {Node} node Узел, в котором производится поиск
     * @param {Number} data значение, которое ищем
     * @return {Node} узел, с указанным значением `data`
     */
    search(node, data) {
        if (node) {
            if (node.data > data) {
                return this.search(node.left, data);
            } else if (node.data < data) {
                return this.search(node.right, data);
            } else {
                return node;
            }
        }
        return null;
    }
}

//Обход дерева (Traverse) — это процесс посещения всех узлов дерева и выполнения операции на каждом узле.Существует три общих подхода: прямой (in-order), симметричный или поперечный (pre-order) и в обратном порядке (post-order).

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(14);
BST.insert(294);
BST.insert(13);
BST.insert(363);
BST.insert(5);
BST.insert(8);
BST.insert(7);
const searchedNode = BST.search(BST.root, 8);

console.log('Проверка работы прямого обхода:');
BST.inOrderTraverse(BST.root, (item) => console.log(item));

console.log('\nПроверка работы симметричного обхода:');
BST.preOrderTraverse(BST.root, (item) => console.log(item));

console.log('\nПроверка работы обхода в обратном порядке:');
BST.postOrderTraverse(BST.root, (item) => console.log(item));
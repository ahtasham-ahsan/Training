class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    delete(value, node = this.root, parent = null) {
        if (!node) return null;
        
        if (value < node.value) {
            node.left = this.delete(value, node.left, node);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right, node);
        } else {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else {
                let successor = this.findMin(node.right);
                node.value = successor.value;
                node.right = this.delete(successor.value, node.right, node);
            }
        }
        return node;
    }

    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);

console.log("In-Order Traversal:", tree.inOrderTraversal());

tree.delete(10);
console.log("In-Order Traversal after deleting 10:", tree.inOrderTraversal());

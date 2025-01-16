// Binary Tree

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
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        return this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        return this.insertNewNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else {
      if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const tree = new BinaryTree();

console.log(`Tree is Empty: ${tree.isEmpty()}`);

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.search(tree.root, 10));
console.log(tree.search(tree.root, 5));
console.log(tree.search(tree.root, 15));
console.log(tree.search(tree.root, 20));

tree.preOrder(tree.root);
tree.inOrder(tree.root);
tree.postOrder(tree.root);

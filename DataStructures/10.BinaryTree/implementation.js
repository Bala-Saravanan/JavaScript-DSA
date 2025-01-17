const Queue = require("./../5.Queue/LinkedListQueue");
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
  // Depth First Search (DFS)
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
  // Breadth First Search (BFS)
  levelOrder() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }
  max(root) {
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }
  delete(value) {
    return this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const tree = new BinaryTree();

console.log(`Tree is Empty: ${tree.isEmpty()}`);

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// console.log(tree.search(tree.root, 10));
// console.log(tree.search(tree.root, 5));
// console.log(tree.search(tree.root, 15));
// console.log(tree.search(tree.root, 20));

// tree.preOrder(tree.root);
// tree.inOrder(tree.root);
// tree.postOrder(tree.root);
// tree.levelOrder();

// console.log(tree.min(tree.root));
// console.log(tree.max(tree.root));

console.log("Before removing the root node: ");
tree.levelOrder();
tree.delete(10);
console.log("After removing the root node: ");
tree.levelOrder();

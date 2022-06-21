class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode;
    } else {
      let currNode = this.root;
      while(true) {
        if (val === currNode.value) {
          return undefined
        } else if (val < currNode.value) {
          if (currNode.left) {
            currNode = currNode.left;
          } else {
            currNode.left = newNode;
          }
        } else {
          if (currNode.right) {
            currNode = currNode.right;
          } else {
            currNode.right = newNode
          }
        }
      }
      val < lastNode.value ? lastNode.left = newNode : lastNode.right = newNode;
    }
    return this
  }

  find(val) {
    if (!this.root) return false;
    let currNode = this.root;
    while (currNode) {
      if (currNode.value === val) return currNode
      currNode.value < val ? currNode = currNode.right : currNode = currNode.left;
    }
    return undefined
  }
}
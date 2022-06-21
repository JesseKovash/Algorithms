class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first =  null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }

  print() {
    let allValues = [];
    let currNodeOnStack = this.first;
    for (var i=0; i < this.size; i++) {
      allValues.push(currNodeOnStack.value);
      currNodeOnStack = currNodeOnStack.next;
    }
  console.log(allValues)
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first =  null;
    this.last = null;
    this.size = 0;
  }

  //need to be constant time, so these actions happen at beginning of LL rather than the end (think shift/unshift)
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0 ) return null
    let removed = this.first;
    this.first = removed.next;
    removed.next = null;
    this.size--;
    return removed
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
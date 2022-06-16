class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) {
      return undefined
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  shift() {
    if (!this.head) {
      return undefined
    }
    const shiftVal = this.head;
    this.head = shiftVal.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail =  null
    }
    return shiftVal
  }

  unshift(val) {
    const unshiftNode = new Node(val);
    if (!this.head) {
      this.head = unshiftNode;
      this.tail = unshiftNode
    } else {
      unshiftNode.next = this.head;
      this.head = unshiftNode;
    }
    this.length++;
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let currNode = this.head;
    let nodeIndex = 0;
    while (index !== nodeIndex) {
      currNode = currNode.next;
      nodeIndex++;
    }
    return currNode
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)

    let tarNode = this.get(index - 1);
    let newNode = new Node(value);
    let oldNext = tarNode.next;
    newNode.next = oldNext;
    tarNode.next = newNode;
    this.length++;
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    let targetNode = this.get(index - 1)
    let removedNode = targetNode.next;
    targetNode.next = removedNode.next;
    this.length--;
    return removedNode
  }

  reverse() {
    let node = this.head;
    let prev = null;
    let next;
    this.head = this.tail;
    this.tail = node;
    for (var i=0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next
    }
    console.log(arr)
  }

}
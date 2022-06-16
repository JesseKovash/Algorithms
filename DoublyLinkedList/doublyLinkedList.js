class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList() {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    const currTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currTail.prev;
      currTail.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return currTail
  }

  shift() {
    if (this.length === 0) return undefined
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }

  get(index) {
    if (this.length === 0) return null
    const mid = Math.floor(this.length / 2);
    let currNode;
    if (index <= mid) {
      console.log('less')
      currNode = this.head;
      for (var i=0; i < index; i++) {
        console.log(i)
          currNode = currNode.next
      }
    } else {
      console.log('greater')
      currNode = this.tail;
      for (var i=this.length - 1; i > index; i--) {
          currNode = currNode.prev
      }
    }
    return currNode
  }

}
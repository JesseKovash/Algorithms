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

  set(index, value) {
    const targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = value;
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    const newNode = new Node(value);
    const targetNode = this.get(index - 1);
    const afterTargetNode = targetNode.next;
    // const nextNodePrev = afterTargetNode.prev;
    if (targetNode) {
      targetNode.next = newNode;
      newNode.prev = targetNode;
      newNode.next = afterTargetNode;
      afterTargetNode = newNode;
      this.length++;
      return true
    }
    return false
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let targetNode = this.get(index);
    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    targetNode.next = null;
    targetNode.prev = null;
    this.length--;
    return targetNode
  }

  reverse(){
    if (this.length === 0) return null
    if (this.length === 1) return this
    let index = 0;
    let currNode = this.head;
    while (index < this.length) {
        if (index === 0) {
            this.tail = currNode;
        }
        if (index === this.length - 1) {
            this.head = currNode
        }
        let nextNode = currNode.next;
        let next = currNode.next;
        let prev = currNode.prev;
        currNode.next = prev;
        currNode.prev = next;
        currNode = nextNode;
        index++;
    }
    return this
}

}
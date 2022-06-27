class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

//essentially a binary min heap. smallest at top (small number equals higher priority)
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    if (this.values.length === 1) return this;

    let currIndex = this.values.length - 1;
    let currValue = this.values[currIndex].priority;
    let parentIndex = Math.floor((currIndex - 1) / 2) || 0;
    let parentValue = this.values[parentIndex].priority;
    //bubble smaller values upward
    while (currValue < parentValue) {
      if (parentIndex === 0 && parentValue < currValue) break;
      [this.values[parentIndex], this.values[currIndex]] = [this.values[currIndex], this.values[parentIndex]]
      currIndex = parentIndex;
      Math.floor((currIndex - 1) / 2) >= 0 ? parentIndex = Math.floor((currIndex - 1) / 2) : 0;
      currValue = this.values[currIndex].priority;
      parentValue = this.values[parentIndex].priority;
    }
      return this
  }

  dequeue() {
    if (this.values.length === 0) return;

    const min = this.values[0].priority;
    const end = this.values.pop()

    if (this.values.length === 0) return min

    this.values[0] = end;
    let currIndex = 0;
    let currValue = this.values[0].priority;
    let rightVal;
    let leftVal;

    //sink larger values downwards
    while (true) {
      let leftChildIndex = (currIndex * 2) + 1;
      let rightChildIndex = (currIndex * 2) + 2;
      let swap = null;

      if (leftChildIndex < this.values.length) {
        leftVal = this.values[leftChildIndex].priority;
        if (leftVal < currValue) swap = leftChildIndex;
      }

      if (rightChildIndex < this.values.length) {
        rightVal = this.values[rightChildIndex].priority;
        if (rightVal < currValue && !swap) swap = rightChildIndex;
        if (rightVal < currValue && rightVal < leftVal) swap = rightChildIndex;
      }

      if (!swap) break;
      [this.values[swap], this.values[currIndex]] = [this.values[currIndex], this.values[swap]];
      currIndex = swap;
    }
    return min
  }

}
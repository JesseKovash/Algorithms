//visually a binary heap is a tree, but an array is used.
//find a node's child by 2 * index + 1 or 2 * index + 2;
//find a node's parent by Math.floor((n-1)/2);
class MaxBinaryHeap {
  constructor() {
    values = [];
  }


  insert(value) {
    this.values.push(value);
    if (this.values.length === 1) return this;

    let currIndex = this.values.length - 1;
    let currValue = this.values[currIndex];
    let parentIndex = Math.floor((currIndex - 1) / 2) || 0;
    let parentValue = this.values[parentIndex];
    //bubble larger values upward
    while (currValue > parentValue) {
      if (parentIndex === 0 && parentValue > currValue) break;
      [this.values[parentIndex], this.values[currIndex]] = [this.values[currIndex], this.values[parentIndex]]
      currIndex = parentIndex;
      parentIndex = Math.floor((currIndex - 1) / 2) || 0;
      currValue = this.values[currIndex];
      parentValue = this.values[parentIndex]
    }
      return this
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) this.values = [];

    const max = this.values[0];
    const end = this.values.pop()
    this.values[0] = end;
    let currIndex = 0;
    let currValue = this.values[0];
    let rightVal;
    let leftVal;

    //sink smaller values downwards
    while (true) {
      let leftChildIndex = (currIndex * 2) + 1;
      let rightChildIndex = (currIndex * 2) + 2;
      let swap = null;
      leftVal = this.values[leftChildIndex];
      rightVal = this.values[rightChildIndex];

      if (leftChildIndex < this.values.length) {
        if (leftVal > currValue) swap = leftChildIndex;
      }

      if (rightChildIndex < this.values.length) {
        if (rightVal > currValue && !swap) swap = rightChildIndex;
        if (rightVal > currValue && rightVal > leftVal) swap = rightChildIndex;
      }

      if (!swap) break;
      [this.values[swap], this.values[currIndex]] = [this.values[currIndex], this.values[swap]];
      currIndex = swap;
    }
    return max
  }

}
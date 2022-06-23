//visually a binary heap is a tree, but an array is used.
//find a node's child by 2 * index + 1 or 2 * index + 2;
//find a node's parent by Math.floor((n-1)/2);
class MaxBinaryHeap {
  constructor() {
    values = [];
  }


  insert(value) {
    this.values.push(value);
    if (this.length === 1) return this;

    let currIndex = this.values.length - 1;
    let currValue = this.values[currIndex];
    let parentIndex = Math.floor((currIndex - 1) / 2) || 0;
    let parentValue = this.values[parentIndex];
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

}
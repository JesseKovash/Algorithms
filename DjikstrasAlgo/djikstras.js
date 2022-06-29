class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push({node: vertex2, weight});
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    //build up initial state, set all states except start to be infinity
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] =  null;
    }

    //loop while queue has items present
    while (nodes.values.length) {
      // smallest = nodes.dequeue().val;
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring nodes
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            //update new smallest distance to neighbor
            distances[nextNode.node] = candidate;
            //update previous
            previous[nextNode.node] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate)
          }
        }
      }
    }
    //should return an array with 'directions' reversed
    return path.concat(smallest).reverse()
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
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

    const min = this.values[0];
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

// let g = new WeightedGraph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A", "B", 4);
// g.addEdge("A", "C", 2);
// g.addEdge("B", "E", 3);
// g.addEdge("C", "D", 2);
// g.addEdge("C", "F", 4)
// g.addEdge("D", "E", 3);
// g.addEdge("D", "F", 1);
// g.addEdge("E", "F", 1);
// console.log(g.dijkstra("A", "E"))
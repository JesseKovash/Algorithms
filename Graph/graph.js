//undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v)=> !==vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
      (v)=> !==vertex1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfSearchRecursive(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vert) {
      if (!vert) return null;
      if (!visited[vert]) {
        visited[vert] = true;
        result.push(vert)
      }
      adjacencyList[vert].forEach((one) => {
        if (!visited[one]) return dfs(one);
      })
    }
    dfs(vertex);
    return result
  }

  dfSearchIterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};
    let curr;

    while (stack.length > 0) {
      curr = stack.pop();
      if (!visited[curr]) {
        result.push(curr);
        visited[curr] = true;
        this.adjacencyList[curr].forEach((neighbor) => {
          if (!visited[neighbor]) stack.push(neighbor)
        });
      }
    }
    return result
  }

  bfSearch(vertex) {
    const queue = [vertex];
    const results = [];
    const visited = {};
    let curr;

    while (queue.length > 0) {
      curr = queue.shift();
      if (!visited[curr]) {
        results.push(curr);
        visited[curr] = true;
        this.adjacencyList[curr].forEach((neighbor) => {
          if (!visited[neighbor]) queue.push(neighbor)
        })
      }
    }
    return results
  }

}
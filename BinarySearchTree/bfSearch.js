//to be used with BST and Node classes
function bfSearch(bst) {
  //use a queue to keep track of what needs to be visited
  let queue = [bst.root];
  //use an array to hold the values in the correct order
  //make sure to add to visited using push and using shift on the queue FIFO
  let visited = [];
  while (queue.length > 0) {
    if (queue[0]) {
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      visited.push(queue[0].value);
    }
    queue.shift()
  }
  return visited
}
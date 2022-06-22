function dfPreOrderSearch(root) {
  let allNodes = [];
  if (!root) return [];
  allNodes.push(root.value)
  if (root.left) {
    allNodes = allNodes.concat(dfSearch(root.left));
  }
  if (root.right) {
    allNodes = allNodes.concat(dfSearch(root.right));
  }
  return allNodes
}
function dfPostOrderSearch(root) {
  let allNodes = [];
  if (!root) return [];
  if (root.left) {
    allNodes = allNodes.concat(dfPostOrderSearch(root.left));
  }
  if (root.right) {
    allNodes = allNodes.concat(dfPostOrderSearch(root.right));
  }
  allNodes.push(root.value)
  return allNodes
}
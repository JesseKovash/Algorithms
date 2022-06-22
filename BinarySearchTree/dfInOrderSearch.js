function dfInOrderSearch(root) {
  let allNodes = [];
  if (!root) return [];
  if (root.left) {
    allNodes = allNodes.concat(dfInOrderSearch(root.left));
  }
    allNodes.push(root.value)
  if (root.right) {
    allNodes = allNodes.concat(dfInOrderSearch(root.right));
  }
  return allNodes
}
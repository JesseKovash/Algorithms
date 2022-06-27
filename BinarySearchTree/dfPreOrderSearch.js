function dfPreOrderSearch(root) {
  let allNodes = [];
  if (!root) return [];
  allNodes.push(root.value)
  if (root.left) {
    allNodes = allNodes.concat(dfPreOrderSearch(root.left));
  }
  if (root.right) {
    allNodes = allNodes.concat(dfPreOrderSearch(root.right));
  }
  return allNodes
}
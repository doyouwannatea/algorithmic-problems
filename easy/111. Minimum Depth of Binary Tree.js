/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  const forks = [{ node: root, depth: 1 }];
  let minDepth = Number.MAX_SAFE_INTEGER;

  while (forks.length > 0) {
    const rootNode = forks.pop();
    let node = rootNode;
    let depth = node.depth;

    while (node.node && node.node.left) {
      depth++;
      node = { node: node.node.left, depth };
      if (node.node.right) forks.push(node);
    }
    if (depth < minDepth) minDepth = depth;

    node = rootNode;
    while (node.node && node.node.right) {
      depth++;
      node = { node: node.node.right, depth };
      if (node.node.left) forks.push(node);
    }
    if (depth < minDepth) minDepth = depth;
  }
  return minDepth;
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// 2
console.log(minDepth(root));

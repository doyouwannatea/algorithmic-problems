const { TreeNode } = require('../../utils/treeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) continue;
    if (node.val === subRoot.val) {
      let result = true;
      const rootQueue = [node];
      const subQueue = [subRoot];

      while (rootQueue.length > 0 && subQueue.length > 0) {
        const rootNode = rootQueue.shift();
        const subNode = subQueue.shift();

        if (!rootNode && !subNode) continue;
        if (rootNode && subNode && rootNode.val === subNode.val) {
          if (!rootNode) continue;
          rootQueue.push(rootNode.left, rootNode.right);
          subQueue.push(subNode.left, subNode.right);
        } else {
          result = false;
          break;
        }
      }
      if (result) return true;
    }
    queue.push(node.left, node.right);
  }

  return false;
}

// [3,#,4,5,#,1,2], subRoot = [4,#,1,2]
console.log(
  isSubtree(
    new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    ),
    new TreeNode(4, new TreeNode(1), new TreeNode(2))
  )
);

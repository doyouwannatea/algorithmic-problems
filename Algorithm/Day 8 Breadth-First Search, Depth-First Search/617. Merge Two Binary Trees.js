/**
 * Definition for a binary tree TreeNode.
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function mergeTrees(root1, root2) {
  if (!root1 && !root2) return null;
  if (!root2) return root1;
  if (!root1) return root2;
  return new TreeNode(
    root1.val + root2.val,
    mergeTrees(root1.left, root2.left),
    mergeTrees(root1.right, root2.right)
  );
}

const tree1 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5)),
  new TreeNode(2)
);
const tree2 = new TreeNode(
  2,
  new TreeNode(1, undefined, new TreeNode(4)),
  new TreeNode(3, undefined, new TreeNode(7))
);

console.log(mergeTrees(tree1, tree2));

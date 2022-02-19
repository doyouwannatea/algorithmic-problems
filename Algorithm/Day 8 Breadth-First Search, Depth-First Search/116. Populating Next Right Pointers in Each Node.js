/**
 * // Definition for a Node.
 * function TreeNode(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
class TreeNode {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function connect(root) {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node || !node.left || !node.right) continue;
    node.left.next = node.right;
    if (node.next) node.right.next = node.next.left;
    queue.push(node.left, node.right);
  }
  return root;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(connect(tree));

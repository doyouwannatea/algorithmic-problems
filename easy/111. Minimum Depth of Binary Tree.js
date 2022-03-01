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
  // --- Решение через рексурсию ---
  // function dfs(node, depth = 0) {
  //   if (!node) return Number.MAX_SAFE_INTEGER;
  //   if (!node.left && !node.right) return depth;
  //   return Math.min(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
  // }
  // if (!root) return 0;
  // return dfs(root, 1);
  // --- Решение через рексурсию ---
  //
  // --- Решение через циклы ---
  if (!root) return 0;
  const stack = [root];
  root.val = 1;
  let depth = Number.MAX_SAFE_INTEGER;

  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.left && !node.right) {
      depth = Math.min(depth, node.val);
      continue;
    }
    if (node.right) {
      node.right.val = node.val + 1;
      stack.push(node.right);
    }
    if (node.left) {
      node.left.val = node.val + 1;
      stack.push(node.left);
    }
  }

  return depth;
  // --- Решение через циклы ---
}

// [3,9,20,null,null,15,7]
//     3
//  9     20
//      15  7

// answer: 2
console.log(
  minDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

// input: [2,null,3,null,4,null,5,null,6]
//
// tree:
//    2
// null 3
//   null 4
//     null 5
//       null 6
//
// answer: 5
//
console.log(
  minDepth(
    new TreeNode(
      2,
      null,
      new TreeNode(
        3,
        null,
        new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
      )
    )
  )
);

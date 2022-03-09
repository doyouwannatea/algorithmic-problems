/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (!root) return root;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift(); // parent node
    const children = [node.left, node.right].filter(Boolean); // children nodes
    children.forEach((child) => {
      queue.push(child);
      let parent = node;
      while (parent) {
        if (parent.right !== child) {
          if (parent.left && parent.left !== child) {
            return (child.next = parent.left);
          }
          if (parent.right) {
            return (child.next = parent.right);
          }
        }
        parent = parent.next;
      }
    });
  }
  return root;
}

function print(node) {
  if (!node) return;
  console.log(`node: ${node.val} -> ${node.next ? node.next.val : null}`);
  print(node.left);
  print(node.right);
}

// [1,#,2,3,#,4,5,7,#]
print(
  connect(
    new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(7)))
  )
);

// []
// console.log(connect(new Node()));

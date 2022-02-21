/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;
  const largeNode = list1.val > list2.val ? list1 : list2;
  const lessNode = list1.val <= list2.val ? list1 : list2;
  return new ListNode(lessNode.val, mergeTwoLists(largeNode, lessNode.next));
}

// Output: [1,1,2,3,4,4]
console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )
);

// // Output: []
// console.log(mergeTwoLists(new ListNode(), new ListNode()));

// // Output: [0]
// console.log(mergeTwoLists(new ListNode(), new ListNode(0)));

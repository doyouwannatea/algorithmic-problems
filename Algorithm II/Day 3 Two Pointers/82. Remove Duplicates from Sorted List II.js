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
const n = (val, next) => new ListNode(val, next);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let dummy = new ListNode(null, head),
    prev = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      head = head.next;
      prev.next = head;
    } else {
      head = head.next;
      prev = prev.next;
    }
  }

  return dummy.next;
}

// answer: [1,2,5]
// list: [1, 2, 3, 3, 4, 4, 5]
// console.log(deleteDuplicates(n(1, n(2, n(3, n(3, n(4, n(4, n(5)))))))));

// answer: [2,3]
// list: [1, 1, 1, 2, 3]
console.log(deleteDuplicates(n(1, n(1, n(1, n(2, n(3)))))));

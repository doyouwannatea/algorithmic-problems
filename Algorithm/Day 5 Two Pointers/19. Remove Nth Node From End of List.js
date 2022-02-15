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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let slow, fast;
  fast = slow = head;

  while (fast && fast.next) {
    fast = fast.next;
    if (--n < 0) {
      slow = slow.next;
    }
  }

  // delete first
  if (slow === head && n === 1) return slow.next ? slow.next : null;
  else if (slow.next.next) slow.next = slow.next.next;
  else slow.next = null;

  return head;
}

let list = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);

// правильный ответ: [1, 2, 3, 4, 5]
console.log(removeNthFromEnd(list, 1));

// правильный ответ []
// list = new ListNode(1);
// console.log(removeNthFromEnd(list, 1));

// правильный ответ [2]
// list = new ListNode(1, new ListNode(2));
// console.log(removeNthFromEnd(list, 1));

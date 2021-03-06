'user strict';

// Given a linked list, remove the nth node from the end of list and return its head.
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
  let stack = [];
  // 先压入堆栈
  (function pushListInStack(head) {
    stack.push(head.val);
    if (head.next) {
      pushListInStack(head.next);
    }
    return;
  })(head);
  // 移除指定位置元素
  let tmpStack = [];
  for (let i = 0; i < n - 1; i ++) { tmpStack.unshift(stack.pop()); }
  stack.pop();
  stack.push(...tmpStack);

  // 重新构建链表
  return stack;
};

module.exports = removeNthFromEnd;

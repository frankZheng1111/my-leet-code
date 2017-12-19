'user strict';

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  function buildNumStrs(listNode) {
    let numStrs = [listNode.val];
    if (listNode.next) {
      numStrs.push(...buildNumStrs(listNode.next));
    }
    return numStrs;
  }

  function buildListNode(numbers) {
    let listNode = {};
    let dupNumbers = [];
    dupNumbers.push(...numbers)
    listNode.val = dupNumbers.pop();
    if (dupNumbers.length) {
      listNode.next = buildListNode(dupNumbers);
    }
    return listNode;
  }

  let nums1 = buildNumStrs(l1);
  let nums2 = buildNumStrs(l2);

  let sumNums = [];
  let maxLength = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < maxLength; i ++) {
    sumNums[i] = sumNums[i] || 0;
    sumNums[i] += nums1[i] || 0;
    sumNums[i] += nums2[i] || 0;
    if (sumNums[i] >= 10) {
      sumNums[i + 1] = 1;
    }
    sumNums[i] = sumNums[i] % 10;
  }
  sumNums = sumNums.reverse();

  // return sumNums.reverse();
  return buildListNode(sumNums);
};

module.exports = addTwoNumbers;

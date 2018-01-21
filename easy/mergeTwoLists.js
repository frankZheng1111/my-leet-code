/**
 *  * Definition for singly-linked list.
 *   * function ListNode(val) {
 *    *     this.val = val;
 *     *     this.next = null;
 *      * }
 *       */
/**
 *  * @param {ListNode} l1
 *   * @param {ListNode} l2
 *    * @return {ListNode}
 *     */
let mergeTwoLists = function(l1, l2) {
  let queues = [[], [], []];
  function pushListInQueue(node, queueIndex) {
    if(node) { queues[queueIndex].push(node.val); }
    if (node && node.next) {
      pushListInQueue(node.next, queueIndex);
    }
  }
  pushListInQueue(l1, 0);
  pushListInQueue(l2, 1);
  let initNode = null;
  while (queues[0].length || queues[1].length) {
    let l1Node = { val: queues[0].pop(), next: null };
    let l2Node = { val: queues[1].pop(), next: null };
    if (l1Node.val === undefined && l2Node.val !== undefined) {
      l2Node.next = initNode;
      initNode = l2Node;
    } else if (l2Node.val === undefined && l1Node.val !== undefined) {
      l1Node.next = initNode;
      initNode = l1Node;
    } else if (l1Node.val !== undefined && l2Node.val !== undefined){
      if (l1Node.val >= l2Node.val) {
        l1Node.next = initNode;
        initNode = l1Node;
        queues[1].push(l2Node.val);
      } else {
        l2Node.next = initNode;
        initNode = l2Node;
        queues[0].push(l1Node.val);
      }
    }
  }
  // return initNode;
  pushListInQueue(initNode, 2);
  return queues[2];
};

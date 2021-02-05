/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//循环列表法
var hasCycle = function(head) {
    if(!head){
      return false
    }
    let arr = [];
    let currentNode  = head;
    while(currentNode.next && arr.indexOf(`${currentNode.val}${currentNode.next.val}`) === -1){
      arr.push(`${currentNode.val}${currentNode.next.val}`);
      currentNode = currentNode.next;
    }
    return Boolean(currentNode.next)
};
// @lc code=end
//快慢指针法
var hasCycle = function(head) {
  if(!head){
    return false
  }
  let low = head;
  let fast = head.next;
  while(low !== fast){
    if(!fast || !fast.next){
      return false;
    }
    low = low.next;
    fast = fast.next.next;
  }
  return true;
};
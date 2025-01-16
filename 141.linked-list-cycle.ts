/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

function hasCycle(head: ListNode | null): boolean {
  let slowNode: ListNode | null | undefined = head
  let fasterNode: ListNode | null | undefined = head
  while (slowNode?.next) {
    slowNode = slowNode?.next
    fasterNode = fasterNode?.next?.next
    if (slowNode === fasterNode) {
      return true
    }
  }
  return false
}
// @lc code=end

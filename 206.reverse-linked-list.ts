/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  const timeExceededSolution = () => {
    const initalPoint = head
    let newHead = head
    let currentPoint = head
    while (head.next) {
      if (currentPoint.next) {
        currentPoint = currentPoint.next
      } else {
        currentPoint.next = newHead
        newHead = currentPoint
        currentPoint = initalPoint
      }
    }
    return newHead
  }
  let prev: ListNode | null = null
  let currentNode = head
  while (currentNode !== null) {
    const next = currentNode.next
    currentNode.next = prev
    prev = currentNode
    currentNode = next
  }
  return prev
}
// @lc code=end

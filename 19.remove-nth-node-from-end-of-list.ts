/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const nodes: ListNode[] = []
    let current = head
    let linkLength = 0
    while (!!current) {
        linkLength++
        if (nodes.length < n + 1) {
            nodes.push(current)
        } else {
            nodes.shift()
            nodes.push(current)
        }
        current = current?.next
    }
    const previousNode = nodes.shift()
    const targetNode = nodes.shift()
    if (linkLength < n + 1) {
        return previousNode.next
    }
    if (!targetNode) {
        return head.next
    } else if (targetNode?.next) {
        previousNode.next = targetNode?.next
    } else {
        previousNode.next = null
    }

    return head
};
// @lc code=end


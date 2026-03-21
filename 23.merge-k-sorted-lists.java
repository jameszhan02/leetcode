/*
 * @lc app=leetcode id=23 lang=java
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    // this is my inital approach
    // public ListNode mergeKLists(ListNode[] lists) {
    // int k = lists.length;
    // ListNode res = new ListNode(0);
    // ListNode head = res;
    // while (true) {
    // ListNode targetNode = null;
    // int breakCount = 0;
    // Integer targetIdx = null;
    // for (int idx = 0; idx < k; idx++) {
    // if (lists[idx] == null) {
    // breakCount++;
    // continue;
    // }
    // if (targetNode == null) {
    // targetNode = lists[idx];
    // targetIdx = idx;
    // continue;
    // }
    // if (targetNode.val >= lists[idx].val) {
    // targetNode = lists[idx];
    // targetIdx = idx;
    // }
    // }
    // if (breakCount == k)
    // break;
    // res.next = lists[targetIdx];
    // res = res.next;
    // lists[targetIdx] = lists[targetIdx].next;
    // }
    // return head.next;
    // }

    public ListNode mergeKLists(ListNode[] lists) {
        // Min-heap to keep track of the smallest current nodes
        // KEY TAKE AWAY use
        PriorityQueue<ListNode> que = new PriorityQueue<>((a, b) -> a.val - b.val);

        // a, b => negative res a will be at front, vise verse

        // Add the head of each list to the heap
        // load first k node(begin node) into heap
        for (ListNode node : lists) {
            if (node != null)
                que.add(node);
        }

        ListNode dummy = new ListNode();
        ListNode res = dummy;

        while (!que.isEmpty()) {
            ListNode curr = que.poll();
            res.next = curr;
            res = res.next;

            // If there's a next node in the same list, add it to heap
            // que.add == que.offer
            if (curr.next != null) {
                que.add(curr.next);
            }
        }
        return dummy.next;
    }

    // PriorityQueue example:
}
// @lc code=end

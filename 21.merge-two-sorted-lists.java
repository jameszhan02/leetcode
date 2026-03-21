/*
 * @lc app=leetcode id=21 lang=java
 *
 * [21] Merge Two Sorted Lists
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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode res = new ListNode(0);
        ListNode head = res;
        ListNode curr1 = list1;
        ListNode curr2 = list2;

        while (curr1 != null || curr2 != null) {
            if (curr1 == null) {
                res.next = curr2;
                break;
            }
            if (curr2 == null) {
                res.next = curr1;
                break;
            }
            if (curr1.val <= curr2.val) {
                res.next = curr1;
                res = res.next;
                curr1 = curr1.next;
            } else {
                res.next = curr2;
                res = res.next;
                curr2 = curr2.next;
            }
        }
        return head.next;
    }
}
// @lc code=end

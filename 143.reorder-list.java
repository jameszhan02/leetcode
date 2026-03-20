/*
 * @lc app=leetcode id=143 lang=java
 *
 * [143] Reorder List
 */

// @lc code=start

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    //This is my inital approach
    // public void reorderList(ListNode head) {
    //     ArrayList<ListNode> nodes = new ArrayList<ListNode>();
    //     ListNode currentNode = head;
    //     //1. Load all nodes into the arraylist in order the assess position;
    //     while(currentNode != null){
    //         nodes.add(currentNode);
    //         currentNode = currentNode.next;
    //     }
    //     Integer nodesLength = nodes.size();
    //     Integer nodeIdx = 0;

    //     //2. insert node by rules.
    //     for(int idx = 0; idx <  nodesLength; idx++){
    //         System.out.println("nodesLength: " + nodesLength);
    //         Integer shiftIdx = nodesLength - idx - 1;
    //         if(shiftIdx <= idx){
    //             nodes.get(idx).next = null;
    //             break;
    //         }
    //         nodes.get(idx).next = nodes.get(shiftIdx);
    //         nodes.get(shiftIdx).next = nodes.get(idx + 1);
    //     }
    // }

    public void reorderList(ListNode head) {
        if(head == null || head.next == null) {
            return;
        }
        // 1. find the middle
        // KEY take away: for link list could use slow pointer and fast pointer to find the mid pointer.
        ListNode slow = head;
        ListNode fast = head;

        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. reverse second half
        ListNode prev = null;
        ListNode curr = slow.next;
        slow.next = null;

        while(curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // 3. merge two lists alternately
        ListNode first = head;
        ListNode second = prev;

        while(second != null) {
            ListNode temp1 = first.next;
            ListNode temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
// @lc code=end


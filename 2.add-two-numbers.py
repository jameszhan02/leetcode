#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummyNode = ListNode(0)
        currentNode = dummyNode
        carry = 0
        while l1 or l2:
            l1Val = l1.val if l1 else 0
            l2Val = l2.val if l2 else 0
            sum = l1Val + l2Val + carry
            currentNode.next = ListNode((sum % 10))
            currentNode = currentNode.next
            carry = sum // 10
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        if carry != 0:
            currentNode.next = ListNode(carry)
        return dummyNode.next
# @lc code=end


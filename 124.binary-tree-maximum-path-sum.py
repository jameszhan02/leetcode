#
# @lc app=leetcode id=124 lang=python3
#
# [124] Binary Tree Maximum Path Sum
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.res = float('-inf')
        self.sumSubTree(root)
        return self.res 
        
    def sumSubTree(self, node: Optional[TreeNode]) -> int:
        leftSum = self.sumSubTree(node.left) if node.left else 0
        rightSum = self.sumSubTree(node.right) if node.right else 0
        leftSum = max(leftSum, 0)
        rightSum = max(rightSum, 0)

        # this 2 line below is equvilent to whats below
        self.res = max(self.res, leftSum + rightSum + node.val) 
        return node.val + max(leftSum, rightSum) 
        #++++++++++++++++++++++++++++++++++++++++++++++
        # nodeSumLeft = leftSum + node.val
        # nodeSumRight = rightSum + node.val
        # fullNodeSum = leftSum + rightSum + node.val
        # nodeSum = max(nodeSumLeft, nodeSumRight)
        # compares = [self.res, fullNodeSum]
        # if leftSum > 0:
        #     compares.append(leftSum)
        # if rightSum > 0:
        #     compares.append(rightSum)
        # self.res = max(compares)
        # return nodeSum
    # def maxPathSum(self, root: Optional[TreeNode]) -> int:
    #     res = float('-inf')
    #     def dfs(node):
    #         nonlocal res
    #         if not node:
    #             return 0
    #         left = max(dfs(node.left), 0)
    #         right = max(dfs(node.right), 0)
    #         res = max(res, left + right + node.val)
    #         return node.val + max(left, right)
    #     dfs(root)
    #     return res
# @lc code=end


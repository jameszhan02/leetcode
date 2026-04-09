/*
 * @lc app=leetcode id=235 lang=java
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    // lowest means the most nearby node
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // 1. if any node we looking for is root then LCM is root
        if (root == p || root == q) {
            return root;
        }
        // 2. if one node in left and one at right then root is LCM
        if ((p.val > root.val && q.val < root.val) || (p.val < root.val && q.val > root.val)) {
            return root;
        }
        // 3. if both left. check left tree instead of looking for entire tree
        if (p.val < root.val && q.val < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        }
        // 4. if both right. check right tree instead of looking for entire tree
        if (p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        }
        return root;
    }
}
// @lc code=end

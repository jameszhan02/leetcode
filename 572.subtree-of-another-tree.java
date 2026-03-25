/*
 * @lc app=leetcode id=572 lang=java
 *
 * [572] Subtree of Another Tree
 */

// @lc code=start

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        //DFS use stack and check if the subroot is full matched
        // TreeNode subNode = subRoot;
        if(dfs(root, subRoot)) return true;
        if(root.left != null){
            if(isSubtree(root.left, subRoot)){
                return true;
            }
        }
        if(root.right != null) {
            if(isSubtree(root.right, subRoot)){
                return true;
            }
        } 
        return false;
    }

    private boolean dfs (TreeNode node, TreeNode subNode){
        if (node == null && subNode == null) return true;
        if (node == null || subNode == null) return false;
        if(node.val == subNode.val){
          return (dfs(node.left, subNode.left) && dfs(node.right, subNode.right));
        }
        return false;
    }
}
// @lc code=end


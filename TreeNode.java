/*
 * @lc app=leetcode id=104 lang=java
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

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
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    int hight = 0;

    public int maxDepth(TreeNode root) {
        dfs(root, 0);
        return hight;
    }

    private void dfs(TreeNode node, int currentHight) {
        if (node == null)
            return;
        hight = Math.max(hight, currentHight + 1);
        dfs(node.left, currentHight + 1);
        dfs(node.right, currentHight + 1);
    }
}
// @lc code=end

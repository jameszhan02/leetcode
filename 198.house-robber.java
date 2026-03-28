/*
 * @lc app=leetcode id=198 lang=java
 *
 * [198] House Robber
 */

// @lc code=start
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0)
            return 0;
        if (nums.length == 1)
            return nums[0];
        int maxIdx = 0;
        if (nums[1] > nums[0]) {
            maxIdx = 1;
        }
        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for (int i = 2; i < nums.length; i++) {
            dp[i] = dp[i - 2] + nums[i];
            if (dp[i] >= dp[i - 1]) {
                maxIdx = i;
            } else {
                dp[i] = dp[i - 1];
            }
        }
        return dp[maxIdx];
    }
}
// @lc code=end

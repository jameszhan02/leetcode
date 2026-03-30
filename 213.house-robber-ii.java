/*
 * @lc app=leetcode id=213 lang=java
 *
 * [213] House Robber II
 */

// @lc code=start

import java.util.Arrays;

class Solution {
    // [1,2,1,1]
    // [1,2,2,2]
    public int robLinear(int[] nums) {
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
            if (i == nums.length - 1) {
                dp[i] = dp[i - 2] + nums[i];
            } else {
                dp[i] = dp[i - 2] + nums[i];
            }
            if (dp[i] >= dp[i - 1]) {
                maxIdx = i;
            } else {
                dp[i] = dp[i - 1];
            }
        }
        return dp[maxIdx];
    }

    public int rob(int[] nums) {
        // chop nums into 2 array 1. with out first house 2. without last house
        // then compare with res is bigger, we will know how do we choose amount in
        // first/last
        if (nums.length == 1) {
            return nums[0];
        }
        int[] withoutLast = Arrays.copyOfRange(nums, 0, nums.length - 1);
        int[] withoutFirst = Arrays.copyOfRange(nums, 1, nums.length);

        return Math.max(robLinear(withoutLast), robLinear(withoutFirst));
    }
}
// @lc code=end

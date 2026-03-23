/*
 * @lc app=leetcode id=55 lang=java
 *
 * [55] Jump Game
 */

// @lc code=start
class Solution {
    public boolean canJump(int[] nums) {
        for (int i = 0; i < nums.length; i = i) {
            int max = 0;
            // fetch current and see whats the furtherst steps.
            int jumps = nums[i];
            for (int j = 0; j < jumps; j++) {
                int reach = i + j;
                if (j + nums[reach] > max) {
                    max = j + nums[reach];
                }
            }
            if (max == 0) {
                return false;
            }
            if (i + max >= nums.length - 1) {
                return true;
            }
        }
        return false;
    }
}
// @lc code=end

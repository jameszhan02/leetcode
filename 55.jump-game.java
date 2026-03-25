/*
 * @lc app=leetcode id=55 lang=java
 *
 * [55] Jump Game
 */

// @lc code=start
class Solution {
    public boolean canJump(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            int jumps = nums[i];

            if (i + jumps >= nums.length - 1)
                return true;

            if (jumps == 0)
                return false;

            int maxReach = 0;
            int nextPos = i;
            for (int j = 1; j <= jumps; j++) {
                int reach = i + j;
                if (reach + nums[reach] > maxReach) {
                    maxReach = reach + nums[reach];
                    nextPos = reach;
                }
            }
            i = nextPos;
        }
        return false;
    }
}
// @lc code=end

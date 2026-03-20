/*
 * @lc app=leetcode id=268 lang=java
 *
 * [268] Missing Number
 */

// @lc code=start
class Solution {
    public int missingNumber(int[] nums) {
        Integer numLength = nums.length;
        Integer totalSum = 0;
        Integer numSum = 0;
        for(int i = 0; i < numLength; i++){
            totalSum += i + 1;
            numSum += nums[i];
        }
        return totalSum - numSum;
    }
}
// @lc code=end


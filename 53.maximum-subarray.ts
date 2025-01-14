/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let local = 0
    let global = -Infinity

    for (const num of nums) {
        local = Math.max(num, local + num)
        if (local > global) { global = local }
    }

    return global
};
// @lc code=end


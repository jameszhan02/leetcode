/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let highest: number = nums[0]
  let currentMin: number = highest
  let currentMax: number = highest
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i] // this num is also a candidate
    const candidateOne = currentMin * num
    const candidateTwo = currentMax * num

    currentMax = Math.max(num, candidateOne, candidateTwo)
    currentMin = Math.min(num, candidateOne, candidateTwo)

    highest = Math.max(currentMax, highest)
  }
  return highest
}
// @lc code=end

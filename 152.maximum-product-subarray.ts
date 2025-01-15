/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) {
    const prod = nums[0] * nums[1]
    const biggerNum = Math.max(nums[0], nums[1])
    return Math.max(prod, biggerNum)
  }
  let currentMax: number | undefined = undefined
  let currentSlot: number | undefined = undefined
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      currentSlot = nums[i]
      currentMax = nums[i]
      continue
    }
    currentSlot = currentSlot! * nums[i]
    if (currentSlot > currentMax!) {
      currentMax = currentSlot
    } else {
      currentSlot = nums[i]
    }
  }
  return currentMax!
}
// @lc code=end

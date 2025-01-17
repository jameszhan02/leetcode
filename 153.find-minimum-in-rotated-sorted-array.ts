/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  if (nums[l] < nums[r] || l === r) return nums[0]
  while (l < r) {
    let pivot = (l + r) >> 1
    if (nums[pivot + 1] < nums[pivot]) return nums[pivot + 1]
    if (nums[l] <= nums[pivot]) {
      l = pivot + 1
    } else {
      r = pivot
    }
  }
  return -1
}
// @lc code=end

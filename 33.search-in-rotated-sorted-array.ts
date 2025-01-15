/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  let currentMid = Math.floor(Math.random() * nums.length)
  while (left <= right) {
    if (nums[currentMid] === target) {
      return currentMid
    }
    //to the left check if is sorted
    if (nums[currentMid] >= nums[left]) {
      if (target >= nums[left] && target <= nums[currentMid]) {
        right = currentMid - 1
      } else {
        left = currentMid + 1
      }
    } else {
      // if left part is unsort then the right part must be sorted
      if (target >= nums[currentMid] && target <= nums[right]) {
        left = currentMid + 1
      } else {
        right = currentMid - 1
      }
    }
    currentMid = (left + right) >> 1
  }
  return -1
}
// @lc code=end

/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let gm = 0
  while (l < r) {
    const cm = Math.min(height[l], height[r])
    const a = (r - l) * cm
    if (a > gm) gm = a
    if (cm == height[l]) {
      l += 1
    } else {
      r -= 1
    }
  }
  return gm
}
// @lc code=end

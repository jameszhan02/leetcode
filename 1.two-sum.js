/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const valueIndexPair = {};
  for (let i = 0; i < nums.length; i++) {
    const lookingFor = target - nums[i];
    if (valueIndexPair[lookingFor] === undefined) {
      valueIndexPair[nums[i]] = i;
    } else {
      return [valueIndexPair[lookingFor], i];
    }
  }
};
// @lc code=end

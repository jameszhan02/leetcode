/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();
  const half = Math.floor(str.length / 2);
  const left = str.slice(0, half);
  const right = str
    .slice(str.length % 2 === 1 ? half + 1 : half)
    .split("")
    .reverse()
    .join("");
  return left === right;
};
// @lc code=end

/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    let totalProduct = 1
    const answer = new Array(nums.length)
    answer.fill(0)
    const numsOfZero = nums.filter(num => num === 0).length
    if (numsOfZero > 1) return answer
    //!!if there one 0 then we only need to calculate for that index, if 2 0 is every where.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue
        totalProduct *= nums[i]
    }
    if (numsOfZero === 1) {
        answer[nums.indexOf(0)] = totalProduct
        return answer
    }
    for (let i = 0; i < nums.length; i++) {
        answer[i] = totalProduct / nums[i]
    }

    return answer
};
// @lc code=end


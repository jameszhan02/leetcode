/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    if(nums.length == 0) return 0
    const numsSet = new Set(nums)
    let longestSequence = 1
    numsSet.forEach((num)=>{
        //only start with the start point
        if(!numsSet.has(num - 1)){ // this is a starting point of a sequence
            let startingNum = num
            let currentCount = 1
            while(numsSet.has(startingNum + 1)){
                currentCount += 1
                startingNum += 1
            }
            if(currentCount >= longestSequence) longestSequence = currentCount
        }
    })
    return longestSequence
};
// @lc code=end


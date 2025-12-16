/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let longestCount = 0
    const mySet = new Set()
    for(let idx =  0; idx < s.length; idx++){
        while(mySet.has(s[idx])){
            const currentCount = mySet.size
            longestCount = Math.max(longestCount, currentCount)
            const firstElement = mySet.values().next().value
            mySet.delete(firstElement)
        }
        mySet.add(s[idx])
    }
    longestCount = Math.max(longestCount, mySet.size)
    return longestCount
};
// @lc code=end


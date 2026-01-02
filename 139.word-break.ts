/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
    const wordDictSet= new Set(wordDict)
    const dp = new Array(s.length + 1)
    dp.fill(false)
    dp[0] = true
    for(let idx = 0; idx < dp.length; idx++){
        for(let j = 0; j < idx; j++){
            if(dp[j] && wordDictSet.has(s.slice(j, idx))){
                dp[idx] = true
                break
            }
        }
    }
    return dp[s.length]
};
// @lc code=end


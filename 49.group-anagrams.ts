/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const wordIndexMap = new Map()
  let indexCount = 0
  const ans: string[][] = []
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i].split('').sort().join('')
    if (!wordIndexMap.has(word)) {
      wordIndexMap.set(word, indexCount)
      ans[indexCount] = [strs[i]]
      indexCount++
    } else {
      const groupIndex = wordIndexMap.get(word)
      ans[groupIndex] = [...ans[groupIndex], strs[i]]
    }
  }
  return ans
}
// @lc code=end

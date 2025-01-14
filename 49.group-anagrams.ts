/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const copyStrs = JSON.parse(JSON.stringify(strs))
  const wordIndexMap = new Map()
  for (let i = 0; i < copyStrs.length; i++) {
    const word = copyStrs[i].split('').sort().join('')
    if (!wordIndexMap.has(word)) {
      wordIndexMap.set(word, [i])
    } else {
      wordIndexMap.set(word, [i, ...wordIndexMap.get(word)])
    }
  }
  const ans: string[][] = []
  for (const value of wordIndexMap.values()) {
    const currentGroup: string[] = []
    for (let index = 0; index < value.length; index++) {
      currentGroup.push(strs[value[index]])
    }
    ans.push(currentGroup)
  }
  return ans
}
// @lc code=end

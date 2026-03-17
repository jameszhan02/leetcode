/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  //wrong approach
  //   const myMap = new Map()
  //   const myAns = Array(k).fill(null)
  //   const topCounts = Array(k).fill(0)
  //   for (let idx = 0; idx < nums.length; idx++) {
  //     if (!myMap.has(nums[idx])) myMap.set(nums[idx], 1)
  //     else myMap.set(nums[idx], myMap.get(nums[idx]) + 1)

  //     //check each top count
  //     for (let j = 0; j < k; j++) {
  //       if (topCounts[j] < myMap.get(nums[idx])) {
  //         topCounts[j] = myMap.get(nums[idx])
  //         myAns[j] = nums[idx]
  //         break
  //       }
  //     }
  //   }
  //   return myAns

  const count = new Map<number, number>()
  for (const n of nums) count.set(n, (count.get(n) || 0) + 1)

  const topK = [...count.keys()]
    .sort((a, b) => count.get(b)! - count.get(a)!)
    .slice(0, k)

  return topK
}
// @lc code=end

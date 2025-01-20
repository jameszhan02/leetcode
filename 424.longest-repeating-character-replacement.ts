/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
    const hashMap: { [key: string]: number } = {}
    let longest: number = 0
    let maxFreq: number = 0
    let leftPointer: number = 0

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        // Increment the frequency count by 1 upon encountering a character
        hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] || 0) + 1

        // Maximum frequency of any character encountered so far in the current window.
        maxFreq = Math.max(maxFreq, hashMap[s[rightPointer]])

        // Move the window from the left until reaching `k` replacements
        if (maxFreq + k < rightPointer - leftPointer + 1) {
            hashMap[s[leftPointer]]--
            leftPointer++
        }

        // Calculate the longest repeating character
        longest = Math.max(longest, rightPointer - leftPointer + 1)
    }

    return longest
}
// @lc code=end

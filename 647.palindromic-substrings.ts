/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
function countSubstrings(s: string): number {
    let res = 0
    const expandScanPalindromic = (initalLeft: number, initalRight: number) => {
        let leftIndex = initalLeft
        let rightIndex = initalRight
        while (!(leftIndex < 0) && !(rightIndex >= s.length)) {
            if (s[leftIndex] === s[rightIndex]) {
                res += 1
            } else {
                break
            }
            leftIndex--
            rightIndex++
        }
    }
    for (let index = 0; index < s.length; index++) {
        expandScanPalindromic(index, index)
        expandScanPalindromic(index, index + 1)
    }
    return res
};


//O^3 solution
const o3Solution = (s: string) => {
    let palindromicCount = 0
    const isPalindromic = (input: string) => {
        if (input.length == 1) {
            return true
        }
        //check the current is odd or even
        const isOdd = input.length & 1
        const midIndex = isOdd ? (input.length >> 1) + 1 : input.length >> 1
        const left = input.slice(0, isOdd ? midIndex - 1 : midIndex)
        const right = input.slice(midIndex)
        return left == right.split("").reverse().join("");

    }
    for (let index = 0; index < s.length; index++) {
        let checker = ""
        for (let innerIndex = index; innerIndex < s.length; innerIndex++) {
            checker += s[innerIndex]
            if (isPalindromic(checker)) {
                palindromicCount++
            }
        }
    }
    return palindromicCount
}
// @lc code=end


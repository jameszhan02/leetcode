/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    if(!s || s.length < 1) return ""
    let start = 0
    let end = 0
    for(let idx = 0; idx < s.length; idx++){
        const lenOdd = checkPalindromeFromMiddle(s, idx, idx)
        const lenEven = checkPalindromeFromMiddle(s, idx, idx + 1)
        const currentMax = Math.max(lenOdd, lenEven)
        if(currentMax > end - start){
            start = idx -  Math.floor((currentMax - 1) / 2)
            end = idx +  Math.floor(currentMax / 2)
        }
    }
    return s.substring(start, end + 1)
};


const checkPalindromeFromMiddle = (string: string, left: number, right:number) =>{
    if(!string || left > right) return 0 
    while(left >= 0 && right < string.length && string[left] == string[right]){
        left--
        right++
    }
    return right - left - 1
}

// @lc code=end


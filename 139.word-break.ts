/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler
    const testString = "thisIsATestGST"
    const testSubString = "Test"
    const idx = testString.indexOf(testSubString)
    const afterTest = testString.slice(0, idx) + testString.slice(idx + testSubString.length)

    console.log({ idx });
    console.log({ afterTest });
};
// @lc code=end


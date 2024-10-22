/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanToIntLookup = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const sArr = s.split("")
    let result = 0
    sArr.forEach((singleNumber, index) => {
        const currentIntNumber = romanToIntLookup[singleNumber]
        const nextIntNumber = romanToIntLookup[sArr[index + 1]]
        const isBiggerOrEq = !!nextIntNumber ? currentIntNumber >= nextIntNumber : true
        result += isBiggerOrEq ? 1 * currentIntNumber : -1 * currentIntNumber
    })
    return result
}
// @lc code=end
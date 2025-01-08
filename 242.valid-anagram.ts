/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const charsMap = new Map();
    for (let i = 0; i < s.length; i++) {
        //Count for s
        if (!charsMap.has(s[i])) {
            charsMap.set(s[i], 1)
        } else {
            charsMap.set(s[i], charsMap.get(s[i]) + 1)
        }
        //Count for t
        if (!charsMap.has(t[i])) {
            charsMap.set(t[i], -1)
        } else {
            charsMap.set(t[i], charsMap.get(t[i]) - 1)
        }
    }
    //loop through if all key is 0
    for (const value of charsMap.values()) {
        if (value !== 0) return false
    }
    return true;
};
// @lc code=end


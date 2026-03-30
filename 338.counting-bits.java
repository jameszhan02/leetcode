/*
 * @lc app=leetcode id=338 lang=java
 *
 * [338] Counting Bits
 */

// @lc code=start

import java.util.ArrayList;
import java.util.HashMap;

class Solution {
    // public int[] countBits(int n) {
    // ArrayList<Integer> res = new ArrayList<>();
    // for (int i = 0; i <= n; i++) {
    // int currentNum = i;
    // int currentOnesCount = 0;
    // for (int j = 0; j < 32; j++) {
    // if (currentNum == 0) {
    // break;
    // }
    // if (currentNum % 2 == 1) {
    // currentOnesCount++;
    // }
    // currentNum = currentNum >> 1;
    // }
    // res.add(currentOnesCount);

    // }
    // return res.stream().mapToInt(i -> i).toArray();
    // }

    public int[] countBits(int n) {
        int[] ans = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            ans[i] = ans[i >> 1] + (i & 1);
        }
        return ans;
    }
}
// @lc code=end

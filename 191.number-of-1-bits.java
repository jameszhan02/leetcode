/*
 * @lc app=leetcode id=191 lang=java
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
class Solution {
    public int hammingWeight(int n) {
        int counts = 0;

        while(n != 0){
            if((n & 1) == 1){
                counts++;
            }
            n = n >> 1;
        }
        // for(int i = 0; i < 32; i++){
        //     // in this kind cases & 1 is same as % 2
        //     //n >> 1 is also almost equal to / 2 (floor/int)
        //     int bit = (n >> i) & 1;
        //     if(bit == 1){
        //         counts++;
        //     }
        // }
        return counts;
    }
}
// @lc code=end


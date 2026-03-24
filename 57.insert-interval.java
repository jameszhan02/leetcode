/*
 * @lc app=leetcode id=57 lang=java
 *
 * [57] Insert Interval
 */

// @lc code=start

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> res = new ArrayList<>(Arrays.asList(intervals));
        for(int i = 0; i < intervals.length; i++){
            int newStart = newInterval[0];
            int newEnd = newInterval[1];
            if(newEnd < intervals[i][0]){
                res.add(i, {newStart, newEnd});
            }
        }
    }
}
// @lc code=end


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
    // [1,3 ] [2,6] [8, 10] [ 15, 18]
    // my slow soultion
    // public int[][] insert(int[][] intervals, int[] newInterval) {
    // List<int[]> res = new ArrayList<>(Arrays.asList(intervals));
    // int newStart = newInterval[0];
    // int newEnd = newInterval[1];
    // boolean isNeedAdd = true;
    // for (int i = 0; i < res.size(); i++) {
    // if (newStart >= res.get(i)[0] && newEnd <= res.get(i)[1]) {
    // isNeedAdd = false;
    // break;
    // }
    // if (newEnd < res.get(i)[0]) {
    // break;
    // }
    // if (newStart > res.get(i)[1]) {
    // continue;
    // }
    // if (newStart >= res.get(i)[0] && newStart <= res.get(i)[1]
    // || res.get(i)[0] >= newStart && res.get(i)[0] <= newEnd) {
    // newStart = Math.min(res.get(i)[0], newStart);
    // newEnd = Math.max(res.get(i)[1], newEnd);
    // res.remove(i);
    // i--;
    // }
    // }
    // if (isNeedAdd) {
    // res.add(new int[] { newStart, newEnd });
    // }
    // res.sort((a, b) -> a[0] - b[0]);
    // return res.toArray(new int[res.size()][2]);
    // }

    // online approach
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        int i = 0;

        // intervals end less than new[0]<-|new Interval|-> intervals start bigger than
        // new[1]
        // intervals on the left of new interval
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }

        // merge all overlapping intervals to one considering newInterval
        // intersects
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            // we could mutate newInterval here also
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        // add the union of intervals we got
        result.add(newInterval);

        // add all the rest
        while (i < intervals.length) {
            result.add(intervals[i]);
            i++;
        }

        return result.toArray(new int[result.size()][]);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    console.log(sortedIntervals);

    const myAns: number[][] = []
    let mergeSpace: number[] = []
    for (let i = 0; i < sortedIntervals.length; i++) {
        if (!(mergeSpace.length > 0)) mergeSpace = sortedIntervals[i]
        if (!sortedIntervals[i + 1]) {
            myAns.push(mergeSpace)
            continue
        }
        if (sortedIntervals[i][1] < sortedIntervals[i + 1][0]) {
            myAns.push(mergeSpace)
            console.log({ myAns });
            mergeSpace = []
        } else {
            mergeSpace = [mergeSpace[0], Math.max(sortedIntervals[i + 1][1], mergeSpace[1])]
        }
    }
    return myAns
};
// @lc code=end


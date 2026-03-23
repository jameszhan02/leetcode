/*
 * @lc app=leetcode id=54 lang=java
 *
 * [54] Spiral Matrix
 */

// @lc code=start

import java.util.ArrayList;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int[][] directions = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } }; // right, down, left, up;
        int m = matrix.length;
        int n = matrix[0].length;
        int visitedCount = 0;
        List<Integer> res = new ArrayList<>();
        int currentM = 0;
        int currentN = -1;
        int[][] visted = new int[m][n];
        while (visitedCount < m * n) {
            for (int i = 0; i < directions.length; i++) {
                // only two case will change direction | 1. out of range | 2. visted
                while (true) {
                    // check if is out of range
                    if (visitedCount >= m * n) {
                        break;
                    }
                    currentM += directions[i][0];
                    currentN += directions[i][1];

                    res.add(matrix[currentM][currentN]);
                    visted[currentM][currentN] = 1;
                    visitedCount += 1;
                    int nextM = currentM + directions[i][0];
                    int nextN = currentN + directions[i][1];
                    if (nextM >= m || nextN >= n || nextM < 0 || nextN < 0) {
                        break;
                    }
                    if (visted[nextM][nextN] == 1) {
                        break;
                    }

                }
            }
        }

        return res;
    }
}
// @lc code=end

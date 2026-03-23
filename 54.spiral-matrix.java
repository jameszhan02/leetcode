/*
 * @lc app=leetcode id=54 lang=java
 *
 * [54] Spiral Matrix
 */

// @lc code=start

import java.util.ArrayList;

class Solution {
    // public List<Integer> spiralOrder(int[][] matrix) {
    // int[][] directions = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } }; // right,
    // down, left, up;
    // int m = matrix.length;
    // int n = matrix[0].length;
    // int visitedCount = 0;
    // List<Integer> res = new ArrayList<>();
    // int currentM = 0;
    // int currentN = -1;
    // int[][] visted = new int[m][n];
    // while (visitedCount < m * n) {
    // for (int i = 0; i < directions.length; i++) {
    // // only two case will change direction | 1. out of range | 2. visted
    // while (true) {
    // // check if is out of range
    // if (visitedCount >= m * n) {
    // break;
    // }
    // currentM += directions[i][0];
    // currentN += directions[i][1];

    // res.add(matrix[currentM][currentN]);
    // visted[currentM][currentN] = 1;
    // visitedCount += 1;
    // int nextM = currentM + directions[i][0];
    // int nextN = currentN + directions[i][1];
    // if (nextM >= m || nextN >= n || nextM < 0 || nextN < 0) {
    // break;
    // }
    // if (visted[nextM][nextN] == 1) {
    // break;
    // }

    // }
    // }
    // }

    // return res;
    // }

    // more readable online approach
    public List<Integer> spiralOrder(int[][] matrix) {
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        List<Integer> spiral = new ArrayList<>();

        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; i++)
                spiral.add(matrix[top][i]);
            top++;

            for (int j = top; j <= bottom; j++)
                spiral.add(matrix[j][right]);
            right--;

            if (top <= bottom) {
                for (int k = right; k >= left; k--)
                    spiral.add(matrix[bottom][k]);
                bottom--;
            }

            if (left <= right) {
                for (int l = bottom; l >= top; l--)
                    spiral.add(matrix[l][left]);
                left++;
            }
        }

        return spiral;
    }
}
// @lc code=end

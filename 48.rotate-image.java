/*
 * @lc app=leetcode id=48 lang=java
 *
 * [48] Rotate Image
 */

// @lc code=start
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        int[][] rotatedMatrix = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                rotatedMatrix[j][n - i - 1] = matrix[i][j];
            }
        }
        for (int i = 0; i < n; i++) {
            matrix[i] = rotatedMatrix[i].clone();
        }
        // this is only change the reference pointer but not the orgional data it self
        // matrix = rotatedMatrix.clone();
    }
}
// @lc code=end

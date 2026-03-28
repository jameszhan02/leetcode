/*
 * @lc app=leetcode id=79 lang=java
 *
 * [79] Word Search
 */

// @lc code=start
class Solution {
    int[][] directions = new int[][] { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };

    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    if (searchWord(i, j, board, word, 0)) {
                        return true;
                    }
                }
            }
        }
        return false;

    }

    private boolean searchWord(int m, int n, char[][] board, String word, int idx) {

        if (board[m][n] != word.charAt(idx)) {
            return false;
        }
        if (idx == word.length() - 1) {
            return true;
        }
        char temp = board[m][n];
        board[m][n] = '#';
        int rows = board.length;
        int cols = board[0].length;
        for (int i = 0; i < directions.length; i++) {
            int newM = m + directions[i][0];
            int newN = n + directions[i][1];
            if (newM >= 0 && newM < rows && newN >= 0 && newN < cols) {
                if (board[newM][newN] != '#' &&
                        searchWord(newM, newN, board, word, idx + 1)) {
                    board[m][n] = temp;
                    return true;
                }
            }

        }
        board[m][n] = temp;
        return false;
    }
}
// @lc code=end

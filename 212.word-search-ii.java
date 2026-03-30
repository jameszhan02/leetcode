/*
 * @lc app=leetcode id=212 lang=java
 *
 * [212] Word Search II
 */

// @lc code=start

import java.util.*;

class Solution {

    int[][] directions = new int[][] { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };

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

    public List<String> findWords(char[][] board, String[] words) {
        ArrayList<String> res = new ArrayList<>();
        if (words.length == 0) {
            return res;
        }
        int m = board.length;
        int n = board[0].length;

        for (int x = 0; x < words.length; x++) {
            boolean foundWord = false;
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (foundWord)
                        break;
                    if (words[x].charAt(0) == (board[i][j])) {
                        if (foundWord)
                            break;
                        if (searchWord(i, j, board, words[x], 0)) {
                            res.add(words[x]);
                            foundWord = true;
                        }
                    }

                }
            }
        }

        return res;
    }
}
// @lc code=end

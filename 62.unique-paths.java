/*
 * @lc app=leetcode id=62 lang=java
 *
 * [62] Unique Paths
 */

// @lc code=start
class Solution {
    public int uniquePaths(int m, int n) {
        // max down move n - 1;
        // max right move m - 1;
        // entire length is (n + m) - 2;
        // so is n + m - 2 choose n - 1
        // System.out.println("n - 1" + (n - 1));
        // System.out.println("m - 1" + (m - 1));
        // long res = factorial(n + m - 2) / (factorial(n - 1) * factorial(m - 1));

        // return (int) res;
        // }

        // long factorial(int n) {
        // long res = 1;

        // while (n > 1) {
        // res *= n;
        // n--;
        // }

        // return res;

        // C(m+n-2, n-1)
        long res = 1;
        int total = m + n - 2;
        int k = Math.min(m - 1, n - 1); // take less steps

        for (int i = 0; i < k; i++) { // using for loop instead of factorial so wont have overflow issue
            res = res * (total - i) / (i + 1);
        }

        return (int) res;

    }

    // public int uniquePaths(int m, int n) {
    // int[][] dp = new int[n][m];

    // for (int i = 0; i < n; i++)
    // dp[i][0] = 1;
    // for (int j = 0; j < m; j++)
    // dp[0][j] = 1;

    // for (int i = 1; i < n; i++) {
    // for (int j = 1; j < m; j++) {
    // dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    // }
    // }

    // return dp[n - 1][m - 1];
    // }
}
// @lc code=end

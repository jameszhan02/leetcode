/*
 * @lc app=leetcode id=322 lang=java
 *
 * [322] Coin Change
 */

// @lc code=start
class Solution {
  public int coinChange(int[] coins, int amount) {
        if (amount == 0) return 0;
        
        // BFS用队列
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[amount + 1]; 
        
        queue.offer(amount);
        int steps = 0;
        
        while (!queue.isEmpty()) {
            steps++; // 进入新一层
            int size = queue.size(); // 当前层有多少个节点
            
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                
                // 试每一种硬币
                for (int coin : coins) {
                    int next = curr - coin;
                    
                    if (next == 0) return steps; 
                    if (next < 0) continue;     
                    if (visited[next]) continue; 
                    
                    visited[next] = true;
                    queue.offer(next);
                }
            }
        }
        
        return -1; // 凑不出来
    }
}
// @lc code=end


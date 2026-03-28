/*
 * @lc app=leetcode id=207 lang=java
 *
 * [207] Course Schedule
 */

// @lc code=start

import java.util.*;

class Solution {
    HashMap<Integer, List<Integer>> preReq = new HashMap<>();
    HashSet<Integer> safe = new HashSet<>(); // ⭐ 新增

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        for (int i = 0; i < prerequisites.length; i++) {
            preReq.computeIfAbsent(prerequisites[i][0], k -> new ArrayList<>())
                    .add(prerequisites[i][1]);
        }

        for (int i = 0; i < numCourses; i++) {
            HashSet<Integer> visted = new HashSet<>();
            boolean courseComplete = checkFinishable(i, visted);
            if (!courseComplete) {
                return false;
            }
        }
        return true;
    }

    private boolean checkFinishable(int key, HashSet<Integer> visted) {
        if (safe.contains(key))
            return true;
        if (!preReq.containsKey(key)) {
            safe.add(key); // ⭐ 标记安全
            return true;
        }
        if (preReq.get(key).size() == 0)
            return true;
        if (visted.contains(key)) {
            return false;
        }
        visted.add(key);
        for (int j = 0; j < preReq.get(key).size(); j++) {
            boolean finished = checkFinishable(preReq.get(key).get(j), visted);
            if (!finished) {
                return false;
            }
        }
        visted.remove(key);
        safe.add(key);
        return true;
    }
}
// @lc code=end

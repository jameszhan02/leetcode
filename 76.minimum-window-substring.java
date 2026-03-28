/*
 * @lc app=leetcode id=76 lang=java
 *
 * [76] Minimum Window Substring
 */

// @lc code=start

import java.util.*;

class Solution {
    public String minWindow(String s, String t) {
        if (t.equals(""))
            return "";
        int left = 0;
        int[] res = new int[] { -1, -1 };
        HashMap<Character, Integer> window = new HashMap<>();
        HashMap<Character, Integer> conditions = new HashMap<>();
        for (int i = 0; i < t.length(); i++) {
            // -- method 1 --
            // if (conditions.containsKey(t.charAt(i))) {
            // conditions.put(t.charAt(i), conditions.get(t.charAt(i)) + 1);
            // } else {
            // conditions.put(t.charAt(i), 1);
            // }
            // -- method 2 --
            // conditions.put(t.charAt(i), conditions.getOrDefault(t.charAt(i), 0) + 1);
            // -- method 3 --
            conditions.merge(t.charAt(i), 1, Integer::sum);
            window.put(t.charAt(i), 0);
        }
        int have = 0, need = conditions.size();
        for (int i = 0; i < s.length(); i++) {
            char current = s.charAt(i);
            if (conditions.containsKey(current)) {
                window.merge(current, 1, Integer::sum);
                if (window.get(current).equals(conditions.get(current))) {
                    have += 1;
                }
            }
            while (have == need) {
                if ((res[1] - res[0]) > (i - left) || res[0] == -1) {
                    res[0] = left;
                    res[1] = i;
                }
                if (conditions.containsKey(s.charAt(left))) {
                    window.merge(s.charAt(left), -1, Integer::sum);
                    if (window.get(s.charAt(left)) < conditions.get(s.charAt(left))) {
                        have -= 1;
                    }
                }
                left++;
            }
        }
        if (res[0] == -1)
            return "";
        return s.substring(res[0], res[1] + 1);
    }
}
// @lc code=end

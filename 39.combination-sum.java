/*
 * @lc app=leetcode id=39 lang=java
 *
 * [39] Combination Sum
 */

// @lc code=start

import java.util.ArrayList;

class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<Integer> initalStep = new ArrayList<>();
        Arrays.sort(candidates);
        dfs(initalStep, candidates, target, 0, 0);

        return res;
    }

    private void dfs(List<Integer> steps, int[] candidates, int target, int skip, int sum) {
        for (int i = skip; i < candidates.length; i++) {
            int sumNext = sum + candidates[i];
            // TODO: get rid of copy this list in each loop
            List<Integer> nextSteps = new ArrayList<>(steps);
            nextSteps.add(candidates[i]);
            if (sumNext == target) {
                res.add(nextSteps);
                continue;
            }
            if (sumNext > target) {
                break;
            }
            dfs(nextSteps, candidates, target, i, sumNext);
        }
    }

    // others solution
    // public List<List<Integer>> combinationSum(int[] nums, int target) {
    // List<List<Integer>> list = new ArrayList<>();
    // Arrays.sort(nums);
    // backtrack(list, new ArrayList<>(), nums, target, 0);
    // return list;
    // }

    // private void backtrack(List<List<Integer>> list, List<Integer> tempList,
    // int[] nums, int remain, int start) {
    // if (remain < 0)
    // return;
    // else if (remain == 0)
    // list.add(new ArrayList<>(tempList));
    // else {
    // for (int i = start; i < nums.length; i++) {
    // tempList.add(nums[i]);
    // backtrack(list, tempList, nums, remain - nums[i], i); // not i + 1 because we
    // can reuse same elements
    // tempList.remove(tempList.size() - 1);
    // }
    // }
    // }
}
// @lc code=end

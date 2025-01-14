/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const onlineSolution = () => {
        nums.sort((a, b) => a - b); // sort the input array
        const result: number[][] = []; // initialize the result array

        for (let i = 0; i < nums.length - 2; i++) { // iterate through the array
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

            let j = i + 1; // initialize the left pointer
            let k = nums.length - 1; // initialize the right pointer

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) { // check if we found a triplet that sums to zero
                    result.push([nums[i], nums[j], nums[k]]);
                    while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicates
                    while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicates
                    j++; // move the left pointer to the right
                    k--; // move the right pointer to the left
                } else if (sum < 0) { // if the sum is less than zero, move the left pointer to the right
                    j++;
                } else { // if the sum is greater than zero, move the right pointer to the left
                    k--;
                }
            }
        }

        return result; // return the result array
    }

    //first approach
    const firstApproach = () => {
        const structureData = new Map()
        const answer: number[][] = []
        const twoSum = (array: number[], currentValue: number): number[] => {
            const target = -currentValue
            for (let i = 0; i < array.length; i++) {
                const lookingFor = target - array[i];
                if (structureData.has(lookingFor)) {
                    const check = [lookingFor, array[i], currentValue]
                    const duplicateCount = new Map()
                    check.forEach(element => {
                        if (duplicateCount.has(element)) {
                            const currentValue = duplicateCount.get(element)
                            duplicateCount.set(element, currentValue + 1)
                        } else {
                            duplicateCount.set(element, 1)
                        }
                    });
                    for (const [key, value] of duplicateCount.entries()) {
                        if (value > structureData.get(key).length) {
                            return []
                        }
                    }
                    return [lookingFor, array[i]];
                }
            }
            return []
        }
        for (let i = 0; i < nums.length; i++) {
            const prevValue = structureData.get(nums[i]) ?? []
            structureData.set(nums[i], [...prevValue, i])
        }

        const setCopyNums = Array.from(new Set(nums))
        for (let i = 0; i < nums.length; i++) {
            const exceptSelf = nums.slice(i)
            const twoSumRes: number[] = twoSum(exceptSelf, nums[i])
            if (twoSumRes.length === 2) answer.push([nums[i], ...twoSumRes])
        }
        return answer
    }

    return onlineSolution()

};
// @lc code=end


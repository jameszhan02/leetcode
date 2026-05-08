#
# @lc app=leetcode id=4 lang=python
#
# [4] Median of Two Sorted Arrays
#

# @lc code=start
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        num1Median = self.medianNums(nums1)
        num2Median = self.medianNums(nums2)
        l = len(num1Median) + len(num2Median)
        jointnums = num1Median + num2Median
        jointnums.sort()
        print(jointnums)
        if(l == 1):
            return jointnums[0]
        if(l==2):
            return (jointnums[0] + jointnums[1]) / 2.0
        if(l == 3):
            return jointnums[1]
        if(l == 4):
            return (jointnums[1] + jointnums[2]) / 2.0
        # if odd num len, a signle median exist, otherwise find 2 

    def medianNums(self, list):
        length = len(list)
        medianCandidates = []
        if(length == 0):
            return []
        if(length % 2 == 0):
            medianCandidates.append(list[length // 2 - 1])
            medianCandidates.append(list[length // 2])
        else:
            medianCandidates.append(list[length // 2 ])

        return medianCandidates
# @lc code=end


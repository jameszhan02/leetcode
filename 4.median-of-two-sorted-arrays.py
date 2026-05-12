#
# @lc app=leetcode id=4 lang=python
#
# [4] Median of Two Sorted Arrays
#

# @lc code=start
class Solution(object):
  def findMedianSortedArrays(self, nums1, nums2):
    # 第一步：让 nums1 永远是短的（二分范围小）
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    half = (m + n + 1) // 2  # 左半边要几个元素

    lo, hi = 0, m

    while lo <= hi:
        i = (lo + hi) // 2  # nums1 切割点：左边取 i 个
        j = half - i         # nums2 切割点：左边取 j 个（自动算出）

        # 切割点左右的4个边界值（越界就用正负无穷）
        L1 = nums1[i-1] if i > 0 else float('-inf')  # nums1 左边最大
        R1 = nums1[i]   if i < m else float('inf')   # nums1 右边最小
        L2 = nums2[j-1] if j > 0 else float('-inf')  # nums2 左边最大
        R2 = nums2[j]   if j < n else float('inf')   # nums2 右边最小

        if L1 <= R2 and L2 <= R1:
            # ✅ 切割点正确！
            if (m + n) % 2 == 1:
                return float(max(L1, L2))          # 奇数：左边最大就是中位数
            else:
                return (max(L1, L2) + min(R1, R2)) / 2.0  # 偶数：取中间两个平均

        elif L1 > R2:
            hi = i - 1   # nums1 切太靠右了，往左移
        else:
            lo = i + 1   # nums1 切太靠左了，往右移
# @lc code=end


'use strict';

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let nums = [];
  nums.push(...nums1);
  nums.push(...nums2);
  nums.sort((a, b) => { return b - a; });
  let length = nums.length;
  if (length % 2 === 0) {
    return (nums[length / 2 - 1] + nums[length / 2]) / 2;
  } else {
    return (nums[(length + 1) / 2 - 1]);
  }
};

module.exports = findMedianSortedArrays;

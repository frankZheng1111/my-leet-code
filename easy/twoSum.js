'user strict';

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// https://leetcode.com/problems/two-sum/description/

/**
 ** @param {number[]} nums
 ** @param {number} target
 ** @return {number[]}
 **/
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] > target) { continue; }
    for (let j = i + 1; j < nums.length; j ++) {
      if (nums[j] > target) { continue; }
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;

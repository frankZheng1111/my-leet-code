'user strict';

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// https://leetcode.com/problems/two-sum/description/

/**
 ** @param {number[]} nums
 ** @param {number} target
 ** @return {number[]}
 **
 ** 思路: 转成键值对结构以降低时间复杂度至O(n)
 **/
let twoSum = function(nums, target) {
  if (nums.length <= 1 ) { throw new Error('invalid_nums'); }
  let numsHash = {};
  for (let i in nums) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (numsHash[num2]) {
      return [parseInt(numsHash[num2]), parseInt(i)];
    } else {
      numsHash[num1] = i;
    }
  }
};

module.exports = twoSum;

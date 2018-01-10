'use strict';

// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
// https://leetcode.com/problems/number-complement/description/
// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.

/**
 * @param {number} num
 * @return {number}
 */
let findComplement = function(num) {
  let bNums = [];
  while (num >= 1) {
    bNums.push(num % 2);
    num = Math.floor(num / 2);
  }
  let complement = 0;
  for (let i in bNums) {
    complement += (1 - bNums[i]) * Math.pow(2, i);
  }
  return complement;
};

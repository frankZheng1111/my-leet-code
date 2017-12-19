'user strict';

// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  let num = Math.abs(x);
  let result = parseInt(`${x < 0 ? '-' : ''}` + `${num}`.split('').reverse().join(''));
  if (Math.abs(result) > Math.pow(2, 31)) { return 0; }
  return result;
};

module.exports = reverse;

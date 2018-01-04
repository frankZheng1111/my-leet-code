'use strict';

// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
// For "(()", the longest valid parentheses substring is "()", which has length = 2.
// Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
// https://leetcode.com/problems/longest-valid-parentheses/description/

/**
 * @param {string} s
 * @return {number}
 */
let longestValidParentheses = function(s) {
  let chars = s.split('');
  let brackets = [];

  // 若是合法字符串， 则返回全长
  for (let i in chars) {
    i = parseInt(i);
    let char = chars[i];
    if (char === '(') {
       brackets.push(i);
    } else {
      if (!brackets.length || chars[brackets[brackets.length - 1]] !== '(') {
        brackets.push(i);
      } else {
        brackets.pop();
      }
    }
  }
  if (!brackets.length) { return chars.length; }
  // 若不是合法字符串， 则找出中间最长的一段
  let longestLength = brackets[0] - (-1) - 1;
  for (let i in brackets) {
    i = parseInt(i);
    let firstIndex = brackets[i];
    let lastIndex = brackets[i + 1] || chars.length;
    longestLength = Math.max(longestLength, lastIndex - firstIndex - 1);
  }
  return longestLength;
};

'use strict';

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
   let chars = s.split('');
   let brackets = [];
   let firstBrackets = ['(', '[', '{'];
   let lastBrackets = [')', ']', '}'];
   for (let char of chars) {
     if (firstBrackets.indexOf(char) !== -1) {
       brackets.push(firstBrackets.indexOf(char));
     } else if (lastBrackets.indexOf(char) !== -1) {
       if (brackets[brackets.length - 1] !== lastBrackets.indexOf(char)) {
         return false;
       } else {
         brackets.pop();
       }
     } else {
         continue;
     }
   }
   return !brackets.length;
};

module.exports = isValid;

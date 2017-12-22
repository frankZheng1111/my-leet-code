'user strict';

// Given a string, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 ** @param {string} s
 ** @return {number}
 **/
let lengthOfLongestSubstring = function(s) {
  let words = s.split('');
  let startIndex = 0;
  let maxLength = 0;
  let usedStr= {};
  for (let i in words) {
    i = parseInt(i);
    if ((usedStr[words[i]] || usedStr[words[i]] === 0) && startIndex <= usedStr[words[i]]) {
      startIndex = usedStr[words[i]] + 1;
    } else {
      maxLength = Math.max(maxLength, i - startIndex + 1);
    }
    usedStr[words[i]] = i;
  }
  return maxLength;
};

module.exports = lengthOfLongestSubstring

'user strict';

// Given a string, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 ** @param {string} s
 ** @return {number}
 **/
let lengthOfLongestSubstring = function(s) {
  let words = s.split('');
  let maxLength = 0;
  let maxLengthSubStrWords = [];
  for (let i in words) {
    for (let j = i; j < words.length; j ++) {
      let word = words[j];
      if (maxLengthSubStrWords.includes(word)) {
        break;
      } else {
        maxLengthSubStrWords.push(word);
        if (maxLengthSubStrWords.length > maxLength) {
          maxLength = maxLengthSubStrWords.length;
        }
      }
    }
    maxLengthSubStrWords = [];
    if (words.length - 1 - i <= maxLength) {
      break;
    }
  }
  return maxLength;
};

module.exports = lengthOfLongestSubstring.js

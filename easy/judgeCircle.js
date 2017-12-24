'use strict';

// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
//
// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// https://leetcode.com/problems/judge-route-circle/description/

/**
 ** @param {string} moves
 ** @return {boolean}
 **/
let judgeCircle = function(moves) {
  let yAxis = 0;
  let xAxis = 0;
  for (let move of moves.split('')) {
    switch(move) {
      case 'U':
        yAxis ++;
        break;
      case 'D':
        yAxis --;
        break;
      case 'L':
        xAxis --;
        break;
      case 'R':
        xAxis ++;
        break;
      default:
        throw new Error('invalid move');
    }
  }
  return !(xAxis || yAxis);
};

module.exports = judgeCircle;

/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 暴力法 超时
var removeDuplicateLetters = function(s) {
  let result = [''];
  let letters = [];
  const length = s.length;
  for(let i = 0; i < length; i++){
    const item = s[i];
    if(letters.indexOf(item) === -1){
      letters.push(item);
      result  =  result.map(v => v += item)
    }else {
      let arr = [];
      for(let j = 0; j < result.length; j++){
        let resultItem = result[j].replace(item,'') + item;
        if(result.indexOf(resultItem) === -1){
          arr.push(resultItem)
        }
      }
      result = result.concat(arr);
    }
    
  }
  let min= result[0];
  for(let i = 1; i < result.length; i++){
    if(result[i] < min){
      min = result[i]
    } 
  }
  return min
};
// @lc code=end

//贪心加栈
var removeDuplicateLetters = function(s) {
  const length = s.length;
  let stack = [];
  const num = _.countBy(s);
  for(let i = 0; i < length; i++){
    const item = s[i];
    if(stack.indexOf(item) === -1){
      let top = stack[stack.length - 1];
        while(stack.length>0 && item < top && num[top] >  0){
          stack.pop();
          top = stack[stack.length - 1] || 'z';
        }
      stack.push(item);
    }
    num[item]--;
  }
  return stack.join('')
};
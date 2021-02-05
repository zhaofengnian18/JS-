/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const startArr = gas.map((v,k) => {
    if(v >= cost[k]){
      return k
    }
    return '';
  }).filter(v => v !== '');
  const length = startArr.length;
  let index = 0;
  while(index < length){
    const gasIndex = startArr[index];
    const newGas = gas.slice(gasIndex).concat(gas.slice(0,gasIndex))
    const newCost = cost.slice(gasIndex).concat(cost.slice(0,gasIndex))
    let currentGas = 0
    let canCircle = true;
    for(let i = 0; i < newGas.length; i++){
      currentGas += newGas[i];
      if(currentGas < newCost[i]){
        canCircle = false;
        break;
      }
      currentGas = currentGas - newCost[i]
    }
    if(canCircle){
      return gasIndex
    }
    index++
  }

  return -1;
  
};
// @lc code=end


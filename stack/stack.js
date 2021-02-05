/*
 * @Author: finian
 * @Date: 2021-01-13 22:44:28
 * @LastEditors: your name
 * @LastEditTime: 2021-01-21 23:03:58
 */


//  十进制转二进制

function toTwo(num){
  const result = [];
  while(num){
    result.push(num % 2);
    num = Math.floor(num/2);
  }
}

class Stack {
  constructor(){
    this.stack = []
  }

  push(value){
    return this.stack.push(value);
  }

  pop(){
    return this.stack.pop();
  }

  peek(){
    return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();

stack.push(1);

console.log(stack);
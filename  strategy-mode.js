//策略模式：定义一系列算法，把他们一个个的封装起来，将不变的和变化的隔开
//js的策略模式
//策略模式两个部分组成一个是策略类：封装具体的算法，负责计算部分
//二是环境类：接受客户请求随后委托给某个策略类
/**
 * strategies 这个可以看做是环境类
 * "S、A、B"这些看作是策略类
 */
var  strategies = {
  "S":function(salary){
    return salary*4
  },
  "A":function(salary){
    return salary*3
  },
  "B":function(){
    return salary*2
  }
}
function calculateBonus(level,salary){
  return strategies[level](salary)
}
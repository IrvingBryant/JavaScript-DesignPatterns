//单例模式的定义是产生一个类的唯一实例
//单例模式的使用场景：弹窗
let singleton = function (fn) {
  let result;
  return function(){
    return result || (fn.apply(this,arguments))
  }
}
let createMask = singleton(function(){
  return document.body.appendChild( document.createElement('div') )
})
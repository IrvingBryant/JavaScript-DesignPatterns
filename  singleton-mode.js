//单例模式的定义是产生一个类的唯一实例
//单例模式的使用场景：弹窗
let singleton = function (fn) {
  let result;
  return function () {
    return result || (fn.apply(this, arguments))
  }
}
let createMask = singleton(function () {
  return document.body.appendChild(document.createElement('div'))
})

//单例模式结合代理，实现单例以及普通类
//普通类start
var CreateDiv = function (html) {
  this.html = html
  this.init()
}
CreateDiv.prototype.init = function () {
  let div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}
//普通类end

//单例代理类start
let ProxySingletonCreateDiv = (function () {
  let instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html) //创建实例
    }
    return instance
  }
})()
//单例代理类end
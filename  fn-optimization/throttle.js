//函数节流
//实现原理，将即将被执行的函数用setTimeout延迟一段时间执行
//适用场景：window.onresize事件、 mousemove事件 、上传进度
let throttle = function (fn, interval) {
  let _self = fn,
    timer,
    firstTime = true; //是否第一次执行 
  return function () {
    var args = arguments,
      _me = this;
    if (firstTime) {
      _self.apply(_me, args);
      return firstTime = false;
    }
    if (timer) { //判断定时器是否还在，说明前一次事件还没延迟执行还没有完
      return false
    }
    timer = setTimeout(function () {
      clearTimeout(timer); //清除定时器
      timer = null;
      _self.apply(_me, args);
    }, interval || 500)
  }
}
window.onresize = throttle(function () {
    console.log('延迟执行')
  },
  500)
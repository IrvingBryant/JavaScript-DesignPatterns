//分时加载
// 原理每隔一段时间渲染一组数据 下例是每200毫秒渲染count个数据
//函数逻辑没200毫秒执行一次一组数据，每一组数据每次都会执行插入dom节点，一组数据执行完后，200毫秒后再执行下一组
//适用场景当短时间内大量添加Dom节点时，会造成浏览器假死。
//所以适用分时函数
let timeChunk = function (ary, fn, count) {
  var obj,
    t;
  var len = ary.length;
  var start = function () {
    for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
      var obj = ary.shift(); //删除数组的第一项且返回此项
      fn(obj)
    }
  }
  return function () {
    //场景:当回调函数执行时间大于延迟时间时
    // 虽然每次fn执行时间都很长，但下一次并不是等上一次执行完了再过100ms才开始执行的，实际上早就已经等在队列里了。
    // setInterval()当setInterval的回调函数执行时间超过了延迟时间，已经完全看不出有时间间隔了。
    // 如果setTimeout和setInterval都在延迟100ms之后执行，那么谁先注册谁就先执行回调函数。
    //参考链接http://www.alloyteam.com/2016/05/javascript-timer/ 
    t = setInterval(function () {
      if (ary.length === 0) { //当全部数组中数据全部执行完时，停止定时器
        return clearInterval(t);
      }
      start();
    }, 200)
  }
}

var ary = [];
for (let i = 0; i <= 160; i++) {
  ary.push(i)
}
var renderFriendList = timeChunk(ary, function (n) {
  let div = document.createElement('div');
  div.innerHTML = n;
  document.body.appendChild(div)
}, 80)
renderFriendList();
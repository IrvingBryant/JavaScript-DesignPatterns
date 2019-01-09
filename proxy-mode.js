//代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问
//保护代理：代理对象可帮主体对象过滤点一些请求，控制不同权限的对象对目标对象的访问
//虚拟代理：把一些开销很大的对象，延迟到真正需要它的时候才去创建。
//代理模式 xiaoming---->proxyObj---->AMM
var proxyObj={
  receiveFlower:function(){
    bodyObj.listenGoodMood(function(){   // 监听主体对象状态
      var flower = new flower(); //延迟穿件flower对象  即虚拟代理
      A.receiveFlower(flower)
    })
  }
}

//虚拟代理的应用：图片预加载
var myImage = (function(){
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode)
  return{
    setsrc=function(src){
      imgNode.src = src 
    }
  }
})();

var proxyImage=(function(){
  var img = new Image
  img.onload=function(){
    myImage.setsrc(this.src)
  }
  return {
    setSrc: function(src){
      myImage.setSrc('file://c/.././')
      img.src = src 
    }
  }
})()

proxyImage.setSrc('图片地址')

//单一职责原则：就一个类（也包括对象和函数等）而言，应该仅有一个引起它变化的原因，如果一个对象承担看多项职责，就意味着这个对象将变得巨大。
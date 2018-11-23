//简单工厂模式含义：一个方法来决定到底要创建哪个类的实例, 
//说的通俗点，就像公司茶水间的饮料机，要咖啡还是牛奶取决于你按哪个按钮
//简单工厂模式 typeOne start
function basketBall(player){
  this.player = player 
}
function footBall(player){
  this.player = player 
}
function ballFactory(ballName,player){
  switch(ballName){
    case '篮球':
      return new basketBall(player);
    case '足球':
      return new footBall(player);
  } 
}
//简单工厂模式 typeOne end

//简单工程模式 typeTwo start
function ball(ballName){
  let obj = {}
  obj.play=function(){
    console.log(`默认是哈哈哈`)
  }
  switch(ballName){
    case '篮球':
      return obj.play=function(){
        console.log(`篮球A:${ballName}`)
      }
    case '足球':
      return obj.play=function(){
        console.log(`足球B:${ballName}`)
      }
  } 
}
//简单工程模式 typeTwo end

// 安全模式创建工厂类
var Ball = function (type,name) {
  /**
   * 安全模式 Ball也可以运行处new Ball的效果
   */
  if(this instanceof Ball) {
      var s = new this[type](name);
      return s;
  }else {
      return new Ball(type,name);
  }
}
// 这段代码主要解决的问题是,使用工厂类的时候,
// 忘记使用关键字new,得不到预期想要的效果
// 这边的解决方案就是,在构造函数开始时先判断当前对象this指代
// 是不是当前工厂类,如果不是则通过new关键字创建对象返回,
// 这样就可以实现不使用new关键词也可以达到相同的效果了
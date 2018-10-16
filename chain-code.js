var form={
  nickname: 'hhe',
  phone: 13272421505,
  blog: 'http://github.com/foo-bar',
 }
 
// 链路代码
const chain = function(fn) {
  //this指向创建的对象
  this.fn = fn
  this.sucessor = null
}

chain.prototype.setNext = function(sucessor) {
  this.sucessor = sucessor
}

chain.prototype.init = function() {
  const result = this.fn.apply(this, arguments)
  if (result === 'nextSuccess') {
    this.sucessor.init.apply(this.sucessor, arguments)
  }
}

const isEmpty = form => {
  if(form.nickname.length == 0){
    console.log (false);
    return false;
  }else{
    console.log('nickname不为空符合标准');
    return 'nextSuccess';
  }
}

const isValidPhone = form => {
  if(!(/^1[34578]\d{9}$/.test(form.phone))){
    console.log (false);
    return false;
  }else{
    console.log('phone值符合标准');
    return 'nextSuccess';
  }
}

const isValidBlog = form => {
  if(!(/http|ftp|https/).test(form.blog)){
    // return false;
    console.log (false);
    return false;
  }else{
    console.log('true')
    return true;
  }
}
const isEmptynew = new chain(isEmpty);
const isValidPhonenew = new chain (isValidPhone);
const isValidBlognew =new chain (isValidBlog);
isEmptynew.setNext(isValidPhonenew);
isValidPhonenew.setNext(isValidBlognew);
isEmptynew.init(form)
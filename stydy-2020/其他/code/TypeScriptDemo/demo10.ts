class Lady {
  content = "Hi，帅哥";
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  sayLove() {
    return "I love you";
  }
  //extends 可以重写类的方法  super代表父类中的方法
  sayHello() {
    return super.sayHello() + "hi,honey";
  }
}

const goddess = new XiaoJieJie();
console.log(goddess.sayHello());
console.log(goddess.sayLove());

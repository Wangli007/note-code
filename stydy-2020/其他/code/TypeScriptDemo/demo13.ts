class Xiaojiejie {
    private readonly token = "111111"
    //以后都不可以更改
  constructor(private _age: number) {}
  //计算属性
  get age(){
    return this._age
  }
  //可以经过这里面处理之后的变量
  set age(age:number){
    this._age=age
  }
  //static声明的属性和方法，不需要进行声明对象  静态类 / 静态方法
}
const dajiao = new Xiaojiejie(28)

console.log(dajiao.age)
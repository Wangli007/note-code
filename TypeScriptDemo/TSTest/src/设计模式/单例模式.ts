/**
 * 单例模式（Singleton Pattern）是一种常用的模式
 * 有一些对象我们往往只需要一个，比如全局缓存、浏览器中的 window 对象等。单例模式用于保证一个类仅有一个实例，并提供一个访问它的全局点。
 * 如果遇到创建对象时耗时过多或耗资源过多，但又经常用到的对象，我们就可以考虑使用单例模式。
 */

class Singleton {
  // 定义私有的静态属性，来保存对象实例  
  private static singleton: Singleton;
  private constructor() {}
  private name = "123";
  // 提供一个静态的方法来获取对象实例
  public static getInstance(): Singleton {
    if (!Singleton.singleton) {  //这个类只会被创建一次
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

//使用
let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true

//场景

/**
 * 需要频繁实例化然后销毁的对象。
 * 创建对象时耗时过多或耗资源过多，但又经常用到的对象。
 * 系统只需要一个实例对象，如系统要求提供一个唯一的序列号生成器或资源管理器，或者需要考虑资源消耗太大而只允许创建一个对象。
 */
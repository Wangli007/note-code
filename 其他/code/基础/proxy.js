/**
 * 一个 Proxy 对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。
 */

let target = {};
/**
 * target —— 是要包装的对象，可以是任何东西，包括函数
 * handler —— 代理配置：带有“钩子”（“traps”，即拦截操作的方法）的对象。比如 get 钩子用于读取 target 属性，set 钩子写入 target 属性等等。
 */
let proxy = new Proxy(target, {}); // 空的handler对象

proxy.test = 5; // 写入 Proxy 对象 (1)
//console.log(target.test); // 返回 5，test属性出现在了 target 上！

//console.log(proxy.test); // 还是 5，我们也可以从 proxy 对象读取它 (2)

//for(let key in proxy) console.log(key); // 返回 test，迭代也正常工作！ (3)


/**
 * get钩子 用户拦截读取变量
 * get(target, property, receiver)
 * target —— 是目标对象，该对象作为第一个参数传递给 new Proxy，
 * property  —— 目标属性名,  缩写 {prop}
 * receiver —— 如果目标属性是一个 getter 访问器属性，则 receiver 就是本次读取属性所在的 this 对象。通常，这就是 proxy 对象本身（或者，如果我们从代理继承，则是从该代理继承的对象）
 */

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 默认值
    }
  }
});
//console.log(numbers);

 numbers[1] ; // 1
 numbers[123] ; // 0 (没有这样的元素)


 /**
 * set钩子 用户拦截设置变量
 * get(target, property, receiver)
 * target —— 是目标对象，该对象作为第一个参数传递给 new Proxy，
 * property  —— 目标属性名,  缩写 {prop}
 * value —— 目标属性要设置的值，
 * receiver —— 与get钩子类似
 */


let numbers1 = [];

numbers1 = new Proxy(numbers1, { // (*)
  set(target, prop, val) { // 拦截写入操作
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers1.push(1)
// numbers1.push("1") 会报  'set' on proxy: trap returned falsish for property '1'


/**
 * Reflect  Reflect 是一个内置对象，可简化的创建 Proxy。  增删读写这些操作都可以用这个对象去完成
 * Reflect 要优于 target[prop]   target[prop] 在配合对象处理带有get方法的读取属性的 将会出现问题
 */

let user = {
  name: "John",
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
  }
});

let name = user.name; // shows "GET name"
user.name1; 
//user.name = "Pete"; // shows "SET name=Pete"

console.log(user);
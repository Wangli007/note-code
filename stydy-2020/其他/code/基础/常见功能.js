console.log("node跑");
//数组扁平化  desc  多维数组转换为一个一维数组
var arr = [1, 2, [3, 4]];
arr.flat(); //01  可以使用reduce代替

//数组去重

const arr1 = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

[...new Set(arr1)]; //01

Array.from(new Set(arr1)); //02

arr1.filter((item, index) => {
  //03
  return arr1.indexOf(item) === index;
});

//伪类数组 转换为 数组  desc  类数组是具有length属性，但不具有数组原型上的方法。常见的类数组有arguments、DOM操作方法返回的结果。
// Array.from(document.querySelectorAll('div'))

function method(...args) {
  arguments; //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
  //console.log(Array.from(arguments));  //01
  args; // [ 1, 2, 3, 4 ]
}
method(1, 2, 3, 4);

/**
 * debounce 防抖  触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。
 * 防抖常应用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次。
 * 实现 创建一个定时器Id 每调用一次 => 清除定时器 => 生成一个新的定时器  相同点 都用到了闭包
 */
const debounce = (fn, time) => {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
};

/**
 * 高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。
 * 节流常应用于鼠标不断点击触发、监听滚动事件。 不断点击发布按钮 点击加入购物车等
 * 实现 创建一个flag => 当flag为false 停止 => 执行一次就将flag置为flag => 当定时器执行完成的时候再将flag置为true  相同点 都用到了闭包
 */
const throttle = (fn, time) => {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  };
};


function throttle(fun, delay) {
  let last, deferTimer;
  return function (args) {
      let that = this;
      let _args = arguments;
      let now = +new Date();
      if (last && now < last + delay) {
          message.error('操作太快了，请稍后再试！')
          clearTimeout(deferTimer)
          deferTimer = setTimeout(function () {
              last = now;
              console.log(_args,"_args");
              fun.apply(that, _args)
          }, delay)
      }else {
          last = now
          console.log(_args,"_args");
          fun.apply(that,_args)
      }
  }
}

const f = throttle((args)=>console.log(args,123),1500) //1500秒触发一次

/**
 * 函数珂里化  指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)
 * 经典面试题：实现add(1)(2)(3)(4)=10; 、 add(1)(1,2,3)(2)=9;
 * 实现 return的永远是函数 每一次调用闭包保存起来   然后新建一个toString方法用于计算count
 */

function add(...args) {
  var _args = args;
  var fn = (...args1) => {
    _args.push(...args1);
    return fn;
  };
  fn.getSum = () => {
    return _args.reduce((prev, cur) => prev + cur);
  };
  return fn;
}

/**
 * Object.is解决的主要是这两个问题
 */

+0 === -0; // true
NaN === NaN; // false
Object.is(NaN, NaN); //true
Object.is(+0, -0); //false

/**
 * 深拷贝
 * 浅拷贝和深拷贝区别  假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。
 */
const cloneDeep1 = (target, hash = new WeakMap()) => {
  // 对于传入参数处理
  if (typeof target !== "object" || target === null) {
    return target;
  }
  // 哈希表中存在直接返回
  if (hash.has(target)) return hash.get(target);

  const cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);

  // 针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach((symKey) => {
      if (typeof target[symKey] === "object" && target[symKey] !== null) {
        cloneTarget[symKey] = cloneDeep1(target[symKey]);
      } else {
        cloneTarget[symKey] = target[symKey];
      }
    });
  }

  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] =
        typeof target[i] === "object" && target[i] !== null
          ? cloneDeep1(target[i], hash)
          : target[i];
    }
  }
  return cloneTarget;
};
/**
 * example 证明Object.assign这样的操作它是浅拷贝
 */

var obj = new Object({ a: 1 });
const result = Object.assign(obj, { b: 11 });
const result1 = cloneDeep1(obj);
//console.log(result,result1); //{ a: 1, b: 11 }  { a: 1, b: 11 }
obj.a = 2;
//console.log(result,result1); //{ a: 2, b: 11 }  { a: 1, b: 11 }

/**
 * JSONP 进行跨域请求 兼容性好 但是只支持get请求
 */
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = "";
    for (let key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
};

/**
 * 图片懒加载  可以给img标签统一自定义属性data-src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。
 */
function lazyload() {
  const imgs = document.getElementsByTagName("img");
  const len = imgs.length;
  // 视口的高度
  const viewHeight = document.documentElement.clientHeight;
  // 滚动条高度
  const scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src;
      imgs[i].src = src;
    }
  }
}

// 可以使用节流优化一下
// window.addEventListener('scroll', lazyload);

/**
 * 滚动加载  原理就是监听页面滚动事件，分析clientHeight、scrollTop、scrollHeight三者的属性关系。
 */

// window.addEventListener('scroll', function() {
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollTop = document.documentElement.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight;
//   if (clientHeight + scrollTop >= scrollHeight) {
//     // 检测到滚动至页面底部，进行后续操作
//     // ...
//   }
// }, false);

/**
 * 渲染几万条数据不卡住页面
 * 渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行。
 */

// setTimeout(() => {
//   // 插入十万条数据
//   const total = 100000;
//   // 一次插入的数据
//   const once = 20;
//   // 插入数据需要的次数
//   const loopCount = Math.ceil(total / once);
//   let countOfRender = 0;
//   const ul = document.querySelector("ul");
//   // 添加数据的方法
//   function add() {
//     const fragment = document.createDocumentFragment();
//     for (let i = 0; i < once; i++) {
//       const li = document.createElement("li");
//       li.innerText = Math.floor(Math.random() * total);
//       fragment.appendChild(li);
//     }
//     ul.appendChild(fragment);
//     countOfRender += 1;
//     loop();
//   }
//   function loop() {
//     if (countOfRender < loopCount) {
//       window.requestAnimationFrame(add);
//     }
//   }
//   loop();
// }, 0);

/**
 * 将VirtualDom转化为真实DOM结构  SPA概念  render()
 */
function render(vnode, container) {
  container.appendChild(_render(vnode));
}
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => render(child, dom));
  return dom;
}

/**
 * Map 和 Set Symbol 数据类型 
 * Set集合是一种无重复元素的列表，通常用来检测给定的值在某个集合中是否存在 (去重后的数组)  [1,2,3,4,5,6]
 * Map集合内含多组键值对，通常用来缓存频繁取用的数据。  相当于字典 ['sex', '男']
 * symbol 它的功能类似于一种标识唯一性的ID。 不能通过new来创建  只能用内置的函数Symbol()  场景 最大的用法是用来定义对象的唯一属性名。对象设置相同name会覆盖，而symbol不会
 */

 // example Map示例
let obj1 = { a: 1 },
  obj2 = { b: 2 };
var map = new Map([
  ["name", "张三"],
  ["age", 18],
  ["sex", "男"],
  [obj1, "今天天气很好"],
  [obj2, "适合敲代码"],
  [[1, 2], "hhh"]
]);
// console.log(map);
// console.log(map.get({ a: 1 }));
// console.log(map.get(obj1));



const obj9 = {};
obj9.name = '张三';
obj9.name = '李四';
obj9[Symbol('name')] = '张三';
obj9[Symbol('name')] = '李四';
console.log(obj9);
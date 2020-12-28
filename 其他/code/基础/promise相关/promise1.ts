/**
 * then可以一直点 然后点的多了他会顺序的执行回调函数
 */

class Promise1 {
  // Promise resolve时的回调函数集
  cbs = []; //如果是then调用
  data = ""; //每次回去res的值
  constructor(private fn: Function) {
    // 执行用户传入的函数
    // 并且把resolve方法交给用户执行
    fn(this.resolve);
  }
  // 传递给Promise处理函数的resolve
  // 这里直接往实例上挂个data
  // 然后把onResolvedCallback数组里的函数依次执行一遍就可以
  resolve = (value) => {
    // 注意promise的then函数需要异步执行
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  };

  /**
   *
   * @param onResolved 传过来的一个函数  也可能是上面定义的resolved 判断他是否是原来的那个Promise1
   */
  then = function (onResolved: Function) {
    // 这里叫做promise2
    console.log("then方法执行!!");

    
    return new Promise1((resolve) => {
      this.cbs.push(() => {
        //console.log(onResolved(this.data), "1111111"); //执行了两次..
        const res = onResolved(this.data);
        if (res instanceof Promise1) {
          // resolve的权力被交给了user promise
          res.then(resolve);
        } else {
          // 如果是普通值 就直接resolve
          // 依次执行cbs里的函数 并且把值传递给cbs
          resolve(res);
        }
      });
      console.log(this.cbs,"this.cbs");
    });
  };
}

const fn = (resolve) => {
  setTimeout(() => {
    resolve(99);
  }, 500);
};

//const promise1 = new Promise1(fn); //这里必须要用new调用  调用函数里面的this才是Promise

/**
 *  一个构造函数 接收一个函数 调用接收的函数,并且把resolve函数当成参数传递
 * resolve 函数() 接收一个value 把他存储在this.data里 并且调用cbs里面所有的函数
 * then 函数
 */
// promise1.then((res) => {
//   //console.log(res);  // 1  等于resolve(1);  是里面的1
//   // user promise
//   return new Promise1((resolve) => {  //不断的new Promise 就可以一直链式调用  resolve里面的参数是传递到下一个.then接收的一个的res
//     setTimeout(() => {
//       resolve(2); 
//     }, 500);
//   });
// });

/**
 * 使用案例
 */
new Promise1((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
})
  .then((res) => {
    console.log(res);
    return new Promise1((resolve) => {
      setTimeout(() => {
        resolve({a:1,b:2});
      }, 500);
    });
  })
  .then(console.log);
  /**
   * (res)=>{console.log(res)}  函数内部会自动调用你给的函数并且传入value给你
   */

  
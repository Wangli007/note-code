// Promise构造函数接收一个executor函数，executor函数执行完同步或异步操作后，调用它的两个参数resolve和reject
var promise = new Promise(function (resolve, reject) {
  /*
      如果操作成功，调用resolve并传入value
      如果操作失败，调用reject并传入reason
    */
});

function Promise(executor) {
  var self = this;
  self.status = "pending"; // Promise当前的状态
  self.data = undefined; // Promise的值
  self.onResolvedCallback = []; // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = []; // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    // TODO
  }

  function reject(reason) {
    // TODO
  }

  try { // 考虑到执行executor的过程中有可能出错，所以我们用try/catch块给包起来，并且在出错后以catch到的值reject掉这个Promise
    executor(resolve, reject) // 执行executor
  } catch(e) {
    reject(e)
  }
}

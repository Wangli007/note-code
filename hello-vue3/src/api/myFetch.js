/* eslint-disable prefer-const */
//定义用来存储拦截请求和拦截响应结果的处理函数集合
let interceptorsReq = [],
  interceptorsRes = [];

/* eslint-disable no-undef */
function Cfetch(input, init = {}) {
  //fetch默认请求方式设为GET
  if (!init.method) {
    init.method = "GET";
  }

  //interceptors_req是拦截请求的拦截处理函数集合
  //后面会讲解interceptors_req的定义与实现
  interceptorsReq.forEach((interceptors) => {
    init = interceptors(init);
  });

  //在原生fetch外面封装一个promise，为了在promise里面可以对fetch请求的结果做拦截处理。
  //同时，保证c_fetch函数返回的结果是个promise对象。
  return new Promise(function(resolve, reject) {
    //发起fetch请求，fetch请求的形参是接收上层函数的形参
    fetch(input, init)
      .then((res) => {
        //interceptors_res是拦截响应结果的拦截处理函数集合
        //后面会讲解interceptors_res的定义与实现
        interceptorsRes.forEach((interceptors) => {
          //拦截器对响应结果做处理，把处理后的结果返回给响应结果。
          res = interceptors(res);
        });
        //将拦截器处理后的响应结果resolve出去
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

Cfetch.interceptors = {
  request: {
    use: function(callback) {
      interceptorsReq.push(callback);
    },
  },
  response: {
    use: function(callback) {
      interceptorsRes.push(callback);
    },
  },
};

export default Cfetch;

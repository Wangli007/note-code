/**
 * 挂载Api接口
 */

//  将一个文件夹里面所有*.js结尾的文件合并
 const apiContext = require.context('./modules',true,/\.js$/)
 const api = {}
 apiContext.keys().forEach((key)=>{
     const apiName = key.split('/').pop().replace(/\.\w+$/,'');
     api[apiName] = apiContext(key);
 })
//  export default {
//      install(Vue){
//          Vue.$api = api;
//      }
//  }

export default api
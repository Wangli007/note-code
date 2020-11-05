import axios from "axios";
import { baseURL } from "../../config/config";

export const api = axios.create({
	baseURL, // url = base url + request url
	timeout: 5000
});

// https://dog.ceo/api/breeds/image/random
// axios.get('/business/getDetail?business_id=6112',{
//     cancelToken:source.token
// }).catch((thrown)=>{
//     if(axios.isCancel(thrown)){
//         console.log("被取消了",thrown.message)
//     }
// })

/** axios取消请求示例 */
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
// service
// 	.get("/business/getDetail?business_id=6112", { cancelToken: source.token })
// 	.catch(thrown => {
// 		if (axios.isCancel(thrown)) {
// 			console.log("被取消了", thrown.message);
// 		}
// 	});
// source.cancel("不要了");

/**
 * axios.all 和 axios.spread
 * 好处 解决了并发请求的场景  一个请求结束后才会执行下一个请求
 */
// function getDetail(id) {
// 	return api.get("/business/getDetail?business_id=" + id);
// }
// api.spread((acct, perms) => {

//     console.log(acct);
//     console.log(perms,"res1");
//     console.log("请求完成");
// })

// api.all([getDetail(6112), getDetail(6100)]).then((res)=>{
//     console.log(res);
//     alert(123333)
// });

//这个要用没创建之前的axios去发all请求
// axios.all([getDetail(6112), getDetail(6100)]).then(
// 	axios.spread(function(res, res1) {
//      // 两个请求完成  执行这个回调
//         //spread 回调函数的值与请求结果的顺序一致
//         console.log(res,res1);
//         console.log('完成！！');
// 	})
// );

api.interceptors.request.use(
	//请求拦截
	config => {
		// config.headers['Authorization'] = "46a39153-8aae-4afd-8a56-d791f5248d33"
		return config;
	},
	error => {
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

// response interceptor
api.interceptors.response.use(
	//响应拦截
	response => {
		const res = response.data;
		if (res.code === 11) {
			return false;
		} else {
			return res;
		}
	},
	error => {
		return Promise.reject(error);
	}
);

export default api;

/**
 * @description user 用户服务相关接口
 */

import http from "../http";
const USER_URL = "User";

// export default { //第二种api管理方式
// 	userinfo: "/user"
// };


//修改用户
// export const editUserInfo = async (body)=>http.post(`${USER_URL}/editUserInfo`,body)
export const editUserInfo = async (data)=>http({
	method:"post",
	url:`${USER_URL}/editUserInfo`,
	data
})


//获取用户 根据token
// export const getUser = async (params)=>http.get(`${USER_URL}/getUserInfo`,{userid:123,...params})
export const getUser = async (params)=>http({
	method:"get",
	url:`${USER_URL}/getUserInfo`,
	params
})
/**
 * @description test 这里是一些专门用于测试的接口
 */

import http from "../http";
// const USER_URL = "";

export const getDog = async (params)=>http({
	method:"get",
    url:"https://dog.ceo/api/breeds/image/random",
	params
})
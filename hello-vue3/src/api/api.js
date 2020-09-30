import Cfetch from "./myFetch";

Cfetch.interceptors.request.use((config) => {
  //   console.log("请求前拦截  加载loding");
  return config;
});

Cfetch.interceptors.response.use((response) => {
  //   console.log(response, "response");
  if (response.status === 200) {
    return response.json();
  } else {
    throw "error";
  }
});

export default Cfetch;

import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
	// 指定路由的模式,此处使用的是hash模式
	history: createWebHashHistory(),
	// 路由地址
	routes: [
		{
			path: "/form",
			component: () => import("../view/form.vue")
		},
		{
			path: "/form1",
			component: () => import("../view/form1.vue"),
			meta: { redirectAlreadyLogin: true } //跳转到首页
		},
		{
			path: "/index",
			component: () => import("../view/index.vue"),
			name: "index"
		},
		{
			path: "/example",
			component: () => import("../view/example.vue"),
			name: "example1"
		},
		{
			path: "/example/:id",
			component: () => import("../view/example"),
			name: "example",
			meta: { requiredLogin: true } //跳转到登录页
		},
		{
			path: "/login",
			component: () => import("../view/login"),
			name: "login"
		},
		{
			path: "/",
			redirect: { name: "index" }
		}
	]
});

router.beforeEach((to, from, next) => {
	//要跳转的页面不是login 并且 登录状态是false
	if (to.meta.requiredLogin && !store.state.user.isLogin) {
		next({ name: "login" });
	} else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
		next("/");
	} else {
		next();
	}
});

export default router;

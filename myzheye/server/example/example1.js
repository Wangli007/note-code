import Koa from "koa";
import KoaRouter from "koa-router";
const app = new Koa();
// 创建 router 实例对象
const router = new KoaRouter();

app.use(koaBody());
app.use(router.routes()); // 添加路由中间件
app.use(router.allowedMethods()); // 对请求进行一些限制处理 //allowedMethods  当所有路由中间件执行完成之后，若 ctx.status 为空或者404的时候，丰富 response 对象的 header 头


app.listen(3000);
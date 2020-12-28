"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const koaBody = require('koa-body');

console.log(12333111111);
const app = new _koa.default(); // 创建 router 实例对象

const router = new _koaRouter.default();

const stuController = require(process.cwd() + "/controller/stu");

router.use("/stu", stuController.routes()); // const user = require("./schema/user");
// router.use("/user", user.routes());

app.use(koaBody());
app.use(router.routes()); // 添加路由中间件

app.use(router.allowedMethods()); // 对请求进行一些限制处理 //allowedMethods  当所有路由中间件执行完成之后，若 ctx.status 为空或者404的时候，丰富 response 对象的 header 头

app.listen(3000);
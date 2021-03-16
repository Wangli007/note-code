const Router = require("koa-router");

let router = new Router();
//注册路由
router.get("/", async (ctx, next) => {
  ctx.body = {
    code:200,
    data:ctx.request.query
  };
});
router.get("/register", async (ctx, next) => {
  ctx.response.status = 200;
});

router.post("/login/:id", async (ctx, next) => {
  console.log(ctx.params);
  console.log(ctx.request.body);
  ctx.body = {
    code:200,
    data:ctx.request.body
  };
});

module.exports = router;

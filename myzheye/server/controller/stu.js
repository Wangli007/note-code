//const { createModal } = require(process.cwd() + "/models/stu"); //导入模型
import { createModel, findModel } from "../models/stu";
const Router = require("koa-router");
let router = new Router();
//注册路由
router.post("/create", async (ctx, next) => {
  let postData = ctx.request.body;
  let rs = await createModel(postData);
  if (rs) {
    ctx.body = {
      meta: {
        state: 200,
        msg: "添加成功",
      },
      data: null,
    };
  } else {
    ctx.body = {
      meta: {
        state: 200,
        msg: "添加失败",
      },
      data: null,
    };
  }
});

//获取列表
/**
 * @api {get} /stu 学生模块列表
 * @apiName look
 * @apiGroup Stu
 * 
 * @apiParam {Number} current_page 当前页
 * @apiParam {Number} pagesize 每页页数
 * @apiSuccess {String} mete 状态码 && 提示信息
 * @apiSuccess {String} data 数据
 * 
 */
router.get("/list", async (ctx) => {
  const { pagesize, current_page } = ctx.query;
  const skip = (parseInt(current_page) - 1) * parseInt(pagesize);
  const limit = parseInt(current_page);
  let list = await findModel(skip,limit);
  if (list.length > 0) {
    ctx.body = {
      meta: {
        state: 200,
        msg: "查询成功",
      },
      data: list,
    };
  } else {
    ctx.body = {
      meta: {
        state: 200,
        msg: "查询失败",
      },
      data: null,
    };
  }
});

// router.post("/login/:id", async (ctx, next) => {
//   console.log(ctx.params);
//   console.log(ctx.request.body);
//   ctx.body = {
//     code:200,
//     data:ctx.request.body
//   };
// });

module.exports = router;

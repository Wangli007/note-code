import { createModel, findModel } from "../models/column";
const Router = require("koa-router");
let router = new Router();
import R from "./responseBeautifier";

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
router.get("/columns", async (ctx) => {
  const { pageSize, currentPage } = ctx.query;
  const skip = (parseInt(currentPage) - 1) * parseInt(pageSize);
  const limit = parseInt(currentPage);
  console.log(skip, limit);
  let list = await findModel(skip, limit);
  if (list.length > 0) {
    R.set(list);
    // ctx.body = {
    //   code: 200,
    //   data: {
    //     count: list.length,
    //     currentPage: currentPage,
    //     list,
    //     pageSize,
    //   },
    //   msg: "请求成功",
    // };
  } else {
    ctx.body = {
      code: 0,
      data: null,
      msg: "请求失败",
    };
  }
});

export default router;

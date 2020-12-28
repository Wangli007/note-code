// 一、导入模块
const mongoose = require("mongoose");

const user = "admin";
const pass = "123456";
// 二、连接数据库
// 连接字符串格式为mongodb://主机/数据库名
const db = mongoose.createConnection(
  `mongodb://${user}:${pass}@localhost:27017/admin`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("---------------------------------------");
      console.log("数据库连接失败：", err);
      console.log("---------------------------------------");
      return;
    }
    console.log("数据库连接成功");
  }
);

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model("stu", {
  name: { type: String },
  age: { type: Number },
  sex: { type: String },
});

//四.  方法
const createModel = (postData) => {
  const insertObj = new model(postData);
  return insertObj
    .save()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("插入失败" + err);
      return false;
    });
};

/**
 * 
 * @param {Number} skip 跳过的文档条数
 * @param {Number} limit 限制的条数
 */
const findModel = (skip,limit) => {
  return model
    .find({}).skip(skip).limit(limit)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

module.exports = {
  createModel,
  findModel,
};

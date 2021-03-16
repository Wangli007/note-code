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

module.exports = db;

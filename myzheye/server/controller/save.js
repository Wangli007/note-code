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

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）  column会自动的加s
const columnModel = db.model("column", {
  author: { type: String },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  description: { type: String },
  featured: { type: Boolean },
  key: { type: Number },
  title: { type: String },
});

const postModel = db.model("post", {
  author: { type: String },
  column: { type: String },
  createdAt: { type: Date, default: Date.now },
  excerpt: { type: String },
  image: { type: String },
  key: { type: Number },
  title: { type: String },
});

//四.  方法
const createModel = (postData) => {
  const insertObj = new postModel(postData);
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

const axios = require("axios");

//插入专栏数据
// axios.get("http://api.vikingship.xyz/api/columns?currentPage=2&pageSize=6").then(res=>{
//     res.data.data.list.forEach(item => {
//         createModel(item);
//     });
// })

//插入专栏里面的文章
// axios.get("http://api.vikingship.xyz/api/columns/5f3e86d62c56ee13bb83096c/posts?currentPage=1&pageSize=5").then(res=>{
//     res.data.data.list.forEach(item => {
//         createModel(item);
//     });
// })

//插入文章详情
// axios.get("http://api.vikingship.xyz/api/posts/5f3fade0c9875c2cd848a2cb").then(res=>{
//     res.data.data.forEach(item => {
//         createModel(item);
//     });
// })

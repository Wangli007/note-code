const mongoose = require("mongoose");
const user = "admin";
const pass = "123456";
const db = `mongodb://${user}:${pass}@localhost:27017/admin`;

mongoose.Promise = global.Promise;

const glob = require("glob");
const { resolve } = require("path");

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, "./schema", "**/*.js")).forEach(require);
};

exports.connect = () => {
  //连接数据库
  mongoose.connect(db);
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    //增加数据库连接的事件监听
    mongoose.connection.on("disconnected", () => {
      //进行重连
      if (maxConnectTimes <= 3) {
        maxConnectTimes++;
        mongoose.connect(db);
      } else {
        reject();
        throw new Error("数据库出现问题，----");
      }
      mongoose.connect(db);
    });

    //数据库出现错误的时候
    mongoose.connection.on("error", (err) => {
      if (maxConnectTimes <= 3) {
        maxConnectTimes++;
        mongoose.connect(db);
      } else {
        reject(err);
        throw new Error("数据库出现问题，----");
      }
    });

    //链接打开的时候
    mongoose.connection.once("open", () => {
      console.log("MongoDB Connected successfully!");
      resolve();
    });
  });
};

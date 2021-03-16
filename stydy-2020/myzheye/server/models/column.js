import db from "./init";

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model("column", {
  author: { type: String },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  description: { type: String },
  featured: { type: Boolean },
  key: { type: Number },
  title: { type: String },
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
const findModel = (skip, limit) => {
  return model
    .find({})
    .skip(skip)
    .limit(limit)
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

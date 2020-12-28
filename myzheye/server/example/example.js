// 一、导入模块
const mongoose = require('mongoose');

const user = "admin";
const pass = "123456";
// 二、连接数据库
// 连接字符串格式为mongodb://主机/数据库名
const db = mongoose.createConnection(`mongodb://${user}:${pass}@localhost:27017/admin`, {useNewUrlParser: true, useUnifiedTopology: true}, err=>{
    if(err){
        console.log('---------------------------------------')
        console.log('数据库连接失败：', err)
        console.log('---------------------------------------')
        return; 
    }
    console.log('数据库连接成功');
})

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model('api',{
	uname:{type:String, default:"神龙教主123"},
	pwd:{type:String},
	// pwd: String,
	age:{type: Number},
	sex:{type:String}
})  

// 四、创建实例操作（CURD）

// 增 --------------------------------
const insertObj = new model({
    uname: "张三",
    pwd: "admin888",
    age: 18,
    sex: "男",
})
insertObj.save()
.then(res=>{
    return res
})
.catch(err => {
    console.log('插入失败' + err)
    return false
})

// 删 --------------------------------
// 方法1：model.remove/deleteOne/deleteMany(条件对象, (err) => db.close()) 
// 方法2（推荐）
// model.deleteOne({})
// .then(res => {
//     return res.deletedCount
// })
// .catch(err => {
//     console.log('删除失败' + err)
//     return false
// })

// 改 --------------------------------
// 方法1：model.update/updateOne/updateMany(条件对象, 数据对象, (err) => db.close()) 
// 方法2（推荐）
// model.updateOne(条件对象, 数据对象) 
model.updateOne({ uname: "张三" }, { $set: { uname: '李四' } })
.then(res => {
    return res.nModified
})
.catch(err => {
    console.log('修改失败' + err)
    return false
})


//查--------------------------------
// model.findOne({}) 查找一条
model.find({})
.then(res=>{
    console.log("查找的数据",res);
    return res;
}) 
.catch(err=>{
    console.error(err);
    return err
})
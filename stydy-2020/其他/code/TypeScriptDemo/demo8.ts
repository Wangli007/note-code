interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline: number;
  sex: string;
}

const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

// interface Teacher extends Girl {
//   teach(): string;
// }

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
};

const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
  teach() {
    return 123123;
  },
};

screenResume(girl);
getResume(girl);

// 接口 就是面向对象的实现  解决代码的重用 重用相同的类型

//implements 是实现多个接口, 接口的方法一般为空的, 必须重写才能使用  接口和类的约束...
//class A extends B implements C,D,E

interface Boy {
  height: number;
}

// class XiaoJieJie implements Girl, Boy {
//   name = "刘英";
//   age = 18;
//   bust = 90;
//   height = 100;
//   say() {
//     return "欢迎光临 ，红浪漫洗浴！！";
//   }
//   lwl = "lwl";
// }

// console.log(new XiaoJieJie());

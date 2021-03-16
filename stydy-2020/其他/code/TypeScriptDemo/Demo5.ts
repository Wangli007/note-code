const numberArr: number[] = [1, 2, 3];

const arr: (number | string)[] = [1, "string", 2];

//数组对象
// const xiaoJieJies: { name: string; age: Number }[] = [
//   { name: "刘英", age: 18 },
//   { name: "谢大脚", age: 28 },
// ];

//类型别名 type  

// ts中 !表示类型可以为null 或者是 undefined  ? 表示参数是可选参数 

type Lady = { name: string; age: Number };

class Madam {
  name: string;
  age: number;
  gender?: string;
}

const obj: Madam = {
  name: "刘英",
  age: 18,
};

// const xiaoJieJies: Madam[] = [
//   { name: "刘英", age: 18, gender: "男" },
//   { name: "谢大脚", age: 28 },
// ];


//数组中的每个元素类型的位置给固定住了，这就叫做元组。
const xiaojiejie: [string, string, number] = ["dajiao", "teacher", 28];

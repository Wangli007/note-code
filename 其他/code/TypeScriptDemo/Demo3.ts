const xiaoJieJie: {
  name: string;
  age: number;
} = {
  name: "大脚",
  age: 18,
};
console.log(xiaoJieJie.name);

const jianXiaoJieJie: () => string = () => {
  return "大脚";
};

const sayhi = () => {};

// ts中的 =>  左边的是输入类型（也就是参数的类型）   右边就是输出类型(返回值类型)
// let mySum: (x: number, y: number) => number = function (x, y) {
//   return x + y;
// };

interface SunFunc {
  (x: number, y: number): number;
}

let mySum: SunFunc;
mySum = function (x, y) {
  return x + y;
};

console.log(mySum(1, 999));

// 接口定义函数的形状

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

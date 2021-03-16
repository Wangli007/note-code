//类型注解
let count: number;
count = 123;

//类型推断 => 很类似于js的自动转换类型
let countInference = 123;

function getTotal(one: number, two: number): number {
  return one + two;
}

const total = getTotal(1, 2);

// never 返回值类型 一个函数永远也执行不完  抛出错误的函数

function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}

function add({ one, two }: { one: number; two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });

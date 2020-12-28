// 枚举
enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}

console.log(Status.MASSAGE, Status[1]);
console.log(Status.DABAOJIAN, Status[3]);

//  <> 定义泛型  第一个参数为string 第二个参数就要string  <T>
// function join<JSPang>(first: JSPang, second: JSPang) {
//   return `${first}${second}`;
// }
// console.log(join<string>("jspang", "123123"));

// function myFun<ANYY>(params: ANYY[]) {
//   return params;
// }
// console.log(myFun<string>(["123","3456"]));

function myFun<ANY>(params: Array<ANY>) {
  return params;
}
console.log(
  myFun<string>(["123", "456"])
);

function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join<number, string>(1, "2");

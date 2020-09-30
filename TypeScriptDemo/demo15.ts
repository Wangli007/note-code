//联合类型
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    //类型保护 类型断言
    (animal as Teacher).skill();
  } else {
    (animal as Waiter).say();
  }
}

// class SelectGirl {
//   constructor(private name: string[]) {}
//   getGirl(index: number): string {
//     return this.name[index];
//   }
// }

interface Girl17 {
  name: string;
}


//泛型约束 <T extends number | string>  把T约束成只能是这两个里面的其中一个
class SelectGirl<T extends Girl17> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

// const selectGirl = new SelectGirl(["小红", "小英"]);
// const selectGirl = new SelectGirl() < string > ["大脚", "刘英", "晓红"];
console.log(SelectGirl);

const initGril_data = [{ name: "大脚" }, { name: "刘英" }, { name: "晓红" }];

const selectGirl = new SelectGirl(<Girl17[]>initGril_data);

console.log(selectGirl.getGirl(2));


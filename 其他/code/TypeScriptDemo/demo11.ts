// private  私有的  protected 保护的 只能在类内及继承的子类中使用  public 默认的 公共的

class Person {
  protected name: string = "wangLi";
}

const person = new Person();
// person.name = "jspang.com";

class Teacher extends Person {
  public sayBye() {
    // console.log(this);
    // console.log(this.name);

    return this.name;
  }
}

const teacher = new Teacher();
console.log(teacher.sayBye());

// console.log(person.name);
// console.log(person);

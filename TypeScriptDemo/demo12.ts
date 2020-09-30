class Person1 {
  //   public name: string;
  constructor(public name: string) {
    // this.name = name;
  }
}

class Teacher1 extends Person1 {
  constructor(public age: number) {
    super("jspang");
  }
}

// const person1 = new Person1("jspang");
const teacher1 = new Teacher1(18);
console.log(teacher1.name);
console.log(teacher1.age);

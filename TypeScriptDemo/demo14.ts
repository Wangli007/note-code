abstract class Girl1 {
  abstract skill(); //因为没有具体的方法，所以我们这里不写括号

  //abstract 抽象类里面的抽象方法  要求继承的类也要实现这个skull方法

  //原来我们只会对方法进行抽象  现在上升到对类进行抽象
}

class Waiter extends Girl1 {
  skill() {
    console.log("大爷，喝水");
  }
}

class BaseTeacher extends Girl1 {
  skill() {
    console.log("大爷，请喝水！");
  }
}

class seniorTeacher extends Girl1 {
  skill() {
    console.log("大爷，请喝水！");
  }
}

/**
 * 观察者模式，它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
 * 在观察者模式中有两个主要角色：Subject（主题）和 Observer（观察者）。
 */

//观察者
// interface Observer {
//   notify: Function;
// }

// class ConcreteObserver implements Observer {
//   constructor(private name: string) {}

//   notify() {
//     console.log(`${this.name} has been notified.`);
//   }
// }

// //主题
// class Subject {
//   private observers: Observer[] = [];

//   public addObserver(observer: Observer): void {
//     console.log(observer, "is pushed!");
//     this.observers.push(observer);
//   }

//   public deleteObserver(observer: Observer): void {
//     console.log("remove", observer);
//     const n: number = this.observers.indexOf(observer);
//     n != -1 && this.observers.splice(n, 1);
//   }

//   //通知所有的观察者
//   public notifyObservers(): void {
//     console.log("notify all the observers", this.observers);
//     this.observers.forEach((observer) => observer.notify());
//   }
// }

// //使用

// const subject = new Subject();
// const xiaoQin = new ConcreteObserver("小秦");
// const xiaoWang = new ConcreteObserver("小王");
// subject.addObserver(xiaoQin)
// subject.notifyObservers();//通知所有


//自己手写
interface observer {
  notify: Function;
}

class ConcreateObserver implements observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify() {
      console.log("通知给观察者的消息");
      
  }
}

class Subject {
  private observers: observer[] = [];
  addObserver(observer: observer) {
      console.log("添加了观察者");
      
    this.observers.push(observer);
  }
  deleteObserver(observer: observer) {
    var n: number = this.observers.indexOf(observer);
    n != -1 && this.observers.splice(n, 1);
  }
  notifyObservers() {
    this.observers.forEach((observer) => observer.notify());
  }
}

const subject = new Subject();
const xiaoQin = new ConcreateObserver("小秦");
const xiaoWang = new ConcreateObserver("小王");
subject.addObserver(xiaoQin);
subject.notifyObservers(); //通知所有


/**
 * 一个对象的行为依赖于另一个对象的状态。或者换一种说法，当被观察对象（目标对象）的状态发生改变时 ，会直接影响到观察对象的行为
 */
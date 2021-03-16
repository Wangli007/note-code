/**
 * 发布订阅模式
 * 消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，然后分别发送给不同的订阅者。
 * 感觉就是观察者模式 => 观察者和主题  之前加一个if判断..
 */

type EventHandler = (...args: any[]) => any;

class EventEmitter {
  private c = new Map<string, EventHandler[]>();

  // 订阅指定的主题
  subscribe(topic: string, ...handlers: EventHandler[]) {  //用一个map来管理对应的主题 和 一组发送的消息方法
    let topics = this.c.get(topic);  //
    if (!topics) {
      this.c.set(topic, topics = []);
    }
    topics.push(...handlers);
  }

  // 取消订阅指定的主题
  unsubscribe(topic: string, handler?: EventHandler): boolean {
    if (!handler) {  //没有传发送消息的方法  直接删除掉那个主题
      return this.c.delete(topic);
    }

    const topics = this.c.get(topic);
    if (!topics) {  //没有指定的主题直接返回false
      return false;
    }
    
    const index = topics.indexOf(handler);

    if (index < 0) {
      return false;
    }
    topics.splice(index, 1);
    if (topics.length === 0) { //删除后如果存储方法的数组为0 直接删除掉整个主题
      this.c.delete(topic);
    }
    return true;
  }

  // 为指定的主题发布消息   topic 发布消息的主题  args 发布的消息
  publish(topic: string, ...args: any[]): any[] | null {
    const topics = this.c.get(topic);
    if (!topics) {
      return null;
    }
    
    return topics.map(handler => {
      try {
          
        return handler(...args);
      } catch (e) {
        console.error(e);
        return null;
      }
    });
  }
}


//使用  在函数参数里面的用法 : ...代表将后面所有的参数都变成一个数组

const eventEmitter = new EventEmitter();
eventEmitter.subscribe("ts", (msg1,msg2) => {
    console.log(`收到订阅的消息：${msg1}--${msg2}`)
});

eventEmitter.publish("ts","试试1");
eventEmitter.publish("ts","试试2", "TypeScript发布订阅模式","js发布订阅");
eventEmitter.unsubscribe("ts");
eventEmitter.publish("ts", "TypeScript发布订阅模式");

// 场景
// 对象间存在一对多关系，一个对象的状态发生改变会影响其他对象。
// 作为事件总线，来实现不同组件间或模块间的通信。
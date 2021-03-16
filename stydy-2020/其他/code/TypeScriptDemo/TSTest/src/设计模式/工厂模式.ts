/**
 * 工厂模式  以什么样的模式去创建对象
 * 简单工厂模式  工厂方法模式  抽象工厂模式
 */

/**
 * 简单工厂
 * 简单工厂模式又叫 静态方法模式，即使用者可以直接消费产品而不需要知道产品的具体生产细节。
 * 用户下单购车 => 工厂安排生产 => 工人选定模型 => 工人生产车子 =>车子交付用户 (用户只需要下单  然后等着车子生产完成交付给用户就行了)
 */

abstract class BMW {
  // 这里要求继承BMW这个类的子类  也要实现这个run的方法  abstract抽象类
  abstract run(): void;
}

class BMW730 extends BMW {
  run(): void {
    console.log("BMW730 发动咯");
  }
}

class BMW840 extends BMW {
  run(): void {
    console.log("BMW840 发动咯");
  }
}

//Factory 工厂
class BMWFactory {
  //produce
  public static produceBMW(model: "730" | "840"): BMW {
    if (model === "730") {
      return new BMW730();
    } else {
      return new BMW840();
    }
  }
}

//使用
const bmw730 = BMWFactory.produceBMW("730");
const bmw840 = BMWFactory.produceBMW("840");

bmw730.run();
bmw840.run();

/**
 * 工厂类负责创建的对象比较少：由于创建的对象比较少，不会造成工厂方法中业务逻辑过于复杂。
 * 客户端只需知道传入工厂类静态方法的参数，而不需要关心创建对象的细节。
 */

/**
 * 工厂方法模式
 * 这样做的目的是将产品类的实例化操作延迟到工厂子类中完成  即通过工厂子类来确定究竟应该实例化哪一个具体产品类。
 */

abstract class BMWFactory1 {
  abstract produceBMW(): BMW;
}

class BMW730Factory extends BMWFactory1 {
  produceBMW(): BMW {
    return new BMW730();
  }
}

class BMW840Factory extends BMWFactory1 {
  produceBMW(): BMW {
    return new BMW840();
  }
}

const bmw730Factory = new BMW730Factory();
const bmw840Factory = new BMW840Factory();

const bmw730_1 = bmw730Factory.produceBMW();
const bmw840_1 = bmw840Factory.produceBMW();

bmw730_1.run();
bmw840_1.run();

// 对比简单工厂 可扩展性更高 可以有更多的逻辑在子类中写

/**
 * 抽象工厂 最常用的
 * 提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。
 * 一般情况下，一个具体工厂中只有一个工厂方法或者一组重载的工厂方法. 但是有时候我们需要一个工厂可以提供多个产品对象，而不是单一的产品对象。
 */

abstract class BMWFactory3 {
  abstract produce730BMW(): BMW730;
  abstract produce840BMW(): BMW840;
}

class ConcreteBMWFactory extends BMWFactory {
  produce730BMW(): BMW730 {
    return new BMW730();
  }

  produce840BMW(): BMW840 {
    return new BMW840();
  }
}

//使用
const bmwFactory = new ConcreteBMWFactory();

const bmw730_3 = bmwFactory.produce730BMW();
const bmw840_3 = bmwFactory.produce840BMW();

bmw730_3.run();
bmw840_3.run();

/**
 * 场景
 * 一个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的工厂模式都是重要的。
 * 系统中有多于一个的产品族，而每次只使用其中某一产品族.
 * 系统提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现。
 */

 
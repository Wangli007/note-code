/**
 * 建造者模式（Builder Pattern）将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象。
 */
class Car {
  constructor(
    //   engine 引擎  chassis 底盘  body 车身
    public engine: string,
    public chassis: string,
    public body: string
  ) {}
}
class CarBuilder {
  engine!: string; // 引擎
  chassis!: string; // 底盘
  body!: string; // 车身

  addChassis(chassis: string) {
    this.chassis = chassis;
    return this;
  }

  addEngine(engine: string) {
    this.engine = engine;
    return this;
  }

  addBody(body: string) {
    this.body = body;
    return this;
  }

  build() {
    return new Car(this.engine, this.chassis, this.body);
  }
}

//使用示例
//为车子添加引擎 添加底盘  添加车身
const car = new CarBuilder()
  .addEngine("v12")
  .addChassis("复合材料")
  .addBody("镁合金")
  .build();

console.log(car);


//使用场景
// 需要生成的产品对象有复杂的内部结构，这些产品对象通常包含多个成员属性。
// 需要生成的产品对象的属性相互依赖，需要指定其生成顺序。
// 隔离复杂对象的创建和使用，并使得相同的创建过程可以创建不同的产品。

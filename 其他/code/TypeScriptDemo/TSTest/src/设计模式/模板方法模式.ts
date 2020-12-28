/**
 * 模板方法模式
 * 模板方法模式由两部分结构组成：
 * 抽象父类和具体的实现子类。通常在抽象父类中封装了子类的算法框架，也包括实现一些公共方法以及封装子类中所有方法的执行顺序。
 * 子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。
 * 这个要在Node中执行..  ts-node 模板方法模式.ts 启动
 */

import fs from "fs";
abstract class DataParser {
  data: string = "";  //读出来的数据
  out: any = null;  //输出  => 出口

  // 这就是所谓的模板方法
  parse(pathUrl: string) {
    this.readFile(pathUrl); //读文件
    this.doParsing();  //解析文件
    this.printData();  //打印出需要的数据
  }

  readFile(pathUrl: string) {
    this.data = fs.readFileSync(pathUrl, "utf8");
    console.log(this.data);
  }

  abstract doParsing(): void;  //如何去解析文件 交给子类去实现

  printData() {
    console.log(this.out);
  }
}

class CSVParser extends DataParser {
  doParsing() {
    this.out = this.data.split(",");
  }
}

class MarkupParser extends DataParser {
  doParsing() {
    this.out = this.data.match(/<\w+>.*<\/\w+>/gim);
  }
}

const csvPath = "./data.csv";
const mdPath = "./design-pattern.md";

new CSVParser().parse(csvPath);
new MarkupParser().parse(mdPath);

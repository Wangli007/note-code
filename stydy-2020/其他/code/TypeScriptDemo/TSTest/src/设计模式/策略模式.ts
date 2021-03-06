/**
 * 策略模式（Strategy Pattern）
 * 定义了一系列的算法，把它们一个个封装起来，并且使它们可以互相替换。策略模式的重心不是如何实现算法，而是如何组织、调用这些算法，从而让程序结构更灵活、可维护、可扩展。
 * 比如我们登陆要用到账号密码登录 手机验证码 微信 微博 github 等不同的登录方式  可以用这个模式去管理这些不同的登录方式
 */

interface Strategy {
  authenticate(...args: any): any;
}

// class Strategy {
//   authenticate(){
      
//   }
// }

class Authenticator {
  strategy: any;
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy: any) {
    this.strategy = strategy;
  }

  authenticate(...args: any) {
    //认证策略验证
    if (!this.strategy) {
      console.log("尚未设置认证策略");
      return;
    }
    console.log(this.strategy.authenticate);

    return this.strategy.authenticate(...args);
  }
}

class WechatStrategy implements Strategy {
  authenticate(wechatToken: string) {
    console.log(wechatToken);

    if (wechatToken !== "123") {
      console.log("无效的微信用户");
      return;
    }
    console.log("微信认证成功");
  }
}

class LocalStrategy implements Strategy {
  authenticate(username: string, password: string) {
    if (username === "abao" && password === "123") {
      console.log("账号和密码认证成功");
      return;
    }
    console.log("账号或密码错误");
  }
}

const auth = new Authenticator();

// auth.setStrategy(new WechatStrategy()); //微信登录
// auth.authenticate("123", "234", "32454356","9999999999999");

// auth.setStrategy(new LocalStrategy()); //本地登录
// auth.authenticate("abao", "1231");

//...在函数里面的用法

// class LocalStrategy1 implements Strategy {
//   authenticate(username: string) {
//     console.log(username, "username");
//   }
// }

// class Meet extends LocalStrategy1 {
//   asd: object = {};
//   meet(...args: any[]) {
//     return (this.authenticate as any)(...args);
//   }
// }
// const useMeet = new Meet();
// useMeet.meet("123", "345", "678");


//场景
// 一个系统需要动态地在几种算法中选择一种时，可将每个算法封装到策略类中。
// 多个类只区别在表现行为不同，可以使用策略模式，在运行时动态选择具体要执行的行为。
// 一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现，可将每个条件分支移入它们各自的策略类中以代替这些条件语句。
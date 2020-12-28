/**
 * 职责链模式
 * 在公司中不同的岗位拥有不同的职责与权限。
 * 当请 1 天假时，只要组长审批就可以了，不需要流转到主管和总监。如果职责链上的某个环节无法处理当前的请求，若含有下个环节，则会把请求转交给下个环节来处理。
 * 场景 中间件服务
 */

interface IHandler {
  addMiddleware(h: IHandler): IHandler;
  get(url: string, callback: (data: any) => void): void;
}

abstract class AbstractHandler implements IHandler {
    // ! 表示参数可以是null 或者是 undefined
  next!: IHandler;
  addMiddleware(h: IHandler) { //拿到的是一个中间件接口 返回的也是一个中间件接口
    this.next = h;
    return this.next;
  }

  get(url: string, callback: (data: any) => void) {  //一直将url传递下去 
    if (this.next) {
      return this.next.get(url, callback);
    }
  }
}

// 定义Auth中间件
class Auth extends AbstractHandler {
  isAuthenticated: boolean; //是否有权限
  constructor(username: string, password: string) {
    super(); //派生类的构造函数  调用父类的函数需要用super

    this.isAuthenticated = false;
    if (username === "abao" && password === "123") {
      this.isAuthenticated = true;
    }
  }

  get(url: string, callback: (data: any) => void) {
    if (this.isAuthenticated) {
      return super.get(url, callback);
    } else {
      throw new Error("Not Authorized");
    }
  }
}

// 定义Logger中间件
class Logger extends AbstractHandler {  //打印每次得到的url
  get(url: string, callback: (data: any) => void) {
    console.log("/GET Request to: ", url);
    return super.get(url, callback);
  }
}

class Route extends AbstractHandler {
  URLMaps: { [key: string]: any };
  constructor() {
    super();
    this.URLMaps = {
      "/api/todos": [{ title: "learn ts" }, { title: "learn react" }],
      "/api/random": Math.random(),
    };
  }

  get(url: string, callback: (data: any) => void) {
    super.get(url, callback);
    if (this.URLMaps.hasOwnProperty(url)) {
      callback(this.URLMaps[url]);
    }
  }
}



//使用
const route = new Route();
//用账号密码去判断权限  然后去Logger里面去注册每次经过的逻辑
route.addMiddleware(new Auth('abao', '123')).addMiddleware(new Logger()); //注册中间件  之后调用get方法每次都会经过

route.get('/api/todos', data => {
  console.log(JSON.stringify(data, null, 2));
});

route.get('/api/random', data => {
  console.log(data);
});


/**
 * 可处理一个请求的对象集合应被动态指定。
 * 想在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。
 * 有多个对象可以处理一个请求，哪个对象处理该请求运行时自动确定，客户端只需要把请求提交到链上即可。
 */
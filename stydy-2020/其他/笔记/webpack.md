### Webpack

#### entry 入口

可以配置多个入口文件

#### output 出口

只能有一个出口   当entry配置了多入口的写法时,要写成[name].js

#### Loaders 加载

##### 	loader的执行顺序 

​		是从后往前的执行顺序

````javascript
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    modulke:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    "style-loader", //第三个执行
                    "css-loader",  //第二个执行
                    "less-loader"  //第一个执行
                ]
            }
        ]
    }
}

compose = (f,g)=>(...args) => f(g(...args));
// 函数组合  接收两个参数f g 都是函数
// g执行完把结果传递给 f
// f执行完把结果Return出去

````



<img src=".\images\loader.png"/>



#### Plugin 插件

<img src=".\images\loader.png"/>

##### 分析体积

webpack-bundle-analyzer 分析体积

![image-20201209091053747](D:\lw\lw\images\代码体积分析插件.png)





#### Mode 模块

![image-20201119105504077](.\images\Mode.png)

#### 热更新

文件监听 webpack --watch   

缺点 

- 不会自动的去刷新浏览器,需要手动刷新浏览器才能看到变化
- 是放在磁盘里面的 I/O  会去修改文件
- 速度慢

原理 : 当监听到文件的修改之后**记录下修改时间**,等待一段时间,如果没有其他文件修改,就去重新编译



热更新 webpack-dev-server --open

优点 

- WDS(webpack-dev-server缩写)不刷新浏览器
- WDS不输出文件,而是放在内存中
- 使用HotModuleReplacementPlugin插件
- 相比于watch 速度快

原理 : 和之前那个差不多



热更新: webpack-dev-middleware

优点

- 服务端也可以使用,场景更加灵活

![image-20201119114155092](.\images\WDM.png)



热更新原理

![热更新原理](D:\lw\lw\images\热更新原理.png)

### webpack 文件指纹

优点：

- 用作版本管理时，如果一个项目需要发布，只需要发布修改过的文件指纹；
- 对于没有修改过的文件，用户在访问的时候，依旧可以使用浏览器缓存好的，无需二次加载，加速页面访问。



静态资源内联

把css/js/images 内联到html里面去



当想动态的引入本地的文件时.可以使用插件glob

​	glob 可以拿到一个目录下面的所有文件的名称 

​	https://github.com/zhushengxiao/github-next

代码规范 

**与CI/CD集成**

比较复杂..

**webpack与ESLint**  构建的时候检查JS



![image-20201208100343866](D:\lw\lw\images\image-20201208100343866.png)

服务端打包(ssr)  可以用webpack打包

react 有一个react-dom 有一个 renderToString 方法  然后丢到客户端

​		样式不显示的问题

​		设置占位符 placeHolder  

​		然后用Node  fs读取已经写好的html文件  引入进来  之后把里面的html文件替换掉

构建异常 错误码   (当别的发布程序知道你构建是否成功时)

echo $?  查看错误码



冒烟测试

​	编写好的代码需要能保证 基本的功能能走通  所以自己编写一个测试文件去跑

升级版本

	- 补丁版本 就是修改了一些小的bug
	- 小版本 功能迭代 业务等
	- 大版本  项目出现了一些大的不兼容

Git规范和Changelog生成

![image-20201208165603749](D:\lw\lw\images\commit规范.png)



**提交示例**

![image-20201208170104366](D:\lw\lw\images\image-20201208170104366.png)

## webpack4相对wbpack3快的原因

- v8优化   高版本的 node 比 低版本的速度会更快

```javascript
- for of 替代 forEach
- Map 和 Set替代Object
- includes替代indexOf
```

- 默认使用更快的md4 hash算法

- webpacks AST(语法数) 可以直接从 loader 传递给 AST 减少解析时间

- 使用字符串方法替代正则表达式 

压缩时间优化

- 多进程多实例构建
- 并行压缩



#### 构建速度

- 找文件的速度
- 构建的缓存
- 多进程等





## 进入网站加载速度优化

擦除没有用到的css

#### 首次进入优化

````javascript
1.降低请求数量
	a.减少获取数据的接口数量(ssr就是最大化的用了这一点)
	b.减少js、css的数量（提取公共js、css利用缓存、减少后续加载访问。有些代码直接注入页面无需外链形	   式访问加载。
    c.图片懒加载(不用的图片暂时不加载)
2.降低文件大小
3.加快请求速度
	a.CDN加速 
	作用 : 把缓存在该服务节点的静态缓存内容返回给用户。(图片  一些库JQ,react-dom等)
		1.把一些要用的基础库都可以用cdn的方式去引入进来
    b.DNS预解析
4、渲染
    a、js、css优化(按照规范来写--google规范)
    b、服务器渲染
    c、能异步加载的js要异步加载
    d、js不要修改dom和css，避免重绘
```

#### 二次进入优化

可以利用缓存

````javascript
1、缓存
    a、http协议缓存
    b、离线数据缓存localStorage
````

#### 体积优化

- Scope Hoisting  作用域提升  需要导入的文件直接移入导入者顶部
- Tree-shaking  摇树 不用的模块不引入 require不支持
- 公共资源分离
- 图片压缩
- 动态Polyfill  (不同的浏览器去加载不同的js文件  去做一些兼容) 
  - 比如我支持promist 那这个js文件就是空的  不支持就去加载对应的兼容文件

#### webpack运行流程

- 找webpack.cmd的文件
- 然后看是否有安装webpack-cli  或者 webpack-command 
- 查看 本地是否有输入 --config ./webpack.pro.js  这样子的配置 加上默认的配置 合并成一个option并开始打包

 webpack 插件 (plugin)

Tapable 有各种各样的钩子 开发插件的时候会去监听钩子的运行 做对应的处理



#### 常见的几种模块化方式

````javascript
ES module  (现在基本是这种规范)
import * as largeNumber. from 'large-number'
largeNumber.add("999","1");

CJS(common JS)
const largeNumber = require("large-number");
largeNumbers.add("999","1")

AMD
require(['large-number'],function(largeNumber){
    //...
    largeNumber.add("999","1") 
})
````

<font color="red">红色</font>

<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>



webpack简易工作流程

​	source => AST => 源码 

- babylon  作用 : 可以将 source 转换为 AST 

- babel-traverse  作用 : 可以将AST转换为ES6

- babel-core 作用: 将AST转换为源码 (可以指定es5等一些老的语法)  解构出{ transformFromAst } 






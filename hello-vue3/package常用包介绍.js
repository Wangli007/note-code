/**
 * compression-webpack-plugin -D
 * 为了让js,css文件变得更小，加载更快。直接将所有的静态资源压缩为gzip,就可以极大的减少静态资源的大小，提升浏览器加载速度
*/


/**
 * postcss-px-to-viewport -D
 * 将px转换为vw  
 */


 /**
  * webpack.IgnorePlugin
  * 使用过moment的同学一定知道，moment的locale语言包特别大，但是我们一般的项目只在国内用，也用不到那么多语言，是不是可以去掉呢？这时候你需要使用到webpack.IgnorePlugin。
  * 使用的时候要手动引入 import 'moment/locale/zh-cn';
  */


  /**
   * babel-plugin-transform-remove-console   yarn add babel-plugin-transform-remove-console -D
   * 去除掉生产环境的console.log  配置在 babel.config里面
   */


//   C:\Users\ldy\AppData\Roaming\npm\node_modules  全局包的路径


/**
 * http-server 一个用于本地开启http服务器的包
 * rimraf  一个可以强行删除文件的包  常用语删除node_module
 */


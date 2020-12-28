const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/main.ts", //入口
  output: {  //出口
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  devServer: { //服务器根路径 -open 自动的在浏览器打开服务 dev-server模块有热更新功能
    contentBase: "./dist",
    open: true
  },
  resolve: {  //不写扩展名 他会去匹配的文件类型
    "extensions": ['.ts', '.js', '.json']
  },
  module: { //添加响应的loader 
    rules: [
      {
        test: /\.css$/,  //匹配对应的文件类型 然后用不同的loader去处理
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: [
          path.resolve(__dirname, 'src/components')
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'  //模块化的css的语义化配置
              }
            }
          }
        ],
        include: [
          path.resolve(__dirname, 'src/components')
        ]
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_module/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), //把dist文件夹清空然后 再重新去创建
    new HtmlWebpackPlugin({ //自动在main.js引入文件的插件
      template: "./src/index.html"
    })
  ],
  mode: "development"
}
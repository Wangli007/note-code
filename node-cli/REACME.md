npm link

> 让你的代码能在npm 全局目录留下快捷方式  package 里面的bin字段   hello-cli 

上面是全局安装 

如果我想局部安装 

npm i -D file:<你的脚本cli目录路径>

> 局部安装建议用`npm i -D file:xxx`，这样它会在package.json留条记录，方便其他小伙伴看到。自然，你的脚本最好也是放进项目目录里面。
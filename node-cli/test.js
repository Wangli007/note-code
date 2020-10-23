//test.js
const child_process = require('child_process');

let subProcess=child_process.exec("git version",function(err,stdout){  //执行git操作 
    if(err)console.log(err);
    console.log(stdout);
    subProcess.kill()
});
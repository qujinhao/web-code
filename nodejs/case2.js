
//阻塞代码
//回调函数就是执行完任务后再执行的函数
//例如读取文件后在执行函数（输出）
var fs = require("fs");

var data = fs.readFileSync('./src/file/input.txt');

console.log(data.toString());
console.log("程序执行结束!");
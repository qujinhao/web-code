var express = require('express');
var app = express();
app.get('/',function (req,res){
    res.send('hello World');
})

var server = app.listen(8081,function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http:127.0.0.1//%s:%s", host, port)
})
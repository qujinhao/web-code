var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http)
var fs= require('fs');


app.get('/',function (req,res){
    function callback(data){
        res.send(data.toString())
    }
    fs.readFile('./socketIoClient.html',function (err,data){
        if(err){
            console.log(err);
            callback('file is not exist');
        }else{
            callback(data);
        }
    })
})

app.get('./socket.io.js')


//socket.io设置
//在线用户
var onlineUsers = {}
//当前在线人数
var onlineCount = 0;

var i =0;

io.on('connection',function (socket){
    console.log('有人连上来了~');

//    监听新用户的加入
    socket.name = ++i;
    onlineUsers[socket.name] = socket;

//    监听用户退出
    socket.on('disconnect',function (){
        console.log('有人退出');
        delete onlineUsers[socket.name];
    })

//    监听用户发布聊天内容
    socket.on('message',function (msg){
        broadcast(msg,socket);
    })
})

function broadcast(msg,socket){
    for (var key in onlineUsers){
        onlineUsers[key].send(socket.name + 'say:' + msg);
    }
}


http.listen(9000,function (){
    console.log('listen on port: 9000');
})
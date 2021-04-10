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


//socket.io����
//�����û�
var onlineUsers = {}
//��ǰ��������
var onlineCount = 0;

var i =0;

io.on('connection',function (socket){
    console.log('������������~');

//    �������û��ļ���
    socket.name = ++i;
    onlineUsers[socket.name] = socket;

//    �����û��˳�
    socket.on('disconnect',function (){
        console.log('�����˳�');
        delete onlineUsers[socket.name];
    })

//    �����û�������������
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
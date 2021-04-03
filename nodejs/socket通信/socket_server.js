var net = require('net')
var chatServer = net.createServer(),
    clientMap = new Object()

var i = 0; //连接名称流水号
chatServer.on('connection',function (client){
    console.log('客户端有人连接');
    client.name = ++i ;
    clientMap[client.name] = client;

//    对客户端发送信息的监听
    client.on('data',function (data){
        console.log('客户端传来' + data)
        broadcast(data,client)
    })

    //数据错误处理
    client.on('error',function (e){
        console.log('client error' + e);
        client.end()
    })


//客户端关闭事件
    client.on('close',function (data){
        delete clientMap[client.name];
        console.log(client.name + '下线了');
        broadcast(client.name + '下线了',client);
    })

})
//消息广播
    function broadcast(message,client){
        for(var key in clientMap){
            clientMap[key].write(client.name + 'say:' + message + '.\n')
        }
    }


chatServer.listen(9000);

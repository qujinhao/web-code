var WebSocketServer = require('ws').Server;
    wss = new WebSocketServer({port:9000})

var clientMap = new Object()
var i = 0

wss.on('connection',function (ws){
    console.log(ws + 'start');
    ws.name = ++i;
    clientMap[ws.name] = ws;
    ws.on('message',function (message){
        broadcast(message,ws)
    })

    ws.on('close',function (){
        // global.gc()  //调用内存回收
        console.log('leave');
    })
 })

function broadcast(msg,ws){
        for(var key in clientMap){
            clientMap[key].send(ws.name + 'say:' + msg)
        }
}
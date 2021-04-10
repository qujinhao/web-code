var net = require('net')
var chatServer = net.createServer(),
    clientMap = new Object()

var i = 0; //����������ˮ��
chatServer.on('connection',function (client){
    console.log('�ͻ�����������');
    client.name = ++i ;
    clientMap[client.name] = client;

//    �Կͻ��˷�����Ϣ�ļ���
    client.on('data',function (data){
        console.log('�ͻ��˴���' + data)
        broadcast(data,client)
    })

    //���ݴ�����
    client.on('error',function (e){
        console.log('client error' + e);
        client.end()
    })


//�ͻ��˹ر��¼�
    client.on('close',function (data){
        delete clientMap[client.name];
        console.log(client.name + '������');
        broadcast(client.name + '������',client);
    })

})
//��Ϣ�㲥
    function broadcast(message,client){
        for(var key in clientMap){
            clientMap[key].write(client.name + 'say:' + message + '.\n')
        }
    }


chatServer.listen(9000);

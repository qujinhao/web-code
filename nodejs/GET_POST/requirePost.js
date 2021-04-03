var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    // ������һ��post�����������ݴ����������Ϣ
    var post = '';

    // ͨ��req��data�¼�����������ÿ�����ܵ�����������ݣ����ۼӵ�post������
    req.on('data', function(chunk){
        post += chunk;
    });

    // ��end�¼�������ͨ��querystring.parse��post����Ϊ������POST�����ʽ��Ȼ����ͻ��˷��ء�
    req.on('end', function(){
        post = querystring.parse(post);
        //һ�����������ת�� Ϊ�ַ����ķ���
        res.end(util.inspect(post));
    });
}).listen(3000);
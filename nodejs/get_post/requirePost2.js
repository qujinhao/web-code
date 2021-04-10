var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>����̳� Node.js ʵ��</title></head>' +
    '<body>' +
    '<form method="post">' +
    '��վ���� <input name="name"><br>' +
    '��վ URL�� <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // ��������
        body = querystring.parse(body);
        // ������Ӧͷ����Ϣ������
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8;'});

        if(body.name && body.url) { // ����ύ������
            res.write("��վ����" + body.name);
            res.write("<br>");
            res.write("��վ URL��" + body.url);
        } else {  // �����
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
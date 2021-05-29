var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// ���� application/x-www-form-urlencoded �������
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));

app.get('/��ȡԪ����.html', function (req, res) {
    res.sendFile( __dirname + "/" + "��ȡԪ����.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

    // ��� JSON ��ʽ
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)

})
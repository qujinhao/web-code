var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
    // �������Ƕ�ȡ�Ѵ��ڵ��û�
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)

})
var express = require('express');
var app = express();
var fs = require("fs");

//��ӵ����û�����
var user = {
    "user4" : {
        "name" : "Mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

app.get('/addUser', function (req, res) {
    // ��ȡ�Ѵ��ڵ�����
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)

})
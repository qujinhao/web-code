// var http = require('http');
// var url = require('url');
// var util = require('util');
//
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);



var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // ���� url ����
    var params = url.parse(req.url, true).query;
    res.write("��վ����" + params.name);
    res.write("\n");
    res.write("��վ URL��" + params.url);
    res.end();


}).listen(3000);
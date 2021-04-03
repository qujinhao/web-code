var file = require('./file');
var url = require('url');
module.exports = {
    home:function (req,res){
      file.readFile('./home.html',res,req)
    },
    login:function(req,res){
        // var urlObject = url.parse(req.url,true).query;
        // console.log(urlObject);
        // console.log(urlObject.password)


        var post = ''
        req.on('data',function (chunk){
            post += chunk
        })
        req.on('end',function (){
            file.postReadFile('./login.html',res,req,post)
        })
    },
    registor:function (req,res){
        res.write('×¢²áÒ³Ãæ')
    },
    img:function (req,res){
        file.readImg('./images/1.jpg',res)
    }
}


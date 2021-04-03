var file = require('./file')
module.exports = {
    home:function (req,res){
      file.readFile('./home.html',res,req)
    },
    login:function(req,res){
        res.write('µÇÂ½Ò³Ãæ')
    },
    register:function (req,res){
        res.write('×¢²áÒ³Ãæ')
    },
    img:function (req,res){
        file.readImg('./images/1.jpg',res)
    }
}


var file = require('./file')
module.exports = {
    home:function (req,res){
      file.readFile('./home.html',res,req)
    },
    login:function(req,res){
        res.write('��½ҳ��')
    },
    register:function (req,res){
        res.write('ע��ҳ��')
    },
    img:function (req,res){
        file.readImg('./images/1.jpg',res)
    }
}


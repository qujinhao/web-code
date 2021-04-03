var fs = require('fs')

module.exports = {
    readFile:function (file,res,req){
      fs.readFile(file,'utf-8',function (err,data){
          if(err) throw err
          res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
          res.write(data);
          res.end()
      })
    },
    readImg:function (file,res){
        fs.readFile(file,'binary',function (err,data){
            if(err) throw err
            res.writeHead(200,{'Content-Type':'image/jpeg'})
            res.write(data,'binary');
            res.end()
        })

    }
}
var https = require('https');
class Demo{
    // subtotal (unitPrice,quantity){
    //     return unitPrice * quantity
    // }


    // waitTwoSecond(data,callback){
    //     setTimeout(function (){
    //         callback(data)
    //     },2000)
    // }



    fetchData(api,callback){
        var requesUrl = `https://api.douban.com/v2/movie/${api}`;
        https.get(requesUrl,function (res){
            var responseData = '';
            res.setEncoding('utf8');
            res.on('data',function (chunk){
                responseData += chunk;
            })
            res.on('end',function (){
                callback(JSON.parse(responseData));
            })
        })
    }
}

module.exports = Demo;
const chai = require('chai');
const expect = chai.expect;

var Demo = require('./../lib/demo.js');
var demo = new Demo();
describe('D',()=>{

    //同步测试
    // it('单价10块钱的3件商品小计金额应该是30块',function (){
    //     var subtotal = demo.subtotal(10,3);
    //     expect(subtotal).to.equal(30);
    // })



//    异步测试
//     it("a time later",function (){
//         demo.waitTwoSecond('hello',function (data){
//             expect(data).to.equal('hello');
//
//         })
//     })


//    加载豆瓣API
    it("loading DouBan's data,include subjects",function (){
        demo.fetchData('top250',function (data){
            expect(data).to.have.property('subjects');

        })
    });
})

const chai = require('chai');
const expect = chai.expect;

var Demo = require('./../lib/demo.js');
var demo = new Demo();
describe('D',()=>{

    //ͬ������
    // it('����10��Ǯ��3����ƷС�ƽ��Ӧ����30��',function (){
    //     var subtotal = demo.subtotal(10,3);
    //     expect(subtotal).to.equal(30);
    // })



//    �첽����
//     it("a time later",function (){
//         demo.waitTwoSecond('hello',function (data){
//             expect(data).to.equal('hello');
//
//         })
//     })


//    ���ض���API
    it("loading DouBan's data,include subjects",function (){
        demo.fetchData('top250',function (data){
            expect(data).to.have.property('subjects');

        })
    });
})

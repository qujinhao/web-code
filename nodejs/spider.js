
var https = require('https');
var url = 'https://www.runoob.com/';
var cheerio = require('cheerio');

//������ȡ�����ݽ��д������������ɸѡ
function filterMenu(html){
    var $ = cheerio.load(html);
    var menu = $('.cate1');
    var menuData = [];
    menu.each(function (index,value){
        var menuTitle = $(value).find('h2').text();
        var menuLists = $(value).find('a');
        var menuList = [];
        menuLists.each(function (index,value){
            menuList.push($(value).text())
        })
        menuData.push({
            menuTitle:menuTitle,
            menuList:menuList
        })
    })
    return menuData;
}
//�Եó��������ѭ�����
function printMenu(menu){
    menu.forEach(function (value){
        console.log(value.menuTitle + '\n');
        value.menuList.forEach(function (value){
            console.log(value);
        })
    })
}


//��ȡ����
https.get(url,function (res){
    var html = ''
    res.on('data',function (data){
        html += data
    })
    res.on('end',function (data){
       var result = filterMenu(html);
       printMenu(result);
    })
    res.on('error',function (data){
        console.log(error)
    })
})

var fs = require("fs");
var data = 'you are succeed,www.runoob.com';

// ����һ������д�������д�뵽�ļ� output.txt ��
var writerStream = fs.createWriteStream('output.txt');

// ʹ�� utf8 ����д������
writerStream.write(data,'UTF8');

// ����ļ�ĩβ
writerStream.end();

// �������¼� --> finish��error
writerStream.on('finish', function() {
    console.log("д����ɡ�");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("����ִ�����");
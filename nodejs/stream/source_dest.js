//����ʵ������ͨ����ȡһ���ļ����ݲ�������д�뵽����һ���ļ��С�
var fs = require("fs");

// ����һ���ɶ���
var readerStream = fs.createReadStream('input.txt');

// ����һ����д��
var writerStream = fs.createWriteStream('output.txt');

// �ܵ���д����
// ��ȡ input.txt �ļ����ݣ���������д�뵽 output.txt �ļ���
readerStream.pipe(writerStream);

console.log("����ִ�����");
var fs = require("fs");
var zlib = require('zlib');

// ��ѹ input.txt.gz �ļ�Ϊ input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("�ļ���ѹ��ɡ�");
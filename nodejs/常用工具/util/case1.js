// util.callbackify(original)�� async �첽����������һ������ֵΪ Promise �ĺ�����ת������ѭ�쳣���ȵĻص����ĺ�����
// ���罫 (err, value) => ... �ص���Ϊ���һ��������
// �ڻص������У���һ������Ϊ�ܾ���ԭ����� Promise �������Ϊ null�����ڶ����������ǽ����ֵ��




const util = require('util');

async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});
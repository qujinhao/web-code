
//����eventsģ��
var events = require('events');
//����ʵ��
var eventEmitter = new events.EventEmitter();

// ������ #1
var listener1 = function listener1() {
    console.log('������ listener1 ִ�С�');
}

// ������ #2
var listener2 = function listener2() {
    console.log('������ listener2 ִ�С�');
}

// �� connection �¼���������Ϊ listener1
eventEmitter.addListener('connection', listener1);

// �� connection �¼���������Ϊ listener2
eventEmitter.on('connection', listener2);

//����ָ���¼��ļ���������
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " �����������������¼���");

// ���� connection �¼�
eventEmitter.emit('connection');

// �Ƴ���󶨵� listener1 ����
eventEmitter.removeListener('connection', listener1);
console.log("listener1 �����ܼ�����");

// ���������¼�
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " �����������������¼���");

console.log("����ִ����ϡ�");
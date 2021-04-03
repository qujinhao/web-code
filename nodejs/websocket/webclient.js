var ws = new WebSocket('ws://127.0.0.1:9000');


ws.onopen = function (){
    ws.send('hello,everybody!!!')
}

ws.onmessage = function (event){
    var chatroom = document.querySelector('#chatroom');
    chatroom.innerHTML += '<br/>' + event.data;
}


ws.onclose = function (){
    alert('Closed');

}

ws.onerror = function (err){
    alert('Error:' + err)
}
// JavaScript Document
function Message(){
    this._list = [];
    this.msg = 'hello';
}

Message.prototype.attach = function(hero){
    this._list.push(hero);
}

Message.prototype.notify = function(){
    for (var i =0; i < this._list.length; i++){
        this._list[i].update();
    }
}

Message.prototype.setState = function(msg){
    this.msg = msg;
    this.notify();
}

Message.prototype.getState = function(){
    return this.msg;
}
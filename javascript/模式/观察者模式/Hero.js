// JavaScript Document
function Hero(name, msg){
    this.name =name;
    this.msg = msg;
}

Hero.prototype.update = function(){
    console.log(this.name + 'received:' + this.msg.getState());
    
}
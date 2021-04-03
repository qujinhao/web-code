// JavaScript Document
function Factory(){
    
}

Factory.create = function(type){
    switch(type){
        case 'normal':
            return new normal();
        case 'gunCarrier':
            return new GunCarrier();
        case 'strong':
            return new Strong();
        default:
            break;
    }
}
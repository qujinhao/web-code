// JavaScript Document
function DarkMaster(){
    if(!DarkMaster._instance){
        DarkMaster._instance = {
            count:30,
            saySth:function(){
                
            },
            countDown:function(){
                
            },
            show:function(){
                
            },
            dead:function(){
              this.countDown();  
            },
            
        }
    }
    return DarkMaster._instance;
}
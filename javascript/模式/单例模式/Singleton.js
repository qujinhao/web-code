// JavaScript Document
function Singleton(){
    if(!Singleton._instance){
        Singleton._instance = {
            
        }
    }
    return Singleton._instance;
}